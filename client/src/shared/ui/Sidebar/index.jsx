import CompanyList from './CompanyList'
import FilesList from './FilesList'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'

function Sidebar({ isCollapsed, onToggle, onFileSelect, onCompanySelect, onBackToCompanies, selected, sidebarMode }) {
  return (
    <aside className={`absolute right-0 top-0 h-full bg-iosCard backdrop-blur-ios border-l border-iosBorder text-iosText shadow-ios rounded-l-ios transition-all duration-300 ease-in-out ${isCollapsed ? 'w-6' : 'w-64'}`}>
      <div className="absolute -left-[15px] top-[-4px] w-10 h-10 flex items-center justify-center z-10">
        <button 
          className="bg-iosAccent hover:bg-sky-700 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-2xl transition-colors"
          onClick={onToggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <IoChevronForward /> : <IoChevronBack />}
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