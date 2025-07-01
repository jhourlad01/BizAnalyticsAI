import React from 'react';

function CompanySummary({ company }) {
  return (
    <div className="space-y-8 min-h-[60vh] w-full h-full px-6 py-6">
      <h2 className="text-2xl font-bold mb-4">Company Summary: <span className="text-sky-700">{company}</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Financial Analytics</h3>
          <p className="text-gray-600">Key financial metrics, trends, and insights.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Customer Analytics</h3>
          <p className="text-gray-600">Customer demographics, behavior, and satisfaction.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Operational Analytics</h3>
          <p className="text-gray-600">Operational efficiency, process optimization, and KPIs.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Sales & Marketing Analytics</h3>
          <p className="text-gray-600">Sales performance, marketing ROI, and campaign analysis.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Product/Service Analytics</h3>
          <p className="text-gray-600">Product usage, quality, and customer feedback.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">HR & Talent Analytics</h3>
          <p className="text-gray-600">Workforce metrics, talent acquisition, and retention.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Market & Competitive Analytics</h3>
          <p className="text-gray-600">Market trends, competitor benchmarking, and positioning.</p>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-2 text-sky-700">Compliance & Risk Analytics</h3>
          <p className="text-gray-600">Regulatory compliance, risk assessment, and mitigation.</p>
        </section>
      </div>
    </div>
  );
}

export default CompanySummary; 