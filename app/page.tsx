export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Worldwide Pickleball Platform</span>
            <h1>Build leagues, promote tournaments, and book courts in one place.</h1>
            <p className="hero-text">
              MY PKLBL helps players, managers, organizers, and clubs connect through
              modern tools for registration, standings, event discovery, and court
              reservations.
            </p>

            <div className="hero-actions">
              <a href="/register" className="btn btn-primary">
                Join Now
              </a>
              <a href="/tournaments" className="btn btn-secondary">
                View Tournaments
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <strong>Players</strong>
                <span>Global-ready registration</span>
              </div>
              <div className="stat-card">
                <strong>Organizers</strong>
                <span>Create leagues & events</span>
              </div>
              <div className="stat-card">
                <strong>Clubs</strong>
                <span>Post and manage courts</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-card">
              <div className="panel-badge">Featured Platform Tools</div>
              <h3>Everything you need to grow a modern pickleball network</h3>

              <div className="feature-list">
                <div className="feature-item">
                  <span className="feature-dot" />
                  <div>
                    <strong>League Management</strong>
                    <p>Track teams, standings, scores, and player activity.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <span className="feature-dot" />
                  <div>
                    <strong>Tournament Promotion</strong>
                    <p>Showcase upcoming events by city, state, and country.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <span className="feature-dot" />
                  <div>
                    <strong>Court Booking</strong>
                    <p>Allow players to search, reserve, and pay for court time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Platform Highlights</span>
            <h2>Designed for players, managers, organizers, and clubs</h2>
            <p>
              A polished experience with a global feel, clean layout, and easy navigation.
            </p>
          </div>

          <div className="card-grid three-up">
            <article className="info-card">
              <div className="card-icon">🏓</div>
              <h3>For Players</h3>
              <p>
                Register, discover tournaments, follow standings, and book courts with a
                simple, modern experience.
              </p>
            </article>

            <article className="info-card">
              <div className="card-icon">📋</div>
              <h3>For Managers</h3>
              <p>
                Manage rosters, submit results, coordinate team activity, and keep league
                records current.
              </p>
            </article>

            <article className="info-card">
              <div className="card-icon">🌎</div>
              <h3>For Organizers</h3>
              <p>
                Create leagues, post tournaments, organize divisions, and expand your
                regional presence worldwide.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-section alt-section">
        <div className="container">
          <div className="split-grid">
            <div className="large-card">
              <span className="eyebrow">Leagues</span>
              <h2>Professional league presentation</h2>
              <p>
                Give your leagues a premium look with standings, manager tools, team
                details, and organizer controls built into one branded experience.
              </p>
              <a href="/leagues" className="text-link">
                Explore Leagues →
              </a>
            </div>

            <div className="large-card">
              <span className="eyebrow">Tournaments</span>
              <h2>Promote upcoming events beautifully</h2>
              <p>
                Feature tournaments, highlight key details, and help players quickly find
                events by location and date.
              </p>
              <a href="/tournaments" className="text-link">
                Explore Tournaments →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="eyebrow">Ready to grow MY PKLBL?</span>
              <h2>Launch a polished platform experience with your brand colors.</h2>
              <p>
                Create a more modern website for registration, events, standings, and court
                reservations.
              </p>
            </div>

            <div className="cta-actions">
              <a href="/register" className="btn btn-primary">
                Get Started
              </a>
              <a href="/login" className="btn btn-secondary">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}