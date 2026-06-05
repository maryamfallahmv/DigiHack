# Hjelp — Oppgave 30: Topp 3 inntekter

Du skal finne de 3 høyeste tallene og returnere dem sortert fra størst
til minst. Har listen færre enn 3 tall, returnerer du bare dem som
finnes.

Å tenke på:

- Sortér først hele listen synkende (samme idé som oppgave 29 — kopiér
  med `[...tall]` så du ikke endrer input), og ta deretter de første
  elementene.
- `slice(0, 3)` gir de tre første elementene — og hvis listen er kortere
  enn 3, gir den bare det som finnes. Du trenger altså ingen egen sjekk
  for korte lister.
