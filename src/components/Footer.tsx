import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: "Features", href: "/#features", type: "hash" },
      { label: "Ecosystem", href: "/#ecosystem", type: "hash" },
      { label: "Success Stories", href: "/#testimonials", type: "hash" },
    ],
    company: [
      { label: "About Us", href: "/about", type: "route" },
      { label: "Careers", href: "/careers", type: "route" },
    ],
    resources: [
      {
        label: "Intern Program",
        href: "https://forms.gle/LckgYhsF4vhVUPsK7",
        type: "external",
      },
      {
        label: "Verify Certificate",
        href: "/certificate/ENTR2024001",
        type: "route",
      },
    ],
    legal: [
      { label: "Terms & Conditions", href: "/terms.html", type: "external" },
    ],
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/entreship",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/entreship/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative py-20 section-padding border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="max-width">
        {/* Top section */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="EntreShip Logo"
                className="h-10 object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6">
              The complete ecosystem for builders, dreamers & achievers.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      {link.type === "route" ? (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white text-sm transition-colors"
                          {...(link.type === "external" && {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          })}
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Stay in the loop</h3>
              <p className="text-gray-400">
                Get the latest updates, opportunities, and insights delivered to
                your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-gradient-primary text-white font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass rounded-xl p-6">
            <MapPin className="w-5 h-5 text-accent-cyan mb-3" />
            <p className="font-semibold mb-1">Address</p>
            <p className="text-sm text-gray-400">Mansarovar, Jaipur</p>
          </div>
          <div className="glass rounded-xl p-6">
            <Phone className="w-5 h-5 text-accent-cyan mb-3" />
            <p className="font-semibold mb-1">Contact</p>
            <p className="text-sm text-gray-400">0141-316 8608</p>
          </div>
          <div className="glass rounded-xl p-6">
            <Mail className="w-5 h-5 text-accent-cyan mb-3" />
            <p className="font-semibold mb-1">Email</p>
            <p className="text-sm text-gray-400">entreshipindia@gmail.com</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EntreShip. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
