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
  
###Nem funkcionális követelmények

+ Az általános JavaScript konvencióknak való megfelelés.
+ Adatvédelmi irányelveknek való megfelelés
   

   
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
   
###Oldalvázlatok

####Főoldal
![alt text](http://kepfeltoltes.hu/161016/Home_www.kepfeltoltes.hu_.png)

####Filmek listája
![alt text](http://kepfeltoltes.hu/161016/1248966810List_www.kepfeltoltes.hu_.png)

####Bejelentkezett felhasználó (`user`)
![alt text](http://kepfeltoltes.hu/161016/Bej_www.kepfeltoltes.hu_.png)

####Vendég (`guest`)
![alt text](http://kepfeltoltes.hu/161016/1325607624Nembej_www.kepfeltoltes.hu_.png)

###Usecase diagramm
Egy szerepkörtől független látogató usecase diagramja 
![alt text](http://kepfeltoltes.hu/161016/UseCase_Films_www.kepfeltoltes.hu_.jpg)

###Folyamat diagramm
A bejelentkezés folyamatának leírása
![alt text](http://kepfeltoltes.hu/161016/Sequence_www.kepfeltoltes.hu_.jpg)

##Adatmodell 
![alt text](http://kepfeltoltes.hu/161016/1446592701datamodellFilms_www.kepfeltoltes.hu_.jpg)

##Adatbázis terv

