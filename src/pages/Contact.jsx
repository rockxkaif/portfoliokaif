import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { profile } from '../data/content';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      toast.info('Sending your message...', {
        position: 'top-center',
        autoClose: 2000,
      });
      try {
        const response = await fetch('https://formsubmit.co/ajax/kaifakhtar121@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
            _captcha: false,
            _next: window.location.origin + '/contact?submitted=true',
            _subject: `New Contact Form Submission from ${values.name}`,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send message');
        }

        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: 'top-center',
          autoClose: 3000,
        });

        formik.resetForm();
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message || 'Failed to send message. Please try again later.', {
          position: 'top-center',
          autoClose: 3000,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan-500/15 via-transparent to-transparent blur-3xl" />
      <ToastContainer />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400" />
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Contact</h1>
          </div>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base max-w-3xl">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-slate-800 bg-slate-900/70">
              <CardContent className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Email</div>
                      <a
                        href={profile.socialLinks.find((l) => l.name === 'Email')?.url || '#'}
                        className="text-sm text-slate-50 hover:text-cyan-300 transition-colors"
                      >
                        {profile.socialLinks.find((l) => l.name === 'Email')?.url.replace('mailto:', '')}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Location</div>
                      <div className="text-sm text-slate-50">Bengaluru, Karnataka, India</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-800 bg-slate-900/70">
              <CardContent className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-4">Connect with Me</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(profile.socialLinks.find((l) => l.name === 'LinkedIn')?.url || '#', '_blank');
                      }
                    }}
                    className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined') {
                        window.open(profile.socialLinks.find((l) => l.name === 'GitHub')?.url || '#', '_blank');
                      }
                    }}
                    className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-slate-800 bg-slate-900/70">
              <CardContent className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-slate-50 mb-4">Send a Message</h3>
                <form onSubmit={formik.handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-1">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-slate-700'
                      } bg-slate-900/60 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent`}
                      placeholder="Your Name"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <div className="mt-1 text-sm text-red-500">{formik.errors.name}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-slate-700'
                      } bg-slate-900/60 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent`}
                      placeholder="Your Email"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <div className="mt-1 text-sm text-red-500">{formik.errors.email}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-1">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      rows="4"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-slate-700'
                      } bg-slate-900/60 text-slate-100 focus:ring-2 focus:ring-cyan-500 focus:border-transparent`}
                      placeholder="Your Message"
                    />
                    {formik.touched.message && formik.errors.message && (
                      <div className="mt-1 text-sm text-red-500">{formik.errors.message}</div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
