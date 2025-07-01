function Sidebar({ isCollapsed, onToggle }) {
  return (
    <aside className={`absolute right-0 top-0 h-full bg-white border-l border-gray-200 text-gray-800 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-6' : 'w-64'}`}>
      <div className="absolute -left-3 top-4 w-8 h-8 flex items-center justify-center z-10">
        <button 
          className="bg-sky-500 text-white border border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-2xl hover:bg-sky-600 transition-colors"
          onClick={onToggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? '←' : '→'}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar 