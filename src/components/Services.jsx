import { motion } from 'framer-motion'
import { FaGlobe, FaMobileAlt, FaCloud, FaSitemap, FaBrain, FaHandshake } from 'react-icons/fa'
import SectionHeader from './SectionHeader'

const services = [
  {
    icon: <FaGlobe />,
    title: 'Web Development',
    desc: 'Building fast, scalable, and beautiful web applications using React, Node.js, and modern cloud infrastructure.',
    color: '#6366f1',
    tags: ['React', 'Node.js', 'TypeScript'],
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps with React Native that deliver native-like performance on iOS and Android.',
    color: '#8b5cf6',
    tags: ['React Native', 'Expo', 'Firebase'],
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Solutions',
    desc: 'Designing and deploying resilient cloud architectures on AWS — from serverless to containerized microservices.',
    color: '#ff9900',
    tags: ['AWS', 'Docker', 'CI/CD'],
  },
  {
    icon: <FaSitemap />,
    title: 'Software Architecture',
    desc: 'Crafting robust system designs, API strategies, and scalable architectures that grow with your business.',
    color: '#10b981',
    tags: ['System Design', 'REST APIs', 'Microservices'],
  },
  {
    icon: <FaBrain />,
    title: 'AI Integration',
    desc: 'Integrating AI and machine learning capabilities into products — from NLP chatbots to predictive analytics.',
    color: '#f59e0b',
    tags: ['OpenAI', 'ML Models', 'Automation'],
  },
  {
    icon: <FaHandshake />,
    title: 'Technical Consulting',
    desc: 'Strategic technology consulting to help startups and enterprises make the right tech decisions and scale faster.',
    color: '#ec4899',
    tags: ['Strategy', 'Code Review', 'Team Building'],
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#0a1020]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          tag="Services"
          title="What I"
          highlight="Offer"
          subtitle="End-to-end technology services tailored to help you build, scale, and innovate."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon, title, desc, color, tags }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${color}18`, color }}
              >
                {icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: `${color}15`, color }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
