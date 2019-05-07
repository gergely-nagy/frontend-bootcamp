---
title: HTML alapok
date: "2018-03-26T22:40:32.169Z"
day: 1
lecture: 2
icon: "devicon-html5-plain-wordmark"
exercise: "https://stackblitz.com"
description: A HTML egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C támogatásával.
difficulty: 2
---


A HTML (angolul: HyperText Markup Language = hiperszöveges jelölőnyelv) egy nyelv (Nem programozási nyelv, csak leírónyelv), melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C (World Wide Web Consortium) támogatásával.
Vegyünk egy példát:

```html
Helló világ!
```

Ha azt szeretnénk, hogy ez a szöveg egy külön egység legyen, bekezdéssé alakíthatjuk ha azt egy bekezdés (&lt;p>) tag-be illesztjük.

```html
<p>
  Helló világ!
</p>
```

<p class="blog-note"><b>Megjegyés:</b> A tag-ek HTML-ben NEM! case-sensitive-ek. Tehát akár csupa nagy vagy kis betűvel is írhatjuk őket! Páldául egy &lt;title> tag írható &lt;title>, &lt;TITLE> vagy akár &lt;TiTlE> ként is, mindegyik változat működni fog! De általános konvenció, hogy a html tag-eket csupa kis betűvel írjuk!</p>

<div class="section-divider-dots"></div>

## HTML elemek felépítése

![html-elem](./html-elem.png)

Egy HTML elem fő részei:

1. **Kezdőcímke:** Az elem nevét tartalmazza (ebben az esetben `h1`) zárójelekkel közrefogva. Azt jelzi, hogy az elem hol lép hatályba.
2. **Zárócímke:** Ez ugyanaz mint a kezdőcímke azzal a különbséggel, hogy az elem neve előtt `/` jelet tartalmaz. Az elem végét jelöli. Kezdőknél gyakori hiba, hogy lefelejtik a zárócímkét, ami nem várt hibákat eredményezhet.
3. **Tartalom:** Az elem tartalma. Mi esetünkben az `Ez egy főcím` szöveg.
4. **Elem:** A kezdőcímke, zárócímke és a tartalom hármast hívjuk egy elemnek.

### Egymásba ágyazás

a Html lehetővé teszi, hogy egy elem egy (vagy több) másik elemet tartalmazzon - ezt egymásba ágyazásnak nevezzük.

```html
<p>Ez egy <strong>kiemelt szöveg</strong>!</p>
```

### Blokk és inline elemek

Két kategóriára bonthatjuk a HTML elemeket megjelenésük szerint: blokkszintű elemek és inline elemek.

- A blokkszintű elemek látható blokkot képeznek az oldalon - ezek új sorban jelennek meg az előző tartalmaktól, és minden olyan tartalom ami utánna következik új sorba kerül. A blokkszintű elemek általában az oldal strukturális elemei, mint például a bekezdések, listák, navigációs menük, láblécek stb. A blokk szintű elem nem lehet beágyazva egy inline elembe, de egy másik blokk szintű elembe már igen.

- Az inline elemek azok, amelyek a blokkszintű elemeken belül vannak, és csak a dokumentum tartalmának csak kis részeit foglalják magukban (nem a teljes bekezdéseket és a tartalomcsoportokat). Egy inline elem nem okoz új sort a dokumentumban; rendszerint a szöveg egy bekezdésén belül jelennek meg, például egy ```<a>``` elem (hiperhivatkozás) vagy szöveg kiemelésre használható elemek, például a ```<em>``` vagy a ```<strong>```.

Vegyük a következő példát:

```html
<em>first</em><em>second</em><em>third</em>

<p>fourth</p><p>fifth</p><p>sixth</p>
```

Eredmény:

<em>first</em><em>second</em><em>third</em>

<p>fourth</p><p>fifth</p><p>sixth</p>

```<em>``` egy inline elem, így ahogy az alábbiakban látható, az első három elem ugyanabban a sorban helyezkedik el, és nincs szóköz közöttük. Másrészről a ```<p>``` blokk szintű elem, így minden elem egy új sorban jelenik meg, térközzel az elemek felett és alatt (a távolság a CSS alapértelmezett stílusának köszönhető, hogy a böngésző a bekezdésekre vonatkozik).

### Üres elemek

## HTML attribútumok


## HTML dokumentum felépítése


## Kommentezés

