import { motion } from 'framer-motion';
import { profile } from '../data/content';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-glassTextLight mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
            Get to know more about my journey and passion for technology
          </p>
        </motion.div>

        <div className="group relative card-tilt">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-glassTextLight">
                  {profile.name}
                </h3>
                <p className="text-xl text-glassAccent font-semibold">
                  {profile.title}
                </p>
                <p className="text-slate-300/80 leading-relaxed text-lg">
                  {profile.bio}
                </p>
                <p className="text-slate-300/70 leading-relaxed">
                  I'm passionate about creating innovative solutions that combine cutting-edge technology 
                  with user-centered design. With expertise in full-stack development and AI integration, 
                  I build applications that are not only functional but also intuitive and scalable.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { label: 'Projects Completed', value: '20+' },
                  { label: 'Years Experience', value: '3+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Happy Clients', value: '10+' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="text-3xl font-bold text-glassAccent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-300/80">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

