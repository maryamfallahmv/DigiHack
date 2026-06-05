# Hjelp — Oppgave 15: Initialer

Du skal lage initialene til et navn: første bokstav i hvert ord, gjort
stor, slått sammen. `"Per Olav Hansen"` → `"POH"`.

Å tenke på:

- **Del** navnet på mellomrom. I TypeScript kan du bruke `split(/\s+/)`
  (deler på ett eller flere mellomrom); i Java `split("\\s+")`.
- For hvert ord: ta **første tegn** og gjør det til stor bokstav
  (`.toUpperCase()` i TS, `Character.toUpperCase(...)` i Java).
- **Ignorer tomme ledd** — et tomt navn eller ekstra mellomrom skal ikke
  gi noen bokstav. Bruk f.eks. `.filter(o => o.length > 0)` før du tar
  første tegn.
- Slå sammen bokstavene til slutt med `join('')`.
