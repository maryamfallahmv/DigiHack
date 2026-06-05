# Hjelp — Oppgave 8: Gyldig postnummer

Et gyldig postnummer er nøyaktig fire sifre — verken færre eller flere,
og ingen andre tegn enn `0`–`9`.

Å tenke på:

- Du kan sjekke begge kravene på én gang med et **regulært uttrykk**:
  `/^\d{4}$/.test(postnummer)` er sann bare når hele strengen er fire
  sifre. `^` og `$` låser uttrykket til start og slutt, så lengden må
  stemme.
- Den tomme strengen `""` har null sifre og skal gi `false`.
