
export default function StandingsPage() {
  const standings = [
    { rank: 1, team: "Temecula Smash", city: "Temecula", wins: 8, losses: 1, streak: "W4" },
    { rank: 2, team: "San Marcos Spin", city: "San Marcos", wins: 7, losses: 2, streak: "W2" },
    { rank: 3, team: "Carlsbad Chargers", city: "Carlsbad", wins: 6, losses: 3, streak: "L1" },
  ];

  return (
    <main style={{ padding: "40px 24px", color: "#103F62" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#103F62", textDecoration: "none", fontWeight: 700 }}>← Back Home</a>
        <h1>League Standings</h1>

        <div style={{ backgroundColor: "white", borderRadius: "20px", overflow: "hidden", border: "1px solid #dbe5ee" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#103F62", color: "white" }}>
                {["Rank", "Team", "City", "W", "L", "Streak"].map((h) => (
                  <th key={h} style={{ textAlign: "left", padding: "16px" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.team}>
                  <td style={{ padding: "16px", borderBottom: "1px solid #e5edf4" }}>#{team.rank}</td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #e5edf4", fontWeight: 700 }}>{team.team}</td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #e5edf4" }}>{team.city}</td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #e5edf4" }}>{team.wins}</td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #e5edf4" }}>{team.losses}</td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #e5edf4" }}>{team.streak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
