import Link from 'next/link'

const stats = [
  { value: '50+', label: 'Cities ready to launch' },
  { value: '500+', label: 'Players supported' },
  { value: '100+', label: 'Clubs & venues' },
  { value: '24/7', label: 'Reservation access' },
]

const features = [
  {
    title: 'League Management',
    text: 'Run teams, standings, match results, player profiles, and city-based competition from one clean system.',
  },
  {
    title: 'Tournament Promotion',
    text: 'Highlight upcoming events by city, state, region, and country with a strong professional look.',
  },
  {
    title: 'Court Reservations',
    text: 'Let players reserve courts, pay online, and manage recurring bookings with a premium club experience.',
  },
]

const cities = ['San Marcos', 'Carlsbad', 'Temecula', 'San Diego', 'Palm Springs', 'Los Barriles']

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Worldwide League + Tournament Platform</span>
            <h1>Modern pickleball and tennis competition, built for clubs, cities, and serious players.</h1>
            <p className="hero-copy">
              MY PKLBL City League combines registration, league play, tournament promotion, and
              court reservations into one polished platform designed for growth.
            </p>
            <div className="hero-actions">
              <Link href="/register" className="btn btn-primary">Get Started</Link>
              <Link href="/courts" className="btn btn-secondary">Book a Court</Link>
            </div>
          </div>

          <div className="hero-card glass-card">
            <div className="hero-panel-top">
              <span className="status-pill">Live Reservation System</span>
              <span className="status-pill muted">Global Ready</span>
            </div>
            <div className="schedule-preview">
              <div className="schedule-item active">
                <div>
                  <strong>Mission Hills Club</strong>
                  <p>4 indoor courts • $28/hr</p>
                </div>
                <span>6:00 PM</span>
              </div>
              <div className="schedule-item">
                <div>
                  <strong>Carlsbad Paddle Center</strong>
                  <p>8 outdoor courts • $18/hr</p>
                </div>
                <span>7:30 PM</span>
              </div>
              <div className="schedule-item">
                <div>
                  <strong>Temecula Valley Club</strong>
                  <p>12 courts • League Night</p>
                </div>
                <span>8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Platform Features</span>
            <h2>Everything needed to run a modern city league website</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container split-grid">
          <div className="glass-card padded-card">
            <span className="eyebrow">Featured Cities</span>
            <h2>Launch local play with a global feel</h2>
            <p>
              Organize players by city and expand by region without changing the core experience.
            </p>
            <div className="city-list">
              {cities.map((city) => (
                <span key={city} className="city-chip">{city}</span>
              ))}
            </div>
          </div>

          <div className="pricing-card">
            <span className="eyebrow">Club Benefits</span>
            <h3>Add your club and monetize court inventory</h3>
            <ul className="clean-list">
              <li>Set court counts, pricing, and hours</li>
              <li>Allow hourly and recurring bookings</li>
              <li>Track owner fees and reservation income</li>
              <li>Promote leagues and events at your venue</li>
            </ul>
            <Link href="/courts" className="btn btn-primary full">Explore Reservation Page</Link>
          </div>
        </div>
      </section>
    </>
  )
}
