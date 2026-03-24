
export default function StandingsPage() {
  const standings = [
    {
      rank: 1,
      team: "Temecula Smash",
      city: "Temecula",
      wins: 8,
      losses: 1,
      pointsFor: 178,
      pointsAgainst: 121,
      streak: "W4",
    },
    {
      rank: 2,
      team: "San Marcos Spin",
      city: "San Marcos",
      wins: 7,
      losses: 2,
      pointsFor: 171,
      pointsAgainst: 130,
      streak: "W2",
    },
    {
      rank: 3,
      team: "Carlsbad Chargers",
      city: "Carlsbad",
      wins: 6,
      losses: 3,
      pointsFor: 160,
      pointsAgainst: 141,
      streak: "L1",
    },
    {
      rank: 4,
      team: "Inland Dinkers",
      city: "Temecula",
      wins: 5,
      losses: 4,
      pointsFor: 149,
      pointsAgainst: 145,
      streak: "W1",
    },
    {
      rank: 5,
      team: "North County Aces",
      city: "San Marcos",
      wins: 4,
      losses: 5,
      pointsFor: 142,
      pointsAgainst: 151,
      streak: "L2",
    },
    {
      rank: 6,
      team: "Coastal Rally",
      city: "Carlsbad",
      wins: 3,
      losses: 6,
      pointsFor: 133,
      pointsAgainst: 159,
      streak: "L3",
    },
  ];

  const upcomingMatches = [
    {
      date: "Wed, Apr 23",
      matchup: "Temecula Smash vs San Marcos Spin",
      court: "Championship Court",
      time: "6:30 PM",
    },
    {
      date: "Thu, Apr 24",
      matchup: "Carlsbad Chargers vs Inland Dinkers",
      court: "Court 4",
      time: "7:00 PM",
    },
    {
      date: "Fri, Apr 25",
      matchup: "North County Aces vs Coastal Rally",
      court: "Court 2",
      time: "6:00 PM",
    },
  ];

  const leaders = [
    { label: "1st Place Team", value: "Temecula Smash" },
    { label: "Best Win Streak", value: "Temecula Smash • W4" },
    { label: "Most Points For", value: "Temecula Smash • 178" },
    { label: "Closest Race", value: "2nd–4th within 2 wins" },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f6f8fb",
        color: "#103F62",
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          background: "linear-gradient(135deg, #103F62 0%, #1a5f8f 100%)",
          color: "white",
          padding: "72px 24px 120px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 700,
              display: "inline-block",
              marginBottom: "18px",
            }}
          >
            ← Back Home
          </a>

          <div
            style={{
              display: "inline-block",
              backgroundColor: "#B8D033",
              color: "#103F62",
              padding: "8px 14px",
              borderRadius: "999px",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            Live League Standings
          </div>

          <h1
            style={{
              fontSize: "58px",
              lineHeight: 1.05,
              margin: "0 0 16px 0",
              maxWidth: "760px",
            }}
          >
            MY PKLBL City League Standings
          </h1>

          <p
            style={{
              fontSize: "22px",
              lineHeight: 1.5,
              maxWidth: "760px",
              margin: "0 0 28px 0",
              color: "rgba(255,255,255,0.92)",
            }}
          >
            Track wins, losses, point totals, streaks, and upcoming matches across
            Temecula, San Marcos, and Carlsbad.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#standings"
              style={{
                backgroundColor: "#B8D033",
                color: "#103F62",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View Standings
            </a>
            <a
              href="#matches"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Upcoming Matches
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 32px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "-56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {leaders.map((item) => (
              <div
                key={item.label}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 12px 30px rgba(16,63,98,0.12)",
                }}
              >
                <p
                  style={{
                    margin: "0 0 10px 0",
                    color: "#688093",
                    fontSize: "14px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.label}
                </p>
                <h3 style={{ margin: 0, fontSize: "22px" }}>{item.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="standings" style={{ padding: "24px 24px 56px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "38px", margin: "0 0 10px 0" }}>League Table</h2>
            <p style={{ margin: 0, color: "#5b6f80" }}>
              Updated standings with city teams, records, scoring totals, and streaks.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(16,63,98,0.08)",
              border: "1px solid #dbe5ee",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  minWidth: "920px",
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: "#103F62", color: "white" }}>
                    {["Rank", "Team", "City", "W", "L", "PF", "PA", "Diff", "Streak"].map(
                      (heading) => (
                        <th
                          key={heading}
                          style={{
                            textAlign: "left",
                            padding: "18px 16px",
                            fontSize: "14px",
                            letterSpacing: "0.03em",
                          }}
                        >
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {standings.map((team, index) => {
                    const diff = team.pointsFor - team.pointsAgainst;
                    const streakIsWin = team.streak.startsWith("W");

                    return (
                      <tr
                        key={team.team}
                        style={{
                          backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fbfd",
                        }}
                      >
                        <td
                          style={{
                            padding: "18px 16px",
                            borderBottom: "1px solid #e5edf4",
                            fontWeight: 700,
                          }}
                        >
                          #{team.rank}
                        </td>
                        <td
                          style={{
                            padding: "18px 16px",
                            borderBottom: "1px solid #e5edf4",
                            fontWeight: 700,
                          }}
                        >
                          {team.team}
                        </td>
                        <td
                          style={{
                            padding: "18px 16px",
                            borderBottom: "1px solid #e5edf4",
                            color: "#4f6475",
                          }}
                        >
                          {team.city}
                        </td>
                        <td style={{ padding: "18px 16px", borderBottom: "1px solid #e5edf4" }}>
                          {team.wins}
                        </td>
                        <td style={{ padding: "18px 16px", borderBottom: "1px solid #e5edf4" }}>
                          {team.losses}
                        </td>
                        <td style={{ padding: "18px 16px", borderBottom: "1px solid #e5edf4" }}>
                          {team.pointsFor}
                        </td>
                        <td style={{ padding: "18px 16px", borderBottom: "1px solid #e5edf4" }}>
                          {team.pointsAgainst}
                        </td>
                        <td
                          style={{
                            padding: "18px 16px",
                            borderBottom: "1px solid #e5edf4",
                            fontWeight: 700,
                            color: diff >= 0 ? "#1e7a38" : "#b54747",
                          }}
                        >
                          {diff >= 0 ? `+${diff}` : diff}
                        </td>
                        <td style={{ padding: "18px 16px", borderBottom: "1px solid #e5edf4" }}>
                          <span
                            style={{
                              display: "inline-block",
                              padding: "7px 12px",
                              borderRadius: "999px",
                              fontWeight: 700,
                              fontSize: "13px",
                              backgroundColor: streakIsWin ? "#e7f6ea" : "#fdeceb",
                              color: streakIsWin ? "#1e7a38" : "#b54747",
                            }}
                          >
                            {team.streak}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="matches" style={{ padding: "0 24px 56px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", marginBottom: "10px" }}>Upcoming Matches</h2>
          <p style={{ color: "#5b6f80", marginBottom: "24px" }}>
            Featured upcoming league matchups.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            {upcomingMatches.map((match) => (
              <div
                key={match.matchup}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid #dbe5ee",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    backgroundColor: "#e9f2c5",
                    color: "#103F62",
                    padding: "6px 10px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: 700,
                    marginBottom: "14px",
                  }}
                >
                  {match.date}
                </div>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "22px" }}>{match.matchup}</h3>
                <p style={{ margin: "0 0 6px 0", color: "#4d6274" }}>{match.court}</p>
                <p style={{ margin: 0, color: "#4d6274" }}>{match.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 72px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid #dbe5ee",
            }}
          >
            <h3 style={{ marginTop: 0 }}>How Standings Work</h3>
            <p style={{ color: "#4d6274", lineHeight: 1.6, marginBottom: 0 }}>
              Teams are ranked by wins, then point differential, then points scored.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid #dbe5ee",
            }}
          >
            <h3 style={{ marginTop: 0 }}>League Cities</h3>
            <p style={{ color: "#4d6274", lineHeight: 1.6, marginBottom: 0 }}>
              Temecula, San Marcos, and Carlsbad leagues can all appear in one standings view.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid #dbe5ee",
            }}
          >
            <h3 style={{ marginTop: 0 }}>Next Upgrade</h3>
            <p style={{ color: "#4d6274", lineHeight: 1.6, marginBottom: 0 }}>
              Add filters, city tabs, player stats, and live match result posting.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
