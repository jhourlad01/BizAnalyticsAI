function Header() {
  const appTitle = import.meta.env.VITE_APP_TITLE || 'BizAnalytics AI'
  
  return (
    <header className="bg-white text-sky-600 py-4 shadow-sm">
      <div className="px-6">
        <div className="flex items-center gap-3">
          <div className="text-2xl">📊</div>
          <h1 className="text-xl font-bold m-0">{appTitle}</h1>
        </div>
      </div>
    </header>
  )
}

export default Header 