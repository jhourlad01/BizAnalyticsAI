function Dashboard() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-sky-700 mb-4">Welcome to BizAnalyticsAI</h1>
      <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl">
        Select a <span className="text-sky-600 font-semibold">company</span> from the sidebar to view its summary or files.
      </p>
    </div>
  )
}

export default Dashboard 