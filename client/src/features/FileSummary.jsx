import React from 'react';

function FileSummary({ company, file }) {
  return (
    <div className="space-y-6 min-h-[60vh] w-full h-full px-6 py-6">
      <h2 className="text-2xl font-bold mb-4">File Summary</h2>
      <div className="mb-2">
        <span className="font-semibold">Company:</span> {company}
      </div>
      <div className="mb-6">
        <span className="font-semibold">File:</span> {file}
      </div>
      <div className="text-gray-600">
        {/* Placeholder for file summary content */}
        This is a summary of <span className="font-mono">{file}</span> for <span className="font-mono">{company}</span>.
      </div>
    </div>
  );
}

export default FileSummary; 