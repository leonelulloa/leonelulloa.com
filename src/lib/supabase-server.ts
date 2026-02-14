import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

/**
 * Server-side Supabase client using the service role key.
 * Bypasses RLS — use ONLY in API routes, never expose to the browser.
 */
export const supabaseServer = createClient(supabaseUrl, serviceRoleKey);
