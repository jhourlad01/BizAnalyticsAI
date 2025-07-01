import { FiPlus, FiChevronRight } from 'react-icons/fi';

function FilesList({ company, onBack, onFileClick }) {
  const files = [
    'Q1_Report.pdf',
    'User_Data.xlsx',
    'Presentation.pptx',
    'Invoice_2025.docx',
    'Notes.txt'
  ];
  return (
    <div className="h-full flex flex-col relative">
      <div className="mt-8 px-2 py-4 flex-1 overflow-y-auto">
        <button
          className="mb-2 pb-4 text-xs text-sky-600 hover:underline flex items-center"
          onClick={onBack}
        >
          ← Back to Companies
        </button>
        <h4 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider">Files for {company}</h4>
        <ul className="divide-y divide-gray-200 bg-white rounded-2xl shadow-md overflow-hidden">
          {files.map((f) => (
            <li
              key={f}
              className="flex items-center px-4 py-3 transition-colors cursor-pointer group hover:bg-gray-50 text-gray-800"
              onClick={() => onFileClick && onFileClick(f)}
            >
              <span className="flex-1">{f}</span>
              <FiChevronRight className="text-gray-300 group-hover:text-sky-400 transition" />
            </li>
          ))}
        </ul>
      </div>
      <button
        className="absolute bottom-4 right-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        title="Upload File"
      >
        <FiPlus size={24} />
      </button>
    </div>
  );
}

export default FilesList; 