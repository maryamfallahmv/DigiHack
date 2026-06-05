# Hjelp — Oppgave 29: Sortér synkende

Du skal lage en **ny** liste med tallene sortert fra størst til minst,
uten å endre listen du fikk inn.

Å tenke på:

- `sort()` endrer listen den kalles på. For å la originalen være i fred,
  lag en kopi først med spread: `[...tall]`.
- `sort()` sorterer tekst-alfabetisk som standard — for tall må du gi en
  sammenligningsfunksjon. Synkende: `(a, b) => b - a`.
- Den siste testen sjekker nettopp at input-listen er uendret etter at
  du har kalt funksjonen — så ikke sortér `tall` direkte.
