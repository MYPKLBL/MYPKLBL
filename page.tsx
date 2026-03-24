const clubs = [
  {
    name: 'Mission Hills Club',
    location: 'Palm Springs, CA',
    courts: 6,
    price: '$28/hr',
    type: 'Indoor',
  },
  {
    name: 'Carlsbad Paddle Center',
    location: 'Carlsbad, CA',
    courts: 8,
    price: '$18/hr',
    type: 'Outdoor',
  },
  {
    name: 'Temecula Valley Racquet Club',
    location: 'Temecula, CA',
    courts: 10,
    price: '$22/hr',
    type: 'Hybrid',
  },
]

const slots = ['6:00 AM', '7:00 AM', '8:00 AM', '5:00 PM', '6:00 PM', '7:00 PM']

export default function CourtsPage() {
  return (
    <div className="page-wrap">
      <section className="page-hero compact">
        <div className="container">
          <span className="eyebrow">Court Reservation System</span>
          <h1>Reserve courts, manage clubs, and accept payments in one place.</h1>
          <p>
            This page is designed for club owners and players, with room for payment flow,
            recurring bookings, and admin-adjusted owner platform fees.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container reservation-layout">
          <div className="reservation-panel glass-card padded-card">
            <h2>Find a Court</h2>
            <div className="form-grid">
              <div className="field">
                <label>Club</label>
                <select>
                  <option>Choose a club</option>
                  {clubs.map((club) => (
                    <option key={club.name}>{club.name}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label>Date</label>
                <input type="date" />
              </div>
              <div className="field">
                <label>Sport</label>
                <select>
                  <option>Pickleball</option>
                  <option>Tennis</option>
                </select>
              </div>
              <div className="field">
                <label>Duration</label>
                <select>
                  <option>60 minutes</option>
                  <option>90 minutes</option>
                  <option>120 minutes</option>
                </select>
              </div>
            </div>

            <div className="slot-wrap">
              <h3>Available Times</h3>
              <div className="slot-grid">
                {slots.map((slot) => (
                  <button key={slot} className="slot-btn">{slot}</button>
                ))}
              </div>
            </div>

            <div className="checkout-card">
              <div>
                <strong>Total</strong>
                <p>1 hour reservation + service fee</p>
              </div>
              <div className="price">$24.00</div>
            </div>

            <button className="btn btn-primary full">Continue to Payment</button>
          </div>

          <div className="club-list">
            {clubs.map((club) => (
              <article key={club.name} className="club-card">
                <div className="club-top">
                  <div>
                    <h3>{club.name}</h3>
                    <p>{club.location}</p>
                  </div>
                  <span className="club-badge">{club.type}</span>
                </div>
                <div className="club-meta">
                  <span>{club.courts} courts</span>
                  <span>{club.price}</span>
                </div>
                <p className="club-copy">
                  Owner can manage pricing, hours, blackout dates, recurring reservations, and
                  subscription-based billing from the admin dashboard.
                </p>
                <button className="btn btn-outline full">View Availability</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="container three-col-grid">
          <article className="info-card">
            <h3>For Players</h3>
            <p>Reserve a court, save payment methods, and manage recurring weekly play.</p>
          </article>
          <article className="info-card">
            <h3>For Club Owners</h3>
            <p>Add your address, court count, pricing, and reservation rules in minutes.</p>
          </article>
          <article className="info-card">
            <h3>For Admins</h3>
            <p>Adjust owner platform fees, manage clubs, and monitor reservation volume.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
