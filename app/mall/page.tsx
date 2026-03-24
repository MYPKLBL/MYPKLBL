
export default function MallPage() {
  const stores = ["Amazon", "Travel Rewards", "Pickleball Gear"];

  return (
    <main style={{ padding: "40px 24px", color: "#103F62" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#103F62", textDecoration: "none", fontWeight: 700 }}>← Back Home</a>
        <h1>Affiliate Mall</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "18px",
          }}
        >
          {stores.map((store) => (
            <div
              key={store}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "24px",
                border: "1px solid #dbe5ee",
              }}
            >
              <h2 style={{ marginTop: 0 }}>{store}</h2>
              <p style={{ color: "#4d6274" }}>
                Shop and help create league rewards, support, and community impact.
              </p>
              <button
                style={{
                  backgroundColor: "#103F62",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 20px",
                  fontWeight: 700,
                }}
              >
                Shop {store}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
