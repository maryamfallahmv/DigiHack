# Hjelp — Oppgave 31: Tell per kommune

Du skal telle hvor mange ganger hvert kommunenavn dukker opp, og samle
det i et `Map` fra navn til antall.

Å tenke på:

- Lag et tomt `Map<string, number>`, og gå gjennom listen ett navn av
  gangen. For hvert navn øker du tellingen for det navnet med 1.
- Første gang du ser et navn finnes det ingen telling ennå. `map.get(k)`
  gir da `undefined` — bruk `?? 0` så den starter på 0:
  `map.set(k, (map.get(k) ?? 0) + 1)`.
- En tom liste gir et tomt `Map`.
