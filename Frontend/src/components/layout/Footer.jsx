import React from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Heart } from 'lucide-react'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import { categories } from '../../data/mockTools'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { name: 'Explore Tools', href: '#explore' },
      { name: 'Categories', href: '#categories' },
      { name: 'Featured', href: '#featured' },
      { name: 'New Tools', href: '#new' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'API', href: '#api' },
      { name: 'Community', href: '#community' },
      { name: 'Support', href: '#support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Disclaimer', href: '#disclaimer' },
    ]
  }

  const socialLinks = [
    { name: 'Twitter', icon: User, href: '#twitter' },
    { name: 'GitHub', icon: GithubIcon, href: 'https://github.com/vineethnaik' },
    { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/eslavathvineethnaik/' },
    { name: 'Email', icon: Mail, href: 'mailto:hello@toolverse.ai' },
  ]

  return (
    <footer className="relative border-t border-white/10 bg-black/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative h-12 w-12 rounded-xl overflow-hidden shadow-lg shadow-violet-500/20">
                  <img 
                    src="/tc.png" 
                    alt="ToolVerse Logo" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">ToolVerse</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Discover best AI tools in one place. We curate and review the latest 
                artificial intelligence tools to help you find exactly what you need.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.name === 'GitHub' ? (
                      <GithubIcon size={16} className="text-current" />
                    ) : social.name === 'LinkedIn' ? (
                      <LinkedinIcon size={16} className="text-current" />
                    ) : (
                      <social.icon className="w-4 h-4" />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([section, links], sectionIndex) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-white capitalize">
                {section === 'product' ? 'Product' : section === 'company' ? 'Company' : section === 'resources' ? 'Resources' : 'Legal'}
              </h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Popular categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/10 pt-8 mb-8"
        >
          <h4 className="font-semibold text-white mb-4">Popular Categories</h4>
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 8).map((category, index) => (
              <a
                key={category.id}
                href={`#category-${category.id}`}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-sm"
              >
                {category.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© {currentYear} ToolVerse. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for AI community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
