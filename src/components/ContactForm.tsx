"use client";
import { useState } from "react";

const serviceOptions = [
  "研修・ワークショップのご相談",
  "コーチングのご相談",
  "その他のお問い合わせ",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/meewarpr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center" role="status">
        <p className="text-[26px] font-semibold text-[#1d1d1f] mb-4">送信が完了しました</p>
        <p className="text-sm text-[#6e6e73]">2営業日以内にご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-2.5">
          会社名
        </label>
        <input
          type="text"
          name="company"
          placeholder="株式会社〇〇"
          className="w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-3.5 text-[15px] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition"
        />
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-2.5">
          お名前 <span className="ml-1.5 text-[11px] font-semibold text-accent">必須</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="山田 太郎"
          className="w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-3.5 text-[15px] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition"
        />
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-2.5">
          メールアドレス <span className="ml-1.5 text-[11px] font-semibold text-accent">必須</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-3.5 text-[15px] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition"
        />
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-2.5">
          ご用件
        </label>
        <select
          name="service"
          defaultValue={serviceOptions[0]}
          className="w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-3.5 text-[15px] text-[#1d1d1f] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-[13px] font-semibold text-[#1d1d1f] mb-2.5">
          お問い合わせ内容 <span className="ml-1.5 text-[11px] font-semibold text-accent">必須</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="対象の方や人数、ご希望の時期、気になっている課題など、わかる範囲でご記入ください"
          className="w-full bg-white border border-[#d2d2d7] rounded-xl px-4 py-3.5 text-[15px] leading-[1.8] text-[#1d1d1f] placeholder-[#a1a1a6] focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group w-full inline-flex items-center justify-center gap-3 bg-accent text-white py-4 rounded-full text-[15px] font-semibold hover:bg-accent-dark transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "送信中…" : "送信する"}
        {status !== "sending" && <span className="arrow" aria-hidden="true">→</span>}
      </button>

      {status === "error" && (
        <p className="text-sm text-[#b3261e] text-center" role="alert">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  );
}
