export type Pensjonsstatus = 'YRKESAKTIV' | 'PENSJONIST';

/**
 * Oppgave 12 — Pensjonsstatus (15 poeng)
 *
 * Avgjør om en person er pensjonist eller fortsatt yrkesaktiv.
 * Pensjonsalderen er 67 år: er personen 67 eller eldre, er hen
 * PENSJONIST, ellers YRKESAKTIV.
 *
 *     66  →  YRKESAKTIV
 *     67  →  PENSJONIST
 *     80  →  PENSJONIST
 */
export function statusFor(alder: number): Pensjonsstatus {
  // TODO
  throw new Error('Oppgave 12 — ikke implementert ennå');
}
