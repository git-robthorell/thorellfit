"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("form-name", "contact");

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
      <div className="container max-w-xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <form className="mt-6 space-y-4 card" onSubmit={onSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required />
          </div>
          <button className="btn" type="submit" disabled={pending}>
            {pending ? "Sending…" : "Send"}
          </button>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </form>
      </div>
    </div>
  );
}
