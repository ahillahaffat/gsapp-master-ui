"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiChevronDown, FiHome, FiMail } from "react-icons/fi";
import {
  FaWhatsapp, FaInstagram, FaTiktok,
  FaLinkedin, FaYoutube, FaFacebook,
} from "react-icons/fa";

const NAVY  = "#032972";
const DARK  = "#0d1b3e";
const MUTED = "#6B7A99";
const SERIF = "'Cormorant Garamond', serif";

function BlueLine({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gradient-to-r from-transparent via-[#032972] to-transparent h-[1px] ${className}`} />
  );
}

const SUBJECTS = [
  "BIM Modeling & Coordination",
  "Digital Twin Development",
  "Geospatial & Surveying",
  "Infrastructure Planning",
  "Industrial / Plant Modeling",
  "Research & Technology Partnership",
];

const CONTACTS = [
  {
    icon: FiHome,
    color: NAVY,
    text: "Penny Lane 2, St. Penny Lane A1, RT.01/RW.46\nJombang, Jombang, Kec. Jombang,\nKabupaten Jombang, Jawa Timur",
    href: null,
  },
  {
    icon: FaWhatsapp,
    color: "#16a34a",
    text: "+62 6666666666",
    href: "https://wa.me/6282137676220",
  },
  {
    icon: FiMail,
    color: NAVY,
    text: "marketing@geometrika.com",
    href: "mailto:marketing@geometrika.com",
  },
];

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaTiktok,   label: "TikTok",    href: "#" },
  { icon: FaLinkedin, label: "LinkedIn",   href: "#" },
  { icon: FaYoutube,  label: "YouTube",    href: "#" },
  { icon: FaFacebook, label: "Facebook",   href: "#" },
];

type FormState = {
  name: string; email: string;
  company: string; subject: string; message: string;
};
const INIT: FormState = { name: "", email: "", company: "", subject: "", message: "" };

function FieldLabel({ label, required }: { label: string; required?: boolean }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase mb-2.5" style={{ color: NAVY, fontFamily: SERIF }}>
      {label}{required && <span className="ml-0.5" style={{ color: NAVY }}>*</span>}
    </p>
  );
}

const lineCls =
  "w-full bg-transparent border-b border-neutral-200 pb-2.5 text-sm placeholder:text-neutral-300 focus:outline-none focus:border-[#032972] transition-colors duration-200";

