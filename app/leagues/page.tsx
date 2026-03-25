export default function LeaguesPage() {
  const standings = [
    { team: "Temecula Aces", wins: 8, losses: 1, points: 24 },
    { team: "Carlsbad Smash", wins: 7, losses: 2, points: 21 },
    { team: "San Marcos Rally", wins: 6, losses: 3, points: 18 },
    { team: "Fallbrook Spin", wins: 5, losses: 4, points: 15 },
  ];

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="container">
          <div className="page-hero-card">
            <span className="eyebrow">Leagues</span>
            <h1>View standings, manage teams, and grow competitive play.</h1>
            <p className="hero-text">
              Players can follow league standings, managers can update results, and
              organizers can create and manage leagues with a more polished experience.
            </p>

            <div className="hero-actions">
              <a href="/register" className="btn btn-primary">
                Join a League
              </a>
              <a href="/login" className="btn btn-secondary">
                Manager Login
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Featured Standings</span>
            <h2>Current league snapshot</h2>
            <p>Keep players engaged with a clean and professional standings table.</p>
          </div>

          <div className="table-card">
            <div className="table-scroll">
              <table className="league-table">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Wins</th>
                    <th>Losses</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                  {standings.map((row) => (
                    <tr key={row.team}>
                      <td>{row.team}</td>
                      <td>{row.wins}</td>
                      <td>{row.losses}</td>
                      <td>{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section alt-section">
        <div className="container">
          <div className="card-grid three-up">
            <article className="info-card">
              <div className="card-icon">👥</div>
              <h3>Players</h3>
              <p>View standings, schedules, league updates, and team performance.</p>
            </article>

            <article className="info-card">
              <div className="card-icon">📝</div>
              <h3>Managers</h3>
              <p>Submit scores, manage lineups, and keep team details updated.</p>
            </article>

            <article className="info-card">
              <div className="card-icon">🏆</div>
              <h3>Organizers</h3>
              <p>Create leagues, assign divisions, and run polished competitions.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
