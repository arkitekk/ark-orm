import { Pool, PoolConfig } from 'pg';

let pool: Pool | null = null;

/**
 * Initialize the PostgreSQL connection pool with user config
 */
export function initDB(config: PoolConfig): void {
  if (pool) {
    console.warn('PostgreSQL pool is already initialized.');
    return;
  }
  pool = new Pool(config);
}

/**
 * Get the active DB connection pool
 */
export function getDB(): Pool {
  if (!pool) {
    throw new Error('PostgreSQL pool not initialized. Call initDB(config) first.');
  }
  return pool;
}

/**
 * Gracefully close the pool (optional)
 */
export async function closeDB(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
