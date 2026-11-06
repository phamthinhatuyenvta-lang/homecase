import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Thiếu NEXT_PUBLIC_SUPABASE_URL trong file .env.local",
  );
}

if (!supabasePublishableKey) {
  throw new Error(
    "Thiếu NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY trong file .env.local",
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  },
);