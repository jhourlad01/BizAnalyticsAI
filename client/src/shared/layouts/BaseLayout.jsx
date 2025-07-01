import { Header } from '../components'
import './BaseLayout.css'

function BaseLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        {children}
      </main>
    </div>
  )
}

export default BaseLayout 