"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/routes/about' },
  { name: 'Services', href: '/routes/services' },
  { name: 'Contact', href: '/routes/contact' },
  { name: 'Dashboard', href: '/routes/dashboard' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' : 'bg-transparent'}`}>
     
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 lg:px-8 backdrop-filter" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="sr-only">Civic Connect</span>
            <h1 className="text-2xl font-bold text-gradient text-gradient-blue-purple drop-shadow-md">Civic Connect</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium leading-6 text-neutral-800 hover:text-primary-600 transition-colors after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-primary-500 after:transition-transform hover:after:scale-x-100 py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          <button 
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <FaSearch className="h-4 w-4" />
          </button>
          <Link 
            href="/profile" 
            className="p-2 text-neutral-600 hover:text-primary-600 transition-colors"
          >
            <FaUser className="h-4 w-4" />
          </Link>
          <Link href="/routes/services" className="text-sm font-medium leading-6 text-white bg-gradient-to-r from-primary-500 to-accent-500 px-5 py-2 rounded-md hover:from-primary-600 hover:to-accent-600 transition-all shadow-md hover:shadow-lg hover:scale-105">
            Get Started <span aria-hidden="true" className="ml-1">&rarr;</span>
          </Link>
        </div>
      </nav>
      {/* Search overlay */}
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24"
          onClick={() => setSearchOpen(false)}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-xl w-full max-w-2xl rounded-lg shadow-xl overflow-hidden border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-neutral-200/50 p-4">
              <FaSearch className="h-5 w-5 text-neutral-500 mr-3" />
              <input 
                type="text" 
                placeholder="Search for services, resources, or information..." 
                className="flex-1 bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-700"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-neutral-500">Popular searches: Services, Reports, Community</p>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden fixed inset-0 z-50"
        >
          <div className="fixed inset-0 bg-black/25" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-200/50 shadow-xl border-l border-white/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <span className="sr-only">Civic Connect</span>
                <h2 className="text-xl font-bold text-gradient text-gradient-blue-purple">Civic Connect</h2>
              </Link>
              <button
                type="button"
                className="rounded-md p-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-neutral-200/50">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium leading-7 text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-3 px-4">
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSearchOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg py-3 text-base font-medium leading-7 text-neutral-700 bg-neutral-100/80 hover:bg-neutral-200/80 backdrop-blur-sm transition-all"
                    >
                      <FaSearch className="h-4 w-4" />
                      Search
                    </button>
                    <Link
                      href="/profile"
                      className="flex-1 flex items-center justify-center gap-2 rounded-lg py-3 text-base font-medium leading-7 text-neutral-700 bg-neutral-100/80 hover:bg-neutral-200/80 backdrop-blur-sm transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FaUser className="h-4 w-4" />
                      Profile
                    </Link>
                  </div>
                  <Link
                    href="/routes/services"
                    className="block rounded-lg px-4 py-3 text-base font-medium leading-7 text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 transition-all shadow-md hover:shadow-lg hover:scale-105 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}