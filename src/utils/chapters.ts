import type { Chapter, Beduerfnis, Dauer } from '../data/chapters';

export interface FilterOptions {
  beduerfnis?: Beduerfnis;
  dauer?: Dauer;
}

export function getActiveChapters(chapters: Chapter[]): Chapter[] {
  return chapters.filter((c) => c.aktiv);
}

export function getChapterBySlug(chapters: Chapter[], slug: string): Chapter | undefined {
  return chapters.find((c) => c.slug === slug);
}

export function filterChapters(chapters: Chapter[], options: FilterOptions): Chapter[] {
  return chapters.filter((c) => {
    if (!c.aktiv) return false;
    if (options.beduerfnis && c.beduerfnis !== options.beduerfnis) return false;
    if (options.dauer && c.dauer !== options.dauer) return false;
    return true;
  });
}
