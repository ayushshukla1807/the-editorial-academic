import { NextResponse } from 'next/server';

// Create a simulated AI stream without requiring paid API keys, perfect for a resilient portfolio.
function createMockStream(prompt: string) {
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      const mockResponse = `I've analyzed the real estate datasets against your query. Based on vector search, there are 3 highly matching properties near NST campus that align with your criteria. \n\nI also flagged a potential noise issue with the 'Tech Suite' listing due to proximity to the main road, but it perfectly matches your preferred 'early_bird' sleep schedule. Shall I elaborate on the lease terms?`;
      
      const chunks = mockResponse.split(' ');
      
      for (const chunk of chunks) {
        // useChat from the `ai` package expects the Vercel AI SDK protocol for text streams
        // Format: `0:"text"\n`
        const text = chunk + ' ';
        controller.enqueue(encoder.encode(`0:${JSON.stringify(text)}\n`));
        await new Promise((r) => setTimeout(r, 50)); // simulate typing delay
      }
      
      controller.close();
    },
  });

  return readable;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    const stream = createMockStream(lastMessage.content);
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process AI request' }, { status: 500 });
  }
}
