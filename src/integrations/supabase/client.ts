import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mfsbyeuhfxzpqatweiip.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mc2J5ZXVoZnh6cHFhdHdlaWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3ODI0MzQsImV4cCI6MjA4MzM1ODQzNH0.eO5CTsF2Mfsh63Cy0iOIGFWRZjNc4kjfdnpK6eHGZJ0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
