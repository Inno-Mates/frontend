"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FaSearch, FaBell, FaUser } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  // { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Dashboard', href: '/dashboard' },
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
    <header className={`sticky top-0 z-40 w-full transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-neutral-200' : 'bg-transparent'}`}>
     
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6 lg:px-8 backdrop-filter" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="sr-only">Civic Connect</span>
            <h1 className="text-2xl font-bold text-gradient text-gradient-blue-purple drop-shadow-md group-hover:scale-105 transition-transform duration-300">Civic Connect</h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-300 focus-ring"
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
              className="relative text-base font-semibold leading-6 text-neutral-800 hover:text-primary-600 transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 after:bg-gradient-to-r after:from-primary-500 after:to-accent-500 after:transition-transform hover:after:scale-x-100 py-3 px-2 group"
            >
              {item.name}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-6 ml-4">
          <Link href="/services" className="text-base flex justify-center items-center font-semibold leading-6 text-white bg-gradient-to-r from-primary-500 to-accent-500 px-8 py-3 rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl btn-hover-lift focus-ring group">
            Get Started 
            <ArrowRight className='h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="lg:hidden fixed inset-0 z-50"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/95 backdrop-blur-xl px-6 py-8 sm:max-w-sm shadow-2xl border-l border-neutral-200/50">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center gap-2 group">
                <span className="sr-only">Civic Connect</span>
                <h2 className="text-xl font-bold text-gradient text-gradient-blue-purple group-hover:scale-105 transition-transform duration-300">Civic Connect</h2>
              </Link>
              <button
                type="button"
                className="rounded-lg p-3 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 transition-all duration-300 focus-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flow-root">
              <div className="-my-6 divide-y divide-neutral-200/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-xl px-6 py-4 text-base font-semibold leading-7 text-neutral-800 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 hover:text-primary-600 transition-all duration-300 group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="py-8 space-y-6">
                  <div className="flex items-center gap-4 px-2">
                    <button 
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setSearchOpen(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-3 rounded-xl py-4 text-base font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 btn-hover-lift"
                    >
                      <FaSearch className="h-5 w-5" />
                      Search
                    </button>
                    <Link
                      href="/profile"
                      className="flex-1 flex items-center justify-center gap-3 rounded-xl py-4 text-base font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 btn-hover-lift"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <FaUser className="h-5 w-5" />
                      Profile
                    </Link>
                  </div>
                  <Link
                    href="/services"
                    className="block rounded-xl px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl btn-hover-lift text-center"
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