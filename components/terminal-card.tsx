"use client";
import { useState } from "react";
import { Copy } from "lucide-react";

export default function TerminalCard(){
  const cmd = "npx create-next-app hasan-portfolio --ts --tailwind";
  const [copied, setCopied] = useState(false);
  return (
    <section className="mt-8 rounded-xl border border-white/10 bg-black/40">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 text-xs text-gray-400">
        <span>terminal</span>
        <button
          onClick={()=>{navigator.clipboard.writeText(cmd); setCopied(true); setTimeout(()=>setCopied(false),1200);}}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 hover:bg-white/10"
          title="kopyala"
        >
          <Copy className="w-3 h-3"/>{copied ? "Kopyalandı" : "Kopyala"}
        </button>
      </div>
      <pre className="p-4 text-sm text-emerald-300 overflow-auto">
        <code>$ {cmd}</code>
        {"\n"}$ npm run dev
      </pre>
    </section>
  );
}
