import NextImage from 'next/image';

type BrandLogoProps = {
  className?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
};

export function BrandLogo({
  className,
  alt = "Jerry's Roofing logo",
  priority = false,
  sizes = '100vw',
}: BrandLogoProps) {
  return (
    <NextImage
      src="/pictures/logo-transparent.svg"
      alt={alt}
      width={1050}
      height={600}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}
