import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, CircleCheck, CircleAlert, LoaderCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from "@/config/forms";

function Field({ label, name, type = "text", required = false, rows }) {
  const shared =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[0.95rem] text-slate-800 outline-none transition-colors duration-150 placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100";

  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.85rem] font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-brand-600">*</span>}
      </span>
      {rows ? (
        <textarea name={name} rows={rows} required={required} className={`${shared} resize-y`} />
      ) : (
        <input name={name} type={type} required={required} className={shared} />
      )}
    </label>
  );
}

/** Contact / enquiry form. Submits to Web3Forms, which emails the result. */
export default function EnquiryLeaf({
  heading = "Get in touch",
  note = "Tell us what you need and we will get back to you.",
  submitLabel = "Send enquiry",
}) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const { pathname } = useLocation();

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `TRS Forms enquiry — ${pathname}`);
    formData.append("from_name", "TRS Forms website");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      setStatus(result.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,21rem)] lg:gap-16">
          <div className="rounded-[var(--radius-card)] bg-white p-7 shadow-[var(--shadow-card)] sm:p-9">
            <h2 className="text-[1.5rem] leading-[1.25]">{heading}</h2>

            {status === "sent" ? (
              <div className="py-10 text-center">
                <CircleCheck className="mx-auto h-11 w-11 text-teal-600" strokeWidth={1.8} />
                <p className="mt-4 text-[1.05rem] font-semibold text-slate-900">Thank you</p>
                <p className="measure mx-auto mt-2 text-[0.95rem] leading-[1.65] text-slate-600">
                  Your message has been sent. We will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
                <p className="mb-6 text-[0.95rem] leading-[1.65] text-slate-500">{note}</p>
                <input type="hidden" name="page" value={pathname} />
                <div className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" name="name" required />
                    <Field label="Email" name="email" type="email" required />
                  </div>
                  <Field label="Organisation" name="website" />
                  <Field label="Message" name="comment" rows={4} required />
                </div>

                {status === "error" && (
                  <p className="mt-5 flex items-center gap-2 text-[0.88rem] text-red-600">
                    <CircleAlert className="h-4 w-4 shrink-0" strokeWidth={2} />
                    Something went wrong sending your message. Please try again, or email
                    sales@trsforms.com directly.
                  </p>
                )}

                <Button type="submit" size="lg" className="mt-7" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" strokeWidth={2.4} />
                      Sending…
                    </>
                  ) : (
                    submitLabel
                  )}
                </Button>
              </form>
            )}
          </div>

          <aside className="self-start rounded-[var(--radius-card)] bg-white p-7 ring-1 ring-slate-200">
            <h3 className="text-[1.05rem]">Contact us directly</h3>
            <ul className="mt-5 space-y-4 text-[0.95rem]">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.9} />
                <a href="mailto:sales@trsforms.com" className="text-slate-700 hover:text-brand-700">
                  sales@trsforms.com
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.9} />
                <span className="text-slate-700">044-24724565 / 044-23725253</span>
              </li>
            </ul>
            <p className="mt-6 border-t border-slate-100 pt-5 text-[0.9rem] leading-[1.6] text-slate-500">
              No 23, Chakrapani Street, West Mambalam, Chennai 600 033, India
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
