import { useState } from 'react'
import Header from '../../navigation/Header'
import Footer from '../../navigation/Footer'
import Sidebar from '../../ui/Sidebar'

function BaseLayout({ children, onFileSelect, onCompanySelect, onBackToCompanies, selected, sidebarMode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-iosBg backdrop-blur-ios">
      <Header />
      <div className="flex-1 flex relative">
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'mr-16' : 'mr-64'} overflow-y-auto bg-iosCardDark text-white px-4 py-6 md:px-8 md:py-12`}
        >
          <div className="h-full w-full max-w-5xl min-h-[60vh] mx-auto bg-white rounded-xl shadow p-4 md:p-10">
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