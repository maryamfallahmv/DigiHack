# Hjelp — Oppgave 34: Snitt per kategori

For hver kategori ("LAV", "MIDDELS", "HOY") skal du regne ut snittet av
månedslønnene til søkerne som havner der.

Å tenke på:

- Snitt = sum delt på antall. Du trenger altså to ting per kategori:
  summen av lønningene og hvor mange søkere som bidro.
- Ett triks er å holde to `Map` mens du går gjennom listen — ett for sum
  og ett for antall — og til slutt dele sum på antall for hver kategori.
- I JavaScript er all tall-deling desimaltall, så `sum / antall` gir
  riktig snitt rett fram.
- Tersklene er de samme som oppgave 33. En tom liste gir et tomt `Map`.
