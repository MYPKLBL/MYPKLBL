"use client";

import { useMemo, useState } from "react";

type Club = {
  id: number;
  clubName: string;
  ownerName: string;
  country: string;
  state: string;
  city: string;
  address: string;
  courtCount: number;
  courtType: string;
  pricePerHour: number;
};

const usaClubsSeed: Club[] = [
  {
    id: 1,
    clubName: "Temecula Valley Courts",
    ownerName: "TV Sports Group",
    country: "United States",
    state: "California",
    city: "Temecula",
    address: "100 Main Street",
    courtCount: 10,
    courtType: "Outdoor",
    pricePerHour: 24,
  },
  {
    id: 2,
    clubName: "San Marcos Pickleball Center",
    ownerName: "San Marcos Athletics",
    country: "United States",
    state: "California",
    city: "San Marcos",
    address: "220 Grand Ave",
    courtCount: 8,
    courtType: "Indoor",
    pricePerHour: 30,
  },
  {
    id: 3,
    clubName: "Austin Paddle Club",
    ownerName: "Austin Paddle LLC",
    country: "United States",
    state: "Texas",
    city: "Austin",
    address: "15 Court Lane",
    courtCount: 12,
    courtType: "Outdoor",
    pricePerHour: 26,
  },
];

const bookingTimes = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

