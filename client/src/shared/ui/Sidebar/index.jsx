import CompanyList from './CompanyList'
import FilesList from './FilesList'

function Sidebar({ isCollapsed, onToggle, onFileSelect, onCompanySelect, onBackToCompanies, selected, sidebarMode }) {
  return (
    <aside className={`absolute right-0 top-0 h-full bg-white border-l border-gray-200 text-gray-800 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-6' : 'w-64'}`}>
      <div className="absolute -left-[15px] top-[-4px] w-10 h-10 flex items-center justify-center z-10">
        <button 
          className="bg-sky-500 hover:bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-2xl transition-colors"
          onClick={onToggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '←' : '→'}
        </button>
      </div>
      {!isCollapsed && <>
        {sidebarMode === 'filesList' && selected.company ? (
          <FilesList 
            company={selected.company} 
            onBack={onBackToCompanies} 
            onFileClick={(file) => onFileSelect && onFileSelect(selected.company, file)}
          />
        ) : (
          <CompanyList onSelect={onCompanySelect} selectedCompany={selected.company} />
        )}
      </>}
    </aside>
  )
}

export default Sidebar 