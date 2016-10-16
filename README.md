# Mozitrailer értékelő
###Harsányi Ádám G50Z8C
## Követelményanalízis

A beadandó célja egy kis webes alkalmazás elkészítése szerveroldali technológiák segítségével. A feladatnak minimálisan tartalmaznia kell:

   + az órai munkától jelentősen el kell térnie
   + legalább négy modellt, legyen bennük egy-sok és sok-sok kapcsolatban álló reláció is.
   + legalább három tábla adatait szerkeszteni kell tudni: lista, új, módosít, töröl (vagy inaktívvá tesz)
   + legyenek benne csak hitelesítés után elérhető funkciók (autentikáció)
   + ügyelni kell, hogy csak a megfelelő adatokhoz férjen hozzá a megfelelő felhasználó (autorizáció)
   
###Funkcionális követelmények

  + Kellően megbízható (biztonsági szempontból) és stabil szerveroldal - Backend
  + Az oldal fő funkciójához csak regiszrtált felhasználók férhetnek hozzá.
  + A regisztrált felhasználóknak különbőző szerepköre lehet: `admin` vagy `user`, mely meghatározza, hogy milyen fő funkciókhoz fér hozzá az adott felhasználó.
  + Adminként új filmet lehet listához adni törölni vagy módosítani annak tartalmát
  + Bejelentkezett felhasználó tudjon kommentelni és értékelni, míg a nem bejelentkezett csak a trailerek linkjeihez fér hozzá.
  
###Nem funkcionális követelmények

+ Az általános JavaScript konvencióknak való megfelelés.
+ Adatvédelmi irányelveknek való megfelelés
+ Felhasználóbarát, ergonomikus elrendezés és kinézet.
+ Gyors működés.
+ Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.
   
### Használatieset-modell
Az alkalmazásban a felhasználóknak premier filmek trailerének megnézésére van lehetőségük. Az oldal nem kötött regisztrációhoz, azonban új funkciók érhetőek el ezzel. A filmek kategóriákba sorolhatóak, így meg lehet jeleníteni a csak egy kategóriába tartozó filmeket. Az alkalmazás funkciói közé tartozik továbbá a bejelentkezett felhasználók számára a filmek értékelése és hozzászólás fűzése is.

##Tervezés
###Végpontok

Az oldal az alábbi végpont-szerkezet alapján épül fel:

+ GET /: főoldal
+ GET /login: bejelentkező oldal
+ POST /login: bejelentkezési adatok felküldése
+ GET /profile: profiladatok
+ GET /films: filmlista
+ GET /films/id: film megtekintése
+ GET /films/create: új film felvitele, űrlap megjelenítése
+ POST /films/create: új film felvitele, adatok küldése
+ GET /films/edit: film szerkesztése, űrlap megjelenítése
+ POST /films/edit: film szerkesztése,  adatok küldése
+ POST /films/delete: film törlése, adatok küldése

###Szerepkörök
+ Regisztrációt nem igénylő

   + Látogató (`visitor`)

+ Regisztrációhoz kötött
   + Admin (`admin`)
   + Bejelentkezett felhasználó(`user`)
  
###Oldaltérkép
Publikus:

- Főoldal
- Filmek böngészése
    + Trailer megtekintése
- Belépés
- Regisztráció

Felhasználó
- Kilépés
- Kommentelés
- Értékelés
    
Admin
- Új film felvitele
- Film módosítása
- Film törlése
   
###Oldalvázlatok

####Főoldal
![home](https://github.com/hary1993/moovie/blob/master/images/Home.PNG)

####Filmek listája
![film list](https://github.com/hary1993/moovie/blob/master/images/List.PNG)

####Bejelentkezett felhasználó (`user`)
![user](https://github.com/hary1993/moovie/blob/master/images/Bej.PNG)

####Vendég (`guest`)
![guest](https://github.com/hary1993/moovie/blob/master/images/Nembej.PNG)

###Usecase diagramm
Egy szerepkörtől független látogató usecase diagramja 
![usecase](https://github.com/hary1993/moovie/blob/master/images/UseCase%20Films.jpg)

###Folyamat diagramm
A bejelentkezés folyamatának leírása
![sequence](https://github.com/hary1993/moovie/blob/master/images/Sequence.jpg)

##Adatmodell 
![datamodell](https://github.com/hary1993/moovie/blob/master/images/datamodell.jpg)
