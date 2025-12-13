import { serverCache } from "@/lib/server-cache";

export async function getCached<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttlSeconds: number = 300
): Promise<T> {
  const cached = serverCache.get<T>(key);
  if (cached) {
    return cached;
  }

  const data = await fetchFn();
  serverCache.set(key, data, ttlSeconds);
  return data;
}
