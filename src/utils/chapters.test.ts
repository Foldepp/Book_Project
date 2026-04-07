import { describe, it, expect } from 'vitest';
import { chapters } from '../data/chapters';
import { getActiveChapters, getChapterBySlug, filterChapters } from './chapters';

describe('getActiveChapters', () => {
  it('excludes inactive chapters', () => {
    const result = getActiveChapters(chapters);
    expect(result.every((c) => c.aktiv)).toBe(true);
    expect(result.length).toBe(16);
  });
});

describe('getChapterBySlug', () => {
  it('returns the correct chapter for a known slug', () => {
    const result = getChapterBySlug(chapters, '01');
    expect(result?.slug).toBe('01');
    expect(result?.titel).toBe('Ankommen bei dir selbst');
  });

  it('returns undefined for an unknown slug', () => {
    const result = getChapterBySlug(chapters, '99');
    expect(result).toBeUndefined();
  });
});

describe('filterChapters', () => {
  it('returns all active chapters when no filters applied', () => {
    const result = filterChapters(chapters, {});
    expect(result.length).toBe(16);
    expect(result.every((c) => c.aktiv)).toBe(true);
  });

  it('filters by beduerfnis runterkommen', () => {
    const result = filterChapters(chapters, { beduerfnis: 'runterkommen' });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((c) => c.beduerfnis === 'runterkommen')).toBe(true);
  });

  it('filters by beduerfnis stabilisieren', () => {
    const result = filterChapters(chapters, { beduerfnis: 'stabilisieren' });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((c) => c.beduerfnis === 'stabilisieren')).toBe(true);
  });

  it('filters by dauer 10min', () => {
    const result = filterChapters(chapters, { dauer: '10min' });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((c) => c.dauer === '10min')).toBe(true);
  });

  it('applies combined beduerfnis + dauer filter', () => {
    const match = filterChapters(chapters, { beduerfnis: 'runterkommen', dauer: '10min' });
    expect(match.length).toBeGreaterThan(0);
    expect(match.every((c) => c.beduerfnis === 'runterkommen' && c.dauer === '10min')).toBe(true);

    const noMatch = filterChapters(chapters, { beduerfnis: 'runterkommen', dauer: '2min' });
    expect(noMatch.length).toBe(0);
  });

  it('never returns inactive chapters', () => {
    const inactive = chapters.filter((c) => !c.aktiv);
    inactive.forEach((c) => {
      const result = filterChapters(chapters, { beduerfnis: c.beduerfnis });
      expect(result.find((r) => r.slug === c.slug)).toBeUndefined();
    });
  });
});
