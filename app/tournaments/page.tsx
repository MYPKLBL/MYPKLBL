export default function TournamentsPage() {
  const tournaments = [
    {
      name: "Spring Classic",
      city: "Temecula",
      date: "April 19",
      format: "Mixed Doubles",
    },
    {
      name: "Coastal Cup",
      city: "Carlsbad",
      date: "May 10",
      format: "Team Event",
    },
    {
      name: "Summer Smash",
      city: "San Diego",
      date: "June 8",
      format: "Singles & Doubles",
    },
  ];

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="container">
          <div className="page-hero-card">
            <span className="eyebrow">Tournaments</span>
            <h1>Promote upcoming events with a clean, premium tournament layout.</h1>
            <p className="hero-text">
              Help players discover events by city, state, and country while giving
              organizers a better way to showcase tournaments.
            </p>

            <div className="hero-actions">
              <a href="/register" className="btn btn-primary">
                Register to Play
              </a>
              <a href="/login" className="btn btn-secondary">
                Organizer Login
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Upcoming Events</span>
            <h2>Featured tournaments</h2>
            <p>Showcase major events in a way that feels polished and easy to browse.</p>
          </div>

          <div className="card-grid three-up">
            {tournaments.map((event) => (
              <article className="info-card" key={event.name}>
                <div className="card-icon">📍</div>
                <h3>{event.name}</h3>
                <p>
                  <strong>City:</strong> {event.city}
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Format:</strong> {event.format}
                </p>
                <a href="/register" className="text-link">
                  View Details →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section alt-section">
        <div className="container">
          <div className="split-grid">
            <div className="large-card">
              <span className="eyebrow">For Players</span>
              <h2>Find tournaments faster</h2>
              <p>
                Browse events, check formats, and discover competitions near you or
                around the world.
              </p>
            </div>

            <div className="large-card">
              <span className="eyebrow">For Organizers</span>
              <h2>Post events professionally</h2>
              <p>
                Feature upcoming tournaments, display key details, and attract more
                player registrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}