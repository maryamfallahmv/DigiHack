# Hjelp — Oppgave 38: Mangler i listen

Du skal finne hvilke verdier i `forventet` som **ikke** finnes i
`faktisk`. Resultatet skal følge rekkefølgen i `forventet`, og hver
verdi skal bare være med én gang.

Dette ligner mye på oppgave 37, men med motsatt logikk:

- Legg verdiene i `faktisk` i et `Set` for raske oppslag.
- Gå gjennom `forventet`. Ta med de verdiene som **ikke** finnes i
  settet (`!sett.has(...)`).
- Bruk et `Set` for resultatet hvis du vil unngå duplikater og samtidig
  beholde rekkefølgen, og lag listen med `[...sett]` til slutt.
