"use client";
import { useState } from "react";

export default function ContactForm() {
  const [ok, setOk] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    // honeypot
    // @ts-ignore
    if (form.hpt.value) return;

    setLoading(true);
    const data = new FormData(form);
    // Formspree endpointini kendi hesabınla değiştir:
    const res = await fetch("https://formspree.io/f/xbldjxyz", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    setLoading(false);
    if (res.ok) {
      setOk(true);
      form.reset();
    } else {
      alert("Gönderilemedi. Lütfen e-posta ile ulaşın: hasan21memis@gmail.com");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" required placeholder="Ad Soyad" className="input" />
        <input type="email" name="email" required placeholder="E-posta" className="input" />
      </div>
      <input name="subject" placeholder="Konu (opsiyonel)" className="input" />
      <textarea name="message" required placeholder="Mesajınız" rows={5} className="input resize-y" />
      {/* honeypot */}
      <input type="text" name="hpt" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="flex items-center gap-3">
        <button disabled={loading} className="btn-solid">
          {loading ? "Gönderiliyor…" : "Gönder"}
        </button>
        {ok && <span className="text-emerald-300 text-sm">Teşekkürler! Mesajınız ulaştı.</span>}
      </div>
    </form>
  );
}
