import { iconUrl } from '../lib/icons';

interface IconProps {
  slug: string;
  className?: string;
}

export function Icon({ slug, className = '' }: IconProps) {
  const url = iconUrl(slug);
  if (!url) return null;

  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current ${className}`}
      style={{
        WebkitMaskImage: `url("${url}")`,
        maskImage: `url("${url}")`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  );
}
