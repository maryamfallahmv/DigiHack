# Hjelp — Oppgave 20: Parse søkerlinje

Du skal tolke en linje på formatet `"navn;alder"` og lage et
`Person`-objekt. `" Hassan ; 67 "` → `{navn: "Hassan", alder: 67}`.

Å tenke på:

- **Del** linja på semikolon (`;`). Da får du to deler: navn og alder.
  I TS kan du ta dem rett ut med destrukturering:
  `const [n, a] = linje.split(';');`.
- **Fjern mellomrom** rundt hvert felt med `trim()` — både navnet og
  tallet kan ha mellomrom rundt seg.
- Alderen kommer inn som tekst og må gjøres om til et tall:
  `Number(...)` i TypeScript, `Integer.parseInt(...)` i Java.
- `Person` er allerede laget for deg (en `type` + `lagPerson(...)` i
  TypeScript, en `record` i Java) — du kan returnere objektet direkte
  (`{navn, alder}`) eller bruke `lagPerson(...)`.
