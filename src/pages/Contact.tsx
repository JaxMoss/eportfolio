import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((s) => ({ ...s, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const label = 'block text-sm mb-1 text-[var(--muted)]'
  const input = 'w-full bg-[var(--bg-2)] border border-muted/30 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent'

  return (
    <section className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
        <p className="text-[var(--muted)] mt-3 max-w-2xl mx-auto">
          The easiest way to reach me is email. Tell me a bit about what you're working on — I'm happy to chat about Uru Intelligence, engineering, or collaboration.
        </p>
      </div>

      <div className="card-surface p-6 md:p-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Get In Touch</h2>
          <p className="mt-2 font-medium text-[var(--maroon)]">mossjackson@tamu.edu</p>
          <p className="text-[var(--muted)] text-sm mt-2">
            Please use the form below to send me a message, or email me directly at the address above.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          <div>
            <label htmlFor="name" className={label}>Name *</label>
            <input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" className={input} />
          </div>
          <div>
            <label htmlFor="email" className={label}>Email *</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" className={input} />
          </div>
          <div>
            <label htmlFor="subject" className={label}>Subject *</label>
            <input id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What is this regarding?" className={input} />
          </div>
          <div>
            <label htmlFor="message" className={label}>Message *</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Share your message or how I can help..." className={input} />
          </div>
          <div className="text-center">
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 bg-[var(--blue)] text-white hover:shadow-lg hover:shadow-[rgba(59,130,246,0.35)] transition-transform hover:-translate-y-0.5">
              Send Message
            </button>
          </div>
        </form>


      </div>
    </section>
  )
}

