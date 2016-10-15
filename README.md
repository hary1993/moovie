# Mozitrailer értékelő
##Harsányi Ádám G50Z8C
## Követelményanalízis

A beadandó célja egy kis webes alkalmazás elkészítése szerveroldali technológiák segítségével. A feladatnak minimálisan tartalmaznia kell:

   + az órai munkától jelentősen el kell térnie
   + legalább négy modellt, legyen bennük egy-sok és sok-sok kapcsolatban álló reláció is.
   + legalább három tábla adatait szerkeszteni kell tudni: lista, új, módosít, töröl (vagy inaktívvá tesz)
   + legyenek benne csak hitelesítés után elérhető funkciók (autentikáció)
   + ügyelni kell, hogy csak a megfelelő adatokhoz férjen hozzá a megfelelő felhasználó (autorizáció)
   
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

###Szerepkörök
+ Regisztrációt nem igénylő

   + Látogató (`visitor`)

+ Regisztrációhoz kötött
   + Admin (`admin`)
   + Bejelentkezett felhasználó(`logged in`)
