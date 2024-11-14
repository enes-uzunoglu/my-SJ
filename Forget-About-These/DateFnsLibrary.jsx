/* */

npm install date-fns   // date-fns kütüphanesini npm ile install ediyoruz.

import { istenilen methodlar } from "date-fns";   // kullanmak istediğimiz yardımcı fonksiyonları bu paketten import ederiz."
// importları farklı locale ile dikkat!!!

/*
https://date-fns.org/docs/Getting-Started
arama çubuğuna diffe... yazınca çıkan seçeneklerden

örneğin; differenceInDays 'i seçelim
iki tarih arasındaki farkı GÜN olarak hesaplar ve bize verir.

differenceInBusinessDays >> iş günlerini
vs...
*/

const difference = differenceInDays(new Date('2024-11-20'), new Date('2024-11-14'));
// Tarihler sıralı olmalıdır. Önce geç tarih
// Bu, 14 Kasım 2024 ile 20 Kasım 2024 arasındaki GÜN farkını döndürecektir.

/* En Çok Kullanılan Date-fns Kütüphanesi Methodları */

format() // Tarihi belirtilen formatta döndürür.
parseISO() // ISO formatındaki string'i Date objesine dönüştürür.
addDays() // Verilen tarihe belirtilen gün sayısını ekler.
subDays() // Verilen tarihten belirtilen gün sayısını çıkarır.
isBefore() // Bir tarihi diğerinden önce olup olmadığını kontrol eder.
differenceInDays() // İki tarih arasındaki gün farkını hesaplar.
startOfDay() // Verilen tarihin başlangıcını (00:00:00) döndürür.
endOfDay() // Verilen tarihin bitişini (23:59:59) döndürür.

/*
JS DATE FORMATLARI ÇOK SINIRLI OLDUĞU İÇİN
DATE-FNS KÜTÜPHANESİNDEKİ FORMATLARDAN YARARLANABİLİRİZ.
*/

/*
https://date-fns.org/docs/Getting-Started
arama çubuğuna format yazınca çıkan seçeneklerden

örneğin; formatDistance 'i seçelim
*/

const a = new Date(2015, 0, 1, 0, 0, 15); // jsDate ile tarih oluşturuyoruz.
const b = new Date(2015, 0, 1, 0, 0, 0);  // jsDate ile tarih oluşturuyoruz.

const result = formatDistance(
  a,b, // virgüle dikkat
  { includeSeconds: true } // saniyeleri dahil et demek için
)
//=> 'less than 20 seconds'
// 20 saniyeden daha kısa. // cümle olarak döner.

import { tr } from 'date-fns/locale/tr'  // Localization infosunu import ediyoruz
// slash ile ayrılıyor ve importları farklı sadece "date-fns" değil !!!
// süslü parantez içindeki tr ve en sonraki tr değişebilir. Ülkeye göre

const result = formatDistance(
    a,b, // virgüle dikkat
    { includeSeconds: true }, // virgüle dikkat // saniyeleri dahil et demek için
    { locale:tr } // tarih formatını ve dili tr'de kullanılan gibi yapar. 
  )
  //=> 'less than 20 seconds'
  // 20 saniyeden daha kısa. // cümle olarak döner.

const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
    addSuffix: true // geçmişte veya gelecekte ifadesi ekler. (örnekte ago) //suffix = ek
  })
  //=> 'about 1 year ago'

/*
Yazım şu şekilde method(geçTarih , erkenTarih , includeSeconds , addSufix , locale, ...)
parametreler arasına virgül konur. ve çeşitlendirilebilir. document page should be examined.
*/

/* 
KURCALARKEN ÖĞRENECEKLERİM

    https://date-fns.org/docs/Getting-Started 

*/
