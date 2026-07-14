import { motion } from 'framer-motion'
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import SectionHeader from './SectionHeader'

const contacts = [
  { icon: <FaUser />, label: 'Name', value: 'Modu Babagana', color: '#6366f1', href: null },
  { icon: <FaPhone />, label: 'Phone', value: '+2347044587079', color: '#10b981', href: 'tel:+2347044587079' },
  { icon: <FaEnvelope />, label: 'Email', value: 'ksofted@gmail.com', color: '#f59e0b', href: 'mailto:ksofted@gmail.com' },
  { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Nigeria 🇳🇬', color: '#ec4899', href: null },
]

const socials = [
  { icon: <FaGithub size={22} />, label: 'GitHub', href: 'https://github.com', color: '#e2e8f0' },
  { icon: <FaLinkedin size={22} />, label: 'LinkedIn', href: 'https://linkedin.com', color: '#0a66c2' },
  { icon: <FaXTwitter size={22} />, label: 'X (Twitter)', href: 'https://x.com', color: '#e2e8f0' },
  { icon: <FaWhatsapp size={22} />, label: 'WhatsApp', href: 'https://wa.me/2347044587079', color: '#25d366' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#020817]">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          tag="Contact"
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        {/* Contact Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4 mb-10"
        >
          {contacts.map(({ icon, label, value, color, href }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ scale: 1.02, y: -3 }}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${color}18`, color }}
                >
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-semibold hover:text-indigo-400 transition-colors duration-200">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold">{value}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-slate-400 text-sm mb-6 font-medium">Connect with me on social media</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {socials.map(({ icon, label, href, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/20"
                  style={{ color }}
                >
                  {icon}
                </div>
                <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass rounded-2xl p-8 border border-indigo-500/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-600/5" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to build something amazing?</h3>
            <p className="text-slate-400 text-sm mb-6">Let's collaborate and turn your ideas into reality.</p>
            <a
              href="mailto:ksofted@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              <FaEnvelope size={14} /> Send Me an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
