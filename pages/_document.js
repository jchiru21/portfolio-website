import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* progressive-enhancement flag: enables motion gating before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.classList.add("js")',
          }}
        />
        {/* Open Graph */}
        <meta property="og:title" content="Chiranjeevi Joshi — AI/ML Engineer" />
        <meta
          property="og:description"
          content="Portfolio of Chiranjeevi Joshi, AI/ML Engineer. Founding Engineer @ HealifyAI: production LLM serving, evals, and medical AI in 8 Indian languages."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chiranjeevi-j.vercel.app" />
        <meta
          property="og:image"
          content="https://chiranjeevi-j.vercel.app/images/healifyai.png"
        />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chiranjeevi Joshi — AI/ML Engineer" />
        <meta
          name="twitter:description"
          content="Portfolio of Chiranjeevi Joshi, AI/ML Engineer. Founding Engineer @ HealifyAI: production LLM serving, evals, and medical AI in 8 Indian languages."
        />
        <meta
          name="twitter:image"
          content="https://chiranjeevi-j.vercel.app/images/healifyai.png"
        />
      </Head>
      <body className="antialiased" data-motion="full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
