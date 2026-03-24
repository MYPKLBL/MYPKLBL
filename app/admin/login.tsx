export default function AdminLoginPage() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(135deg, #103F62 0%, #1a5f8f 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "white",
          borderRadius: "22px",
          padding: "32px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.25)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <h1 style={{ margin: 0, fontSize: "28px", color: "#103F62" }}>
            Admin Login
          </h1>
          <p style={{ color: "#5b6f80", marginTop: "8px" }}>
            MY PKLBL City League Admin Access
          </p>
        </div>

        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <label
              style={{
                display: "block",
                fontWeight: 700,
                marginBottom: "6px",
                color: "#103F62",
              }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="admin@email.com"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d5e0e8",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontWeight: 700,
                marginBottom: "6px",
                color: "#103F62",
              }}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d5e0e8",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#B8D033",
              color: "#103F62",
              border: "none",
              borderRadius: "12px",
              padding: "14px",
              fontWeight: 800,
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Sign In as Admin
          </button>

          <div
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#5b6f80",
            }}
          >
            Authorized users only
          </div>
        </div>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "16px",
            borderTop: "1px solid #e5edf4",
            textAlign: "center",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              color: "#103F62",
              fontWeight: 700,
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
