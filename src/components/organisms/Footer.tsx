// src/components/organisms/Footer.tsx

import { siteContent } from '@/lib/content';

export const Footer = () => {
  const { copyright } = siteContent.footer;
  return (
    <footer className="w-full py-6 text-center text-gray-400 border-t border-gray-700">
      <div className="container mx-auto">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};