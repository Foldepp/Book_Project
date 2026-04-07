import { describe, it, expect } from 'vitest';
import { chapters } from '../data/chapters';
import { getActiveChapters, getChapterBySlug, filterChapters } from './chapters';

describe('getActiveChapters', () => {
  it('excludes inactive chapters', () => {
    const result = getActiveChapters(chapters);
    expect(result.every((c) => c.aktiv)).toBe(true);
    expect(result.length).toBe(2); // ch01 and ch02 are active, ch03 is not
  });
});

describe('getChapterBySlug', () => {
  it('returns the correct chapter for a known slug', () => {
    const result = getChapterBySlug(chapters, '01');
    expect(result?.slug).toBe('01');
    expect(result?.titel).toBe('Ankommen im Atem');
  });

  it('returns undefined for an unknown slug', () => {
    const result = getChapterBySlug(chapters, '99');
    expect(result).toBeUndefined();
  });
});

describe('filterChapters', () => {
  it('returns all active chapters when no filters applied', () => {
    const result = filterChapters(chapters, {});
    expect(result.length).toBe(2);
    expect(result.every((c) => c.aktiv)).toBe(true);
  });

  it('filters by beduerfnis', () => {
    const result = filterChapters(chapters, { beduerfnis: 'runterkommen' });
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe('01');
  });

  it('filters by dauer', () => {
    const result = filterChapters(chapters, { dauer: '2min' });
    expect(result.length).toBe(1);
    expect(result[0].slug).toBe('02');
  });

  it('applies combined beduerfnis + dauer filter', () => {
    const match = filterChapters(chapters, { beduerfnis: 'stabilisieren', dauer: '2min' });
    expect(match.length).toBe(1);
    expect(match[0].slug).toBe('02');

    const noMatch = filterChapters(chapters, { beduerfnis: 'runterkommen', dauer: '2min' });
    expect(noMatch.length).toBe(0);
  });

  it('never returns inactive chapters', () => {
    // ch03 is nachspueren/10min but aktiv:false
    const result = filterChapters(chapters, { beduerfnis: 'nachspueren' });
    expect(result.length).toBe(0);
  });
});
