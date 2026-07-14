import { motion } from 'framer-motion'
import { FaCode, FaCloud, FaBrain, FaRocket } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import heroImg from '../assets/hero.png'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
  { value: '10+', label: 'Technologies' },
  { value: '1', label: 'Company Founded' },
]

const highlights = [
  { icon: <FaCode />, text: 'Full Stack Engineering' },
  { icon: <FaCloud />, text: 'Cloud Architecture' },
  { icon: <FaBrain />, text: 'AI & Machine Learning' },
  { icon: <FaRocket />, text: 'Tech Entrepreneurship' },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0a1020]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader tag="About Me" title="The Story" highlight="Behind the Code" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 z-10" />
              <img src={heroImg} alt="Modu Babagana" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-bold text-lg">Modu Babagana</p>
                <p className="text-indigo-300 text-sm">CTO, Kanemsoft Team Co. Ltd.</p>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4 max-w-sm mx-auto lg:mx-0">
              {stats.map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.03 }}
                  className="glass rounded-xl p-4 text-center border border-white/5"
                >
                  <p className="text-2xl font-black gradient-text">{value}</p>
                  <p className="text-xs text-slate-400 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed">
              My journey in software engineering began with a deep curiosity about how technology
              can transform lives. Over the years, I've evolved from writing my first lines of code
              to leading an entire technology company — <span className="text-indigo-400 font-semibold">Kanemsoft Team Co. Ltd.</span>
            </p>
            <p className="text-slate-300 leading-relaxed">
              As <span className="text-white font-semibold">Chief Technology Officer</span>, I architect
              scalable systems, lead engineering teams, and drive product strategy. My expertise spans
              full-stack web development, mobile applications, cloud infrastructure, and AI integration.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I'm deeply passionate about <span className="text-amber-400 font-semibold">Artificial Intelligence</span>,{' '}
              <span className="text-indigo-400 font-semibold">Cloud Computing</span>, Blockchain, and{' '}
              <span className="text-purple-400 font-semibold">Smart City</span> technologies. My mission
              is to build technology that creates meaningful, lasting impact across Africa.
            </p>
            <p className="text-slate-300 leading-relaxed">
              I believe that the next generation of world-changing software will be built in Africa —
              and I'm committed to being at the forefront of that revolution.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 glass rounded-xl p-3 border border-white/5">
                  <span className="text-indigo-400 text-lg">{icon}</span>
                  <span className="text-sm text-slate-300 font-medium">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">📍 Nigeria</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-300 border border-green-500/20">✅ Open to Collaboration</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">🎯 CTO @ Kanemsoft</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
