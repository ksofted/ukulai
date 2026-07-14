import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/5 py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-slate-500 text-sm flex items-center justify-center gap-2 flex-wrap">
          Designed & Developed with{' '}
          <FaHeart className="text-red-500 animate-pulse" size={12} />{' '}
          by{' '}
          <span className="gradient-text font-semibold">Modu Babagana</span>
          {' '}© 2026
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React + Vite · Tailwind CSS · Framer Motion
        </p>
      </motion.div>
    </footer>
  )
}
