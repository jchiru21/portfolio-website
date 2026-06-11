// components/Contact.js
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({ email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    } else {
      console.error("EmailJS public key is not set")
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (!formData.email || !formData.message) {
      setError("Please fill in all fields.")
      return
    }

    setLoading(true)
    try {
      // success state is set ONLY after this promise resolves — never optimistically
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          message: formData.message,
          to_email: "joshichiranjeevi9@gmail.com",
        }
      )
      setSubmitted(true)
      setFormData({ email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err) {
      console.error("Error sending email:", err)
      setError("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="contact" data-screen-label="Contact">
      <div className="sec-grid">
        <div className="sec-marker">
          <span className="eyebrow" data-decode="// contact">{"// contact"}</span>
        </div>
        <div className="contact-grid">
          <div className="r">
            <h2 className="big">
              Let&apos;s <span className="si">Connect</span>
            </h2>
          </div>
          <div className="r" style={{ "--d": ".12s" }}>
            <div className="lbl">Direct</div>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="field">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field">
                <textarea
                  name="message"
                  placeholder="Your message"
                  aria-label="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {submitted && (
                <p className="form-ok">✓ Message sent successfully!</p>
              )}
              {error && (
                <p className="form-err" role="alert">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
