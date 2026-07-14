import { motion } from 'framer-motion'
import {
  SiJavascript, SiReact, SiTailwindcss, SiNodedotjs,
  SiGit, SiGithub, SiFirebase,
} from 'react-icons/si'
import { FaCode, FaMobileAlt, FaLink, FaAws } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const skills = [
  { name: 'JavaScript', icon: <SiJavascript />, color: '#f7df1e', level: 92 },
  { name: 'React', icon: <SiReact />, color: '#61dafb', level: 90 },
  { name: 'React Native', icon: <FaMobileAlt />, color: '#61dafb', level: 85 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38bdf8', level: 95 },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#68a063', level: 82 },
  { name: 'AWS', icon: <FaAws />, color: '#ff9900', level: 78 },
  { name: 'Git', icon: <SiGit />, color: '#f05032', level: 90 },
  { name: 'GitHub', icon: <SiGithub />, color: '#e2e8f0', level: 92 },
  { name: 'REST APIs', icon: <FaCode />, color: '#6366f1', level: 88 },
  { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28', level: 80 },
  { name: 'Blockchain', icon: <FaLink />, color: '#8b5cf6', level: 70 },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#020817]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Skills"
          title="Technical"
          highlight="Expertise"
          subtitle="A curated set of technologies I use to build world-class digital products."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4"
        >
          {skills.map(({ name, icon, color, level }) => (
            <motion.div
              key={name}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 group cursor-default"
            >
              <div
                className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ color }}
              >
                {icon}
              </div>
              <p className="text-sm font-semibold text-white mb-3">{name}</p>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
                />
              </div>
              <p className="text-xs text-slate-500 mt-1.5 text-right">{level}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
