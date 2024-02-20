# Kliensoldali webprogramozás csoport ZH

## Nyersanyag

Letöltés és kicsomagolás után ebbe dolgozzatok. A feladatok külön mappákba vannak elkülönítve. A megoldásotokat tömörítve töltsétek fel majd Canvasre. **Mindenki figyeljen arra, hogy jó csomagot töltsön fel!**

https://github.com/anonymus1928/Kliensoldali/blob/master/ZH/csoportzh.zip

## Feladatok

### 1. ELTE kari létszámadatok (8 pont)

A [Chart.js](https://www.chartjs.org/) javascript könyvtár segítségével készíts egy fánk (doughnut) vagy torta (pie) diagramot ! A létszámadatokat a ```1. feladat/index.html``` file-ban lévő táblázat tartalmazza. A táblázat fejléc celláinak színei határozzák meg a diagram körcikkeinek színeit!

1. CDN segítségével illeszd be a megfelelő helyre a ChartJS könyvtárat! [Segítség](https://www.chartjs.org/docs/latest/getting-started/) *(1 pont)*

2. Készíts egy objektumot és töltsd fel a táblázat alapján a szükséges adatokkal! Az objektum építésénél érdemes figyelembe venni a ChartJS szintaxisát! *(4 pont)*
  - Tipp: [Getting started](https://www.chartjs.org/docs/latest/getting-started/)
  - Tipp: [Doughnut and Pie Charts](https://www.chartjs.org/docs/latest/charts/doughnut.html)

3. Készítsd el a diagramot! *(3 pont)*

### 2. Az ELTE fókuszban (5 pont)

Adott egy ```div``` egy szöveggel, melynek elmosódottságát a szöveg viewport közepéhez meghatározott távolsága határozza meg. Teljesen középen éles, míg a viewport tetején és alján homályos, köztük átmenettel.

**A feladat többféleképpen megoldható, alább olvasható egy lehetséges gondolatmenet.**

1. Készíts egy függvényt (```getThreshold```), ami bemenetként vár egy egész számot (```n```) és visszaad egy tömböt, ami ```n + 1``` db, [0,1] közötti értékeket tartalmaz egyenletes eloszlással. *(1 pont)*
  - például: ```getThreshold(5) === [0, 0.2, 0.4, 0.6, 0.8, 1]```

2. Készíts egy ```IntersectionObserver```-t és hívd meg a ```.container``` stílusosztályú elemre! A konstruktorban a ```threshold```-nál hívd meg a ```getThreshold``` függvényt egy tetszőleges paraméterrel (például: 100; figyelj arra, hogy minél nagyobb számot adsz meg, annál többször fog lefutni a konstruktorban átadott callback függvény)! *(1 pont)*
  - Megjegyzés: A thresholdnak tömböt is át lehet adni 0 és 1 közötti törtszámokkal. Ezzel be lehet állítani, hogy mekkora arányú fedések esetén triggerelődjön a callback függvény.

3. Az observernek átadott callback függvényben a következőket kell tenned: *(3 pont)*
  - Számítsd ki az elmosódás mértékét, ehhez használhatod ezt a képletet: ```ratio = (10 - <az átfedés mértéke> * 10) * 5;```
  - Állítsd be a ```.container``` stílusosztályú divnek a ```text-shadow``` stílusszabályát a következőre: ```0 0 <a kiszámított ratio>px #000```


### 3. Inline word editor (7 pont)

Adott egy oldal valamilyen statikus szöveggel. Progresszíven szeretnénk ezt úgy felfejleszteni, hogy bizonyos szavak átírására helyben lehetőséget szeretnénk adni. A megfelelő szövegrészeket `<inline-word-editor>` tagek közé tesszük. Készíts olyan web komponenst, amely lehetővé teszi azt, hogy az így megjelölt szövegrészekre kattintva a szöveg szerkeszthető legyen, majd ott ENTER-t nyomva újra a statikus változat jelenjen meg.

_Technikai segítség_: A megjelölt szöveget rakjuk be egy `span` és egy `input` elembe is egy `form` elemen belülre. Eleinte a `span` elem jelenjen meg, majd kattintáskor az `input` mező. ENTER ütésekor a böngésző megpróbálja az űrlapot elküldeni, ekkor az `input` mező értékét vissza kell írni a `span` elembe is, és a láthatóságokat megfelelően változtatni.

```html
<p>Hello, <inline-word-editor>Class</inline-word-editor>!</p>
```

1. Készítsd el az `<inline-word-editor>` elemnek megfelelő web komponens osztályát! *(1 pont)*

2. A komponensen belül hozd létre a `form`, a `span` és az `input` elemeket. A `span` és az `input` vegyék fel a komponensbe írt szó értékét (`textContent` tulajdonságot használd a szöveg kiolvasásához). A form `display` stílusa legyen `inline-block`. A `span` háttérszíne legyen világoszöld. *(2 pont)*

3. Tüntesd el az `input` elemet! *(1 pont)*

4. A `span`-ra kattintva tüntesd el a `span`-t és jelenítsd meg az `input`-ot! *(1 pont)*

5. ENTER-t nyomva (űrlap elküldése) írd vissza az `input` értékét a `span`-ba, és a láthtóságokat is cseréld fel! *(2 pont)*




