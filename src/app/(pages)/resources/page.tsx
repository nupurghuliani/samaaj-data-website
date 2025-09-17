export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-black">Resources</h1>

      <section className="mt-8 space-y-6 text-black/90">
        <h2 className="text-2xl font-semibold text-black">Data Narratives</h2>
        <p>
          Explore our collection of data stories, insights, and case studies that showcase how communities are using data to drive change. From water audits to waste management, these narratives bring data to life through real community experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border border-black/10 rounded-lg p-4 bg-black/5 hover:bg-white/10 transition-colors">
            <h3 className="font-medium text-black mb-2">Water Champions in Assam</h3>
            <p className="text-sm text-black/70 mb-3">How 13,000 water-saving actions influenced national policy and transformed the Jal Jeevan Mission.</p>
            <span className="text-xs" style={{ color: "#fbb040" }}>Case Study →</span>
          </div>
          
          <div className="border border-black/10 rounded-lg p-4 bg-black/5 hover:bg-white/10 transition-colors">
            <h3 className="font-medium text-black mb-2">Stubble Burning Prevention</h3>
            <p className="text-sm text-black/70 mb-3">Data-driven advocacy prevented burning across 10,500 acres in Punjab, improving air quality.</p>
            <span className="text-xs" style={{ color: "#fbb040" }}>Case Study →</span>
          </div>

          <div className="border border-black/10 rounded-lg p-4 bg-black/5 hover:bg-white/10 transition-colors">
            <h3 className="font-medium text-black mb-2">Civic Audits in Karnataka</h3>
            <p className="text-sm text-black/70 mb-3">Crowdsourced audits of toilets, footpaths, and potholes shaping local governance responses.</p>
            <span className="text-xs" style={{ color: "#fbb040" }}>Case Study →</span>
          </div>

          <div className="border border-black/10 rounded-lg p-4 bg-black/5 hover:bg-white/10 transition-colors">
            <h3 className="font-medium text-black mb-2">Tree Census Impact</h3>
            <p className="text-sm text-black/70 mb-3">Community mapping of tree health and species data driving urban forestry decisions in Pune.</p>
            <span className="text-xs" style={{ color: "#fbb040" }}>Case Study →</span>
          </div>
        </div>

        <div className="pt-6">
          <a 
            href="https://linktr.ee/samaajdata" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black hover:opacity-90" 
            style={{ backgroundColor: "#fbb040" }}
          >
            See All Data Narratives
          </a>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-black">Documentation and Standards</h2>
        <p>
          Coming soon: comprehensive documentation on our data collection methodologies, quality standards, and best practices for community-driven data initiatives. This will include guidelines for data contributors, verification processes, and interoperability standards.
        </p>
      </section>
    </main>
  );
}


