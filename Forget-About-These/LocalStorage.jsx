/* */

/* 
LocalStorage tarayıcının yerleşik bir özelliğidir; 
dolayısıyla import edilmesi gerekmez. JavaScript ile doğrudan kullanılabilir.
*/

/* 
LocalStorage, tarayıcının sunduğu bir veri depolama alanıdır. 
Kullanıcı kapatıp açsa bile kalıcıdır ve key-value (anahtar-değer) çifti şeklinde veri saklar.
Bir web uygulamasında kullanıcının ayarlarını, tercihlerini vs... saklamak için kullanılabilir.
*/

// Her tarayıcıda yaklaşık 5 MB KADAR veri saklanabilir ve sadece STRİNG veri saklayabilir.

/*
Örnek işlevleri:
*/

localStorage.setItem(key, value):        // Belirtilen anahtar altında veri saklar.
localStorage.getItem(key):               // Belirtilen anahtardaki veriyi alır.
localStorage.removeItem(key):            // Belirtilen anahtardaki veriyi siler.
localStorage.clear():                    // Tüm localStorage verilerini temizler.

/* Bu sayede, oturum bilgileri (except password), kullanıcı tercihleri ve temalar gibi verileri depolamak için kullanılabilir. */

/* 
Number veri türünü LocalStroage içine SET ETMEK İÇİN herhangi bir dönüştürücüye ihtiyaç duyulmaz.
JS otomatik olarak stringe çevirir. (toString() veya JSON.stringify() gerekli değildir.)

Fakat GET ETMEK İÇİN parseInt() veya parseFloat() gereklidir.
*/

const age = 30;
localStorage.setItem('age', age); // Bu sayı olarak kaydedildi ancak string olarak tutulacak
// istersen localStorage.setItem('age', '30'); böyle yaz.

const ageFromStorage = localStorage.getItem('age'); // String olarak gelir

const ageNumber = parseInt(ageFromStorage, 10); // değeri 10'luk sistemde bir sayıya  dönüştürür.
const ageNumber = parseFloat(ageFromStorage, 10); // değeri ondalıklı sayıya dönüştürür.
// istersen radix parametresi olan 10 sayısını yazmadan parseFloat(ageFromStorage) direkt böyle yaz
// Çünkü float zaten sürekli ondalıklı yazar. ( radix >> kök )
const ageNumber = Number(ageFromStorage); // değeri direkt sayıya dönüştürür. (neyse o)

/* 
Boolean veri türünü LocalStroage içine SET ETMEK İÇİN toString() veya JSON.stringify() gereklidir.

GET ETMEK İÇİN dönen değerin string true veya eşitliği ile booelean true veya false değeri oluşturulur.
*/
const deger  = true;
localStorage.setItem('deger', deger.toString());
// istersen localStorage.setItem('deger', 'true'); yazabilirsin

const degerFromStorage = localStorage.getItem('true'); // 'true' (string)
const deger = BooleanFromStorage === 'true'; // 'true' ise gerçek true değeri döner
// deger değişkaeni artık gerçek bir boolean veri taşıyor.



/*
Array - Object data türlerinde SET VE GET işlemleri JSON  yöntemleri verilerek
*/

const user = { name: 'Alice', age: 25 };
const userJSON = JSON.stringify(user);
console.log(userJSON); // Çıktı: "{"name":"Alice","age":25}"  //  " {"",""} "

const userParsed = JSON.parse(userJSON);
console.log(userParsed); // Çıktı: { name: 'Alice', age: 25 }


const fruits = ['Apple', 'Banana', 'Cherry'];
localStorage.setItem('fruits', JSON.stringify(fruits));
console.log(localStorage.getItem('fruits')); 
// Çıktı: '["Apple","Banana","Cherry"]' // " [ "" , "" , "" ] "

const storedFruits = localStorage.getItem('fruits');
const fruitsArray = JSON.parse(storedFruits);

console.log(fruitsArray); 
// Çıktı: ['Apple', 'Banana', 'Cherry']
console.log(fruitsArray[0]); 
// Çıktı: 'Apple'

/* 
KURCALARKEN ÖĞRENDİKLERİM
    parseInt(x,y)  >> tam sayıya çevir
    parseFloat(x)  >> ondalıklı sayıya çevir
    Number(x)      >> direkt sayıya çevir (neyse o)
*/