import "../index.css";
import { useState, useEffect } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import LoginPage from "./Login";
const supabase = createClient(
  "https://jckiftwgysryqczkmvjc.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impja2lmdHdneXNyeXFjemttdmpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMzY5NjYsImV4cCI6MjAwNjcxMjk2Nn0.qwVOtq3GiZjBPzZwvR5WrE9tBb5nLWPB0HuG81YiFIk"
);

export default function LOG() {
    
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogin = async (username: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    });
    if (error) {
      console.log("Error in sign in: ", error);
    } else {
      setSession(data?.session);
    }
  };

  if (session === null) {
    return (
      <div className="custom-auth-container">
        <LoginPage onLogin={handleLogin} />
      </div>
    );
  } else {
    return <div>Logged in!</div>;
  }
}