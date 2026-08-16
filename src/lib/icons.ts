const iconModules = import.meta.glob('../assets/icons/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function iconUrl(slug: string): string | null {
  const entry = Object.entries(iconModules).find(([path]) => path.endsWith(`/${slug}.svg`));
  return entry ? entry[1] : null;
}
