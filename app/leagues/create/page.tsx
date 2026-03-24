"use client";

import { useState, useMemo } from "react";

type FormState = {
  leagueName: string;
  organizerName: string;
  organizerEmail: string;
  organizerPhone: string;

  country: string;
  state: string;
  city: string;
  venueName: string;
  venueAddress: string;

  season: string;
  year: string;
  leagueType: string;
  format: string;
  skillLevel: string;
  genderDivision: string;
  ageDivision: string;

  registrationOpen: string;
  registrationClose: string;
  startDate: string;
  endDate: string;
  matchDays: string;

  maxTeams: string;
  playersPerTeam: string;
  entryFee: string;
  description: string;

  standingsVisible: boolean;
  allowManagerScoreUpdates: boolean;
  allowWaitlist: boolean;
  publishImmediately: boolean;
};

const initialForm: FormState = {
  leagueName: "",
  organizerName: "",
  organizerEmail: "",
  organizerPhone: "",

  country: "United States",
  state: "",
  city: "",
  venueName: "",
  venueAddress: "",

  season: "Summer",
  year: "2026",
  leagueType: "Team League",
  format: "Round Robin",
  skillLevel: "All Levels",
  genderDivision: "Open",
  ageDivision: "All Ages",

  registrationOpen: "",
  registrationClose: "",
  startDate: "",
  endDate: "",
  matchDays: "",

  maxTeams: "",
  playersPerTeam: "",
  entryFee: "",
  description: "",

  standingsVisible: true,
  allowManagerScoreUpdates: true,
  allowWaitlist: true,
  publishImmediately: false,
};

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-5">
      <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
      {subtitle ? (
        <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </span>
      {children}
      {hint ? <span className="mt-2 block text-xs text-slate-400">{hint}</span> : null}
    </label>
  );
}

function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-lime-400/70 focus:bg-white/10 focus:ring-2 focus:ring-lime-400/20 ${
        props.className ?? ""
      }`}
    />
  );
}

function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement>
) {
  return (
    <select
      {...props}
      className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-lime-400/70 focus:bg-white/10 focus:ring-2 focus:ring-lime-400/20 ${
        props.className ?? ""
      }`}
    />
  );
}

function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-lime-400/70 focus:bg-white/10 focus:ring-2 focus:ring-lime-400/20 ${
        props.className ?? ""
      }`}
    />
  );
}

function Toggle({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  description: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex w-full items-start justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
    >
      <div className="pr-4">
        <div className="text-sm font-medium text-white">{label}</div>
        <div className="mt-1 text-xs text-slate-400">{description}</div>
      </div>

      <div
        className={`relative h-7 w-12 rounded-full transition ${
          checked ? "bg-lime-400" : "bg-slate-600"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </div>
    </button>
  );
}

