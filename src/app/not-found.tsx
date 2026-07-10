import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-frame flex-1 flex flex-col items-center justify-center gap-6 bg-ink text-fg text-center px-6">
      <p className="text-[12px] uppercase tracking-[0.15em] text-fg-soft font-bold">404</p>
      <h1 className="font-display font-black uppercase text-5xl">Page not found</h1>
      <Link
        href="/"
        className="rounded-full border-2 border-fg/25 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] hover:border-accent hover:text-accent transition-colors"
      >
        Back home
      </Link>
    </div>
  );
}
