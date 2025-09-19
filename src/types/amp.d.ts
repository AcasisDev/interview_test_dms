// src/types/amp.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-img': {
        src: string;
        alt: string;
        width: number | string;
        height: number | string;
        layout?: 'responsive' | 'intrinsic' | 'fixed' | 'fill';
        className?: string;
      };
    }
  }
}
