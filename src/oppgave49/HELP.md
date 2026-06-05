# Hjelp — Oppgave 49: Validering av fødselsnummer

Et fødselsnummer på 11 sifre har to kontrollsiffer beregnet med Mod-11.
Du skal **ikke** skrive den matematikken selv — bruk biblioteket som
allerede ligger i prosjektet.

Å tenke på:

- Avhengigheten `@navikt/fnrvalidator` er allerede lagt til i
  `package.json` (kjør `npm install` om den ikke er hentet ennå). Du
  trenger bare å importere og kalle den.
- Slå opp validatoren: den eksporterer en funksjon som tar et nummer og
  gir tilbake et resultat med en `status`. `status === 'valid'` betyr at
  nummeret er gyldig. Importér funksjonen øverst i fila.
- **Sjekk null/undefined først** — før du kaller biblioteket. Bruk
  `typeof fnr !== 'string'` og returner `false` da, så et `null`-fnr gir
  `false` i stedet for en kræsj.
