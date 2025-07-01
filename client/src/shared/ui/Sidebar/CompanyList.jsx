import { FiPlus, FiChevronRight } from 'react-icons/fi';

function CompanyList({ onSelect, selectedCompany }) {
  const companies = [
    'Apple',
    'Google',
    'Microsoft',
    'Amazon',
    'Meta'
  ];
  return (
    <div className="h-full flex flex-col relative">
      <div className="mt-8 px-2 py-4 flex-1 overflow-y-auto">
        <h4 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Companies</h4>
        <ul className="divide-y divide-gray-200 bg-white rounded-2xl shadow-md overflow-hidden">
          {companies.map((c) => (
            <li
              key={c}
              className={`flex items-center px-4 py-3 transition-colors cursor-pointer group relative
                ${selectedCompany === c
                  ? 'bg-sky-500 text-white font-bold shadow-lg border-l-4 border-sky-700'
                  : 'hover:bg-gray-50 text-gray-800'}`}
              onClick={() => onSelect(c)}
            >
              {selectedCompany === c && (
                <span className="absolute left-0 top-0 h-full w-1 bg-sky-700 rounded-r-lg" />
              )}
              <span className="flex-1 z-10">{c}</span>
              <FiChevronRight className={`z-10 transition ${selectedCompany === c ? 'text-white' : 'text-gray-300 group-hover:text-sky-400'}`} />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="absolute bottom-4 right-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        title="Add Company"
      >
        <FiPlus size={24} />
      </button>
    </div>
  );
}

export default CompanyList; 