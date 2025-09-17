export default function GetInvolvedPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-black">Get Involved</h1>

      <section className="mt-8 space-y-8 text-black/90">
        <p className="text-lg">
          There are many ways to be part of the Samaaj Data movement. Whether you&apos;re an individual, organization, or institution, we welcome your participation in building community-powered data for public good.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-black/5 rounded-lg p-6 bg-black/5">
            <h2 className="text-xl font-semibold text-black mb-3">Contribute Data</h2>
            <p className="text-black/80 mb-4">
              Share your observations, audits, and local data points. Help build a comprehensive picture of your community&apos;s challenges and assets.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-black" style={{ color: "#fbb040" }}>
              Start Contributing →
            </a>
          </div>

          <div className="border border-black/5 rounded-lg p-6 bg-black/5">
            <h2 className="text-xl font-semibold text-black mb-3">Join the Collective</h2>
            <p className="text-black/80 mb-4">
              Become a member of our network of organizations and institutions working on community-driven data initiatives.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-black" style={{ color: "#fbb040" }}>
              Join Now →
            </a>
          </div>

          <div className="border border-black/5 rounded-lg p-6 bg-black/5">
            <h2 className="text-xl font-semibold text-black mb-3">Volunteer</h2>
            <p className="text-black/80 mb-4">
              Lend your skills in data analysis, community outreach, storytelling, or technology to support our mission.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-black" style={{ color: "#fbb040" }}>
              Volunteer With Us →
            </a>
          </div>

          <div className="border border-black/5 rounded-lg p-6 bg-black/5">
            <h2 className="text-xl font-semibold text-black mb-3">Donate</h2>
            <p className="text-black/80 mb-4">
              Support our work in making data accessible and actionable for communities across the country.
            </p>
            <a href="#" className="inline-flex items-center text-sm font-black" style={{ color: "#fbb040" }}>
              Support Our Work →
            </a>
          </div>

          <div className="border border-black/5 rounded-lg p-6 bg-black/5 md:col-span-2">
            <h2 className="text-xl font-semibold text-black mb-3">Work With Us</h2>
            <p className="text-black/80 mb-4">
              Partner with Samaaj Data on research projects, policy initiatives, or community programs. Let&apos;s collaborate to amplify the impact of local data.
            </p>
            <a href="mailto:hello@samaajdata.org" className="inline-flex items-center text-sm font-black" style={{ color: "#fbb040" }}>
              Get In Touch →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}


