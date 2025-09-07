"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function IntakeForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("form-name", "patient-intake");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push("/success");
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="section">
      <div className="container max-w-2xl">
        <h1 className="text-3xl font-bold">Patient Intake</h1>
        <p className="mt-2 text-slate-300">This form is secured and submissions are stored privately.</p>

        <form className="mt-6 space-y-4 card" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="patient-intake" />

          <div>
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" name="fullName" required placeholder="Jane Doe" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" placeholder="+1 (___) ___-____" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="dob">Date of birth</label>
              <input id="dob" name="dob" type="date" required />
            </div>
            <div>
              <label htmlFor="program">Program interest</label>
              <select id="program" name="program" defaultValue="GLP1">
                <option value="GLP1">GLP1</option>
                <option value="GLP2">GLP2</option>
                <option value="Unsure">Unsure</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="goals">Primary goals</label>
            <textarea id="goals" name="goals" rows={4} placeholder="Briefly describe your goals." />
          </div>

          <button className="btn" type="submit" disabled={pending}>
            {pending ? "Submitting…" : "Submit Intake"}
          </button>

          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
