export default function CollectivePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-black">The Collective</h1>

      <section className="mt-8 space-y-6 text-black/90">
        <h2 className="text-2xl font-semibold text-black">What is the Samaaj Data Collective?</h2>
        <p>
          The Samaaj Data Collective is a pioneering network of organizations and institutions committed to harnessing hyper-local data for civic and climate action. We unlock data silos, make information accessible, and amplify community voices to drive systemic change.
        </p>
        <p>
          At its core, the Collective is about locals — local data, local solutions, local communities. Together, we transform scattered, inaccessible data into actionable insights that strengthen community resilience and shape better governance.
        </p>

        <div className="mt-10 mb-10">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5kcFfLDdDv8"
              title="Samaaj Data Collective Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-black">Why It Matters</h2>
        <p>Aggregated, top-down data often misses the nuances of neighborhoods. The Collective fills this gap by:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium text-black">Unlocking data silos:</span> Making hyper-local data freely available.</li>
          <li><span className="font-medium text-black">Fostering civic engagement:</span> Turning community observations into citizen-led action.</li>
          <li><span className="font-medium text-black">Improving usability:</span> Presenting data through Samaaj Data’s interactive, map-based interface.</li>
          <li><span className="font-medium text-black">Driving systemic impact:</span> Amplifying credible, crowd-verified insights to inform policy and advocacy.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-black">Impact in Action</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <span className="font-medium text-black">Water Champions in Assam:</span> 13,000 water-saving actions and 2,000 data points influenced the Jal Jeevan Mission, leading to a national policy adoption.
          </li>
          <li>
            <span className="font-medium text-black">Stubble Burning in Punjab:</span> Data-driven advocacy prevented stubble burning across 10,500 acres, improving air quality and soil health.
          </li>
          <li>
            <span className="font-medium text-black">Civic Audits in Karnataka:</span> Crowdsourced audits of toilets, footpaths, and potholes are shaping local governance responses.
          </li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold text-black">Who&apos;s Part of the Collective?</h2>
        <p>The Collective includes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Founding partners shaping strategic direction and providing financial support.</li>
          <li>Contributing partners bringing local data points, expert resources, and grassroots advocacy.</li>
          <li>Community members — citizens and local changemakers — who gather, verify, and use data in their own neighborhoods.</li>
        </ul>

        <div className="mt-8 grid grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
            <img src="/buzz_women.jpg" alt="Buzz Women" className="max-w-full max-h-12 object-contain" />
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
            <img src="/rb.png" alt="RB" className="max-w-full max-h-12 object-contain" />
          </div>
           <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
              <a href="https://www.videovolunteers.org" target="_blank" rel="noopener noreferrer">
                <img src="/vv.jpg" alt="VV" className="max-w-full max-h-12 object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
              <a href="https://wastewarriors.org" target="_blank" rel="noopener noreferrer">
                <img src="/ww.png" alt="WW" className="max-w-full max-h-12 object-contain" />
            </a>
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
             <a href="https://open-city.org" target="_blank" rel="noopener noreferrer">
                <img src="/open_city.png" alt="Open City" className="max-w-full max-h-12 object-contain" />
             </a>
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
             <a href="https://gramchetna.org" target="_blank" rel="noopener noreferrer">
                <img src="/gram_chetna.jpg" alt="Gram Chetna" className="max-w-full max-h-12 object-contain" />
             </a>
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
             <a href="https://durgaindia.org" target="_blank" rel="noopener noreferrer">
                <img src="/durga_india.png" alt="Durga India" className="max-w-full max-h-12 object-contain" />
             </a>
          </div>
            <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
            <a href="https://paani.earth" target="_blank" rel="noopener noreferrer">
              <img src="/for_rivers.jpg" alt="For Rivers" className="max-w-full max-h-12 object-contain" />
            </a>
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
            <a href="https://gramvaani.org/" target="_blank" rel="noopener noreferrer">
            <img src="/gv.jpg" alt="GV" className="max-w-full max-h-12 object-contain" />
            </a>
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
            <a href="https://farmersforforests.org" target="_blank" rel="noopener noreferrer">
              <img src="/farmers_for_forests.jpg" alt="Farmers for Forests" className="max-w-full max-h-12 object-contain" />
            </a>
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
          <a href="https://www.climaterise.in/" target="_blank" rel="noopener noreferrer">
            <img src="/cra.jpg" alt="CRA" className="max-w-full max-h-12 object-contain" />
            </a>    
          </div>
          <div className="border border-black/20 rounded-lg p-4 bg-white flex items-center justify-center">
            <a href="https://inremfoundation.org/" target="_blank" rel="noopener noreferrer">
              <img src="/inrem.png" alt="InRem" className="max-w-full max-h-12 object-contain" />
            </a>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-black">Join the Collective</h2>
        <p>
          If you or your organization is working to build community resilience, amplify your mission by becoming a member of the SamaajData Collective. You can:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contribute data points.</li>
          <li>Provide strategic or financial support.</li>
          <li>Craft narratives that showcase local impact.</li>
          <li>Drive grassroots advocacy for systemic change.</li>
        </ul>
        <p>Be part of the movement to turn local data into local action.</p>

        <div className="pt-4">
          <a href="#" className="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black" style={{ backgroundColor: "#fbb040" }}>
            Join the Collective
          </a>
        </div>
      </section>
    </main>
  );
}



