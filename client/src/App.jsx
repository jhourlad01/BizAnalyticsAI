import { BaseLayout } from './shared/layouts'
import { Dashboard } from './features/dashboard'
import './App.css'

function App() {
  return (
    <BaseLayout>
      <Dashboard />
    </BaseLayout>
  )
}

export default App
