import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-ink-950 text-white">
      <div className="container-8xl py-16 sm:py-20">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need help choosing? Get a fast quote.
            </h2>
            <p className="mt-3 text-ink-100">
              Tell us what you’re promoting and we’ll recommend the right product, send a digital proof, and get it in your hands fast.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="btn-accent">Get a Quote</Link>
            <Link
              href="/upload"
              className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white/20"
            >
              Upload Artwork
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
