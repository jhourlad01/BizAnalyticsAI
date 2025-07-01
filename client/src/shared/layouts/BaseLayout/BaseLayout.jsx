import { useState } from 'react'
import { Header, Footer } from '../../navigation'
import { Sidebar } from '../../ui'

function BaseLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex relative">
        <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'mr-16' : 'mr-64'} bg-gradient-to-br from-sky-100 to-white`}>
          <div className="px-6 py-6">
            {children}
          </div>
        </main>
        <Sidebar 
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
      </div>
      <Footer />
    </div>
  )
}

export default BaseLayout 