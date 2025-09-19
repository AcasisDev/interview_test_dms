// src/lib/content.ts

interface SiteContent {
  site: {
    name: string;
    locale: string;
    baseUrl: string;
  };
  home: {
    headline: string;
    subheadline: string;
    ctaLabel: string;
  };
  footer: {
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  site: {
    name: "Genshin Impact Showcase",
    locale: "id-ID",
    baseUrl: process.env.NODE_ENV === 'production' 
      ? "https://your-production-domain.com" 
      : "http://localhost:3000",
  },
  home: {
    headline: "Jelajahi Dunia Ajaib Teyvat",
    subheadline:
      "Temukan karakter favorit Anda, bangun tim impian, dan taklukkan setiap tantangan. Homepage ini dibuat dengan Next.js dan AMP untuk performa maksimal.",
    ctaLabel: "Mulai Petualangan",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} HoYoverse. Dibuat untuk Interview Test.`,
  },
};