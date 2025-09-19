// src/app/(routes)/amp/page.tsx

import { HomePageTemplate } from '@/components/templates/HomePageTemplate';
import { ampMetadata } from '@/lib/metadata';
import styles from './amp.module.css';

// AMP Boilerplate
const AmpBoilerplate = () => (
  <style
    amp-boilerplate=""
    dangerouslySetInnerHTML={{
      __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`,
    }}
  />
);

// AMP Page Component
export default function AmpPage() {
  return (
    <html amp="" lang="id">
      <head>
        <meta charSet="utf-8" />
        <title>{ampMetadata.title}</title>
        <meta name="description" content={ampMetadata.description} />
        <link rel="canonical" href={ampMetadata.canonical} />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        
        {/* AMP Scripts */}
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        
        <AmpBoilerplate />
        <noscript>
          <style
            amp-boilerplate=""
            dangerouslySetInnerHTML={{
              __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`,
            }}
          />
        </noscript>
        
        {/* Inlined CSS for AMP */}
        <style
          amp-custom=""
          dangerouslySetInnerHTML={{
            __html: styles.css,
          }}
        />
      </head>
      <body>
        <HomePageTemplate isAmp={true} />
      </body>
    </html>
  );
}

// Menonaktifkan layout default dari Next.js untuk halaman AMP
export const metadata = {
  robots: {
    index: false, // Disarankan untuk tidak mengindeks layout ini secara terpisah
  },
};