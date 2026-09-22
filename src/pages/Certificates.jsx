import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { certificates } from '../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Certificates() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent blur-3xl" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Certificates</h1>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base max-w-3xl">
            Professional certifications and achievements that validate my skills and expertise.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <Card className="flex h-full flex-col border-slate-800 bg-slate-900/70">
                <CardContent className="flex h-full flex-col p-4 sm:p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <svg className="h-5 w-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                        aria-label={`View ${cert.title} certificate`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-50 mb-2">{cert.title}</h3>
                  <p className="text-xs text-cyan-300 mb-2">
                    {cert.issuer} · {cert.date}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed flex-1">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
