import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-8xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="h1 mt-2">That page wandered off.</h1>
        <p className="lede mx-auto mt-4 max-w-xl">
          The page you’re looking for doesn’t exist — or may have moved. Try the shop, or send us a quick note.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/contact" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
