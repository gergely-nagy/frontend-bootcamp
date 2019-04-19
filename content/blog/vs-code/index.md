---
title: VS Code konfigurálás
date: "2018-03-28T22:12:03.284Z"
day: 1
lecture: 1
icon: "devicon-visualstudio-plain"
description: Valószínűleg már rendelkezel egy alapértelmezett szövegszerkesztővel a számítógépeden. De webes fejlesztéshez többre lehet szükséged, mint egy Notepad vagy TextEdit.
difficulty: 1
---

## Tartalom
* [Bevezetés](#bevezetes)
* [Telepítés](#telepites)
* [Ajánlott bővítmények JavaScript / React fejlesztéshez kategóriák szerint](#bovitmenyek)
* [Gyorsbillentyűk](#gyorsbillentyuk)
* [Hasznos linkek](#hasznos_linkek)

<a name='bevezetes'> </a>

<div class="section-divider-dots"></div>

## Bevezetés

Valószínűleg már rendelkezel egy alapértelmezett szövegszerkesztővel a számítógépeden. De webes fejlesztéshez többre lehet szükséged, mint egy Notepad vagy TextEdit. 

Célszerű használni a Visual Studio Code-ot, ami egy ingyenesen letölthető szövegszerkesztő alkalmazás gazdag funckiónalitással (JavaScript IntelliSense, debuggolás, kód navigálás, refaktorálás és még sok egyébb nyelvi feature-t támogat).

A legtöbb szolgáltatás automatikusan működik telepítést követően, míg más csomagokhoz kezdeti konfigurálás elvégzése szükséges a legjobb felhasználói élmény eléréséhez.

<a name='telepites'> </a>

<div class="section-divider-dots"></div>

## Telepítés

Ajánlott rendszerkövetelmény:
```
- 1.6 GHz vagy gyorsabb processzor
- 1 GB RAM
```

Telepítéshez kövesd az alábbi platformspecifikus útmutatókat:

### Windows

1. Töltsd le a [Visual Studio Code telepítőt](https://go.microsoft.com/fwlink/?LinkID=534107) Windows-ra.
2. Miután letöltődött, futtasd a telepítőt (VSCodeUserSetup-{version}.exe). Ez csak pár percet vesz igénybe.
3. Alapértelmezettként a VS Code a következő mappa alá települ:
```C:\users\{username}\AppData\Local\Programs\Microsoft VS Code```

<p class="blog-note"><b>Megjegyés:</b> .NET Framework 4.5.2 vagy magasabb verzió szükséges a VS Code telepítéshez!</p>

<p class="blog-note"><b>Tipp:</b> A telepítés hozzáadja a Visual Studio Code-ot a %PATH%-hoz, ezután terminálból bármelyik mappában állva a 'code .' parancsal tudod megnyitni a VS Code-ot, így a mappa fájljait elkezdheted szerkeszteni!</p>

### macOS

1. Töltsd le a [Visual Studio Code telepítőt](https://go.microsoft.com/fwlink/?LinkID=534106) macOS-re.
2. Tartalom kibontásához kattints duplán a letöltött archívumra.
3. Húzd a ```Visual Studio Code.app```-ot az ```Alkalmazások``` mappába, így elérhető lesz az alkalmazás ```Launchpad```-on.
4. Rögzítheted a VS Code-ot a Dockodban ha az alkalmazásikonon jobb klikket nyomsz, és a ```Beállítások - Megtartás a Dockban``` menüpontot választod.

#### Parancssorból való futtatáshoz:

* Indítsd el a VS Code-ot
* Nyísd meg a keresőt (⇧⌘P), gépeld be a 'shell command' szöveget és nyomj a ```Shell Command: Install 'code' command in PATH``` lehetőségre.

![shell-command](./shell-command.png)

* Indítsd újra a terminált, hogy a beállítás érvényesülni tudjon, ezután terminálból bármelyik mappában állva a 'code .' parancsal tudod megnyitni a VS Code-ot, így a mappa fájljait elkezdheted szerkeszteni!

### Linux

#### Debian és Ubuntu alapú disztribúciók

A legegyszerűbb módja feltelepíteni a Visual Studio Code-ot egy Debian/Ubuntu alapú disztribúcióra ha letöltöd és telepíted a [.deb csomag (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760868) -ot grafikusan (Ubuntu Software Center), vagy terminálból a következő parancsot kiadva: 

```bash
sudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
```

A .deb csomag telepítése automatikusan telepíti az apt repot és az aláírt kulcsot ami automatikus frissítést tesz lehetővé a rendszer csomagkezelője által.

<a name='bovitmenyek'> </a>

<div class="section-divider-dots"></div>

## Ajánlott bővítmények JavaScript / React fejlesztéshez kategóriák szerint

### Snippetek

A kód snippetek segítséget nyújtanak az ismétlődő kód gyorsabb írásához, ezzel rövidítve a fejlesztési időt. Mikor telepíted a VS Code-ot, az már tartalmazni fog beépített snippeteket, de ha ez nem lenne elég könnyedén megírhatod a sajátodat, vagy egyszerűen behúzhatsz egy harmadik fél által kialakított bővítményt.

Pár bővítmény amit érdemes lehet minden JavaScript / React fejlesztőnek telepíteni:

* [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets): Legnépszerűbb csomag több mint 1.6 millió telepítéssel. Javascript nyelvi elemek ES6-os szintaktikával, Javascript és TypeScript támogatással is.

* [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets): React, Redux, Graphql és React-Native könyvtárakhoz írt kódrészletek. (Javascript és TypeScript támogatással)

### Linter

Sokkal könnyebb megérteni egy nagy kódbázist, ha a benne található kód következetes. Akár a szóköz és tab közötti váltakozás, vagy a sor végi pontosvesszőre gondolunk, fontos, hogy mindenki egységes stílusban fejlessze a forráskódot egy adott projekten belül.

Ugyanakkor meglehetősen gyakori, hogy a programozók elfelejtik melyik kódolási konvenciót kell használniuk. A szabályok helyes alkalmazása érdekében szabványokat kell érvényesíteni. Annak biztosítása érdekében, hogy a kódod megfeleljen a szabványnak, szükséged lesz egy linterre. Ezek a Visual Studio Code legnépszerűbb linterbővítményei:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrált [ESLint](https://eslint.org) VS Code-hoz. A bővítmény a megnyitott projekt könyvtárában feltelepített ESLint könyvtárat használja. Ha a mappa nem rendelkezik, a bővítmény globálisan telepített verziót keres.

Új mappákban szükség lehet egy ```.eslintrc``` konfigurációs fájl létrehozására is, amiben létrehozhatod a saját szabályrendszeredet.

* [StandardJS - JavaScript Standard Style](https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs): VSCode bővítmény a [JavaScript Standard Style](https://standardjs.com/) guide integrálásához a fejlesztőkörnyezetedbe.

* [JSLint](https://marketplace.visualstudio.com/items?itemName=ajhyndman.jslint): Linter bővítmény [JSLint](http://jslint.com/help.html)-hez.

### Node

Minden JavaScript projekt legalább egy node csomagot tartalmaz, kívéve ha valaki szeret nehéz dolgokat csinálni. 🙂 Íme néhány VS Code bővítmény, amely segít a csomagokkal való könnyebb munkában:

* [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script): A ``` package.json``` használatával validálja a felhasznált csomagokat. Biztosítja, hogy a feltelepített csomagok megfelelő verziószámmal rendelkezzenek. Kiemeli azokat a csomagokat amik nincsenek telepítve de a ```package.json``` már tartalmaz és a nem települt modulokra is figyelmeztetést ad a fejlesztőnek.

![npm-validation](./npm-validation.png)

* [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Kiegészíti az npm modulok nevét az [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) utasításokban.

![auto-complete](./auto-complete.gif)

* [Path IntelliSense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Visual Studio Code bővítmény ami segít kiegészíteni a forrásfájlok neveit.

* [Node Readme](https://marketplace.visualstudio.com/items?itemName=bengreenier.vscode-node-readme): Nyisd meg a beimportált csomagod dokumentációját a fejlesztői környezetedben.

![example-import](./example-import.gif)

* [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Megmutatja az importált npm csomag méretét a szerkesztőben. 

![import-cost](./import-cost.gif)


### Formázás

Néha írunk olyan kódrészletet, amely nincs egy sorban a többivel. Ezek mellett biztosnak kell lennünk, hogy a zárojelek és tag-ek megfelelő formátumba legyenek megformázva. Ez a folyamat hosszas lehet a fejlesztő számára, miközben nem ad hozzá új értéket a termékhez.

De szerencsére vannak bővítmények amik ezt a feladatot elvégzik helyettünk: 

* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify): Kódformázás JavaScript, JSON, CSS, Sass, és HTML támogatással. Helyes működéshez a ```.jsbeautifyrc``` fájl [konfigurálása](https://github.com/HookyQR/VSCodeBeautify/blob/master/Settings.md) szükséges.

* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Kódformázás JavaScript, TypeScript és CSS támogatással. Több mint 2 millió telepítéssel.

### Böngésző támogatás

Ha nem csak terminálban futó alkalmazásokat szeretnénk írni, elkerülhetetlen, hogy egy böngészőben futassuk forráskódunkat. Ezt a folyamatot gyorsíthatjuk fel a következő kiegészítőkkel:

* [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Könnyedén debuggolhatod JavaScript fájljaidat egy Google Chrome böngészőben ennek a bővítmény segítségével, breakpoint támogatással.

* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Helyi fejlesztői szerver live reload támogatással statikus fájlok kiszolgálására.

* [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): Ahelyett hogy böngészőt vagy CURL-t használnál a REST API teszteléséhez, telepítheted ezt az eszközt amivel ezt a folyamatot egyszerűen elvégezheted a szövegszekesztőben is.

### Tesztelés

Teszt esetek írása fontos eleme a szoftverfejlesztésnek, főleg ha a projektünk már production környezetben fut. Pár bővítmény JS fájljaink teszteléséhez:

* [Mocha sidebar](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar): [Mocha.js](https://mochajs.org/)-el való tesztelés támogatása. Dekorátorokkal törénő hibajelzés.

* [ES6 Mocha Snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets): ES6-os snippetek [Mocha.js](https://mochajs.org/)-hez.

* [Node TDD](https://marketplace.visualstudio.com/items?itemName=prashaantt.node-tdd): Tesztvezérelt fejlesztést segítő csomag.

### Egyéb

* [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype): JSON deszerializálás. Támogatott nyelvek:
TypeScript, Python, Go, Ruby, C#, Java, Swift, Rust, Kotlin, C++, Flow, Objective-C, JavaScript, Elm, és JSON Schema.

* [CodeMetrics](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-codemetrics): Feltérképezi a JavaScript és TypeScript metódusaidnak a komplexitását.


### Bővítmények telepítése parancssorból

Ha minden eddig megemlített bővítményt telepítenél, másold be a következő utasítást a parancssorba:

```bash
code --install-extension xabikos.JavaScriptSnippets;code --install-extension dsznajder.es7-react-js-snippets;code --install-extension dbaeumer.vscode-eslint;code --install-extension chenxsan.vscode-standardjs;code --install-extension ajhyndman.jslint;code --install-extension eg2.vscode-npm-script;code --install-extension christian-kohler.npm-intellisense;code --install-extension christian-kohler.path-intellisense;code --install-extension bengreenier.vscode-node-readme;code --install-extension wix.vscode-import-cost;code --install-extension HookyQR.beautify;code --install-extension esbenp.prettier-vscode;code --install-extension msjsdiag.debugger-for-chrome;code --install-extension ritwickdey.LiveServer;code --install-extension humao.rest-client;code --install-extension maty.vscode-mocha-sidebar;code --install-extension spoonscen.es6-mocha-snippets;code --install-extension prashaantt.node-tdd;code --install-extension quicktype.quicktype;code --install-extension kisstkondoros.vscode-codemetrics;
```

<a name='gyorsbillentyuk'> </a>

<div class="section-divider-dots"></div>

## Gyorsbillentyűk

```java
// Fájlok közötti keresés.
CTRL + p

// VS Code-ban használható utasítások keresése.
CTRL + Shift + p

// Duplikált értékek kijelölése.
CTRL + d

// Egy sor fel vagy le mozgatása.
ALT + Up or Down

// Sor duplázása.
ALT + SHIFT + Down

// Mindent kiejlölés kapcsos zárójelek között.
ALT + SHIFT + Right
```

<a name='hasznos_linkek'> </a>

<div class="section-divider-dots"></div>

## Hasznos linkek

* [Setting up Visual Studio Code - https://code.visualstudio.com/docs/setup/setup-overview](https://code.visualstudio.com/docs/setup/setup-overview)
* [JavaScript in Visual Studio Code - https://code.visualstudio.com/docs/languages/javascript](https://code.visualstudio.com/docs/languages/javascript)
* [Working with JavaScript - https://code.visualstudio.com/docs/nodejs/working-with-javascript](https://code.visualstudio.com/docs/nodejs/working-with-javascript)
* [VS Code marketplace - https://marketplace.visualstudio.com/vscode](https://marketplace.visualstudio.com/vscode)