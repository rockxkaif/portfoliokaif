import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

const skills = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend & DevOps',
    items: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth', 'Jenkins', 'GitHub Actions', 'Docker'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git & GitHub', 'Agile/Scrum', 'CI/CD', 'Unit Testing', 'Clean Code', 'Performance Optimization'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
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
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Skills</h1>
            </div>
            <span className="text-xs text-slate-400">Crafted for full-stack, frontend & backend roles</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base max-w-3xl">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies and tools.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">
                <CardContent className="p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">{group.category}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-violet-400" />
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Additional Skills</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Languages',
                items: ['C++', 'Python', 'Java', 'SQL'],
              },
              {
                title: 'Frameworks',
                items: ['Next.js', 'Tailwind CSS', 'Material UI', 'Bootstrap'],
              },
              {
                title: 'Tools',
                items: ['VS Code', 'Postman', 'Jira', 'Figma'],
              },
              {
                title: 'Testing',
                items: ['Jest', 'React Testing Library', 'Cypress', 'Postman'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">
                  <CardContent className="p-4 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200 mb-3">{category.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
