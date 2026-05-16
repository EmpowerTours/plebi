"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { useT } from "@/lib/i18n/I18nProvider";

export function ShareBar({ url }: { url: string }) {
  const t = useT();
  const [copied, setCopied] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!qrOpen || !canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, url, {
      width: 240,
      margin: 1,
      color: { dark: "#1a1a1f", light: "#fbf8f1" },
    }).catch(() => {});
  }, [qrOpen, url]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  }

  return (
    <div className="card-warm p-4 md:p-5 flex flex-col md:flex-row gap-3 md:items-center">
      <div className="flex-1 min-w-0">
        <div className="eyebrow">{t.share.shareLink}</div>
        <div className="font-mono text-[13px] md:text-sm text-graphite truncate mt-1">{url}</div>
      </div>
      <div className="flex gap-2">
        <button className="btn btn-ghost" onClick={() => setQrOpen((v) => !v)}>
          {qrOpen ? t.share.hideQr : t.share.qrCode}
        </button>
        <button className="btn btn-primary" onClick={copy}>
          {copied ? t.share.copied : t.share.copyLink}
        </button>
      </div>
      {qrOpen && (
        <div className="basis-full flex justify-center pt-3">
          <canvas ref={canvasRef} className="rounded-lg border hairline" />
        </div>
      )}
    </div>
  );
}