export default function KolaborasiPage() {
  const [form, setForm]           = useState<FormState>(INIT);
  const [submitted, setSubmitted] = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);

  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);

  const headingInView = useInView(headingRef, { once: true });
  const leftInView    = useInView(leftRef,    { once: true, margin: "-5% 0px" });
  const rightInView   = useInView(rightRef,   { once: true, margin: "-5% 0px" });

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  return (
    <main className="relative w-full overflow-hidden min-h-screen bg-white">

      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px",
        }}
      />

      <BlueLine />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 pt-[120px] pb-28">

        <div ref={headingRef} className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[11px] tracking-[0.4em] uppercase mb-6"
            style={{ color: NAVY, fontFamily: SERIF }}
          >
            Collaboration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: SERIF,
              fontWeight: 300,
              fontSize: "clamp(40px, 7vw, 96px)",
              lineHeight: 1.0,
              color: DARK,
              letterSpacing: "-0.01em",
            }}
          >
            Hubungi Kami
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={headingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="origin-left h-[1px] w-24 mt-7"
            style={{ backgroundColor: NAVY }}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 30 }}
            animate={leftInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col gap-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="leading-relaxed"
              style={{ color: MUTED, fontFamily: SERIF, fontStyle: "italic", fontSize: 16 }}
            >
              Jika Anda memiliki pertanyaan seputar kerja sama atau ingin
              memulai kolaborasi, tim kami siap membantu Anda sebaik mungkin.
            </motion.p>

            <div className="flex flex-col gap-7">
              {CONTACTS.map(({ icon: Icon, color, text, href }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={leftInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-5"
                >
                  <span
                    className="text-[10px] font-mono mt-0.5 shrink-0 w-5"
                    style={{ color: NAVY, opacity: 0.4 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="shrink-0 mt-0.5" style={{ color, fontSize: 15 }} />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="leading-relaxed whitespace-pre-line transition-opacity hover:opacity-50"
                      style={{ color: DARK, fontFamily: SERIF, fontSize: 15 }}
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="leading-relaxed whitespace-pre-line"
                      style={{ color: DARK, fontFamily: SERIF, fontSize: 15 }}>
                      {text}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <BlueLine className="opacity-20" />

            {/* Sosial */}
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-5"
                style={{ color: NAVY, fontFamily: SERIF }}>
                Ikuti Kami
              </p>
              <div className="flex items-center gap-6">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label}
                    className="transition-opacity hover:opacity-40"
                    style={{ color: DARK }}>
                    <Icon style={{ fontSize: 17 }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 30 }}
            animate={rightInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {submitted ? (

              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                  className="origin-left h-[1px] w-16"
                  style={{ backgroundColor: NAVY }}
                />
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase mb-5"
                    style={{ color: NAVY, fontFamily: SERIF }}>
                    Terkirim
                  </p>
                  <h2 style={{
                    fontFamily: SERIF, fontWeight: 300,
                    fontSize: "clamp(28px, 4vw, 52px)",
                    color: DARK, lineHeight: 1.1,
                  }}>
                    Permintaan Anda<br />Telah Diterima
                  </h2>
                  <p className="mt-5 leading-relaxed"
                    style={{ color: MUTED, fontFamily: SERIF, fontStyle: "italic", fontSize: 15 }}>
                    Tim kami akan menghubungi Anda dalam 1–2 hari kerja.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm(INIT); }}
                  className="self-start text-[10px] tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
                  style={{ color: NAVY, fontFamily: SERIF }}
                >
                  Kirim pesan lain →
                </button>
              </div>

            ) : (

              <form onSubmit={handleSubmit} className="flex flex-col gap-10">

                <BlueLine className="opacity-20" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">

                  <div>
                    <FieldLabel label="Nama Lengkap" required />
                    <input type="text" name="name" required
                      value={form.name} onChange={set("name")}
                      placeholder="Nama lengkap Anda"
                      className={lineCls} style={{ color: DARK }} />
                  </div>

                  <div>
                    <FieldLabel label="Email" required />
                    <input type="email" name="email" required
                      value={form.email} onChange={set("email")}
                      placeholder="email@perusahaan.com"
                      className={lineCls} style={{ color: DARK }} />
                  </div>

                  <div>
                    <FieldLabel label="Perusahaan" />
                    <input type="text" name="company"
                      value={form.company} onChange={set("company")}
                      placeholder="Nama perusahaan / organisasi"
                      className={lineCls} style={{ color: DARK }} />
                  </div>

                  {/* Dropdown */}
                  <div className="relative">
                    <FieldLabel label="Subject" required />
                    <button
                      type="button"
                      onClick={() => setDropOpen((p) => !p)}
                      className="w-full flex items-center justify-between border-b border-neutral-200 pb-2.5 focus:outline-none focus:border-[#032972] transition-colors duration-200"
                    >
                      <span className="text-sm" style={{ color: form.subject ? DARK : "#d1d5db" }}>
                        {form.subject || "Pilih subject"}
                      </span>
                      <FiChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                        style={{ color: NAVY }}
                      />
                    </button>
                    {dropOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-[calc(100%+6px)] left-0 right-0 z-50 bg-white border border-neutral-100 shadow-sm"
                      >
                        {SUBJECTS.map((s, i) => (
                          <button
                            key={s} type="button"
                            onClick={() => { setForm((f) => ({ ...f, subject: s })); setDropOpen(false); }}
                            className="w-full text-left px-4 py-3 transition-colors hover:bg-neutral-50 border-b border-neutral-50 last:border-b-0 flex items-center gap-3"
                          >
                            <span className="text-[10px] font-mono shrink-0"
                              style={{ color: NAVY, opacity: 0.4 }}>
                              {String(i + 1).padStart(2, "00")}
                            </span>
                            <span style={{ color: form.subject === s ? NAVY : DARK, fontFamily: SERIF, fontSize: 14 }}>
                              {s}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <FieldLabel label="Detail Kolaborasi" required />
                  <textarea
                    name="message" required
                    value={form.message} onChange={set("message")}
                    placeholder="Jelaskan kebutuhan proyek, scope pekerjaan, timeline, dan informasi teknis yang relevan..."
                    rows={5}
                    className={`${lineCls} resize-none`}
                    style={{ color: DARK }}
                  />
                </div>

                <BlueLine className="opacity-20" />

                <div className="flex items-center justify-between">
                  <p className="text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: MUTED, fontFamily: SERIF }}>
                    Field bertanda * wajib diisi
                  </p>
                  <button type="submit"
                    className="group flex items-center gap-3 transition-opacity hover:opacity-50">
                    <span className="text-[11px] tracking-[0.25em] uppercase"
                      style={{ color: DARK, fontFamily: SERIF }}>
                      Kirim Permintaan
                    </span>
                    <span
                      className="h-[1px] w-8 transition-all duration-300 group-hover:w-14"
                      style={{ backgroundColor: NAVY }}
                    />
                  </button>
                </div>

              </form>
            )}
          </motion.div>

        </div>
      </div>

      <BlueLine />
    </main>
  );
}