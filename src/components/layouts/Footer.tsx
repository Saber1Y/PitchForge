import React from "react";
import Link from "next/link";
import { BiRocket, BiHeart } from "react-icons/bi";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { HiMail, HiLocationMarker, HiPhone } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Browse Pitches", href: "/browse" },
      { name: "Submit Pitch", href: "/submit" },
      { name: "Leaderboard", href: "/leaderboard" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Competitions", href: "/competitions" },
    ],
    resources: [
      { name: "Pitch Guide", href: "/resources/pitch-guide" },
      { name: "Investor Tips", href: "/resources/investor-tips" },
      { name: "Startup Tools", href: "/resources/tools" },
      { name: "Templates", href: "/resources/templates" },
      { name: "Blog", href: "/blog" },
    ],
    community: [
      { name: "Discord", href: "https://discord.gg/pitchforge" },
      { name: "Events", href: "/events" },
      { name: "Mentorship", href: "/mentorship" },
      { name: "Newsletter", href: "/newsletter" },
      { name: "Partners", href: "/partners" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press Kit", href: "/press" },
      { name: "Contact", href: "/contact" },
      { name: "Help Center", href: "/help" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/pitchforge",
      icon: FaTwitter,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/pitchforge",
      icon: FaLinkedin,
    },
    { name: "GitHub", href: "https://github.com/pitchforge", icon: FaGithub },
    { name: "Discord", href: "https://discord.gg/pitchforge", icon: FaDiscord },
    {
      name: "YouTube",
      href: "https://youtube.com/pitchforge",
      icon: FaYoutube,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-pitchforge-bg via-pitchforge-bg to-pitchforge-gold/5 border-t border-pitchforge-gold/10">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-pitchforge-gold/10 via-pitchforge-mint/10 to-pitchforge-gold/10 rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-pitchforge-text mb-4">
              Stay in the Loop
            </h3>
            <p className="text-pitchforge-text/70 mb-8">
              Get weekly insights on startup trends, pitch competitions, and
              success stories from the PitchForge community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/90 backdrop-blur-sm border-2 border-pitchforge-gold/20 rounded-xl text-pitchforge-text placeholder-pitchforge-text/50 focus:outline-none focus:border-pitchforge-gold focus:ring-2 focus:ring-pitchforge-gold/20 transition-all"
              />
              <button className="px-6 py-3 bg-pitchforge-gold hover:bg-pitchforge-gold/80 text-pitchforge-bg font-semibold rounded-xl transition-all transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-lg xs:text-xl sm:text-2xl font-bold text-pitchforge-text">
                Pitch
              </span>
              <span className="text-lg xs:text-xl sm:text-2xl font-bold text-pitchforge-gold">
                Forge
              </span>
            </div>

            <p className="text-pitchforge-text/70 mb-6 leading-relaxed">
              The premier platform where entrepreneurs pitch ideas, compete in
              virtual competitions, and connect with investors and mentors
              worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-pitchforge-text/60">
                <HiMail className="w-4 h-4 text-pitchforge-gold" />
                <span>hello@pitchforge.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-pitchforge-text/60">
                <HiPhone className="w-4 h-4 text-pitchforge-gold" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-pitchforge-text/60">
                <HiLocationMarker className="w-4 h-4 text-pitchforge-gold" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pitchforge-gold/10 hover:bg-pitchforge-gold/20 rounded-xl flex items-center justify-center transition-all transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-pitchforge-gold" />
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-pitchforge-text uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-pitchforge-text/60 hover:text-pitchforge-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-sm font-semibold text-pitchforge-text uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-pitchforge-text/60 hover:text-pitchforge-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-sm font-semibold text-pitchforge-text uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-pitchforge-text/60 hover:text-pitchforge-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-pitchforge-text uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-pitchforge-text/60 hover:text-pitchforge-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-pitchforge-gold/10 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-pitchforge-text/60">
              <span>© {currentYear} PitchForge. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <BiHeart className="w-4 h-4 text-red-500" />
                <span>in San Francisco</span>
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {footerLinks.legal.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-pitchforge-text/60 hover:text-pitchforge-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="text-pitchforge-text/30">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-pitchforge-gold/5">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-pitchforge-text/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              <span className="hidden sm:block">•</span>
              <span>SOC 2 Type II Certified</span>
              <span className="hidden sm:block">•</span>
              <span>GDPR Compliant</span>
              <span className="hidden sm:block">•</span>
              <span>ISO 27001 Security</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
