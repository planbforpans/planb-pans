'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'inquiry'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // In production, this would send to an email service
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '', type: 'inquiry' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)' }}>
      <section style={{ padding: '100px 20px', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(196,26,26,0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <h1 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '64px', fontWeight: 300, marginBottom: '24px', color: '#111', position: 'relative', zIndex: 1 }}>
          Get in Touch
        </h1>
        <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '18px', color: '#666', lineHeight: 1.8, marginBottom: '60px', maxWidth: '700px', position: 'relative', zIndex: 1 }}>
          Have a cohort study to share? Want to collaborate? Have a question? We'd love to hear from you.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', position: 'relative', zIndex: 1 }}>
          {/* Contact Form */}
          <div style={{ background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)', border: '2px solid #f0e0d8', borderRadius: '12px', padding: '40px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Inquiry Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9'
                  }}
                >
                  <option value="inquiry">General Inquiry</option>
                  <option value="case-study">Share Cohort Study</option>
                  <option value="podcast">Podcast Guest</option>
                  <option value="collaboration">Collaboration</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111', display: 'block', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '14px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '2px',
                    backgroundColor: '#f9f9f9',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  backgroundColor: submitted ? '#16a34a' : '#1F6B6B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontWeight: 600
                }}
              >
                {submitted ? '✓ Message Sent' : 'Send Message →'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '8px' }}>Email</p>
              <a href="mailto:rachel@planbforpans.com" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 400, color: '#111', textDecoration: 'none' }}>
                rachel@planbforpans.com
              </a>
            </div>

            <div style={{ marginBottom: '48px' }}>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '16px' }}>Connect With Us</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="/podcast" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px' }}>Podcast</a>
                <a href="/learn" style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', textDecoration: 'none', borderBottom: '1px solid #e0e0e0', paddingBottom: '4px' }}>Resources</a>
              </div>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #fff 0%, #fef7f0 100%)', border: '2px solid #f0e0d8', padding: '40px', borderRadius: '12px', boxShadow: '0 20px 60px rgba(0,0,0,0.05)' }}>
              <p style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '24px', fontWeight: 400, marginBottom: '16px', color: '#111' }}>
                Ready to share?
              </p>
              <p style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '14px', color: '#666', lineHeight: 1.8 }}>
                We're actively seeking cohort studies from families and doctors. Your story could give hope to another parent just starting their Plan B journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        :root {
          --font-cormorant: 'Cormorant', Georgia, serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
    </main>
  )
}
