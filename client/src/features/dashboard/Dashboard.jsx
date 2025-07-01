import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-grid">
        <div className="card">
          <h3>Analytics Overview</h3>
          <p>Key metrics and insights</p>
        </div>
        <div className="card">
          <h3>Recent Activity</h3>
          <p>Latest business activities</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 