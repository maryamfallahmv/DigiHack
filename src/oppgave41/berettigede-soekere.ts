import type {Person} from './person';

/**
 * Oppgave 41 — Filtrér berettigede søkere (15 poeng)
 *
 * En søker er berettiget når alderen er 18 eller mer OG under 67
 * (alder >= 18 og alder < 67). Returnér en NY liste med bare de
 * berettigede søkerne, i samme rekkefølge som i den opprinnelige listen.
 *
 *     [lagPerson("A",18)]   →  [lagPerson("A",18)]
 *     [lagPerson("A",67)]   →  []
 *     [A 30, B 70, C 17, D 50]  →  [A 30, D 50]
 */
export function filtrer(personer: Person[]): Person[] {
  // TODO
  throw new Error('Oppgave 41 — ikke implementert ennå');
}