export default function USABookCourtPage() {
  const [clubs, setClubs] = useState<Club[]>(usaClubsSeed);

  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const [selectedClubId, setSelectedClubId] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const [ownerForm, setOwnerForm] = useState({
    clubName: "",
    ownerName: "",
    state: "",
    city: "",
    address: "",
    courtCount: "1",
    courtType: "Outdoor",
    pricePerHour: "",
  });

  const states = useMemo(
    () => Array.from(new Set(clubs.map((club) => club.state))).sort(),
    [clubs]
  );

  const cities = useMemo(() => {
    const filtered = stateFilter
      ? clubs.filter((club) => club.state === stateFilter)
      : clubs;

    return Array.from(new Set(filtered.map((club) => club.city))).sort();
  }, [clubs, stateFilter]);

  const visibleClubs = useMemo(() => {
    return clubs.filter((club) => {
      const stateMatch = stateFilter ? club.state === stateFilter : true;
      const cityMatch = cityFilter ? club.city === cityFilter : true;
      return stateMatch && cityMatch;
    });
  }, [clubs, stateFilter, cityFilter]);

  function handleOwnerChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setOwnerForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleAddClub(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !ownerForm.clubName ||
      !ownerForm.ownerName ||
      !ownerForm.state ||
      !ownerForm.city ||
      !ownerForm.address ||
      !ownerForm.pricePerHour
    ) {
      alert("Please complete all owner fields.");
      return;
    }

    const newClub: Club = {
      id: Date.now(),
      clubName: ownerForm.clubName,
      ownerName: ownerForm.ownerName,
      country: "United States",
      state: ownerForm.state,
      city: ownerForm.city,
      address: ownerForm.address,
      courtCount: Number(ownerForm.courtCount),
      courtType: ownerForm.courtType,
      pricePerHour: Number(ownerForm.pricePerHour),
    };

    setClubs((prev) => [newClub, ...prev]);
    setOwnerForm({
      clubName: "",
      ownerName: "",
      state: "",
      city: "",
      address: "",
      courtCount: "1",
      courtType: "Outdoor",
      pricePerHour: "",
    });

    alert("USA club posted successfully.");
  }

  function handleBookCourt() {
    if (!selectedClubId || !selectedDate || !selectedTime) {
      alert("Please choose a club, date, and time.");
      return;
    }

    const selectedClub = clubs.find((club) => club.id === selectedClubId);
    alert(
      `Booked ${selectedClub?.clubName} on ${selectedDate} at ${selectedTime}.`
    );
  }

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.badge}>USACPL USA Courts</div>
        <h1 style={styles.heroTitle}>Book a court anywhere in the USA</h1>
        <p style={styles.heroText}>
          Players can search and book courts by state and city. Owners can post
          clubs, add courts, and set pricing.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.sectionTitle}>Find USA courts</h2>

        <div style={styles.grid}>
          <div style={styles.field}>
            <label style={styles.label}>State</label>
            <select
              style={styles.input}
              value={stateFilter}
              onChange={(e) => {
                setStateFilter(e.target.value);
                setCityFilter("");
              }}
            >
              <option value="">All States</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>City</label>
            <select
              style={styles.input}
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Date</label>
            <input
              type="date"
              style={styles.input}
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Time</label>
            <select
              style={styles.input}
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              <option value="">Select Time</option>
              {bookingTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Available USA clubs</h2>
        <div style={styles.clubGrid}>
          {visibleClubs.map((club) => (
            <div key={club.id} style={styles.clubCard}>
              <div style={styles.clubTop}>
                <div>
                  <h3 style={styles.clubTitle}>{club.clubName}</h3>
                  <p style={styles.clubLocation}>
                    {club.city}, {club.state}, {club.country}
                  </p>
                </div>
                <span style={styles.price}>${club.pricePerHour}/hr</span>
              </div>

              <div style={styles.metaGrid}>
                <div style={styles.metaBox}>
                  <span style={styles.metaLabel}>Owner</span>
                  <span style={styles.metaValue}>{club.ownerName}</span>
                </div>
                <div style={styles.metaBox}>
                  <span style={styles.metaLabel}>Courts</span>
                  <span style={styles.metaValue}>{club.courtCount}</span>
                </div>
                <div style={styles.metaBox}>
                  <span style={styles.metaLabel}>Type</span>
                  <span style={styles.metaValue}>{club.courtType}</span>
                </div>
                <div style={styles.metaBox}>
                  <span style={styles.metaLabel}>Address</span>
                  <span style={styles.metaValue}>{club.address}</span>
                </div>
              </div>

              <button
                style={{
                  ...styles.reserveButton,
                  background:
                    selectedClubId === club.id ? "#103F62" : "#B8D033",
                  color: selectedClubId === club.id ? "#ffffff" : "#103F62",
                }}
                onClick={() => setSelectedClubId(club.id)}
              >
                {selectedClubId === club.id ? "Selected" : "Select Club"}
              </button>
            </div>
          ))}
        </div>

        <div style={styles.bookNowWrap}>
          <button style={styles.bookNowButton} onClick={handleBookCourt}>
            Book USA Court
          </button>
        </div>
      </section>

      <section style={styles.card}>
        <h2 style={styles.sectionTitle}>Owners post USA clubs</h2>

        <form onSubmit={handleAddClub} style={styles.grid}>
          <div style={styles.field}>
            <label style={styles.label}>Club Name</label>
            <input
              name="clubName"
              value={ownerForm.clubName}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Owner Name</label>
            <input
              name="ownerName"
              value={ownerForm.ownerName}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>State</label>
            <input
              name="state"
              value={ownerForm.state}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>City</label>
            <input
              name="city"
              value={ownerForm.city}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Address</label>
            <input
              name="address"
              value={ownerForm.address}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Court Count</label>
            <input
              name="courtCount"
              type="number"
              min="1"
              value={ownerForm.courtCount}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Court Type</label>
            <select
              name="courtType"
              value={ownerForm.courtType}
              onChange={handleOwnerChange}
              style={styles.input}
            >
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
              <option value="Mixed">Mixed</option>
            </select>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Price Per Hour</label>
            <input
              name="pricePerHour"
              type="number"
              min="0"
              value={ownerForm.pricePerHour}
              onChange={handleOwnerChange}
              style={styles.input}
            />
          </div>

          <div style={styles.buttonRow}>
            <button type="submit" style={styles.postButton}>
              Post USA Club
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f5f8fb",
    padding: "32px 20px 64px",
    color: "#103F62",
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    maxWidth: "1150px",
    margin: "0 auto 24px",
    background: "linear-gradient(135deg, #103F62 0%, #195985 100%)",
    color: "#fff",
    borderRadius: "24px",
    padding: "48px 32px",
  },
  badge: {
    display: "inline-block",
    background: "#B8D033",
    color: "#103F62",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: 800,
    marginBottom: "16px",
    fontSize: "14px",
  },
  heroTitle: {
    margin: 0,
    fontSize: "42px",
    fontWeight: 800,
    lineHeight: 1.1,
  },
  heroText: {
    marginTop: "14px",
    maxWidth: "760px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "rgba(255,255,255,0.92)",
  },
  card: {
    maxWidth: "1150px",
    margin: "0 auto 28px",
    background: "#ffffff",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 12px 32px rgba(16,63,98,0.08)",
  },
  section: {
    maxWidth: "1150px",
    margin: "0 auto 28px",
  },
  sectionTitle: {
    margin: "0 0 18px",
    fontSize: "28px",
    fontWeight: 800,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontWeight: 700,
    fontSize: "14px",
  },
  input: {
    height: "48px",
    borderRadius: "12px",
    border: "1px solid #d8e0e7",
    padding: "0 14px",
    fontSize: "15px",
    color: "#103F62",
    background: "#fff",
  },
  clubGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  clubCard: {
    background: "#fff",
    borderRadius: "20px",
    padding: "22px",
    border: "1px solid #e7eef4",
    boxShadow: "0 12px 32px rgba(16,63,98,0.08)",
  },
  clubTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "16px",
  },
  clubTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 800,
  },
  clubLocation: {
    margin: "6px 0 0",
    color: "#5d7385",
    fontSize: "15px",
  },
  price: {
    background: "#eef7c7",
    color: "#103F62",
    padding: "8px 12px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    marginBottom: "18px",
  },
  metaBox: {
    background: "#f7fafc",
    borderRadius: "12px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  metaLabel: {
    fontSize: "12px",
    fontWeight: 700,
    color: "#688091",
    textTransform: "uppercase",
  },
  metaValue: {
    fontSize: "15px",
    fontWeight: 700,
  },
  reserveButton: {
    width: "100%",
    height: "46px",
    border: "none",
    borderRadius: "12px",
    fontWeight: 800,
    cursor: "pointer",
  },
  bookNowWrap: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  bookNowButton: {
    height: "50px",
    border: "none",
    borderRadius: "12px",
    background: "#103F62",
    color: "#fff",
    padding: "0 28px",
    fontWeight: 800,
    fontSize: "15px",
    cursor: "pointer",
  },
  buttonRow: {
    display: "flex",
    alignItems: "end",
  },
  postButton: {
    width: "100%",
    height: "48px",
    border: "none",
    borderRadius: "12px",
    background: "#B8D033",
    color: "#103F62",
    fontWeight: 800,
    fontSize: "15px",
    cursor: "pointer",
  },
};
