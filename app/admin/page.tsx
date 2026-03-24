export default function AdminPage() {
  const dashboardStats = [
    { label: "Active Leagues", value: "3" },
    { label: "Upcoming Tournaments", value: "2" },
    { label: "Pending Registrations", value: "18" },
    { label: "Scores To Post", value: "6" },
  ];

  const quickActions = [
    "Add New Tournament",
    "Post League Scores",
    "Review Player Registrations",
    "Upload Homepage Flyer",
    "Update Standings",
    "Feature Upcoming Match",
  ];

  const recentActivity = [
    {
      title: "Temecula Night League scores submitted",
      detail: "Week 4 results ready to post to standings.",
      time: "10 min ago",
    },
    {
      title: "Spring Classic registration increased",
      detail: "6 new player entries since this morning.",
      time: "28 min ago",
    },
    {
      title: "Homepage tournament feature updated",
      detail: "New event spotlight added to main page.",
      time: "1 hr ago",
    },
  ];

  const adminSections = [
    {
      title: "League Management",
      text: "Create leagues, assign divisions, manage cities, and control daytime or nighttime play.",
    },
    {
      title: "Tournament Control",
      text: "Create events, add divisions, feature flyers, and manage registration flow.",
    },
    {
      title: "Score & Standings",
      text: "Post results, update rankings, manage streaks, and highlight upcoming matches.",
    },
    {
      title: "Affiliate & Rewards",
      text: "Manage affiliate mall links, rewards tracking, and Dink Back community giving.",
    },
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
          padding: "72px 24px 110px",
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
            Website Admin
          </div>

          <h1
            style={{
              fontSize: "56px",
              lineHeight: 1.05,
              margin: "0 0 16px 0",
              maxWidth: "820px",
            }}
          >
            MY PKLBL City League Admin Dashboard
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
            Manage leagues, tournaments, players, standings, homepage content,
            and community rewards from one central admin page.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#actions"
              style={{
                backgroundColor: "#B8D033",
                color: "#103F62",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Quick Actions
            </a>
            <a
              href="#activity"
              style={{
                border: "2px solid white",
                color: "white",
                padding: "12px 20px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Recent Activity
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", marginTop: "-56px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {dashboardStats.map((stat) => (
              <div
                key={stat.label}
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
                  {stat.label}
                </p>
                <h3 style={{ margin: 0, fontSize: "28px" }}>{stat.value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="actions" style={{ padding: "8px 24px 56px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "22px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "22px",
              padding: "28px",
              border: "1px solid #dbe5ee",
              boxShadow: "0 10px 24px rgba(16,63,98,0.06)",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "34px" }}>Admin Controls</h2>
            <p style={{ color: "#5b6f80", marginBottom: "24px" }}>
              Central actions to manage the website and league system.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {quickActions.map((action) => (
                <button
                  key={action}
                  style={{
                    backgroundColor: "#f8fbfd",
                    border: "1px solid #dbe5ee",
                    borderRadius: "16px",
                    padding: "18px",
                    color: "#103F62",
                    fontWeight: 700,
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {action}
                </button>
              ))}
            </div>

            <div style={{ marginTop: "22px" }}>
              <h3 style={{ margin: "0 0 12px 0", fontSize: "24px" }}>Content Management</h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                {[
                  "Homepage Headline",
                  "Featured Tournament",
                  "Upcoming Match Block",
                  "Past Champions Section",
                  "Affiliate Mall Promo",
                  "Dink Back Charity Banner",
                ].map((field) => (
                  <div key={field}>
                    <label
                      style={{
                        display: "block",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {field}
                    </label>
                    <div
                      style={{
                        border: "1px solid #d5e0e8",
                        borderRadius: "12px",
                        padding: "14px 16px",
                        color: "#4d6274",
                        backgroundColor: "#fff",
                      }}
                    >
                      Edit {field.toLowerCase()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "22px", flexWrap: "wrap" }}>
              <button
                style={{
                  backgroundColor: "#103F62",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 20px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Save Changes
              </button>
              <button
                style={{
                  backgroundColor: "#B8D033",
                  color: "#103F62",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 20px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Publish Updates
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gap: "22px" }}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid #dbe5ee",
                boxShadow: "0 10px 24px rgba(16,63,98,0.06)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "26px" }}>Quick Links</h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  { title: "Standings Page", href: "/standings" },
                  { title: "League Registration", href: "/register" },
                  { title: "Tournament Page", href: "/tournaments" },
                  { title: "Affiliate Mall", href: "/mall" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      textDecoration: "none",
                      color: "#103F62",
                      border: "1px solid #dbe5ee",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      fontWeight: 700,
                      backgroundColor: "#fbfdff",
                    }}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </div>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "22px",
                padding: "24px",
                border: "1px solid #dbe5ee",
                boxShadow: "0 10px 24px rgba(16,63,98,0.06)",
              }}
            >
              <h3 style={{ marginTop: 0, fontSize: "26px" }}>Admin Priorities</h3>
              <div style={{ display: "grid", gap: "12px" }}>
                {[
                  "Keep homepage events current",
                  "Post scores quickly after matches",
                  "Monitor league registrations weekly",
                  "Highlight affiliate and reward opportunities",
                ].map((note) => (
                  <div
                    key={note}
                    style={{
                      border: "1px solid #dbe5ee",
                      borderRadius: "14px",
                      padding: "14px 16px",
                      color: "#4d6274",
                    }}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="activity" style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", margin: "0 0 10px 0" }}>Recent Activity</h2>
          <p style={{ color: "#5b6f80", marginBottom: "24px" }}>
            Recent updates across the website, leagues, and tournament system.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "18px",
            }}
          >
            {recentActivity.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid #dbe5ee",
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "24px" }}>{item.title}</h3>
                <p style={{ margin: "0 0 10px 0", color: "#4d6274", lineHeight: 1.6 }}>
                  {item.detail}
                </p>
                <p style={{ margin: 0, color: "#688093", fontWeight: 700 }}>{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 72px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", margin: "0 0 10px 0" }}>Admin Modules</h2>
          <p style={{ color: "#5b6f80", marginBottom: "24px" }}>
            Core management areas for the full league platform.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {adminSections.map((section) => (
              <div
                key={section.title}
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  padding: "24px",
                  border: "1px solid #dbe5ee",
                }}
              >
                <h3 style={{ marginTop: 0, fontSize: "24px" }}>{section.title}</h3>
                <p style={{ marginBottom: 0, color: "#4d6274", lineHeight: 1.6 }}>
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
