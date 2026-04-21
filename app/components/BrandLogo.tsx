import NextImage from 'next/image';

type BrandLogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className,
  alt = "Jerrys Roofing logo",
  priority = false,
  sizes = '100vw',
}: BrandLogoProps) {
  return (
    <NextImage
      src="/neon1-cropped.png"
      alt={alt}
      width={1898}
      height={955}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
