import Link from 'next/link'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/leagues', label: 'Leagues' },
  { href: '/tournaments', label: 'Tournaments' },
  { href: '/courts', label: 'Court Reservations' },
]

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <span className="brand-mark">PK</span>
          <div>
            <div className="brand-title">MY PKLBL</div>
            <div className="brand-subtitle">City League</div>
          </div>
        </Link>

        <nav className="nav">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <Link href="/courts" className="btn btn-outline">Reserve Court</Link>
          <Link href="/register" className="btn btn-primary">Join Now</Link>
        </div>
      </div>
    </header>
  )
}
