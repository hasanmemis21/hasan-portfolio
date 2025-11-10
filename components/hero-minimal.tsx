"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

export default function HeroMinimal() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(#121417,#121417),radial-gradient(80rem_40rem_at_60%_-10%,rgba(168,85,247,.16),transparent)] p-6 sm:p-10">
      {/* dekoratif ışıklar */}
      <div className="pointer-events-none absolute -left-32 -top-32 size-[36rem] rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 size-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* SOL: metin */}
        <div>
          {/* üst rozet */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200 backdrop-blur">
            <span>TypeScript • React • Node</span>
          </div>

          {/* başlık */}
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Hasan Memiş
          </h1>

          {/* roller */}
          <div className="mt-2 text-sm text-gray-300">
            <span className="rounded-md bg-white/5 px-2 py-1 border border-white/10">
              Software Engineer
            </span>
            <span className="ml-2 rounded-md bg-white/5 px-2 py-1 border border-white/10">
              Data / AI
            </span>
            <span className="ml-2 rounded-md bg-white/5 px-2 py-1 border border-white/10">
              Computer Vision
            </span>
          </div>

          {/* açıklama */}
          <p className="mt-3 text-base md:text-lg text-gray-300 max-w-xl">
            Product-minded developer. Power BI, SQL ve makine öğrenimiyle 
            iş etkisi yaratan çözümler geliştiriyorum. 
            Gerçek zamanlı veri ve görsel modeller üzerinde çalışıyorum.
          </p>

          {/* butonlar */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/cv/Hasan_Memis_CV_TR.pdf"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 transition"
            >
              <Download className="h-4 w-4" /> CV (TR)
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 text-white px-4 py-2 hover:bg-white/10 transition"
            >
              Projeler
            </Link>

            <Link
              href="https://github.com/hasanmemis21"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 text-white px-4 py-2 hover:bg-white/10 transition"
            >
              GitHub
            </Link>
          </div>

          {/* kod şeridi */}
          <div className="mt-6 rounded-lg border border-white/10 bg-black/40 text-[13px] text-emerald-300 px-3 py-2 font-mono">
            <span className="text-gray-400">~/hasan</span>$&nbsp; building with{" "}
            <b>Next.js</b>, <b>TensorFlow</b>, <b>Power BI</b>
          </div>
        </div>

        {/* SAĞ: fotoğraf */}
        <div className="relative mx-auto size-[320px] sm:size-[380px] lg:size-[420px]">
          {/* dış çerçeve */}
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-b from-white/10 to-white/5" />
          {/* orbit çizgileri */}
          <div className="absolute inset-0 animate-spin-slow">
            <span className="absolute inset-0 border border-emerald-400/30 rounded-full rotate-6" />
            <span className="absolute inset-0 border border-indigo-400/30 rounded-full -rotate-12" />
          </div>
          {/* fotoğraf */}
          <Image
            src="/images/hasan.png"
            alt="Hasan Memiş"
            fill
            className="rounded-[28px] object-cover object-center ring-1 ring-white/10"
            sizes="(max-width:768px) 320px, 420px"
            priority
          />
          {/* küçük rozet */}
          <div className="absolute -right-5 top-1/3 grid place-items-center rounded-full border border-emerald-400/40 bg-white/80 px-3 py-2 text-xs text-black/70 backdrop-blur">
            iletişime geç
          </div>
        </div>
      </div>
    </section>
  );
}
