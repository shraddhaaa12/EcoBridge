import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://duefnmlufccgzcullxld.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1ZWZubWx1ZmNjZ3pjdWxseGxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk0ODUyMjAsImV4cCI6MjEwNTA2MTIyMH0.cGjOxYSdH5aY5h-sMMTIq5PwClvFqVvIip6rLUfvikw";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);