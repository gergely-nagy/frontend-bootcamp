---
title: Git használata
date: "2018-03-28T22:12:03.284Z"
day: 4
lecture: 1
icon: "devicon-git-plain"
difficulty: 2
---

## Bevezetés

A Git egy nyílt forráskódú, elosztott verziókezelő szoftver, vagy másképpen egy szoftverforráskód-kezelő rendszer, amely a sebességre helyezi a hangsúlyt.

A Gitet eredetileg Linus Torvalds fejlesztette ki a Linux kernel fejlesztéséhez. Minden Git munkamásolat egy teljes értékű repository teljes verziótörténettel és teljes revíziókövetési lehetőséggel, amely nem függ a hálózat elérésétől vagy központi szervertől.

A git repository-ban egy commit rögzíti a könyvtárban lévő összes fájl pillanatképét. Olyan, mint egy óriási másolás és beillesztés, csak még jobb is!

A Git azonban a lehető legkisebb súlyokat akarja tartani, így nem csak vakon másolja a teljes könyvtárat, amikor commitolsz. Lehetõség szerint (ha lehetséges) a készletek egy sorozatként, vagy a "delta" -ként tömöríthetõk a lerakat egy változatából a másikra.

Git wants to keep commits as lightweight as possible though, so it doesn't just blindly copy the entire directory every time you commit. It can (when possible) compress a commit as a set of changes, or a "delta", from one version of the repository to the next.

## Gyors használat

Forráskód letöltése repoból és felhasználó konfigurálása:

```git
git clone URL
git config user.name "NAME"
git config user.email "EMAIL"
```

Változtatások hozzáadása és visszatöltése:

```git
git status
git add .
git commit -m "MESSAGE"
git push origin master
```

## Konfigurálás

```bash
# Egy üres repo inicializálása .git rejtett könyvtárban.
git init
```

### Git Ignore

Gyakran vannak olyan fájljaink, amik jelszavakat vagy olyan paramétereket tartalmaznak (vagy telepített csomagokatat), amiket semmiképp nem szeretnénk, hogy a verziókezelőbe felkerüljenek. Ennek elkerülésére használhatjuk a git ignore-t.

Ez egy lista fájlokról/mappákról amelyeket figyelmen kívül szeretnénk hagyni a commitokban. Használatához létre kell hozni egy `.gitignore` fájlt a munkakönyvtárban , 
**NEM** a `.git`-ben.


Each line in the file is a new ignore rule. Ex. To ignore `node_modules/`, just add that as one line.

If the ignoring is added after committing the files to be ignored, they need to be untracked. Use `git rm -r --cached .` to untrack everything, and the `git add/git commit`. **Careful as this can lose progress to files.**

Also, pattern matching can be used to ignore specific files in specific places. Ex. `*.txt` ignores all text files, while `routes/*.js` ignores all javascript files in that folder. To ingore a folder, use `FOLDER/`.

Finally, use `#` to comment.