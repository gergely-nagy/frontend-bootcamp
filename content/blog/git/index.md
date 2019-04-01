---
title: Git használata
date: "2018-03-28T22:12:03.284Z"
day: 4
lecture: 1
icon: "devicon-git-plain"
---

A Git egy nyílt forráskódú, elosztott verziókezelő szoftver, vagy másképpen egy szoftverforráskód-kezelő rendszer, amely a sebességre helyezi a hangsúlyt.

A Gitet eredetileg Linus Torvalds fejlesztette ki a Linux kernel fejlesztéséhez. Minden Git munkamásolat egy teljes értékű repository teljes verziótörténettel és teljes revíziókövetési lehetőséggel, amely nem függ a hálózat elérésétől vagy központi szervertől.

A git repository-ban egy commit rögzíti a könyvtárban lévő összes fájl pillanatképét. Olyan, mint egy óriási másolás és beillesztés, csak még jobb is!

A Git azonban a lehető legkisebb súlyokat akarja tartani, így nem csak vakon másolja a teljes könyvtárat, amikor commitolsz. Lehetõség szerint (ha lehetséges) a készletek egy sorozatként, vagy a "delta" -ként tömöríthetõk a lerakat egy változatából a másikra.

Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a "delta", from one version of the repository to the next.

```js
git clone URL
git config user.name "NAME"
git config user.email "EMAIL"
```