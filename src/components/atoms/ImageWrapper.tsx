import Image from 'next/image';

interface ImageWrapperProps {
  isAmp?: boolean;
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  layout?: 'responsive' | 'intrinsic' | 'fixed' | 'fill';
}

export const ImageWrapper = ({
  isAmp = false,
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  layout = 'responsive',
}: ImageWrapperProps) => {
  if (isAmp) {
    // AMP's amp-img tag
    return (
      <amp-img
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        className={className}
      />
    );
  }

  // Next.js Image component
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
};