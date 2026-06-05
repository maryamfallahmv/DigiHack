# Hjelp — Oppgave 26: Sum årsinntekt

Du skal legge sammen alle tallene i lista og returnere summen.

Tenk slik:

- Start med en sum-variabel satt til 0.
- Gå gjennom lista med en `for ... of`-løkke og legg hvert tall til
  summen.
- Returner summen til slutt.

Når lista er tom, kjører ikke løkka, og summen blir stående på 0 — det er
akkurat det vi vil ha.

Tips: `inntekter.reduce((a, b) => a + b, 0)` gjør hele jobben i én linje
(startverdien `0` er det som gir riktig svar på en tom liste).
