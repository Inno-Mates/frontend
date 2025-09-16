"use client";

import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-50 to-neutral-100/50 backdrop-blur-sm border-t border-neutral-200 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-20 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Newsletter section */}
      <div className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 relative z-10">
          <div className="rounded-2xl bg-gradient-to-r from-primary-50 to-accent-50 p-8 md:p-12 backdrop-blur-sm shadow-xl border border-neutral-200/50 card-hover">
            <div className="md:flex md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 mb-4">
                  Stay updated with civic initiatives
                </h2>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  Subscribe to our newsletter for the latest updates on community events, services, and opportunities.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8 flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="min-w-0 flex-auto rounded-lg border-2 border-neutral-300 bg-white px-6 py-3 text-neutral-900 shadow-sm focus:border-primary-500 focus:ring-4 focus:ring-primary-100 form-input text-base"
                />
                <button
                  type="submit"
                  className="flex-none rounded-lg bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl hover:from-primary-600 hover:to-accent-600 btn-hover-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 py-20 md:flex md:items-start md:justify-between lg:px-8 relative z-10">
        <div className="flex flex-col items-center md:items-start md:order-1 md:max-w-sm">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold text-gradient text-gradient-blue-purple drop-shadow-md">Civic Connect</h2>
          </div>
          <p className="text-base text-neutral-700 text-center md:text-left mb-8 leading-relaxed">
            Empowering citizens through technology and innovation. Connect with your community and local government services.
          </p>
          <div className="flex items-center space-x-6 mb-8">
            <Link href="#" className="text-neutral-600 hover:text-primary-600 hover:scale-125 transition-all duration-300 p-2 rounded-full hover:bg-primary-50">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-primary-600 hover:scale-125 transition-all duration-300 p-2 rounded-full hover:bg-primary-50">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-primary-600 hover:scale-125 transition-all duration-300 p-2 rounded-full hover:bg-primary-50">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-neutral-600 hover:text-primary-600 hover:scale-125 transition-all duration-300 p-2 rounded-full hover:bg-primary-50">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:order-2 mt-12 md:mt-0 relative z-10">
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Home</Link></li>
              <li><Link href="/about" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">About</Link></li>
              <li><Link href="/services" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Services</Link></li>
              <li><Link href="/contact" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Contact</Link></li>
              <li><Link href="/dashboard" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Dashboard</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-6 uppercase tracking-wider">Services</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Report Issues</Link></li>
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Community Forums</Link></li>
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Public Resources</Link></li>
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-6 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Help Center</Link></li>
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Documentation</Link></li>
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">API</Link></li>
              <li><Link href="#" className="text-base text-neutral-700 hover:text-primary-600 hover:translate-x-2 inline-block transition-all duration-300 font-medium">Status</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-bold text-neutral-900 mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-5 w-5 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                <span className="text-base text-neutral-700 leading-relaxed">123 Civic Center Dr.<br />Anytown, ST 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="h-5 w-5 text-primary-600 mr-4 flex-shrink-0" />
                <span className="text-base text-neutral-700">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="h-5 w-5 text-primary-600 mr-4 flex-shrink-0" />
                <span className="text-base text-neutral-700">info@civicconnect.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 mx-auto max-w-7xl px-6 py-8 md:flex md:items-center md:justify-between lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-center md:text-left text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Civic Connect. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/privacy" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-300 font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-300 font-medium">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-300 font-medium">
              Accessibility
            </Link>
            <Link href="/sitemap" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors duration-300 font-medium">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}