export default function CreateLeaguePage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [saved, setSaved] = useState(false);

  const completion = useMemo(() => {
    const required = [
      form.leagueName,
      form.organizerName,
      form.organizerEmail,
      form.country,
      form.state,
      form.city,
      form.season,
      form.year,
      form.leagueType,
      form.format,
      form.startDate,
    ];
    const completed = required.filter(Boolean).length;
    return Math.round((completed / required.length) * 100);
  }, [form]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Create League Form:", form);
    setSaved(true);
  }

  function handleSaveDraft() {
    console.log("Draft Saved:", form);
    setSaved(true);
  }

  return (
    <main className="min-h-screen bg-[#0a1630] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#103F62] via-[#0f2747] to-[#0b1830] shadow-2xl">
          <div className="border-b border-white/10 px-5 py-6 md:px-8 md:py-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-lime-300">
                  League Management
                </span>
                <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                  Create League
                </h1>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
                  Launch a new league with the same premium look and feel as the rest
                  of your platform. Add organizer details, format, venue, dates,
                  registration settings, and publishing controls.
                </p>
              </div>

              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">Form completion</span>
                  <span className="font-semibold text-lime-300">{completion}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-lime-400 transition-all"
                    style={{ width: `${completion}%` }}
                  />
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  Fill in the required fields to get your league ready for publishing.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6 px-5 py-6 md:px-8 md:py-8 xl:grid-cols-[1.5fr_0.7fr]">
            <div className="space-y-6">
              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="League Details"
                  subtitle="Basic public information shown on your league page."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="League Name">
                    <Input
                      placeholder="Southern California Premier League"
                      value={form.leagueName}
                      onChange={(e) => updateField("leagueName", e.target.value)}
                    />
                  </Field>

                  <Field label="League Type">
                    <Select
                      value={form.leagueType}
                      onChange={(e) => updateField("leagueType", e.target.value)}
                    >
                      <option className="text-black">Team League</option>
                      <option className="text-black">Club League</option>
                      <option className="text-black">Ladder League</option>
                      <option className="text-black">Mixed League</option>
                      <option className="text-black">Senior League</option>
                      <option className="text-black">Junior League</option>
                    </Select>
                  </Field>

                  <Field label="Season">
                    <Select
                      value={form.season}
                      onChange={(e) => updateField("season", e.target.value)}
                    >
                      <option className="text-black">Spring</option>
                      <option className="text-black">Summer</option>
                      <option className="text-black">Fall</option>
                      <option className="text-black">Winter</option>
                    </Select>
                  </Field>

                  <Field label="Year">
                    <Input
                      placeholder="2026"
                      value={form.year}
                      onChange={(e) => updateField("year", e.target.value)}
                    />
                  </Field>

                  <Field label="Format">
                    <Select
                      value={form.format}
                      onChange={(e) => updateField("format", e.target.value)}
                    >
                      <option className="text-black">Round Robin</option>
                      <option className="text-black">Single Elimination</option>
                      <option className="text-black">Double Elimination</option>
                      <option className="text-black">Pool Play + Bracket</option>
                      <option className="text-black">Home and Away</option>
                    </Select>
                  </Field>

                  <Field label="Skill Level">
                    <Select
                      value={form.skillLevel}
                      onChange={(e) => updateField("skillLevel", e.target.value)}
                    >
                      <option className="text-black">All Levels</option>
                      <option className="text-black">Beginner</option>
                      <option className="text-black">Intermediate</option>
                      <option className="text-black">Advanced</option>
                      <option className="text-black">4.0+</option>
                      <option className="text-black">5.0+</option>
                    </Select>
                  </Field>

                  <Field label="Gender Division">
                    <Select
                      value={form.genderDivision}
                      onChange={(e) => updateField("genderDivision", e.target.value)}
                    >
                      <option className="text-black">Open</option>
                      <option className="text-black">Men</option>
                      <option className="text-black">Women</option>
                      <option className="text-black">Mixed</option>
                    </Select>
                  </Field>

                  <Field label="Age Division">
                    <Select
                      value={form.ageDivision}
                      onChange={(e) => updateField("ageDivision", e.target.value)}
                    >
                      <option className="text-black">All Ages</option>
                      <option className="text-black">Juniors</option>
                      <option className="text-black">18+</option>
                      <option className="text-black">35+</option>
                      <option className="text-black">50+</option>
                      <option className="text-black">60+</option>
                    </Select>
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="League Description">
                    <Textarea
                      rows={5}
                      placeholder="Describe the league, scoring rules, divisions, match format, and what players should expect."
                      value={form.description}
                      onChange={(e) => updateField("description", e.target.value)}
                    />
                  </Field>
                </div>
              </section>

              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="Organizer Information"
                  subtitle="Primary contact details for the league."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Organizer Name">
                    <Input
                      placeholder="Cachi Trejo"
                      value={form.organizerName}
                      onChange={(e) => updateField("organizerName", e.target.value)}
                    />
                  </Field>

                  <Field label="Organizer Email">
                    <Input
                      type="email"
                      placeholder="organizer@example.com"
                      value={form.organizerEmail}
                      onChange={(e) => updateField("organizerEmail", e.target.value)}
                    />
                  </Field>

                  <Field label="Organizer Phone">
                    <Input
                      placeholder="(555) 555-5555"
                      value={form.organizerPhone}
                      onChange={(e) => updateField("organizerPhone", e.target.value)}
                    />
                  </Field>
                </div>
              </section>

              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="Location & Venue"
                  subtitle="Where this league takes place."
                />

                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Country">
                    <Input
                      placeholder="United States"
                      value={form.country}
                      onChange={(e) => updateField("country", e.target.value)}
                    />
                  </Field>

                  <Field label="State / Region">
                    <Input
                      placeholder="California"
                      value={form.state}
                      onChange={(e) => updateField("state", e.target.value)}
                    />
                  </Field>

                  <Field label="City">
                    <Input
                      placeholder="Temecula"
                      value={form.city}
                      onChange={(e) => updateField("city", e.target.value)}
                    />
                  </Field>

                  <Field label="Venue Name">
                    <Input
                      placeholder="Temecula Valley Pickleball Center"
                      value={form.venueName}
                      onChange={(e) => updateField("venueName", e.target.value)}
                    />
                  </Field>

                  <div className="md:col-span-2">
                    <Field label="Venue Address">
                      <Input
                        placeholder="123 Main Street"
                        value={form.venueAddress}
                        onChange={(e) => updateField("venueAddress", e.target.value)}
                      />
                    </Field>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="Schedule & Registration"
                  subtitle="Control registration windows and league dates."
                />

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  <Field label="Registration Opens">
                    <Input
                      type="date"
                      value={form.registrationOpen}
                      onChange={(e) => updateField("registrationOpen", e.target.value)}
                    />
                  </Field>

                  <Field label="Registration Closes">
                    <Input
                      type="date"
                      value={form.registrationClose}
                      onChange={(e) => updateField("registrationClose", e.target.value)}
                    />
                  </Field>

                  <Field label="League Start Date">
                    <Input
                      type="date"
                      value={form.startDate}
                      onChange={(e) => updateField("startDate", e.target.value)}
                    />
                  </Field>

                  <Field label="League End Date">
                    <Input
                      type="date"
                      value={form.endDate}
                      onChange={(e) => updateField("endDate", e.target.value)}
                    />
                  </Field>

                  <Field label="Match Days">
                    <Input
                      placeholder="Mondays & Wednesdays"
                      value={form.matchDays}
                      onChange={(e) => updateField("matchDays", e.target.value)}
                    />
                  </Field>

                  <Field label="Entry Fee">
                    <Input
                      placeholder="$50"
                      value={form.entryFee}
                      onChange={(e) => updateField("entryFee", e.target.value)}
                    />
                  </Field>

                  <Field label="Max Teams">
                    <Input
                      placeholder="16"
                      value={form.maxTeams}
                      onChange={(e) => updateField("maxTeams", e.target.value)}
                    />
                  </Field>

                  <Field label="Players Per Team">
                    <Input
                      placeholder="8"
                      value={form.playersPerTeam}
                      onChange={(e) => updateField("playersPerTeam", e.target.value)}
                    />
                  </Field>
                </div>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="Publishing Settings"
                  subtitle="Choose how your league appears to users."
                />

                <div className="space-y-3">
                  <Toggle
                    checked={form.standingsVisible}
                    onChange={(value) => updateField("standingsVisible", value)}
                    label="Public Standings"
                    description="Show standings and rankings on the league page."
                  />

                  <Toggle
                    checked={form.allowManagerScoreUpdates}
                    onChange={(value) =>
                      updateField("allowManagerScoreUpdates", value)
                    }
                    label="Allow Manager Score Updates"
                    description="Managers can submit or update match scores."
                  />

                  <Toggle
                    checked={form.allowWaitlist}
                    onChange={(value) => updateField("allowWaitlist", value)}
                    label="Enable Waitlist"
                    description="Allow teams or players to join a waitlist when full."
                  />

                  <Toggle
                    checked={form.publishImmediately}
                    onChange={(value) => updateField("publishImmediately", value)}
                    label="Publish Immediately"
                    description="Make the league live as soon as it is created."
                  />
                </div>
              </section>

              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="League Snapshot"
                  subtitle="Quick preview before saving."
                />

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0d213d] p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-lime-300">
                      League Name
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      {form.leagueName || "Your league name"}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-[#0d213d] p-4">
                      <div className="text-xs text-slate-400">Season</div>
                      <div className="mt-1 font-semibold">{form.season}</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d213d] p-4">
                      <div className="text-xs text-slate-400">Format</div>
                      <div className="mt-1 font-semibold">{form.format}</div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d213d] p-4">
                      <div className="text-xs text-slate-400">Location</div>
                      <div className="mt-1 font-semibold">
                        {form.city || "City"},{" "}
                        {form.state || "State"}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#0d213d] p-4">
                      <div className="text-xs text-slate-400">Max Teams</div>
                      <div className="mt-1 font-semibold">
                        {form.maxTeams || "--"}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-dashed border-lime-400/30 bg-lime-400/10 p-4">
                    <div className="text-sm font-semibold text-lime-300">
                      Organizer
                    </div>
                    <div className="mt-1 text-sm text-slate-200">
                      {form.organizerName || "Organizer name"}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">
                      {form.organizerEmail || "organizer@email.com"}
                    </div>
                  </div>
                </div>
              </section>

              <section className="rounded-[24px] border border-white/10 bg-white/5 p-5 md:p-6">
                <SectionTitle
                  title="Actions"
                  subtitle="Save draft or create the league."
                />

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleSaveDraft}
                    className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Save Draft
                  </button>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#B8D033] px-4 py-3 text-sm font-semibold text-[#103F62] transition hover:brightness-105"
                  >
                    Create League
                  </button>
                </div>

                {saved ? (
                  <div className="mt-4 rounded-2xl border border-lime-400/20 bg-lime-400/10 px-4 py-3 text-sm text-lime-200">
                    League data captured successfully. Connect this form to Supabase
                    or your API route next.
                  </div>
                ) : null}
              </section>
            </aside>
          </form>
        </div>
      </div>
    </main>
  );
}
