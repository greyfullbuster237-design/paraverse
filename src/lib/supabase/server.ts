import { createServerClient, serializeCookieHeader, parseCookieHeader } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from './database.types';

// Server-side Supabase client
// Utilisé dans les Server Components et API routes
// Accès à la clé service role pour opérations admin
export async function createServerSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Cookie setting errors in middleware can be ignored
          }
        },
      },
    },
  );
}

// Admin client avec service role (API routes uniquement)
export async function createAdminSupabaseClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Ignore cookie setting errors
          }
        },
      },
    },
  );
}
