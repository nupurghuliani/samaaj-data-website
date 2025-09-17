export default function DataPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-black">Data</h1>

      <section className="mt-8 space-y-6 text-black/90">
        <h2 className="text-2xl font-semibold text-black">About the Data</h2>
        <p>
          Samaaj Data brings together hyper-local, citizen-generated and open government datasets on civic and climate issues that matter most to communities. From toilets and waste systems to trees, water quality, and public institutions, our data is crowd-sourced, crowd-verified, and publicly available.
        </p>
        <p>
          We work with citizens, community-based organizations (CSOs), and local governments to gather and clean data that is often fragmented or inaccessible. Each dataset tells a story of how neighborhoods are functioning — and where they need urgent attention.
        </p>
        <p>
          Our goal is simple: to turn scattered data into usable insights that can strengthen community action, civic engagement, and climate resilience.
        </p>

        <h2 className="mt-10 text-2xl font-semibold text-black">Explore Data</h2>
        <p>The Samaaj Data platform makes it easy to explore information in two ways:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium text-black">Maps:</span> See data spatially, zoom into your ward, and compare across neighborhoods.</li>
          <li><span className="font-medium text-black">Citizen Data Assistant:</span> Chat with the data, ask questions in plain language, and get insights instantly.</li>
        </ul>
        <p>Dive into the datasets, look for patterns, and use the tools to answer your own civic questions.</p>

        <div className="flex gap-4 pt-4">
          <a href="#" className="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black" style={{ backgroundColor: "#fbb040" }}>
            Ask a Question
          </a>
          <a href="#" className="inline-flex items-center rounded-md px-6 py-3 text-sm font-semibold text-black" style={{ backgroundColor: "#fbb040" }}>
            Explore on a Map
          </a>
        </div>

        <h2 className="mt-10 text-2xl font-semibold text-black">Contribute Data</h2>
        <p>The Collective thrives on participation. Anyone can help grow Samaaj Data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-medium text-black">As a CSO:</span> Share the data you already collect and see it made accessible to a wider public.</li>
          <li><span className="font-medium text-black">As an Individual Contributor:</span> Add your observations — from reporting a broken streetlight to documenting tree species.</li>
          <li><span className="font-medium text-black">Host a Mapathon with Us:</span> Bring people together to map local assets and challenges, with support from our team.</li>
        </ul>
        <p>Your contributions ensure that the data remains local, relevant, and actionable.</p>

        <h2 className="mt-10 text-2xl font-semibold text-black">Snapshot of Datasets</h2>
        <p>Here are some of the datasets currently available on Samaaj Data:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Tree Census (Pune)</h3>
            <p className="text-sm text-black/70 mt-1">Tree health, species, and ecological attributes.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Water Audits (Shrirampur, Bihar & Bangalore)</h3>
            <p className="text-sm text-black/70 mt-1">Household access, safety, and practices.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Lake Water Quality (multiple cities)</h3>
            <p className="text-sm text-black/70 mt-1">Oxygen levels, nitrates, and heavy metals.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Public Toilets (Mumbai & Bangalore)</h3>
            <p className="text-sm text-black/70 mt-1">Availability, gender access, and infrastructure gaps.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Garbage Audits (Nanded & Bangalore)</h3>
            <p className="text-sm text-black/70 mt-1">Waste dumping reasons, frequency of collection.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Solid Waste Data (Delhi, Hyderabad, Chennai, Bangalore)</h3>
            <p className="text-sm text-black/70 mt-1">Bins, dumps, and collection sites.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Citizen Challenges & Voices (national)</h3>
            <p className="text-sm text-black/70 mt-1">Issues reported via community videos and IVR platforms.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Anganwadi Centres (national)</h3>
            <p className="text-sm text-black/70 mt-1">Infrastructure, toilets, and water supply.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Public Parks (Hyderabad)</h3>
            <p className="text-sm text-black/70 mt-1">Availability, amenities, and safety.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Urban Flooding (Bangalore, Chennai, Assam)</h3>
            <p className="text-sm text-black/70 mt-1">Locations most affected by recurrent floods.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Relief Centres (Chennai)</h3>
            <p className="text-sm text-black/70 mt-1">Distribution of emergency shelters and canteens.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Borewells (Delhi)</h3>
            <p className="text-sm text-black/70 mt-1">Availability and water conditions.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Smart Cities (national)</h3>
            <p className="text-sm text-black/70 mt-1">101 cities and their plans.</p>
          </div>
          <div className="border border-black/10 rounded-lg p-4 bg-black/5">
            <h3 className="font-medium text-black">Water-saving Initiatives (Bangalore)</h3>
            <p className="text-sm text-black/70 mt-1">Tap aerators in schools.</p>
          </div>
        </div>

        <p className="text-sm text-black/70 mt-4">(This list will keep growing as more partners and citizens contribute.)</p>

        <h2 className="mt-10 text-2xl font-semibold text-black">Documentation & Standards</h2>
        <p>
          Coming soon: our approach to data quality, verification, and interoperability standards. This will include open schemas, metadata practices, and guidelines for using and contributing to Samaaj Data.
        </p>
      </section>
    </main>
  );
}


