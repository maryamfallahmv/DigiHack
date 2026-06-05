# Hjelp — Oppgave 47: Dager til frist

Du skal regne ut antall dager mellom to datoer. Tallet skal være negativt
hvis fristen allerede er passert.

Å tenke på:

- `Date` har `getTime()` som gir antall millisekunder. Differansen mellom
  to slike tall delt på antall millisekunder i et døgn (`86400000`) gir
  antall dager.
- Bruk `Math.round(...)` på resultatet — sommertid kan gjøre at ett døgn
  ikke er nøyaktig 24 timer, og avrunding fanger opp det.
- Rekkefølgen betyr noe: regn `frist - fra` så fortiden blir negativ.
