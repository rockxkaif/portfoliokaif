import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/rockxkaif',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kaif-ansari-8644061aa',
      icon: FaLinkedin,
    },
    {
      name: 'Email',
      url: 'mailto:kaifakhtar10@gmail.com',
      icon: FaEnvelope,
    },
  ];

  return (
    <footer className="py-8 bg-transparent">
      <div className="container">
        <div className="glass-card flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-glassAccent transition-colors glass-glow"
                aria-label={link.name}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-300/80">
            © {new Date().getFullYear()} Kaif Ansari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 