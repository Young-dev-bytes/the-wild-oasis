import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jqeypqtmrfhfuxnwrqng.supabase.co";

const supbaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZXlwcXRtcmZoZnV4bndycW5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNTY1MDYsImV4cCI6MjAwOTczMjUwNn0.1T9xWxaf4D9wAdp5oOA_rWhHY8_NkQaevWlCopHgVr4";
const supabase = createClient(supabaseUrl, supbaseKey);

export default supabase;
