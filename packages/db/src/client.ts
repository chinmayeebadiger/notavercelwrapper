import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { config as loadDotenv } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const apiEnvPath = resolve(currentDir, "../../../apps/api/.env");

  if (existsSync(apiEnvPath)) {
    loadDotenv({
      path: apiEnvPath,
    });
  }
}

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const globalForDb = globalThis as typeof globalThis & {
  __clircelPool?: Pool;
};

export const pool =
  globalForDb.__clircelPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDb.__clircelPool = pool;
}

export const db = drizzle(pool, {
  schema,
});
