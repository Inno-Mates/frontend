"use client";

import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-50/90 backdrop-blur-sm border-t border-neutral-200/50 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
        <div className="absolute -top-24 -right-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Newsletter section */}
      <div className="border-b border-neutral-200/50">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 relative z-10">
          <div className="rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 p-6 md:p-10 backdrop-blur-sm shadow-lg border border-white/20">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-900">
                  Stay updated with civic initiatives
                </h2>
                <p className="mt-3 text-sm md:text-base text-neutral-600">
                  Subscribe to our newsletter for the latest updates on community events, services, and opportunities.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8 flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-auto rounded-md border border-neutral-300 bg-white/5 px-4 py-2.5 text-neutral-900 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 backdrop-blur-sm transition-all focus:bg-white"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-primary-600 hover:to-accent-600 hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-16 md:flex md:items-start md:justify-between lg:px-8 relative z-10">
        <div className="flex flex-col items-center md:items-start md:order-1 md:max-w-xs">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold text-gradient text-gradient-blue-purple drop-shadow-md">Civic Connect</h2>
          </div>
          <p className="text-sm text-neutral-600 text-center md:text-left mb-6">
            Empowering citizens through technology and innovation. Connect with your community and local government services.
          </p>
          <div className="flex items-center space-x-4 mb-6">
            <Link href="#" className="text-neutral-500 hover:text-primary-600 hover:scale-110 transition-all">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary-600 hover:scale-110 transition-all">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary-600 hover:scale-110 transition-all">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-neutral-500 hover:text-primary-600 hover:scale-110 transition-all">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:order-2 mt-10 md:mt-0 relative z-10">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link href="/routes/about" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">About</Link></li>
              <li><Link href="/routes/services" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Services</Link></li>
              <li><Link href="/routes/contact" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Contact</Link></li>
              <li><Link href="/routes/dashboard" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Report Issues</Link></li>
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Community Forums</Link></li>
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Public Resources</Link></li>
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-3 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Help Center</Link></li>
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Documentation</Link></li>
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">API</Link></li>
              <li><Link href="#" className="text-sm text-neutral-600 hover:text-primary-600 hover:translate-x-1 inline-block transition-all">Status</Link></li>
            </ul>
          </div>
          
          
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                <span className="text-sm text-neutral-600">123 Civic Center Dr.<br />Anytown, ST 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-4 w-4 text-neutral-500 mr-3" />
                <span className="text-sm text-neutral-600">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-4 w-4 text-neutral-500 mr-3" />
                <span className="text-sm text-neutral-600">info@civicconnect.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 mx-auto max-w-7xl px-6 py-6 md:flex md:items-center md:justify-between lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left text-xs text-neutral-500 backdrop-blur-sm py-1 px-2 rounded-md bg-white/30">
            &copy; {new Date().getFullYear()} Civic Connect. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-center md:text-right space-x-4">
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-primary-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-primary-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-neutral-500 hover:text-primary-600 transition-colors">
              Accessibility
            </Link>
            <Link href="/sitemap" className="text-xs text-neutral-500 hover:text-primary-600 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}