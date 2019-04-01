---
title: ES6-os újdonságok
date: "2018-03-28T22:12:03.284Z"
day: 2
lecture: 1
icon: "devicon-javascript-plain"
---

Az ECMAScript programozási nyelv, melyet főként webes alkalmazásokra fejlesztettek ki. A nyelv leírása ECMA szabvány.

A szabvány a Netscape által kifejlesztett JavaScript és a Microsoft által kifejlesztett JScript technológiákon alapult. Az eredeti „JavaScript” nyelvet Brendan Eich fejlesztette ki a Netscape cég részére, ami először a Netscape Navigator 2.0 böngészőben jelent meg. Innentől megtalálható volt minden Netscape böngészőben. Ezt nem sokkal követte a Microsoft Internet Explorer 3.0 kiadása, mely már szintén tartalmazta a nyelv támogatását.

## Hasznos egysoros kódrészletek

```jsx

// Összes duplikáció eltávolítása egy primitív típusú értékeket tartalmazó tömbből.
const unique = [...new Set(arr)];

// Aszinkron sleep függvény. Használat: await sleep(2000).
const sleep = (ms) => (new Promise(resolve => setTimeout(resolve, ms)));

// Írd be ezt a kifejezést, hogy a chrome debuggor megálljon ennél a sornál.
debugger;

// Sima angol. 🙂
[...].every(Number.isFinite);

// Visszaadj az összes nem "falsy" értéket egy tömbben.
[...].filter(Boolean);

// Array desctructuring
const [r, g, b, a] = [255, 0, 0, 255];

// Object desctructuring
const { width, height } = resolution;

// Gets an item from the list and wraps around to the start if n is larger than the list.
items[n % items.length];

// Console.log in array function without adding curly braces.
const addFortyTwo = number => console.log(number) || number + 42;

// Ugyanaz mint felette.
const add42 = n => (console.log(n), number + 42);

// Console.log változó nevekkel.
console.log({ a, b, c, d, e });

// Táblázatos megjelenésben logolja a  paramáterben megadott tömbböt.
const data = [{...}, {...}, {...}, {...}];
console.table(data);

// Véletlenszerű hex szín
'#' + Math.floor(Math.random() * 16777215).toString(16);

```