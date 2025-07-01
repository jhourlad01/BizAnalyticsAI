import './Header.css'

function Header() {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'BizAnalytics AI'
  
  return (
    <header className="header">
      <h1>{appTitle}</h1>
      <nav className="nav">
        <a href="#dashboard">Dashboard</a>
        <a href="#analytics">Analytics</a>
        <a href="#reports">Reports</a>
      </nav>
    </header>
  )
}

export default Header 