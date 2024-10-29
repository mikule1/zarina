import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { MobileMenu } from '../components/MobileMenu'
import { ThemeToggle } from '../components/ThemeToggle'
import Portfolio from '../components/Portfolio'
import { ShoppingCart, BookOpen, Target } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketing Portfolio - Zarina</title>
        <meta name="description" content="Marketing and business development specialist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container">
          <header className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Zarina
            </Link>
            
            <div className="hidden md:flex items-center">
              <nav className="flex items-center space-x-8 mr-8">
                {['Home', 'Career', 'Projects', 'Expertise', 'Services', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="nav-link"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center space-x-3 pl-8 border-l border-gray-200 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>

            <div className="flex md:hidden items-center">
              <div className="flex items-center space-x-2 mr-4">
                <ThemeToggle />
              </div>
              <MobileMenu />
            </div>
          </header>

          <main>
            {/* Hero Section */}
            <section id="home" className="section pt-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                    Marketing & Business Development
                  </h1>
                  <div className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                    Specialist in Digital Marketing
                  </div>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Creating effective marketing strategies and managing successful campaigns
                  </p>
                  <button className="btn-primary">
                    Get in Touch
                  </button>
                </div>
                <div className="relative flex justify-center">
                  <div className="aspect-square rounded-full overflow-hidden w-full md:w-[85%]">
                    <Image
                      src="/zarina/images/1.jpg"
                      alt="Zarina"
                      width={500}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Career Journey */}
            <section id="career" className="section">
              <h2 className="section-title">Career Journey</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card">
                  <ShoppingCart className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Business Start</h3>
                  <p>Started career in retail business management and marketing</p>
                </div>
                <div className="card">
                  <BookOpen className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <p>Specialized in digital marketing and business development</p>
                </div>
                <div className="card">
                  <Target className="w-12 h-12 text-primary-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Current Focus</h3>
                  <p>Leading marketing strategies and campaign management</p>
                </div>
              </div>
            </section>

            {/* Key Projects */}
            <section id="projects" className="section">
              <Portfolio />
            </section>

            {/* Expertise */}
            <section id="expertise" className="section">
              <h2 className="section-title">Areas of Expertise</h2>
              <p className="text-center mb-12 text-lg">
                Comprehensive marketing and business development expertise
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Marketing Strategy</h3>
                  <ul className="space-y-2">
                    <li>Brand Development</li>
                    <li>Market Analysis</li>
                    <li>Campaign Planning</li>
                    <li>Performance Tracking</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Social Media</h3>
                  <ul className="space-y-2">
                    <li>Content Strategy</li>
                    <li>Community Management</li>
                    <li>Engagement Growth</li>
                    <li>Analytics & Reporting</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Analytics</h3>
                  <ul className="space-y-2">
                    <li>Data Analysis</li>
                    <li>Performance Metrics</li>
                    <li>ROI Optimization</li>
                    <li>Trend Analysis</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Services */}
            <section id="services" className="section">
              <h2 className="section-title">Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Strategic Planning</h3>
                  <ul className="space-y-2">
                    <li>Marketing Strategy Development</li>
                    <li>Brand Positioning</li>
                    <li>Market Research</li>
                    <li>Competitive Analysis</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Social Media Management</h3>
                  <ul className="space-y-2">
                    <li>Content Creation</li>
                    <li>Community Management</li>
                    <li>Campaign Execution</li>
                    <li>Performance Analysis</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Business Consulting</h3>
                  <ul className="space-y-2">
                    <li>Business Development</li>
                    <li>Growth Strategy</li>
                    <li>Process Optimization</li>
                    <li>Performance Improvement</li>
                  </ul>
                </div>
                <div className="card">
                  <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
                  <ul className="space-y-2">
                    <li>Data Analysis</li>
                    <li>Performance Tracking</li>
                    <li>ROI Measurement</li>
                    <li>Insights & Recommendations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="section bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <h2 className="section-title">Key Achievements</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div>Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">150%</div>
                  <div>Average Sales Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10M+</div>
                  <div>Marketing Budget Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                  <div>Industry Niches</div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="section text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
              <p className="text-xl mb-8">Let's discuss how I can help you achieve your goals</p>
              <button className="btn-primary">
                Contact Me
              </button>
            </section>
          </main>

          <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Zarina. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="nav-link">Instagram</a>
                <a href="#" className="nav-link">LinkedIn</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
