// src/components/organisms/Hero.tsx

import { siteContent } from '@/lib/content';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { ImageWrapper } from '@/components/atoms/ImageWrapper';

interface HeroProps {
  isAmp?: boolean;
}

export const Hero = ({ isAmp = false }: HeroProps) => {
  const { headline, subheadline, ctaLabel } = siteContent.home;

  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <Heading>{headline}</Heading>
        <p className="text-lg md:text-xl text-gray-300 mt-4 mb-8">
          {subheadline}
        </p>
        <Button>{ctaLabel}</Button>
      </div>
      <div className="mt-12 max-w-3xl mx-auto">
        <ImageWrapper
          isAmp={isAmp}
          src="/images/home-hero.svg"
          alt="Genshin Impact Hero Image"
          width={1024}
          height={576}
          priority={true}
          layout="responsive"
        />
      </div>
    </section>
  );
};