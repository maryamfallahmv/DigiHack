# Hjelp — Oppgave 32: Poststed-oppslag

Du får et postnummer og en oppslagstabell (`Map`) fra postnummer til
poststed. Returnér poststedet — eller "Ukjent" hvis postnummeret ikke
finnes i tabellen.

Å tenke på:

- `tabell.get(postnummer)` gir verdien, eller `undefined` hvis nøkkelen
  mangler. Bytt `undefined` ut med reserveverdien ved hjelp av `??`:
  `tabell.get(postnummer) ?? 'Ukjent'`.
- Skriv "Ukjent" nøyaktig slik — testen sammenligner eksakt.
- Tom tabell og en nøkkel som ikke finnes skal begge gi "Ukjent".
