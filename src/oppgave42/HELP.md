# Hjelp — Oppgave 42: Sortér søkere

Du skal sortere personene på alder **synkende** (eldst først), og når to
er like gamle, på navn **stigende** (alfabetisk). Returnér en **ny**
liste — den opprinnelige skal ikke endres.

Én måte å tenke på:

- Lag en kopi av listen først med `[...personer]` så du ikke endrer
  originalen (`.sort()` endrer listen den kjøres på).
- I sammenligningsfunksjonen: hvis aldrene er ulike, returnér
  `y.alder - x.alder` (synkende). Hvis de er like, sammenlign navnene
  (`x.navn < y.navn ? -1 : x.navn > y.navn ? 1 : 0`).
