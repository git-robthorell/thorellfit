import Link from 'next/link'
export default function Success() {
  return (
    <div className="section">
      <div className="container max-w-lg text-center">
        <h1 className="text-3xl font-bold">Thank you</h1>
        <p className="mt-2 text-slate-300">Your submission has been received. We will reach out shortly.</p>
        <Link href="/" className="btn mt-6 inline-block">Return Home</Link>
      </div>
    </div>
  )
}
