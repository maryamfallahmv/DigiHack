/**
 * Oppgave 2 — Saksoverskrift (5 poeng)
 *
 * Alle saker i Direktoratet har en standard overskrift på formen:
 *
 *     "[saksnavn] — søknad fra [søkernavn]"
 *
 * Returner en slik overskrift for de gitte argumentene.
 */
export function formater(saksnavn: string, soekernavn: string): string {
  
  return`${saksnavn} — søknad fra ${soekernavn}`;
 
}
