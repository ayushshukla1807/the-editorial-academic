"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { Search, Home, User, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 glass-panel overflow-hidden"
    >
      <div className="flex items-center px-4 border-b border-white/5">
        <Search className="w-5 h-5 text-muted-foreground mr-2" />
        <Command.Input 
          autoFocus 
          placeholder="Type a command or search..." 
          className="w-full bg-transparent border-0 h-14 text-sm focus:ring-0 text-foreground placeholder:text-muted-foreground outline-none"
        />
      </div>

      <Command.List className="max-h-[300px] overflow-y-auto p-2">
        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No results found.</Command.Empty>

        <Command.Group heading="Suggestions" className="px-2 text-xs font-semibold text-muted-foreground py-2">
          <Command.Item 
            onSelect={() => { router.push('/listings'); setOpen(false); }}
            className="flex items-center px-2 py-3 mt-1 rounded-md cursor-pointer hover:bg-secondary/50 aria-selected:bg-secondary/80 text-sm text-foreground transition-colors"
          >
            <Sparkles className="mr-2 w-4 h-4 text-primary" />
            AI Vector Search Listings
          </Command.Item>
          <Command.Item 
            onSelect={() => { router.push('/dashboard'); setOpen(false); }}
            className="flex items-center px-2 py-3 mt-1 rounded-md cursor-pointer hover:bg-secondary/50 aria-selected:bg-secondary/80 text-sm text-foreground transition-colors"
          >
            <User className="mr-2 w-4 h-4" />
            View My Profile
          </Command.Item>
          <Command.Item 
            onSelect={() => { router.push('/'); setOpen(false); }}
            className="flex items-center px-2 py-3 mt-1 rounded-md cursor-pointer hover:bg-secondary/50 aria-selected:bg-secondary/80 text-sm text-foreground transition-colors"
          >
            <Home className="mr-2 w-4 h-4" />
            Go Home
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
