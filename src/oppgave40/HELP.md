# Hjelp — Oppgave 40: Finn eldste søker

Du skal finne personen med høyest alder. Hvis flere har samme alder,
velger du den **første** i listen. Hvis listen er tom, finnes det ingen
eldste — returnér `undefined`.

Én måte å tenke på:

- Hvis listen er tom, returnér `undefined` med en gang.
- Hold styr på «beste til nå» i en variabel. Gå gjennom listen og bytt
  bare til en ny person når den er **strengt** eldre (`>`, ikke `>=`).
  Da beholder du den første ved likhet.
- Returnér den beste til slutt.
