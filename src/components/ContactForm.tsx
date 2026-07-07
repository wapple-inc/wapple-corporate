"use client";
import { useState } from "react";

const serviceOptions = [
  "事業戦略コンサルティング",
  "企業研修・人材開発",
  "コーチング",
  "その他・複合的なご相談",
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
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <p className="font-display text-2xl font-bold text-[#1d1d1f] mb-4">送信が完了しました</p>
        <p className="text-sm text-[#6e6e73]">2営業日以内にご連絡いたします。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">
          会社名
        </label>
        <input
          type="text"
          name="company"
          placeholder="株式会社〇〇"
          className="w-full border border-[#d2d2d7] px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#c0c0c0] focus:outline-none focus:border-[#1d1d1f] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">
          お名前 <span className="text-[#1d1d1f]">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="山田 太郎"
          className="w-full border border-[#d2d2d7] px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#c0c0c0] focus:outline-none focus:border-[#1d1d1f] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">
          メールアドレス <span className="text-[#1d1d1f]">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className="w-full border border-[#d2d2d7] px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#c0c0c0] focus:outline-none focus:border-[#1d1d1f] transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">
          ご関心のあるサービス
        </label>
        <select
          name="service"
          className="w-full border border-[#d2d2d7] px-4 py-3 text-sm text-[#1d1d1f] bg-white focus:outline-none focus:border-[#1d1d1f] transition-colors"
        >
          <option value="">選択してください</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs tracking-[0.2em] text-[#6e6e73] uppercase mb-2">
          お問い合わせ内容 <span className="text-[#1d1d1f]">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="課題の概要・ご状況・ご質問などをお気軽にご記入ください"
          className="w-full border border-[#d2d2d7] px-4 py-3 text-sm text-[#1d1d1f] placeholder-[#c0c0c0] focus:outline-none focus:border-[#1d1d1f] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#1d1d1f] text-white py-4 text-sm tracking-widest hover:bg-[#424245] transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "送信中..." : "送信する"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  );
}
