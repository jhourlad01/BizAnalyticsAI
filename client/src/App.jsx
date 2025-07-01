import BaseLayout from './shared/layouts/BaseLayout'
import Dashboard from './features/Dashboard'
import FileSummary from './features/FileSummary'
import CompanySummary from './features/CompanySummary'
import './App.css'
import { useState, useCallback } from 'react'

function App() {
  const [selected, setSelected] = useState({ company: null, file: null });
  const [sidebarMode, setSidebarMode] = useState('companyList'); // 'companyList' | 'filesList'

  const handleFileSelect = useCallback((company, file) => {
    setSelected({ company, file });
  }, []);

  const handleCompanySelect = (company) => {
    setSelected({ company, file: null });
    setSidebarMode('filesList');
  };

  const handleBackToCompanies = () => {
    setSidebarMode('companyList');
    setSelected((prev) => ({ ...prev, file: null }));
  };

  const handleBackToDashboard = () => {
    setSelected({ company: null, file: null });
    setSidebarMode('companyList');
  };

  return (
    <BaseLayout 
      onFileSelect={handleFileSelect} 
      onCompanySelect={handleCompanySelect}
      onBackToCompanies={handleBackToCompanies}
      selected={selected}
      sidebarMode={sidebarMode}
    >
      {selected.file ? (
        <FileSummary company={selected.company} file={selected.file} />
      ) : selected.company ? (
        <CompanySummary company={selected.company} onBack={handleBackToDashboard} />
      ) : (
        <Dashboard />
      )}
    </BaseLayout>
  )
}

export default App
