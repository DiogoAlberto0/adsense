"use client";
import Script from "next/script";

export const AddScript = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3749871067204923"
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
};
