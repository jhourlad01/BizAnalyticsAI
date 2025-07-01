import React from 'react';

function CompanySummary({ company }) {
  return (
    <div className="space-y-8 min-h-[60vh] w-full h-full px-6 py-6 text-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Company Summary: <span className="text-iosAccent">{company}</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Financial Analytics</h3>
          <p className="text-gray-900">Key financial metrics, trends, and insights.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Customer Analytics</h3>
          <p className="text-gray-900">Customer demographics, behavior, and satisfaction.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Operational Analytics</h3>
          <p className="text-gray-900">Operational efficiency, process optimization, and KPIs.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Sales & Marketing Analytics</h3>
          <p className="text-gray-900">Sales performance, marketing ROI, and campaign analysis.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Product/Service Analytics</h3>
          <p className="text-gray-900">Product usage, quality, and customer feedback.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">HR & Talent Analytics</h3>
          <p className="text-gray-900">Workforce metrics, talent acquisition, and retention.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Market & Competitive Analytics</h3>
          <p className="text-gray-900">Market trends, competitor benchmarking, and positioning.</p>
        </section>
        <section className="rounded-xl p-6 border border-iosBorder">
          <h3 className="text-lg font-semibold mb-2 text-iosAccent">Compliance & Risk Analytics</h3>
          <p className="text-gray-900">Regulatory compliance, risk assessment, and mitigation.</p>
        </section>
      </div>
    </div>
  );
}

export default CompanySummary; 