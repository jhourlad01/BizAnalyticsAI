function Dashboard() {
  return (
    <div className="space-y-6 min-h-[60vh]">
      <h2 className="text-2xl font-bold text-sky-600">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl shadow-lg bg-white/60 text-gray-900 backdrop-blur-lg ring-1 ring-white/30">
          <h3 className="text-lg font-semibold mb-2">Analytics Overview</h3>
          <p className="text-gray-700 font-light">Key metrics and insights</p>
        </div>
        <div className="p-6 rounded-3xl shadow-lg bg-white/60 text-gray-900 backdrop-blur-lg ring-1 ring-white/30">
          <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
          <p className="text-gray-700 font-light">Latest business activities</p>
        </div>
        <div className="p-6 rounded-3xl shadow-lg bg-white/60 text-gray-900 backdrop-blur-lg ring-1 ring-white/30">
          <h3 className="text-lg font-semibold mb-2">Sales</h3>
          <p className="text-gray-700 font-light">Sales performance and trends</p>
        </div>
        <div className="p-6 rounded-3xl shadow-lg bg-white/60 text-gray-900 backdrop-blur-lg ring-1 ring-white/30">
          <h3 className="text-lg font-semibold mb-2">User Growth</h3>
          <p className="text-gray-700 font-light">New users and engagement</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard 