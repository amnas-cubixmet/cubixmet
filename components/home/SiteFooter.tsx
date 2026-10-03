export default function SiteFooter() {
  return (
    <footer className="py-10 md:py-14">
      <div className="site-wrapper">
        <div className="border-b border-white/8 pb-8">
          <p className="text-[clamp(2.8rem,7.2vw,7.5rem)] font-semibold leading-none tracking-[-0.07em]">
            Get in touch <span className="text-white/18">for what&apos;s next.</span>
          </p>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-bold">CUBIXMET<span className="text-[#1677FF]">.</span></p>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/35">Brand, design and technology for ambitious businesses.</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">Navigate</p>
            <div className="mt-4 space-y-2 text-sm text-white/55">
              <a className="block hover:text-white" href="#about">About</a>
              <a className="block hover:text-white" href="#services">Services</a>
              <a className="block hover:text-white" href="#work">Work</a>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">Social</p>
            <div className="mt-4 space-y-2 text-sm text-white/55">
              <span className="block">Instagram</span>
              <span className="block">LinkedIn</span>
              <span className="block">Behance</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">Contact</p>
            <p className="mt-4 text-sm text-white/55">hello@cubixmet.com</p>
            <p className="mt-2 text-sm text-white/55">Kerala, India</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.12em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Cubixmet</span>
          <span>Designed & built for every screen</span>
        </div>
      </div>
    </footer>
  );
}
