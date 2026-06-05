export type SaksStatus = 'MOTTATT' | 'UNDER_BEHANDLING' | 'VEDTAK';

/**
 * Oppgave 44 — Saksstatus-overgang (15 poeng)
 *
 * En sak går gjennom statusene MOTTATT → UNDER_BEHANDLING → VEDTAK.
 * VEDTAK er sluttstatus (terminal) og går ikke videre.
 *
 *     nesteStatus('MOTTATT')           →  'UNDER_BEHANDLING'
 *     nesteStatus('UNDER_BEHANDLING')  →  'VEDTAK'
 *     nesteStatus('VEDTAK')            →  'VEDTAK'
 *
 * Bruk en switch på status.
 */
export function nesteStatus(status: SaksStatus): SaksStatus {
  // TODO
  throw new Error('Oppgave 44 — ikke implementert ennå');
}
