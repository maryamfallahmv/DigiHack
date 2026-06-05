# Hjelp — Oppgave 28: Fjern duplikater

Du skal lage en ny liste med hvert tall bare én gang. Det er den
**første** forekomsten som teller, og rekkefølgen skal bevares.

Tenk slik:

- Et `Set` i JavaScript husker hvert element bare én gang **og** bevarer
  rekkefølgen de ble lagt inn i.
- Lag et `Set` av tallene og gjør det om til en liste igjen.

Tips: `[...new Set(tall)]` gjør akkurat dette i én linje. Vil du heller
gjøre det for hånd, kan du gå gjennom lista og legge tallet i en
resultatliste bare hvis det ikke allerede er der.
