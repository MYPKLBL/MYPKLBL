"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "player",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          first_name: form.firstName,
          last_name: form.lastName,
          role: form.role,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage("Account created. Check your email to confirm.");
    setLoading(false);
  }

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="container">
          <div className="page-hero-card">
            <span className="eyebrow">Registration</span>
            <h1>Create your MY PKLBL account.</h1>
            <p className="hero-text">
              Join as a player, manager, organizer, or club owner.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="form-card">
            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label>First Name</label>
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={updateField}
                    type="text"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="field">
                  <label>Last Name</label>
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={updateField}
                    type="text"
                    placeholder="Enter last name"
                    required
                  />
                </div>

                <div className="field">
                  <label>Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={updateField}
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="field">
                  <label>Role</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={updateField}
                  >
                    <option value="player">Player</option>
                    <option value="manager">Manager</option>
                    <option value="organizer">Organizer</option>
                    <option value="club_owner">Club Owner</option>
                  </select>
                </div>

                <div className="field full-width">
                  <label>Password</label>
                  <input
                    name="password"
                    value={form.password}
                    onChange={updateField}
                    type="password"
                    placeholder="Create password"
                    required
                  />
                </div>
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Creating..." : "Create Account"}
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
