'use client'

import { useEffect, useRef, useState } from 'react'

// Rachel, 2026-11-17: "This video should open when we go to the website."
// Opens once per visitor on the home page. Browsers only allow autoplay when
// muted, so it starts silent with a clear "Tap for sound" button.
// Rachel, 2026-11-20: swapped the Ria voiceover for her own "One child is a story" video.
const SEEN_KEY = 'planb.welcomeVideoSeen.rachel'

export default function WelcomeVideo() {
  const [open, setOpen] = useState(false)
  const [muted, setMuted] = useState(true)
  const ref = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    try {
      if (localStorage.getItem(SEEN_KEY)) return
    } catch {}
    const t = setTimeout(() => setOpen(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function close() {
    setOpen(false)
    try { localStorage.setItem(SEEN_KEY, '1') } catch {}
  }

  function unmute() {
    const v = ref.current
    if (!v) return
    v.muted = false
    v.currentTime = 0
    v.play().catch(() => {})
    setMuted(false)
  }

  if (!open) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="What is Plan B for PANS? A 2-minute video from our founder"
      onClick={close}
      style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(20,28,28,0.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: 'min(440px, 100%)', maxHeight: '100%', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          onClick={close}
          aria-label="Close video"
          style={{ alignSelf: 'flex-end', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.6)', borderRadius: 999, padding: '6px 14px', fontSize: 13, letterSpacing: '0.08em', cursor: 'pointer' }}
        >
          Close ✕
        </button>
        <div style={{ position: 'relative' }}>
          <video
            ref={ref}
            src="/plan-b-one-child-is-a-story.mp4"
            poster="/plan-b-one-child-is-a-story-poster.jpg"
            autoPlay
            muted={muted}
            playsInline
            controls={!muted}
            onEnded={close}
            style={{ width: '100%', maxHeight: 'calc(100vh - 120px)', objectFit: 'contain', borderRadius: 16, background: '#fff', display: 'block' }}
          />
          {muted && (
            <button
              onClick={unmute}
              style={{ position: 'absolute', left: '50%', bottom: 18, transform: 'translateX(-50%)', background: '#2E6E70', color: '#fff', border: 'none', borderRadius: 999, padding: '12px 22px', fontSize: 14, fontWeight: 600, letterSpacing: '0.06em', cursor: 'pointer', boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }}
            >
              🔊 Tap for sound
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
