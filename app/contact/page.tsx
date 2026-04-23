import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the InkWave team. We respond within one business day — usually much faster.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We’d love to help with your next project."
        subtitle="Fastest way: email or phone. We typically reply within a few hours during business hours."
        crumbs={[{ href: "/", label: "Home" }, { label: "Contact" }]}
      />
      <section className="py-14">
        <div className="container-8xl grid gap-10 lg:grid-cols-[1fr_360px]">
          <ContactForm />
          <aside className="space-y-6">
            <div className="card p-6">
              <h3 className="text-base font-semibold text-slate-900">Talk to us directly</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Email</div>
                  <a href={`mailto:${site.email}`} className="font-medium text-ink-700 hover:underline">{site.email}</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Phone</div>
                  <a href={`tel:${site.phone}`} className="font-medium text-ink-700 hover:underline">{site.phone}</a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Hours</div>
                  <div className="font-medium text-slate-900">{site.hours}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">Location</div>
                  <div className="font-medium text-slate-900">{site.address}</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
