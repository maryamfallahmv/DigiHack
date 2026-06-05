# Hjelp — Oppgave 41: Filtrér berettigede søkere

En søker er berettiget når `alder >= 18` **og** `alder < 67`. Du skal
lage en **ny** liste med bare de berettigede, i samme rekkefølge.

Én måte å tenke på:

- Lag en tom resultatliste, gå gjennom personene og legg en person til
  bare når begge betingelsene holder (`p.alder >= 18 && p.alder < 67`).
- Pass på grensene: `18` er med, `17` er ikke; `66` er med, `67` er ikke.

Tips: dette kan også gjøres på én linje med
`personer.filter(p => p.alder >= 18 && p.alder < 67)`.
