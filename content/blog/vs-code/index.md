---
title: VS Code konfigurálás
date: "2018-03-28T22:12:03.284Z"
day: 1
lecture: 1
icon: "devicon-visualstudio-plain"
---

Valószínűleg már rendelkezel egy alapvető szövegszerkesztővel a számítógépeden. De webes fejlesztéshez többre lehet szükséged, mint egy Notepad vagy TextEdit. 

Célszerű használni a Visual Studio Code-ot, ami egy ingyenesen letölthető szövegszerkesztő gazdag funckiónalitással (JavaScript IntelliSense, debuggolás, kód navigálás, refaktorálás és még sok egyébb nyelvi feature-t támogat).

A legtöbb szolgáltatás autómatikusan működik telepítést követően, míg más csomagokhoz alapvető konfigurálás elvégzése szüksége a legjobb felhasználói élmény eléréséhez.

## Telepítés

Ajánlott rendszerkövetelmény:
```
- 1.6 GHz vagy gyorsabb processzor
- 1 GB RAM
```

Kövesd az alábbi platformspecifikus útmutatókat:

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
4. Rögzítheted a VS Code-ot a Dockodban ha az alkalmazás ikonon jobb klikket nyomsz, és a ```Beállítások - Megtartás a Dockban``` menüpontot választod.

#### Parancssorból való futtatáshoz:

* Indítsd el a VS Code-ot
* Nyísd meg a keresőt (⇧⌘P), gépeld be a 'shell command' szöveget és nyomj a ```Shell Command: Install 'code' command in PATH``` lehetőségre.

![shell-command](./shell-command.png)

* Indítsd újra a terminált, hogy a beállítás érvényesülni tudjon,ezután terminálból bármelyik mappában állva a 'code .' parancsal tudod megnyitni a VS Code-ot, így a mappa fájljait elkezdheted szerkeszteni!

### Linux

#### Debian és Ubuntu alapú disztribúciók

A legegyszerűbb módja feltelepíteni a Visual Studio Code-ot egy Debian/Ubuntu alapú disztribúcióra ha letöltöd és telepíted a [.deb csomag (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760868) -ot grafikusan (Ubuntu Software Center), vagy terminálból a következő parancsot kiadva: 

```bash
sudo apt install ./<file>.deb

# If you're on an older Linux distribution, you will need to run this instead:
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
```

A .deb csomag telepítése autómatikusan telepíti az apt repot és az aláírt kulcsot ami automatikus frissítést tesz lehetővé a rendszer csomagkezelője által.


## Ajánlott bővítmények JavaScript / React fejlesztéshez kategóriák szerint


### Snippet

## Hasznos linkek

* [Setting up Visual Studio Code - https://code.visualstudio.com/docs/setup/setup-overview](https://code.visualstudio.com/docs/setup/setup-overview)