# Hjelp — Oppgave 48: Er fristen utløpt?

Du skal svare på om en frist er utløpt. Den er utløpt bare når dagen i
dag er **etter** fristen — på selve fristdagen er den fortsatt gyldig.

Å tenke på:

- `Date` har `getTime()` som gir et tall du kan sammenligne. `iDag` er
  etter `frist` når `iDag.getTime() > frist.getTime()`.
- Bruk `>` (ikke `>=`) slik at samme dag gir `false`. Datoene her er på
  midnatt, så like datoer gir likt tall.
