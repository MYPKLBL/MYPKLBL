"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="container">
          <div className="page-hero-card">
            <span className="eyebrow">Login</span>
            <h1>Access your MY PKLBL account.</h1>
            <p className="hero-text">
              Sign in as a player, manager, organizer, or club owner.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="form-card">
            <form className="modern-form" onSubmit={handleLogin}>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Signing in..." : "Login"}
                </button>
              </div>

              {message ? <p>{message}</p> : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
