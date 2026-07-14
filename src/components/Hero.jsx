import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import heroImg from '../assets/hero.png'

const floatVariants = {
  animate: (i) => ({
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 },
  }),
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#020817]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.04),transparent_70%)]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
        />
        {/* Floating Orbs */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            custom={i}
            variants={floatVariants}
            animate="animate"
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              width: `${120 + i * 60}px`,
              height: `${120 + i * 60}px`,
              background: i % 2 === 0 ? 'radial-gradient(circle,#6366f1,transparent)' : 'radial-gradient(circle,#8b5cf6,transparent)',
              top: `${10 + i * 20}%`,
              left: i % 2 === 0 ? `${5 + i * 10}%` : 'auto',
              right: i % 2 !== 0 ? `${5 + i * 8}%` : 'auto',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-indigo-300 mb-6 border border-indigo-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg mb-2 font-medium"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          >
            <span className="gradient-text">Modu</span>{' '}
            <span className="text-white">Babagana</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl text-slate-300 font-medium mb-6"
          >
            Chief Technology Officer{' '}
            <span className="text-indigo-400">|</span> Software Engineer{' '}
            <span className="text-indigo-400">|</span>{' '}
            <span className="gradient-gold">Cloud & AI Enthusiast</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            A passionate software engineer dedicated to building innovative digital solutions
            that solve real-world problems across Africa. Leading technology at{' '}
            <span className="text-indigo-400 font-semibold">Kanemsoft Team Co. Ltd.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white glass border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </button>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-amber-400 border border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300 hover:scale-105"
            >
              <HiDownload size={16} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: <FaGithub size={20} />, href: 'https://github.com', label: 'GitHub' },
              { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg glass border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-2xl scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-spin" style={{ animationDuration: '12s' }} />
            <div className="absolute inset-2 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
            {/* Photo */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/20">
              <img
                src={heroImg}
                alt="Modu Babagana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 glass border border-indigo-500/30 rounded-2xl px-3 py-2 text-xs font-semibold text-indigo-300"
            >
              🚀 CTO @ Kanemsoft
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-2 -left-2 glass border border-amber-500/30 rounded-2xl px-3 py-2 text-xs font-semibold text-amber-300"
            >
              ⚡ Full Stack Dev
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-indigo-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
