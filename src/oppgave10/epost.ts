/**
 * Oppgave 10 — Gyldig e-post (forenklet) (10 poeng)
 *
 * Sjekk om en e-postadresse er gyldig etter en forenklet regel:
 *
 *  - den inneholder nøyaktig én "@",
 *  - det er minst ett tegn FØR "@",
 *  - delen etter "@" (domenet) inneholder et punktum "." som verken er
 *    først eller sist i domenet.
 *
 *     "aisha@nav.no"  →  true
 *     "aishanav.no"   →  false   (ingen @)
 *     "aisha@navno"   →  false   (ingen . i domenet)
 *     "aisha@.no"     →  false   (. er først i domenet)
 *     "@nav.no"       →  false   (ingenting før @)
 */
export function erGyldig(epost: string): boolean {
  
    const at = epost.indexOf('@');

  if (at <= 0) return false;

  if (epost.indexOf('@', at + 1) !== -1) return false;

  const domene = epost.slice(at + 1);
  const dot = domene.indexOf('.');

  if (dot <= 0 || dot === domene.length - 1) return false;

  return true;
}
