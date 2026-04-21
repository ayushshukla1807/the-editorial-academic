import { Redis } from "@upstash/redis";

// Graceful fallback to memory proxy if Redis is not configured in the environment.
// This ensures the portfolio project ALWAYS runs locally or when cloned by recruiters.

const IS_REDIS_CONFIGURED = !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

// In-memory fallback map for non-production environments
const memoryStore = new Map<string, { value: any; expiresAt: number | null }>();

class CacheService {
  private redis: Redis | null = null;

  constructor() {
    if (IS_REDIS_CONFIGURED) {
      this.redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
      });
    }
  }

  async get<T>(key: string): Promise<T | null> {
    if (this.redis) {
      return await this.redis.get<T>(key);
    }
    
    // Memory Fallback
    const stored = memoryStore.get(key);
    if (!stored) return null;
    if (stored.expiresAt && Date.now() > stored.expiresAt) {
      memoryStore.delete(key);
      return null;
    }
    return stored.value as T;
  }

  async set(key: string, value: any, options?: { ex?: number }): Promise<void> {
    if (this.redis) {
      if (options?.ex) {
        await this.redis.set(key, value, { ex: options.ex });
      } else {
        await this.redis.set(key, value);
      }
      return;
    }

    // Memory Fallback
    const expiresAt = options?.ex ? Date.now() + options.ex * 1000 : null;
    memoryStore.set(key, { value, expiresAt });
  }

  async delete(key: string): Promise<void> {
    if (this.redis) {
      await this.redis.del(key);
      return;
    }
    memoryStore.delete(key);
  }
}

export const cache = new CacheService();
