import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Wellness that fits your life.
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Join the monthly wellness membership for access to medical consultations, personalized plans, and transparent pricing.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="#pricing" className="btn">View Membership</Link>
              <Link href="/forms/intake" className="btn" aria-label="Start patient intake">Start Intake</Link>
            </div>
          </div>
          <div className="card">
            <ul className="space-y-3 text-slate-200">
              <li>• Membership: $25/mo. First month is waived.</li>
              <li>• Program options include GLP1 and GLP2 protocols.</li>
              <li>• Secure forms with private storage and email confirmations.</li>
              <li>• Simple, link-based checkout and optional upgrades later.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="features" className="section border-t border-white/10">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {title:'Fast onboarding', desc:'Complete a secure intake in minutes with mobile-friendly forms.'},
            {title:'Clear pricing', desc:'Direct, transparent membership and program pricing.'},
            {title:'Data privacy', desc:'Submissions stored privately; confirmations sent via email.'},
          ].map((f) => (
            <div key={f.title} className="card">
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section border-t border-white/10">
        <div className="container">
          <h2 className="text-3xl font-bold">Membership</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-bold">Monthly Wellness</h3>
              <p className="text-slate-300 mt-2">$25/month · first month waived</p>
              <p className="text-slate-400 mt-2">Includes medical consultation and personalized plan.</p>
              <a
                className="btn mt-4"
                href="https://buy.stripe.com/test_eVa5nN2u3bQk5kE7ss"
                target="_blank" rel="noopener noreferrer"
              >
                Join Now
              </a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold">Program: GLP1</h3>
              <p className="text-slate-400 mt-2">Start with consultation; pricing shown at checkout.</p>
              <a className="btn mt-4" href="/forms/intake">Start Intake</a>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold">Program: GLP2</h3>
              <p className="text-slate-400 mt-2">Start with consultation; pricing shown at checkout.</p>
              <a className="btn mt-4" href="/forms/intake">Start Intake</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
