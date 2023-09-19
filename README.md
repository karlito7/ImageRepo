# ImageRepo

Web aplikacija za spremanje slika.

- ### **Osnovne informacije** 
Aplikacija je zamišljena da se koristi za pohranu slika, a kasnije i drugih tipova datoteka. Osnovne funkcionalnosti su:
- kreiranje novog korisnika 
- pohrana slika. Moguće je učitati jednu ili više slika istovremeno
- pregled pohranjenih slika
- brisanje pojedinih slika

Odvija se interna komunikacija sa serverom zaduženim za navedene funkcionalnosti. ([Link](https://github.com/karlito7/ImageRepoAPI.git) za repozitorij na kojem se nalazi API.

- ### **Korišteni paketi**
- Axios - vrši komunikaciju sa API-jem
- Vue.js
- Vue router
- Vuex
- Vue dropzone - paket se kroisti za drag&drop slika u kontenje koji zatim šalje podatke na server preko API rute.
- Vite - moderni build tool za pokretanje klijentske aplikacije 

- ### **ENV**
    Prije samog pokretanja projekta potrebno je kreirati ***.env*** datoteku i definirati API prema kojem će se izvršavati pozivi u svrhu dohvaćanja podataka potrebnih za nesmetani rad aplikacije.

    Zadana ruta za development:
    >VUE_APP_MANAGER_BASE_URL=http://localhost:3000

## Pokretanje lokalno

Klonirati [projekt](https://github.com/karlito7/ImageRepo.git) s GitHub-a preko terminala:

> `git clone https://github.com/karlito7/ImageRepo.git`

Otvoriti direktorij u tekst editoru ([VS Code](https://code.visualstudio.com/)):

Instalirati potrebne pakete korišteći [npm](https://www.npmjs.com/):
```
npm install
```
Pokrenuti projekt komandom:
```
npm run start
```

## Screenshotovi aplikacije

![screenshot-register](https://github.com/karlito7/ImageRepo/blob/main/src/assets/static/screenshot-register.JPG)