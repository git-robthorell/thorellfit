import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Omegatide Research – Thorell.fit",
  description: "A comparison of Retatrutide vs Retatrutide + Cagrilintide for metabolic enhancement and fat loss.",
};

export default function OmegatidePage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Omegatide Research</h1>
      <p className="text-sm text-gray-500 mb-6">Published November 2025 · by Rob Thorell</p>

      <Image
        src="/omegatide.jpg"
        alt="Omegatide molecule"
        width={800}
        height={400}
        className="rounded-xl mb-6"
      />

      <article className="prose prose-lg">
        <h2>Overview</h2>
        <p>
          Omegatide (Retatrutide + Cagrilintide) represents a synergistic GLP-1/GIP/Amylin agonist approach.
          Early research shows enhanced fat loss and metabolic control compared to Retatrutide alone.
        </p>

        <h2>Comparison Table</h2>
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Retatrutide</th>
              <th>Omegatide (Retatrutide + Cagrilintide)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Mechanism</td><td>GLP-1 + GIP</td><td>GLP-1 + GIP + Amylin</td></tr>
            <tr><td>Appetite Suppression</td><td>High</td><td>Very High</td></tr>
            <tr><td>Fat Loss Rate</td><td>~24%</td><td>~30%+</td></tr>
          </tbody>
        </table>

        <h2>Summary</h2>
        <p>
          Omegatide combines dual incretin and amylin pathways, offering improved outcomes in appetite control,
          energy expenditure, and metabolic reset potential. Future inclusion into Thorell.fit’s
          longevity protocols will focus on safe titration and biofeedback monitoring.
        </p>

        <p className="mt-6">
          <Link href="/">← Back to Home</Link>
        </p>
      </article>
    </main>
  );
}
