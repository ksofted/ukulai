import { motion } from 'framer-motion'
import { FaBrain, FaCloud, FaCity, FaRocket, FaBook, FaChartLine, FaCode } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const passions = [
  {
    icon: <FaCode />,
    title: 'Problem-Solving Software',
    desc: 'I build software that addresses real, tangible problems — from food insecurity to urban mobility — creating measurable impact for communities.',
    color: '#6366f1',
  },
  {
    icon: <FaBrain />,
    title: 'Artificial Intelligence',
    desc: 'AI is the most transformative technology of our era. I\'m passionate about applying AI to automate, predict, and enhance human experiences.',
    color: '#8b5cf6',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Computing',
    desc: 'Cloud infrastructure democratizes technology. I love designing scalable, cost-efficient cloud architectures that power modern applications.',
    color: '#ff9900',
  },
  {
    icon: <FaCity />,
    title: 'Smart City Innovation',
    desc: 'I envision African cities powered by intelligent systems — smart traffic, emergency response, and connected infrastructure for better living.',
    color: '#10b981',
  },
  {
    icon: <FaRocket />,
    title: 'Entrepreneurship',
    desc: 'As founder and CTO of Kanemsoft, I\'m driven by the challenge of building a technology company that creates jobs and drives economic growth.',
    color: '#f59e0b',
  },
  {
    icon: <FaBook />,
    title: 'Continuous Learning',
    desc: 'Technology evolves rapidly. I dedicate time every day to learning — new frameworks, research papers, and emerging technologies.',
    color: '#ec4899',
  },
  {
    icon: <FaChartLine />,
    title: 'Growing Businesses',
    desc: 'I\'m passionate about helping businesses leverage technology to scale, automate operations, and reach new markets across Africa and beyond.',
    color: '#14b8a6',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }

export default function Passion() {
  return (
    <section id="passion" className="section-padding bg-[#0a1020]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Passion"
          title="What Drives"
          highlight="Me"
          subtitle="The values, interests, and ambitions that fuel my work every single day."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {passions.map(({ icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${color}18`, color }}
              >
                {icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-indigo-500/20 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5" />
            <p className="text-xl sm:text-2xl font-bold text-white relative z-10 leading-relaxed">
              "Technology is the most powerful equalizer of our time.{' '}
              <span className="gradient-text">Africa's future is digital</span> — and I'm building it."
            </p>
            <p className="text-slate-400 text-sm mt-4 relative z-10">— Modu Babagana, CTO @ Kanemsoft</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
