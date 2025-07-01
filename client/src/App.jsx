import BaseLayout from './shared/layouts/BaseLayout'
import Header from './shared/navigation/Header'
import Footer from './shared/navigation/Footer'
import Sidebar from './shared/ui/Sidebar'
import Dashboard from './features/Dashboard'
import './App.css'

function App() {
  return (
    <BaseLayout>
      <Dashboard />
    </BaseLayout>
  )
}

export default App
