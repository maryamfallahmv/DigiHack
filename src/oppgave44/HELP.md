# Hjelp — Oppgave 44: Saksstatus-overgang

En sak går gjennom statusene `'MOTTATT'` → `'UNDER_BEHANDLING'` →
`'VEDTAK'`. `'VEDTAK'` er sluttstatus — den blir værende `'VEDTAK'`.

Én måte å tenke på:

- Bruk en `switch` på `status` og returnér neste status for hvert
  tilfelle.
- Husk at `'VEDTAK'` skal returnere seg selv (`'VEDTAK'`).
- TypeScript krever at funksjonen alltid returnerer en `SaksStatus` —
  pass på at alle tre tilfellene er dekket.
