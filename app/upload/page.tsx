import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { UploadForm } from "./UploadForm";

export const metadata: Metadata = {
  title: "Upload Artwork",
  description:
    "Send us your logo or artwork files. Vector files preferred — we’ll email a free digital proof before we print anything.",
};

export default function UploadPage() {
  return (
    <>
      <PageHeader
        eyebrow="Artwork"
        title="Upload your artwork."
        subtitle="Already placed an order or have files to send ahead? Upload here and we’ll match it to your job. Vector (AI, EPS, PDF, SVG) preferred."
        crumbs={[{ href: "/", label: "Home" }, { label: "Upload Artwork" }]}
      />
      <section className="py-14">
        <div className="container-8xl grid gap-10 lg:grid-cols-[1fr_360px]">
          <UploadForm />
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">File guidelines</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>· Vector files preferred: AI, EPS, PDF, SVG</li>
                <li>· High-res PNG or JPG also fine (300 DPI)</li>
                <li>· Outline all fonts</li>
                <li>· Flatten transparencies</li>
                <li>· Include your Pantone / brand colours</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">No artwork yet?</h3>
              <p className="mt-2 text-sm text-slate-600">
                Our team can lay out a simple logo at no extra cost. For full design work, request a quote.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
