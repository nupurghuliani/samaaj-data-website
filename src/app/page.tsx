import Hero from "@/components/Hero";
import RotatingEmotions from "@/components/RotatingEmotions";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="text-[21px]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <p className="mt-0 max-w-5xl mx-auto text-black/90 text-lg sm:text-xl leading-relaxed text-justify">
          Samaaj Data is a community-powered platform that makes public data useful for everyday civic action. We bring together grassroots organizations, researchers, and citizens to map what matters in neighborhoods, trees, toilets, water quality, waste systems, and more, and turn those insights into change.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a href="/about" className="inline-flex items-center justify-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 w-48">Learn more</a>
          <a href="/collective" className="inline-flex items-center justify-center rounded-md border border-black/30 text-black px-6 py-3 text-sm font-medium hover:bg-black/10 w-48">Meet the Collective</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="mx-auto max-w-5xl rounded-2xl border border-black/15 bg-black/5 backdrop-blur px-8 py-12 sm:px-12 sm:py-14">
          <RotatingEmotions />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-black">What&apos;s new</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <a key={i} href="#" className="group rounded-lg overflow-hidden border border-black/10 hover:border-black/30 transition-colors">
              <div className="aspect-video bg-black/10" />
              <div className="p-4">
                <h3 className="font-medium group-hover:underline text-black">Data story title {i}</h3>
                <p className="mt-2 text-black/70 text-sm">Short description of the latest story goes here as a placeholder.</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      </div>
    </main>
  );
}
