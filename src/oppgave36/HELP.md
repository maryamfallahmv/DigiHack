# Hjelp — Oppgave 36: Unike kommuner

Du skal fjerne duplikater og returnere de unike kommunene sortert
alfabetisk stigende.

Å tenke på:

- Et `Set` inneholder hvert element bare én gang — `new Set(kommuner)`
  fjerner duplikatene for deg. Gjør det tilbake til en liste med spread:
  `[...new Set(kommuner)]`.
- Deretter sorterer du. For tekst gir `sort()` uten argument alfabetisk
  rekkefølge, som er det du vil ha her.
- En tom liste gir en tom liste.
