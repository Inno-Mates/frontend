import Image from "next/image";
import Link from "next/link";
import { FaLightbulb, FaHandshake, FaCity, FaClipboardCheck, FaUsers, FaChartBar } from "react-icons/fa";
import MainLayout from "../components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-neutral-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(101,70,235,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(0,200,255,0.3),transparent_50%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-300">Transforming Civic Engagement</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6">
              <span className="text-gradient text-gradient-blue-purple">Civic Connect</span> for
              <span className="block">Smarter Communities</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl">
              Our AI-powered platform bridges citizens and government, enabling seamless issue reporting, transparent tracking, and collaborative problem-solving.  
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-medium shadow-glow-primary bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 transition-all">
                Get Started
              </Button>
              <Link href="/routes/services" className="w-full sm:w-auto px-8 py-6 text-base font-medium text-white border border-neutral-800 rounded-md hover:bg-neutral-800/50 transition-colors flex items-center justify-center gap-2">
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
          </div>
          
          {/* Feature highlights */}
          <div className="relative mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-primary-500/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-primary-900/50 flex items-center justify-center mb-4 group-hover:bg-primary-800/50 transition-colors">
                <FaCity className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart City Integration</h3>
              <p className="text-neutral-400">Connect with city services and infrastructure for real-time updates and reporting.</p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-accent-500/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-accent-900/50 flex items-center justify-center mb-4 group-hover:bg-accent-800/50 transition-colors">
                <FaClipboardCheck className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Issue Tracking</h3>
              <p className="text-neutral-400">Monitor the status of reported issues with transparent updates throughout resolution.</p>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-secondary-500/50 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-secondary-900/50 flex items-center justify-center mb-4 group-hover:bg-secondary-800/50 transition-colors">
                <FaUsers className="w-6 h-6 text-secondary-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Collaboration</h3>
              <p className="text-neutral-400">Work together with neighbors and officials to solve community challenges.</p>
            </div>
          </div>
          
          {/* Mockup display */}
          <div className="relative mt-20 flex justify-center">
            <div className="relative w-full max-w-5xl">
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-accent-500/20 rounded-full mix-blend-screen filter blur-3xl"></div>
              
              <div className="relative flex justify-center items-center">
                <div className="w-full rounded-xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/50">
                  <img src="/images/web-mockup.svg" alt="Web Application" className="w-full" />
                </div>
                <div className="absolute -right-5 bottom-10 w-48 md:w-64 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/50 transform rotate-6">
                  <img src="/images/mobile-mockup.svg" alt="Mobile Application" className="w-full" />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute top-10 -left-4 md:top-20 md:-left-10 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-lg px-4 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-xs font-medium text-white">99.9% Uptime</span>
                </div>
              </div>
              
              <div className="absolute bottom-10 -right-4 md:bottom-20 md:-right-10 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 rounded-lg px-4 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
                  <span className="text-xs font-medium text-white">AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900/50">
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-neutral-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-neutral-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]">
          </div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-500 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8 mx-auto">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-300">POWERFUL FEATURES</span>
            </div>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transforming Civic <span className="text-gradient text-gradient-blue-purple">Engagement</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              Our platform connects citizens and government through innovative technology, creating more responsive and transparent civic systems.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-primary-500/50 transition-all group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
              <div className="w-14 h-14 rounded-xl bg-primary-900/50 flex items-center justify-center mb-6 group-hover:bg-primary-800/50 transition-colors relative">
                <FaClipboardCheck className="w-7 h-7 text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Issue Reporting</h3>
              <p className="text-neutral-400 mb-6">
                Easily report civic issues with our intuitive mobile and web interfaces. AI-powered categorization ensures reports reach the right department quickly.
              </p>
              <Link
                href="/routes/services"
                className="inline-flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-accent-500/50 transition-all group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-700"></div>
              <div className="w-14 h-14 rounded-xl bg-accent-900/50 flex items-center justify-center mb-6 group-hover:bg-accent-800/50 transition-colors relative">
                <FaUsers className="w-7 h-7 text-accent-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Collaborative Governance</h3>
              <p className="text-neutral-400 mb-6">
                Foster community collaboration through transparent issue tracking, public forums, and direct communication channels with local officials.
              </p>
              <Link
                href="/routes/services"
                className="inline-flex items-center text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors"
              >
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
            
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-secondary-500/50 transition-all group relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-all duration-700"></div>
              <div className="w-14 h-14 rounded-xl bg-secondary-900/50 flex items-center justify-center mb-6 group-hover:bg-secondary-800/50 transition-colors relative">
                <FaChartBar className="w-7 h-7 text-secondary-400" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data-Driven Solutions</h3>
              <p className="text-neutral-400 mb-6">
                Leverage powerful analytics to identify patterns, prioritize resources, and measure the impact of civic initiatives for continuous improvement.
              </p>
              <Link
                href="/routes/services"
                className="inline-flex items-center text-sm font-medium text-secondary-400 hover:text-secondary-300 transition-colors"
              >
                Learn more <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>
          </div>

          {/* Cross-platform experience */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-neutral-950 px-4 text-sm text-neutral-500 uppercase tracking-wider">Cross-platform experience</span>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-accent-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
              
              <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/50">
                <img src="/images/mobile-mockup.svg" alt="Mobile App Mockup" className="w-full" />
              </div>
            </div>
            
            <div className="flex flex-col space-y-8">
              <h3 className="text-3xl font-bold text-white">
                Seamless Experience <span className="text-gradient text-gradient-blue-purple">Across Devices</span>
              </h3>
              <p className="text-lg text-neutral-400">
                Whether you're on the go with our mobile app or at your desk with our web interface, enjoy a consistent and intuitive experience designed for maximum usability and accessibility.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-4 hover:border-primary-500/50 transition-all">
                  <div className="flex items-center mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-900/50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="ml-3 text-base font-medium text-white">Responsive Design</h4>
                  </div>
                  <p className="text-sm text-neutral-400 pl-11">Optimized for all screen sizes and devices</p>
                </div>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-4 hover:border-primary-500/50 transition-all">
                  <div className="flex items-center mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-900/50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="ml-3 text-base font-medium text-white">Offline Capabilities</h4>
                  </div>
                  <p className="text-sm text-neutral-400 pl-11">Continue working even without internet connection</p>
                </div>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-lg p-4 hover:border-primary-500/50 transition-all">
                  <div className="flex items-center mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-900/50">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="ml-3 text-base font-medium text-white">Real-time Updates</h4>
                  </div>
                  <p className="text-sm text-neutral-400 pl-11">Instant notifications and status changes</p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="border-primary-500 text-primary-400 hover:bg-primary-900/30 transition-all">
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials and Statistics Section */}
      <section className="py-24 sm:py-32 bg-neutral-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-950 to-neutral-900"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]">
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8 mx-auto">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-300">SUCCESS STORIES</span>
            </div>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted by <span className="text-gradient text-gradient-purple-pink">Communities</span> Nationwide
            </h2>
            <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              See how our platform is transforming civic engagement and creating more responsive, transparent governance across diverse communities.
            </p>
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="col-span-1 md:col-span-3 lg:col-span-1 flex justify-center items-center mb-12 lg:mb-0">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-accent-500/10 rounded-full mix-blend-screen filter blur-3xl"></div>
                <img src="/images/testimonials-illustration.svg" alt="Testimonials" className="relative z-10 w-full max-w-xs mx-auto" />
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-800/30 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 hover:border-accent-500/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-700"></div>
                <svg className="h-10 w-10 text-accent-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg text-neutral-300 mt-6 mb-8">
                  "The Civic Connect platform has revolutionized how our city handles citizen reports. Response times have decreased by 45%, and citizen satisfaction has increased dramatically."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-700 flex items-center justify-center text-white font-bold text-lg">SJ</div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-white">Sarah Johnson</p>
                    <p className="text-sm text-neutral-400">City Manager, Metropolis</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800/30 backdrop-blur-sm border border-neutral-700 rounded-xl p-8 hover:border-primary-500/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
                <svg className="h-10 w-10 text-primary-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg text-neutral-300 mt-6 mb-8">
                  "As a citizen, I love how easy it is to report issues and track their progress. The transparency and communication have built real trust between residents and local government."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold text-lg">MC</div>
                  <div className="ml-4">
                    <p className="text-base font-medium text-white">Michael Chen</p>
                    <p className="text-sm text-neutral-400">Community Advocate, Riverside</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-neutral-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-neutral-900 px-4 text-sm text-neutral-500 uppercase tracking-wider">Impact metrics</span>
            </div>
          </div>
          
          <div className="mt-16">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-12 text-center md:grid-cols-4">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 group">
                <dt className="text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">Communities using our platform</dt>
                <dd className="order-first text-5xl font-bold text-white">
                  <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">120+</span>
                </dd>
              </div>
              
              <div className="mx-auto flex max-w-xs flex-col gap-y-4 group">
                <dt className="text-base text-neutral-400 group-hover:text-neutral-300 transition-colors">Average response time reduction</dt>
                <dd className="order-first text-5xl font-bold text-white">
                  <span className="bg-gradient-to-r from-accent-400 to-accent-600 bg-clip-text text-transparent">45%</span>
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-neutral-600 dark:text-neutral-400">Issues resolved monthly</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                  <span className="bg-gradient-to-r from-secondary-600 to-secondary-800 bg-clip-text text-transparent">15K+</span>
                </dd>
              </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-neutral-600 dark:text-neutral-400">Citizen satisfaction rate</dt>
                <dd className="order-first text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">92%</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      
      {/* AI Features Section */}
      <section className="py-24 sm:py-32 bg-neutral-950 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]">
          </div>
          <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-secondary-500 rounded-full opacity-5 blur-3xl"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8 mx-auto">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-300">AI-POWERED PLATFORM</span>
            </div>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Advanced <span className="text-gradient text-gradient-green-blue">Technology</span> for Civic Innovation
            </h2>
            <p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
              Our platform leverages cutting-edge AI technologies to transform how citizens and governments interact, making civic engagement more efficient and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-secondary-500/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl group-hover:bg-secondary-500/20 transition-all duration-700"></div>
                <div className="flex items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-900/50 text-secondary-400 group-hover:bg-secondary-800/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
                    <p className="text-neutral-400">
                      Our AI understands citizen reports in natural language, automatically categorizing issues and routing them to the appropriate departments without manual intervention.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-primary-500/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-700"></div>
                <div className="flex items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-900/50 text-primary-400 group-hover:bg-primary-800/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
                    <p className="text-neutral-400">
                      Identify patterns and predict future civic issues before they escalate, allowing for proactive resource allocation and preventative maintenance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-accent-500/50 transition-all group relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-700"></div>
                <div className="flex items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-900/50 text-accent-400 group-hover:bg-accent-800/50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
                    <p className="text-neutral-400">
                      Analyze images from citizen reports to automatically assess severity, identify infrastructure issues, and detect patterns across visual data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Glowing orbs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-500 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
                
                {/* Device mockup */}
                <div className="relative z-10 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-4 shadow-glow">
                  {/* Device frame */}
                  <div className="relative rounded-xl overflow-hidden border border-neutral-700 shadow-lg">
                    {/* Status bar */}
                    <div className="bg-neutral-800 px-4 py-2 flex justify-between items-center">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-neutral-400">AI Analysis Dashboard</div>
                      <div></div>
                    </div>
                    
                    {/* Content */}
                    <div className="bg-neutral-900 p-4">
                      {/* Header */}
                      <div className="mb-4">
                        <h4 className="text-white text-sm font-medium">Issue Analysis</h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-xs text-neutral-400">Processing civic reports</span>
                          <span className="text-xs text-secondary-400">Live</span>
                        </div>
                      </div>
                      
                      {/* Data visualization */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-neutral-800 rounded-lg p-3">
                          <div className="text-xs text-neutral-400 mb-1">Categories</div>
                          <div className="h-24 flex items-end space-x-1">
                            <div className="w-1/5 bg-primary-500 rounded-t-sm" style={{height: '60%'}}></div>
                            <div className="w-1/5 bg-secondary-500 rounded-t-sm" style={{height: '85%'}}></div>
                            <div className="w-1/5 bg-accent-500 rounded-t-sm" style={{height: '40%'}}></div>
                            <div className="w-1/5 bg-primary-400 rounded-t-sm" style={{height: '70%'}}></div>
                            <div className="w-1/5 bg-secondary-400 rounded-t-sm" style={{height: '50%'}}></div>
                          </div>
                        </div>
                        <div className="bg-neutral-800 rounded-lg p-3">
                          <div className="text-xs text-neutral-400 mb-1">Response Time</div>
                          <div className="h-24 relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-2xl font-bold text-white">45<span className="text-sm text-neutral-400">%</span></div>
                            </div>
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#27272a" strokeWidth="8" />
                              <circle cx="50" cy="50" r="40" fill="none" stroke="#8b5cf6" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="138.16" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Recent issues */}
                      <div className="bg-neutral-800 rounded-lg p-3">
                        <div className="text-xs text-neutral-400 mb-2">Recent Issues</div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                              <span className="text-xs text-neutral-300">Pothole on Main St</span>
                            </div>
                            <span className="text-xs text-neutral-500">2m ago</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                              <span className="text-xs text-neutral-300">Streetlight outage</span>
                            </div>
                            <span className="text-xs text-neutral-500">15m ago</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                              <span className="text-xs text-neutral-300">Water main break</span>
                            </div>
                            <span className="text-xs text-neutral-500">32m ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-to-br from-secondary-500 to-secondary-700 hover:from-secondary-600 hover:to-secondary-800 text-white font-medium px-8 py-6 text-lg rounded-xl shadow-glow-secondary hover:shadow-glow-secondary-lg transition-all duration-300"
            >
              Explore AI Features
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl px-8 py-20 sm:px-16 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Ready to transform <span className="text-gradient text-gradient-primary-accent">civic engagement</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-neutral-300">
                Our solution bridges the gap between citizens and government, creating more responsive, transparent, and effective civic systems for everyone.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-900 font-medium px-8 py-6 text-lg rounded-xl shadow-glow-white hover:shadow-glow-white-lg transition-all duration-300"
                >
                  Request Demo
                </Button>
                <Link 
                  href="/routes/contact" 
                  className="group flex items-center text-lg font-medium text-white hover:text-primary-400 transition-colors"
                >
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
