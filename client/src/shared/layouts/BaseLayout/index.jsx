import { useState } from 'react'
import Header from '../../navigation/Header'
import Footer from '../../navigation/Footer'
import Sidebar from '../../ui/Sidebar'

function BaseLayout({ children, onFileSelect, onCompanySelect, onBackToCompanies, selected, sidebarMode }) {
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
          onFileSelect={onFileSelect}
          onCompanySelect={onCompanySelect}
          onBackToCompanies={onBackToCompanies}
          selected={selected}
          sidebarMode={sidebarMode}
        />
      </div>
      <Footer />
    </div>
  )
}

export default BaseLayout 