# Kalenderverktyg i Javascript.

## Installation

Projektet är förinställt med skript i `package.json` filen för att du enkelt ska kunna köra starta och testa projektet, det görs med `npm run <script-name>`.

Nedan har du en lista på de olika skripten som kan köras i terminalen:

- `npm install` - Installerar alla NodeJS moduler (körs en gång).
- `npm run update` - Uppdaterar testerna, behöver köras om läraren har ändrat dem.
- `npm run dev` - Startar utvecklingsservern och öppnar projektet i Chrome.
- `npm test` - Startar utvecklingsservern och Cypress så du kan jobba med kravlistan.
- `npm test -- --run` - Kör alla testerna en gång i terminalen.

Det räcker att bara köra `npm test` om du vill jobba med kravlistan eftersom skriptet också startar utvecklingsservern.

> Om du får felet `Cypress verification timed out` kan du förlänga tiden för verifieringen - [läs mer här](https://stackoverflow.com/questions/63667880/cypress-verification-timed-out-after-30000-milliseconds).

## Uppgiftsbeskrivning

I den här uppgiften skall ni bygga ett verktyg där användaren kan skapa och schemalägga todos. Verktyget skall visa en lista med todos och en kalender för översikt. Utöver det tekniska som skall skapas så ämnar den här uppgiften att träna på att arbeta med git och GitHub i projektform.

Para ihop er i grupp om 3 - ni väljer själva vem ni jobbar med. Läs noga igenom hela uppgiftsbeskrivningen tillsammans och börja sedan med att planera och dela upp arbetet.

## Projektet

När ni har läst hela uppgiftsbeskrivningen är det dags att strukturera ert arbete. Börja med att skapa ett repo på någons GitHub och bjud in de andra från gruppen. Lägg även upp alla ärenden (se lista nedan) som issues på GitHub och planera tillsammans vem som ska göra vad. För att få en bra och gemensam struktur kan det vara bra att göra skisser och/eller flödesdiagram över systemet så ni får en gemensam bild över vad som skall skapas. Allt förarbete ni gör med skisser eller annan diskussion bör läggas till i berörande ärende på GitHub. När det är dags att för er att börja bygga verktyget skall ni använda GitHub flow principen: 1 issue - 1 branch - 1 pull request.

Det är rekommenderat att ni gör det första ärendet tillsammans för att undvika merge konflikter. Innan ni påbörjar arbetet och tar egna ärende bör ni fundera på hur ni ska strukturera ert projekt och vilka filer som skall finnas. Exempelvis kan det vara bra att skapa en javascript fil för verktygets olika delar (todos.js, calendar.js och today.js). För att få till ett tydligare flöde i koden bör ni även skapa en huvudfil (main.js) där programmet börjar.

## Verktyget

Det ni skall skapa är ett verktyg för att lägga till och ta bort todos. Dessa todos skall visas i en lista till vänster i det grafiska gränssnittet. Till höger skall det finnas en kalender som är länkad till de todos som har skapats. Men andra ord ska todos vara kopplade till en viss dag och visas i kalendern med en siffra som representerar hur många todos som ska göras den dagen. Ni får själva ta fram en egen grafisk profil för verktyget.

_Skiss att utgå ifrån till er layout (vissa delar så som väder och bilder behöver ni inte göra)_
![image](https://user-images.githubusercontent.com/89253350/190601575-f8ef32d0-2fcc-47ff-b44b-dddb082c2db7.png)

---

### Lista av data-cy som ska finnas i koden

- Välkomstsegment för aktuell dag:`data-cy="welcome-segment"`
- Lista med alla todos: `data-cy="todo-list”`
- Elementet som innehåller alla dagarna i en månad: `data-cy="calendar-body"`
- Elementet för varje dag i kalendern: `data-cy="calendar-cell"`
- Elementet som visar dagen i en cell: `data-cy="calendar-cell-date"`
- Elementet som visar antal todos i en cell: `data-cy="calendar-cell-todos"`
- Knapp för att visa todo formulär (valfritt): `data-cy="todo-reveal-form"`
- Inputfält för titeln på en todo: `data-cy="todo-title-input"`
- Inputfält för datumet på en todo: `data-cy="todo-date-input"`
- Knapp för att spara en ny todo: `data-cy="save-todo-button"`
- Knapp för att ta bort en todo: `data-cy="delete-todo-button”`
- Knapp för att ändra en todo: `data-cy="edit-todo-button”`
- Knapp för att ändra månad till föregående månad: `data-cy="prev-month"`
- Knapp för att ändra månad till nästa månad: `data-cy="next-month"`

### Ärendelista

1. Skapa den övergripande layouten enligt skissen ovan. (G)
2. Det skall gå att använda verktyget på alla skärmstorlekar ner till 360px i bredd. (G)
3. Skapa och designa välkomstsegmentet (delen ovanför todo-listan) med tid, veckodag och datum presenteras. (G)
4. Användaren skall kunna lägga till en todo. (G)
5. Användaren skall kunna ta bort en todo. (G)
6. Skapa och designa kalendervyn med en månadsvy över aktuell månad. (G)
7. Kalendern ska visa hur många todos som är schemladaga för varje dag. (G)
8. Spara todos i local storage och visa dessa vid omladdning av sidan. (G)
9. Användaren skall kunna ändra en todo. (G)
10. Användaren skall kunna växla till andra månader i kalendervyn. (G)
11. Filtrera todolistan utifrån vald dag i kalendern, det ska gå avmarkera vald dag. (G)

OBS: Gällande krav 8, så måste alla todos sparas under nyckeln `todos` i local storage.

### Krav för godkänt

1. Uppgiften lämnas in i tid!
2. Verktyget fungerar enligt beskrivning.
3. Ärenden för godkänt är gjorda.
4. Git och GitHub har används enligt beskrivning.

**LYCKA TILL!**
