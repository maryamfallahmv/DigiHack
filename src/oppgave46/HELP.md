# Hjelp — Oppgave 46: Alder fra fødselsdato

Du skal regne ut hvor mange hele år en person har fylt på en gitt dato.

Å tenke på:

- Start med differansen mellom årstallene
  (`paaDato.getFullYear() - fodselsdato.getFullYear()`).
- Sjekk så om bursdagen har vært i år: sammenlign måned, og ved lik måned
  også dag. Har den ikke vært ennå, trekk fra ett år.
- Husk at `getMonth()` er **0-basert** (januar = 0). `getDate()` gir
  dagen i måneden (1–31).
- Tenk gjennom kantene: født samme dato (alder 0), og dagen før kontra
  dagen etter bursdag.
