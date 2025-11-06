import Section from "@/components/section";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const metadata = { title: "İletişim" };

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Section id="contact" title="İletişim">
        <div className="rounded-2xl p-6 bg-[--card] border border-white/5">
          <div className="grid sm:grid-cols-3 gap-4 text-gray-200">
            <a href="mailto:hasan21memis@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
              <Mail className="w-5 h-5 text-emerald-400" /> hasan21memis@gmail.com
            </a>
            <a href="tel:+905358343426" className="inline-flex items-center gap-2 hover:text-white">
              <Phone className="w-5 h-5 text-emerald-400" /> +90 535 834 34 26
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-5 h-5 text-emerald-400" /> İstanbul / Avrupa
            </span>
          </div>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/hasanmemis21" className="btn-outlined"><Github className="w-4 h-4" /> GitHub</a>
            <a href="https://www.linkedin.com/in/hasan-memi%C5%9F-685767209" className="btn-outlined"><Linkedin className="w-4 h-4" /> LinkedIn</a>
          </div>
        </div>
      </Section>
    </div>
  );
}
