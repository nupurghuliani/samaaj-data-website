export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Samaaj Data</p>
        <div className="text-xs sm:text-sm space-x-4">
          <a href="mailto:hello@samaajdata.org" className="hover:text-white">Contact</a>
          <a href="https://samaajdata.org" target="_blank" rel="noreferrer" className="hover:text-white">Legacy site</a>
        </div>
      </div>
    </footer>
  );
}


