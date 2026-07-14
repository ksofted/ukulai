import { motion } from 'framer-motion'

export default function SectionHeader({ tag, title, highlight, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 mb-4 uppercase tracking-widest">
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}
