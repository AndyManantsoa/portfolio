export function Footer() {
  return (
    <footer className="relative border-t border-white/10 text-sm text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8">
        <p className="font-medium text-slate-200">Andy Manantsoa</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-6">
          <a className="hover:text-white" href="https://github.com/AndyManantsoa" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-white" href="https://linkedin.com/in/AndyManantsoa" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-white" href="mailto:andymanantsoa@myyahoo.com">Email</a>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} Andy.</p>
      </div>
    </footer>
  );
}
