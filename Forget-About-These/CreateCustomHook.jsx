/* */

//  Özel Hook Oluşturma -----------------------------------------------------------------

import { useState } from 'react';

function useCounter(baslangicDegeri = 0) { // bunu vermek zorunda değilsin undifined başlayabilir.  // ama TEHLİKELİ patlayabilir.
/* buradaki başlangıç değeri aslında kullanırken verecegımız baslangıc degerını state'ın baslangıc degerı yapıyor */

// Kullanmak EN İYİSİ //

  const [sayac, setSayac] = useState(baslangicDegeri); // Başlangıç değeri

  const arttir = () => setSayac(sayac + 1); // Arttırma fonksiyonu
  const azalt = () => setSayac(sayac - 1); // Azaltma fonksiyonu

  return [ sayac, arttir, azalt ]; // !!! ARRAY OLARAK RETURN EDİLMİŞ !!!
  // return { sayac, arttir, azalt }; // !!! obje olarak return edilmiş olsaydı ne olurdu ??? !!!
}

export default useCounter;

// Özel Hook Kullanma -------------------------------------------------------------------

import React from 'react';
import useCounter from './useCounter'; // custom hook'umuzu import etmeliyiz.

function yumurtaSayisi() {

    /* 
    EĞER OBJE OLARAK RETURN EDİLSEYDİ DESTRUC EDEBİLMEMİZ İÇİN { SÜSLÜ } PARANTEZ KULLANACAKTIK.
        --- EN ÖNEMLİSİ KAFAMIZA GÖRE DEĞİŞKEN İSİMLERİ TANIMLAYAMAYACAKTIK.
    HOOK İÇİNDEKİ SAYAÇ,ARTTIR VE AZALT 'I KULLANMAMIZ GEREKİYORDU. YOKSA DESTRUC EDEMEYİZ. ---
    (obje return ile hook'taki isimler kullanılıyor. bu durumda sıra önemli olmaz.)
    */

  // !!! ARRAY olarak return edildiği için ARRAY olarak DESTRUC edeceğiz. SIRASI ÖNEMLİ !!!
  const [ yumurtaSayisi, yumurtaEkle, yumurtaCıkar ] = useCounter(0); // Başlangıç değeri 0
  // Bu sıfır custom hook çindeki useState ' e baslangıc degerı olarak 0 verdi.

  return (
    <div>
      <p>Yumurta Sayısı:{yumurtaSayisi}</p>
      <button onClick={yumurtaEkle}>Yumurta Ekle</button>
      <button onClick={yumurtaCıkar}>Yumurta Çıkar</button>
    </div>
  );
}

export default yumurtaSayisi;


/* 
KURCALARKEN ÖĞRENDİKLERİM 
    İnitialValue useState ' e aktarılıyor. undifined hata verebilir.
    Array destruc 'da sıra önemlidir.
*/