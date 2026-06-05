# Hjelp — Oppgave 27: Snitt månedsinntekt

Du skal regne ut gjennomsnittet: summen av inntektene delt på hvor mange
det er.

Tenk slik:

- Sjekk **tom liste først** og returner 0 — ellers deler du på 0 og får
  `NaN`.
- Summer alle tallene (som i forrige oppgave).
- Del summen på `inntekter.length`.

I JavaScript/TypeScript er all deling desimaldeling, så `(1 + 2) / 2`
blir `1.5` av seg selv — du trenger ingen ekstra konvertering.
