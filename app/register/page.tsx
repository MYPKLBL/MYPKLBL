
export default function RegisterPage() {
  return (
    <main style={{ padding: "40px 24px", color: "#103F62" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <a href="/" style={{ color: "#103F62", textDecoration: "none", fontWeight: 700 }}>← Back Home</a>
        <h1>League Registration</h1>

        <div style={{ backgroundColor: "white", borderRadius: "20px", padding: "24px", border: "1px solid #dbe5ee" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {["First Name", "Last Name", "Email", "Phone", "Home City", "Skill Level"].map((field) => (
              <div key={field}>
                <label style={{ display: "block", fontWeight: 700, marginBottom: "8px" }}>{field}</label>
                <div style={{ border: "1px solid #d5e0e8", borderRadius: "12px", padding: "14px 16px", color: "#4d6274" }}>
                  Enter {field.toLowerCase()}
                </div>
              </div>
            ))}
          </div>

          <button
            style={{
              marginTop: "20px",
              backgroundColor: "#103F62",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "14px 20px",
              fontWeight: 700,
            }}
          >
            Submit Registration
          </button>
        </div>
      </div>
    </main>
  );
}
