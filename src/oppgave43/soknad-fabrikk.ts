import type {Soknad} from './soknad';

/**
 * Oppgave 43 — Definer og valider Soknad (15 poeng)
 *
 * Lag en Soknad, men valider feltene først. Kast en Error hvis:
 *   - saksnummer er blankt (tomt eller bare mellomrom),
 *   - navn er blankt, eller
 *   - belop er negativt (belop < 0).
 * Ellers returnér en ny Soknad. Et belop på 0 er gyldig.
 *
 *     lagSoknad("SAK-1","Aisha",1000)  →  {saksnummer:"SAK-1", navn:"Aisha", belop:1000}
 *     lagSoknad("SAK-1","",1000)       →  kaster Error
 *     lagSoknad("SAK-1","Aisha",-1)    →  kaster Error
 */
export function lagSoknad(saksnummer: string, navn: string, belop: number): Soknad {
  // TODO
  throw new Error('Oppgave 43 — ikke implementert ennå');
}
