import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'kaifakhtar121@gmail.com',
    href: 'mailto:kaifakhtar121@gmail.com',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Bengaluru, Karnataka, India',
    href: null,
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 1234567890',
    href: 'tel:+911234567890',
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-profile',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/your-username',
  },
];

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

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
      try {
        const response = await fetch('https://formsubmit.co/ajax/kaifakhtar121@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
            _captcha: false,
            _next: window.location.origin + '/contact?submitted=true',
            _subject: `New Contact Form Submission from ${values.name}`
          })
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to send message');
        }

        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-center",
          autoClose: 3000,
        });

        formik.resetForm();
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.message || "Failed to send message. Please try again later.", {
          position: "top-center",
          autoClose: 3000,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 glass-hero motion-fade-up">
      <div className="glass-hero-inner">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-glassTextLight mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="group relative card-tilt">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card">
              <h2 className="text-2xl font-bold text-glassTextLight mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                  >
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <info.icon className="w-6 h-6 text-glassAccent" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-slate-400">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-glassTextLight hover:text-glassAccent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-glassTextLight">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative card-tilt">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card">
              <h2 className="text-2xl font-bold text-glassTextLight mb-6">Connect with Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-white/5 border border-white/10 text-glassAccent hover:bg-white/10 transition-colors glass-glow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative card-tilt"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-glassAccent to-glassLavender rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-card">
            <h2 className="text-2xl font-bold text-glassTextLight mb-6">Send a Message</h2>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    formik.touched.name && formik.errors.name
                      ? 'border-red-500'
                      : 'border-white/10'
                  } bg-slate-900/60 text-slate-100 focus:ring-2 focus:ring-glassAccent focus:border-transparent`}
                  placeholder="Your Name"
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.name}</div>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    formik.touched.email && formik.errors.email
                      ? 'border-red-500'
                      : 'border-white/10'
                  } bg-slate-900/60 text-slate-100 focus:ring-2 focus:ring-glassAccent focus:border-transparent`}
                  placeholder="Your Email"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.email}</div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  rows="4"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    formik.touched.message && formik.errors.message
                      ? 'border-red-500'
                      : 'border-white/10'
                  } bg-slate-900/60 text-slate-100 focus:ring-2 focus:ring-glassAccent focus:border-transparent`}
                  placeholder="Your Message"
                ></textarea>
                {formik.touched.message && formik.errors.message && (
                  <div className="mt-1 text-sm text-red-500">{formik.errors.message}</div>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-glass-primary btn-press disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
}