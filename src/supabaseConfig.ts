import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    "https://cojvijxfnmmjudfrsgbs.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvanZpanhmbm1tanVkZnJzZ2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MTc2MDMsImV4cCI6MjAwNjk5MzYwM30.cR3l6vzTDvv1qSpbPkfqCRtsEiuVBDrVPJ03LgZo3rw"
  );
  
export default supabase;