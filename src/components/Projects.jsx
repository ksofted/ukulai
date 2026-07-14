import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const projects = [
  {
    title: 'Smart City Alert System',
    desc: 'A real-time emergency alert and city management platform that connects citizens, government agencies, and first responders for faster incident response.',
    tech: ['React', 'Node.js', 'AWS', 'Firebase', 'Maps API'],
    color: '#6366f1',
    emoji: '🏙️',
    demo: '#',
    github: '#',
  },
  {
    title: 'Kanem Agro Express',
    desc: 'An agri-tech marketplace connecting farmers directly to buyers, reducing food waste and improving income for rural farmers across the Lake Chad region.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    color: '#10b981',
    emoji: '🌾',
    demo: '#',
    github: '#',
  },
  {
    title: 'VTU Platform',
    desc: 'A high-performance Virtual Top-Up platform for airtime, data, electricity bills, and cable TV subscriptions with real-time transaction processing.',
    tech: ['React', 'Node.js', 'REST APIs', 'Paystack'],
    color: '#f59e0b',
    emoji: '📱',
    demo: '#',
    github: '#',
  },
  {
    title: 'K-RIDE',
    desc: 'A ride-hailing application built for Nigerian cities, featuring real-time driver tracking, fare estimation, and seamless in-app payments.',
    tech: ['React Native', 'Google Maps', 'Firebase', 'Node.js'],
    color: '#8b5cf6',
    emoji: '🚗',
    demo: '#',
    github: '#',
  },
  {
    title: 'AI Solutions Platform',
    desc: 'An AI-powered SaaS platform offering businesses intelligent automation tools — from document analysis to customer support chatbots.',
    tech: ['React', 'Python', 'OpenAI', 'AWS Lambda', 'FastAPI'],
    color: '#ec4899',
    emoji: '🤖',
    demo: '#',
    github: '#',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#020817]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Projects"
          title="Featured"
          highlight="Work"
          subtitle="A selection of projects that showcase my engineering capabilities and passion for impact."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map(({ title, desc, tech, color, emoji, demo, github }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 group flex flex-col"
            >
              {/* Project Image / Banner */}
              <div
                className="h-44 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${color}22, ${color}08)` }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                />
                <span className="text-7xl relative z-10 group-hover:scale-110 transition-transform duration-300">{emoji}</span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{desc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-xs font-medium"
                      style={{ background: `${color}15`, color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <a
                    href={demo}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
                  >
                    <FaExternalLinkAlt size={10} /> Live Demo
                  </a>
                  <a
                    href={github}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 transition-all duration-200"
                  >
                    <FaGithub size={12} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
