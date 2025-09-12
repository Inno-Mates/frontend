"use client";

import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-24 -right-20 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-accent-200 dark:bg-accent-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-16 md:flex md:items-start md:justify-between lg:px-8 relative z-10">
        <div className="flex flex-col items-center md:items-start md:order-1">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold text-gradient text-gradient-blue-purple">Civic Connect</h2>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md text-center md:text-left mb-6">
            Empowering citizens through technology and innovation. Connect with your community and local government services.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-16 md:order-2">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/routes/about" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">About</Link></li>
              <li><Link href="/routes/services" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/routes/contact" className="text-sm text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-5">
              <Link href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-5 w-5" aria-hidden="true" />
              </Link>
              <Link href="#" className="text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-800 mx-auto max-w-7xl px-6 py-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-center md:text-left text-xs text-neutral-500 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} Civic Connect. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <Link href="/privacy" className="text-xs text-neutral-500 hover:text-primary-600 dark:text-neutral-500 dark:hover:text-primary-400 transition-colors mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-500 hover:text-primary-600 dark:text-neutral-500 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}