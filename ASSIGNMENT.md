# Frontend ramverk

Inspirerad ifrån [stateofjs](https://stateofjs.com) där du som student väljer ett av de listade ramverken och skapar en enklare variant av sidan med det valda ramverket. OBS att Lit och Stencil inte får väljas då dessa ramverk inte kan testas med den här uppgiften.

![Example](https://user-images.githubusercontent.com/17639389/210244688-34d58e7d-1c6c-4c43-a3ec-e01f89dd7abd.jpg)

## Uppgiftsbeskrivning

Utöver att en bygga en hemsida utifrån bilden ovan i det valda ramverket ska du också hålla en muntlig presentation om ramverket. Den muntliga presentationen skall hållas med hjälp av ett presentationsverktyg och vara ca 10 minuter lång. Du ska i din presentation beskriva ramverket, hur det används, vem som har skapat det, mm. Saker som bör tas upp i presentationen är: syntax, databindning, tillståndshantering, prestanda, community, dokumentation, framtid, mm. Du ska även diskutera för- och nackdelar för när det är lämpligt att använda sig av det och hur det förhåller sig till React.

Den här readme-filens installationsinstruktioner ska uppdateras så det blir tydligt hur man bygger och kör koden när projektet är korrekt uppsatt med ramverket som du har valt.

## Installation & Utveckling

1. Skapa ett projekt med önskat ramverk exempelvis med hjälp av: `npm init vite` och följ instruktionerna. Eftersom projektmappen redan innehåller filer kan du behöva initiera ramverkskoden i en egen mapp och sedan flytta alla filerna till rooten i ditt egna projekt för att undvika att filer (README.md, .git) tas bort.
2. Skapa `.npmrc` filen och lägg till följande:

```
@plugga-tech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=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
```

3. Lägg till paketet med testerna i ditt projekt `npm i -D @plugga-tech/frontend-framework`.
4. Kör `npx plugga init` för att kopiera in testerna och nödvändiga filer till rooten av ditt projekt.
5. Säkerställ att det finns ett `dev` skript i din package.json och att dev-server'n startar på port `5173`.
6. Kör testerna med kommandot `npx plugga test` direkt via terminalen eller lägg till det som ett test-skript i din package.json fil så du kan köra det med `npm test` istället.
7. Nu är du redo att skriva koden med ditt valda ramverk för att få gröna tester.
8. Om det kommer nya uppdateringar till testerna i uppgiften kan du köra `npx plugga update` för att hämta hem det senaste.

### Lista av data-cy som ska finnas i koden

- `data-cy="chart"` diagrammet över ramverken och dess data.
- `data-cy="chart-header-cell"` varje cell i övre delen av diagrammet som visar åren (2016-2022).
- `data-cy="chart-data-cell"` varje cell i nedre delen av diagrammet som visar ramverken (även tomma).
- `data-cy="chart-circle"` värdet som visas i en cell - en färgad cirkel med en procentsats.

## Inlämning

Kodprojektet ska zippas ihop och lämnas in på läroplattformen. Presentationen ska exporteras till PDF och också lämnas in.

**Inlämningen skall alltså bestå av en zippad mapp och en PDF.**

### Krav för Godkänt

- [ ] Uppgiften har lämnats in i tid (Kod & Presentation).
- [ ] Readmefilen har uppdaterats enligt beskrivning ovan.
- [ ] Git och GitHub har använts.
- [ ] Sidan innehåller en header, footer och main.
- [ ] Sidan är responsiv.
- [ ] Sidan visar "retention" informationen som finns i [data filen](./data/index.js) i enlighet med bilden ovan.

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [ ] Sidan använder klient-routing för att gå till /retention när användaren besöker startsidan.
- [ ] Sidan använder klient-routing för att gå till /retention när användaren klickar på länken i footern.
- [ ] Sidan använder klient-routing för att gå till /interest när användaren klickar på länken i footern.
- [ ] Sidan använder klient-routing för att gå till /usage när användaren klickar på länken i footern.
- [ ] Sidan använder klient-routing för att gå till /awareness när användaren klickar på länken i footern.

_Gjorda krav ska kryssas för._
