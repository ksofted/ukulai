import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { RiMenuFoldLine } from 'react-icons/ri'
import { FaCode } from 'react-icons/fa'

const links = [
  { name: 'Home',     id: 'home' },
  { name: 'About',    id: 'about' },
  { name: 'Skills',   id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Passion',  id: 'passion' },
  { name: 'Contact',  id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive]   = useState('home')

  useEffect(() => {
    const onScroll = () => {
      const scrollTop  = window.scrollY
      const docHeight  = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
      setScrolled(scrollTop > 60)
      for (const link of [...links].reverse()) {
        const el = document.getElementById(link.id)
        if (el && scrollTop >= el.offsetTop - 130) { setActive(link.id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* ── Scroll Progress ── */}
      <div className="fixed top-0 left-0 right-0 z-[70] h-[2px]">
        <motion.div
          className="h-full origin-left"
          style={{
            width: `${progress}%`,
            background: 'linear-gradient(90deg,#6366f1,#8b5cf6,#a78bfa,#f59e0b)',
          }}
        />
      </div>

      {/* ── Main Nav ── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
        style={{ paddingTop: scrolled ? '0.5rem' : '1rem', transition: 'padding 0.3s' }}
      >
        <div
          className={`w-full max-w-5xl transition-all duration-500 ${
            scrolled
              ? 'rounded-2xl shadow-2xl shadow-black/40'
              : 'rounded-2xl'
          }`}
          style={{
            background: scrolled
              ? 'rgba(2,8,23,0.85)'
              : 'rgba(2,8,23,0.4)',
            backdropFilter: 'blur(20px)',
            border: scrolled
              ? '1px solid rgba(99,102,241,0.15)'
              : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center justify-between px-5 h-14">

            {/* ── Logo ── */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
              >
                <FaCode size={13} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: 'Poppins,sans-serif' }}>
                  Modu<span className="gradient-text">Babagana</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-widest uppercase">CTO · Kanemsoft</span>
              </div>
            </button>

            {/* ── Desktop Links ── */}
            <nav className="hidden md:flex items-center gap-0.5">
              {links.map(({ name, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-xl group"
                  style={{ color: active === id ? '#a78bfa' : '#94a3b8' }}
                >
                  {/* hover bg */}
                  <span className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-200" />
                  {name}
                  {/* active underline pill */}
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full"
                      style={{ background: 'linear-gradient(90deg,#6366f1,#8b5cf6)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-green-400 font-medium">Available</span>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="px-4 py-1.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
              >
                Hire Me
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-indigo-500/40 transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)' }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <HiX size={18} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <RiMenuFoldLine size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60"
              style={{ backdropFilter: 'blur(4px)' }}
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col"
              style={{
                background: 'rgba(5,10,25,0.97)',
                backdropFilter: 'blur(24px)',
                borderLeft: '1px solid rgba(99,102,241,0.15)',
              }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                <div>
                  <p className="text-white font-bold text-base" style={{ fontFamily: 'Poppins,sans-serif' }}>
                    Modu <span className="gradient-text">Babagana</span>
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">CTO · Kanemsoft Team Co. Ltd.</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                >
                  <HiX size={16} />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
                {links.map(({ name, id }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                      active === id
                        ? 'text-indigo-300 bg-indigo-500/12 border border-indigo-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: active === id ? '#6366f1' : '#334155' }}
                    />
                    {name}
                    {active === id && (
                      <span className="ml-auto text-[10px] text-indigo-400 font-semibold uppercase tracking-wider">Active</span>
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-4 py-5 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/8 border border-green-500/15">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-green-400 font-medium">Available for opportunities</span>
                </div>
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}
                >
                  Get In Touch
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
