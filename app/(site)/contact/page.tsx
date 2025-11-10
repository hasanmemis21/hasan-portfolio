import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

export const metadata = { title: "İletişim" };

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">İletişim</h1>

      {/* üst kart: hızlı erişim */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 shadow-lg">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-200">
              <Mail className="w-5 h-5 text-emerald-400" />
              <a className="hover:underline" href="mailto:hasan21memis@gmail.com">hasan21memis@gmail.com</a>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <Phone className="w-5 h-5 text-emerald-400" />
              <a className="hover:underline" href="tel:+905358343426">+90 535 834 34 26</a>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>İstanbul / Avrupa</span>
            </div>

            {/* çalışma saatleri */}
            <div className="mt-4 text-sm text-gray-300">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Genelde 09:00–19:00 arası çevrimiçi</span>
              </div>
            </div>

            {/* sosyaller */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://github.com/hasanmemis21" className="btn-outlined"><Github className="w-4 h-4" /> GitHub</a>
              <a href="https://www.linkedin.com/in/hasan-memi%C5%9F-685767209" className="btn-outlined"><Linkedin className="w-4 h-4" /> LinkedIn</a>
              <a href="/hasan-memis.vcf" className="btn-outlined"><Download className="w-4 h-4" /> vCard</a>
            </div>
          </div>

          {/* form */}
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* alt CTA şeridi */}
      <section className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 flex items-center justify-between flex-col sm:flex-row gap-4">
        <p className="text-emerald-100">
          “Proje, danışmanlık ya da kısa bir görüşme” — 24 saat içinde dönüş yaparım.
        </p>
        <Link href="mailto:hasan21memis@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
          <Send className="w-4 h-4" /> E-posta Gönder
        </Link>
      </section>
    </div>
  );
}
