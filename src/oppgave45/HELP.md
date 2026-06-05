# Hjelp — Oppgave 45: Trygg parsing

Du skal forsøke å tolke en tekst som et heltall. Lykkes det, returnerer
du tallet; feiler det, returnerer du standardverdien i stedet.

Å tenke på:

- Trim teksten først (`s.trim()`) så mellomrom i endene ikke ødelegger.
- `Number(t)` gjør om tekst til tall, men gir `NaN` for ugyldig tekst —
  og `Number('')` blir overraskende nok `0`. Sjekk derfor både at
  teksten ikke er tom, og at resultatet faktisk er et heltall.
- `Number.isInteger(n)` er sann bare når `n` er et helt tall (ikke `NaN`,
  ikke et desimaltall). Returner standardverdien ellers.
