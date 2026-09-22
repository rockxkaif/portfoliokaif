import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { experiences } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-transparent text-slate-50">
      <div className="neo-grid pointer-events-none fixed inset-0 -z-10" />
      <div className="ambient-blob ambient-blob-two pointer-events-none fixed -z-10" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-violet-400" />
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Experience</h1>
            </div>
            <span className="text-xs text-slate-400">Professional journey & achievements</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base max-w-3xl">
            A journey through my professional experience and achievements in software development.
          </p>
        </motion.div>

        <div className="space-y-4 border-l border-slate-800 pl-4 sm:pl-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-5 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-cyan-400 bg-slate-950 sm:-left-6">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </div>
              <Card className="border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">
                <CardContent className="p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{exp.company}</p>
                      <p className="text-sm font-medium text-slate-50">{exp.title}</p>
                    </div>
                    <div className="text-right text-xs text-slate-400">
                      <p>{exp.period}</p>
                      <p className="flex items-center justify-end gap-1">
                        <MapPin className="h-3 w-3" /> {exp.company.includes('Remote') ? 'Remote' : 'Bengaluru, India'}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-300 sm:text-[13px]">
                    {exp.responsibilities.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-cyan-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.techStack && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/[0.035] px-2 py-1 text-[10px] text-slate-300 ring-1 ring-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
