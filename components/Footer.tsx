"use client";

import { FormEvent, useState } from "react";
import { socialMedia } from "@/constants";

const contactEmail = "raoaditya840@gmail.com";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || "Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", message: "" });
    } catch (error) {
      if (error instanceof Error) {
        setSubmitError(error.message);
      } else {
        setSubmitError("Could not send the message.");
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      className="w-full pt-20 pb-10 bg-gradient-to-tr from-black via-gray-950 to-gray-800 relative text-white"
      id="contact"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#44c2ec]">Contact</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Ready to take your <span className="text-[#44c2ec]">digital presence</span> to the next level?
          </h1>

          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-400">
            I&apos;m open to internships, freelance work, collaborations, and full-time roles. Send a message and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center justify-center rounded-full bg-[#44c2ec] px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              Email me directly
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-rao-7044a3317/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#44c2ec]/60 hover:bg-white/10"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {socialMedia.map(({ id, icon: Icon, url, copy, email }) => (
              <div key={id} className="relative">
                {copy ? (
                  <button
                    onClick={() => handleCopy(email)}
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white transition hover:scale-105 hover:border-[#44c2ec]/50 hover:text-[#44c2ec]"
                    aria-label="Copy email address"
                  >
                    <Icon size={26} />
                  </button>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/50 text-white transition hover:scale-105 hover:border-[#44c2ec]/50 hover:text-[#44c2ec]"
                    aria-label="Open social profile"
                  >
                    <Icon size={26} />
                  </a>
                )}

                {copy && copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm text-green-400 font-medium">
                    Copied!
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur"
        >
          <h2 className="text-2xl font-bold text-white">Send a message</h2>
          <p className="mt-2 text-sm text-gray-400">This form sends directly to my inbox.</p>

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="New portfolio message" />

          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#44c2ec]/60"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-[#44c2ec]/60"
                placeholder="Tell me about the role, project, or collaboration..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-2xl bg-[#44c2ec] px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>

            {submitStatus === "success" && (
              <p className="text-sm text-green-400">Message sent. I&apos;ll get back to you soon.</p>
            )}

            {submitStatus === "error" && (
              <p className="text-sm text-red-400">
                {submitError || "Could not send the message. Check the server env key and try again."}
              </p>
            )}
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
