/* */

/*
JavaScript Date Objesi
go >>> https://www.w3schools.com/js/js_dates.asp
*/

const nowDate = new Date();

/*
İçinde culunduğun güncel date'i nowDate değişkenine atadık.
*/

console.log(nowDate);

/*
Thu Nov 14 2024 15:39:50 GMT+0300 (GMT+03:00)
*/

const knownDate = new Date("2022-03-25");

/*
Bilinen date'i knownDate değişkenine atadık.
*/

console.log(knownDate);

/*
Fri Mar 25 2022 03:00:00 GMT+0300 (GMT+03:00)
*/

new Date(); // Şu anki tarih
new Date("2022-03-25"); // Tarih stringi: "2022-03-25"                                 >>          string olmalı
new Date(2022, 2); // Yıl, ay:                                                         >>          2022 Mart
new Date(2022, 2, 25); // Yıl, ay, gün:                                                >>          2022-03-25
new Date(2022, 2, 25, 12); // Yıl, ay, gün, saat:                                      >>          2022-03-25 12:00
new Date(2022, 2, 25, 12, 30); // Yıl, ay, gün, saat, dakika:                          >>          2022-03-25 12:30
new Date(2022, 2, 25, 12, 30, 15); // Yıl, ay, gün, saat, dakika, saniye:              >>          2022-03-25 12:30:15
new Date(2022, 2, 25, 12, 30, 15, 500); // Yıl, ay, gün, saat, dakika, saniye, ms:     >>          2022-03-25 12:30:15.500
new Date(1648214400000); // Milisaniye:                                                >>          2022-03-25

/*
Unix, 1969'da Bell Labs'de geliştirilen çok kullanıcılı, çok görevli bir işletim sistemi ailesidir.
Unix Epoch (Unix Çağı)
*/

new Date(0); //   >>  1 ocak 1970   (bilgisayar bilimi ve tüm diller için)

/* 
KURCALARKEN ÖĞRENDİKLERİM
        Month değeri array olarak tutulduğu için hep bir aşağısını yazmalıyız.
    örneğin; ocak için 0, mayıs için 4, aralık için 11 vs...
        Gün,saat.dk vs... array değildir.
    Gün 1-31 aralığında,
    Saat 0-23 aralığında,
    Dakika 0-59 aralığında tanımlanır.
*/
