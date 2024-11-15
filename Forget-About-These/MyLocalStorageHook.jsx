function MyLocalStorageHook(key, value) {
  const setItem = (key, value) => {
    localStorage.setItem(`${key}`, JSON.stringify(value));
  };

  const getItem = (key) => {
    // return localStorage.getItem(key)
    //   ? JSON.parse(localStorage.getItem(key))  // bu daha sağlıklı
    //   : null;

    return JSON.parse(
      localStorage.getItem(key) ||
        "['localStorage kaydında böyle bir key yok!']"
    );
  };

  //Ve bu durumda, JSON.parse(null) kullanmak hata verir çünkü null değeri JSON.parse ile işlenemez.

  const removeItem = (key) => {
    localStorage.removeItem(key);
  };

  const clear = () => {
    localStorage.clear();
  };

  return { setItem, getItem, removeItem, clear };
}

export default MyLocalStorageHook;

/* KULLANIM SENARYOSU 

import MyLocalStorageHook from './MyLocalStorageHook';

// Hook'u kullanarak localStorage işlemleri
const { setItem, getItem, removeItem, clear } = MyLocalStorageHook();

// 1. Veriyi localStorage'a kaydetme
setItem('user', { name: 'John', age: 30 });

// 2. Veriyi localStorage'tan okuma
const user = getItem('user');
console.log(user); // { name: "John", age: 30 }

// 3. Eğer 'nonExistent' key'ini okuma (bulunmazsa hata mesajı döner)
const missingItem = getItem('nonExistent');
console.log(missingItem); // ['localStorage kaydında böyle bir key yok!']

// 4. Veriyi localStorage'tan silme
removeItem('user');

// 5. Tüm verileri localStorage'tan temizleme
clear();

*/

/* 
KURCALARKEN ÖĞRENDİKLERİM 
  return JSON.parse( localStorage.getItem(key) || "['localStorage kaydında böyle bir key yok!']" );
    Bu şekilde bir or mantıksal operetörü kullanımında;
      Öncelik Soldaki değer - Eğer Soldaki değer falsy bir ifade ise Sağdaki değer

  Arrow function return kelimesi ile return edilecek çıktı aynı SATIRDA olmalıdır.
    return 
    JSON.parse( localStorage.getItem(key) || "['localStorage kaydında böyle bir key yok!']" );
      Böyle bir kullanımda satır sonu otomatik olarak ; tamamlanır ve boş return oluşur dikkat !!!
*/
