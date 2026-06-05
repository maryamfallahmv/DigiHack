# Hjelp — Oppgave 23: Første over grense

Du skal returnere **indeksen** (posisjonen) til det første beløpet som
er strengt større enn grensen — ikke selve beløpet.

Tenk slik:

- Bruk en `for`-løkke med en teller `i` fra 0 og oppover, slik at du har
  tilgang til indeksen: `for (let i = 0; i < inntekter.length; i++)`.
- Sjekk `inntekter[i] > grense` (strengt større — ikke `>=`). Er det
  sant, returner `i` med en gang.
- Kommer du gjennom hele lista uten å finne noe, returner `-1`.
- En tom liste går rett til `-1`, siden løkka ikke kjører.

Tips: `findIndex` gjør akkurat dette i én linje — og returnerer allerede
`-1` når ingen passer. «Strengt større» betyr at et beløp som er *likt*
grensen ikke teller.
