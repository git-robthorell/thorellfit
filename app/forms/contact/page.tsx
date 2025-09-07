export default function ContactForm() {
  return (
    <div className="section">
      <div className="container max-w-xl">
        <h1 className="text-3xl font-bold">Contact</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success"
          className="mt-6 space-y-4 card"
        >
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
          <button className="btn" type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}
