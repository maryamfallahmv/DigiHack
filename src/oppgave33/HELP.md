# Hjelp — Oppgave 33: Grupper etter kategori

For hver søker bestemmer du en kategori-streng ut fra månedslønnen, og
teller hvor mange som havner i hver kategori.

Å tenke på:

- Kategoriene er de samme tersklene som tidligere: under 30000 → "LAV",
  til og med 60000 → "MIDDELS", over 60000 → "HOY". Pass på grensene:
  30000 og 60000 er "MIDDELS".
- Skriv kategoriene nøyaktig slik (store bokstaver, "HOY" uten Ø) —
  testen sammenligner eksakt.
- Dette er en frekvenstelling som i oppgave 31, men du finner først
  kategorien per søker og teller på den:
  `m.set(kat, (m.get(kat) ?? 0) + 1)`.
- En tom liste gir et tomt `Map`.
