import { createClient } from '@supabase/supabase-js'

export const SupaBase = createClient(
  `https://zpmmpgoljlkxtazdjtep.supabase.co`,
  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwbW1wZ29samxreHRhemRqdGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMjg2NjQsImV4cCI6MjAxNzcwNDY2NH0.FfUW0cVIcWOSJXebJ-26TZZ2nvTar6VduCQBKOSAX1w`
)