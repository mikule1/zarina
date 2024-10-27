import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Creator Portfolio</title>
        <meta name="description" content="Professional digital creator and marketing expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header className="header">
          <Link href="/" className="logo">
            Zarina
          </Link>
          <nav className="nav-menu">
            <Link href="#home" className="nav-link">Home</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#portfolio" className="nav-link">Portfolio</Link>
            <Link href="#services" className="nav-link">Services</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </nav>
        </header>

        <main>
          <section id="home" className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">
                Creative <span className="purple-text">Marketing</span><br />
                Expert
              </h1>
              <p className="hero-subtitle">
                Elevating brands through innovative social media strategies and captivating content.
              </p>
              <button className="btn-primary">Let's Connect</button>
            </div>
            <div className="hero-image">
              <div className="profile-image">
                <div className="experience-badge">10+ Years Exp.</div>
              </div>
            </div>
          </section>

          <section id="about" className="section">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate content creator and marketing strategist specializing in UGC (User Generated Content) 
                  and social media marketing. With over 10 years of experience, I help brands tell their stories and 
                  connect with their audience authentically.
                </p>
                <p>
                  My approach combines creative storytelling with data-driven strategies to create content that not 
                  only looks great but delivers real results for your brand.
                </p>
              </div>
              <div className="skills-grid">
                {[
                  'UGC Creation',
                  'Social Media Strategy',
                  'Content Planning',
                  'Brand Storytelling',
                  'Marketing Analytics',
                  'Community Building'
                ].map((skill) => (
                  <div key={skill} className="skill-card">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="portfolio" className="section">
            <h2 className="section-title">Portfolio</h2>
            <div className="portfolio-grid">
              {[
                { title: 'Brand Campaign', type: 'Social Media Marketing' },
                { title: 'Product Launch', type: 'Content Strategy' },
                { title: 'Influencer Collab', type: 'UGC Campaign' },
                { title: 'Community Event', type: 'Social Engagement' },
                { title: 'Brand Story', type: 'Video Content' },
                { title: 'Social Growth', type: 'Marketing Strategy' }
              ].map((item, index) => (
                <div key={index} className="portfolio-card">
                  <h3>{item.title}</h3>
                  <p>{item.type}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="services" className="section">
            <h2 className="section-title">Services</h2>
            <div className="services-grid">
              {[
                { title: 'UGC Content Creation', icon: '🎥', description: 'Authentic user-generated style content for your brand' },
                { title: 'Social Media Strategy', icon: '📱', description: 'Comprehensive social media marketing plans' },
                { title: 'Content Planning', icon: '📝', description: 'Strategic content calendars and planning' },
                { title: 'Brand Storytelling', icon: '🎯', description: 'Compelling narrative development for your brand' },
                { title: 'Analytics & Reporting', icon: '📊', description: 'Data-driven insights and performance tracking' },
                { title: 'Community Management', icon: '🤝', description: 'Active engagement and community building' }
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-container">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
            <div className="social-links">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
