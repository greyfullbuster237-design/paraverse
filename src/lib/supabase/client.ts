'use client';

import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from './database.types';

// Client-side Supabase client
// Utilisé dans les composants browser et utilitaires côté client
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

export const supabase = createClient();
