import './Header.css'

function Header() {
  return (
    <header className="header">
      <h1>BizAnalytics AI</h1>
      <nav className="nav">
        <a href="#dashboard">Dashboard</a>
        <a href="#analytics">Analytics</a>
        <a href="#reports">Reports</a>
      </nav>
    </header>
  )
}

export default Header 