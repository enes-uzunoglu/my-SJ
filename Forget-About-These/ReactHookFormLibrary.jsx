/* */

/* 
React Hook Form (RHF) içindeki hooklar:

  [
  useForm: function,               // Form işlemleri için temel hook. Form durumunu yönetir ve form elemanlarını kaydeder.
  useFieldArray: function,         // Dinamik form elemanlarını (örneğin, birden fazla öğe eklemek veya silmek) yönetir.
  useWatch: function,              // Form elemanlarının değerlerini izler ve değişiklikleri takip eder.
  useController: function,         // Form elemanlarının kontrolünü sağlar, React Hook Form'dan bağımsız yönetim yapmanıza olanak tanır.
  useFormContext: function,        // Formun alt bileşenlerinde form durumuna erişim sağlar.
  useReset: function,              // Formu sıfırlamak için kullanılır, bütün formu ya da belirli alanları sıfırlar.
  useFormState: function,          // Formun geçerliliği, hataları ve gönderim durumu gibi genel form durumunu alır.
  useSubmit: function,             // Formu gönderir, formun geçerli olup olmadığını kontrol eder ve işlemi başlatır. 
  ]

Form yönetimi için tasarlanmış yardımcı işlevler sunar.
Ana fonksiyon, yani form gönderildiğinde çalışacak olan fonksiyondur.
Ana fonksiyon, bu hook'lar tarafından sağlanan işlevlerle desteklenir. 
*/


npm i npm install react-hook-form  // React Hook Form kütüphanesini npm ile install etmek.


/* useForm HOOK İLE OLUŞTURULAN

*{DATA OBJESİ}

{

//  register: function,                  Form elemanlarını kaydeden fonksiyon
//  handleSubmit: function,              Form verilerini işlemek için kullanılan fonksiyon
//  reset: function,                     Formu sıfırlamak için kullanılan fonksiyon
//  setValue: function,                  Form elemanlarının değerini programatik olarak ayarlamak için kullanılan fonksiyon
//  getValues: function,                 Formdaki tüm verileri veya belirli bir alanın verisini almak için kullanılan fonksiyon
//  trigger: function,                   Belirli bir alanı doğrulamak için kullanılan fonksiyon
//  *formState: {                         *{FORM DURUMUNU TUTAN OBJE}
    //  isDirty: boolean,                        Formda herhangi bir değişiklik olup olmadığını gösterir
    //  isValid: boolean,                        Formun tüm doğrulama kurallarına uyup uymadığını gösterir
    //  isSubmitting: boolean,                   Formun gönderilip gönderilmediğini gösterir
    //  isSubmitted: boolean,                    Formun submit edilip edilmediğini gösterir
    //  submitCount: number,                     Form kaç kez submit edildiğini tutar
    //  *errors: {                                *{FORM HATALARINI İÇEREN OBJE}
        //  *(ilgili key): {                                                                      *{İLGİLİ KEY'İN HATA TÜRLERİNİ VE MESAJLARINI TUTAN OBJE}
        //  type: "required" | "minLength" | "maxLength" | "pattern" | "validate" | "custom"      Hata türü                 
        //  message: "Kullanıcı adı gerekli" :string                                              Hata mesajı 
        }
    }
  }
    
}

*/

/* useForm(mode) seçenekleri 

// 'onSubmit' (Varsayılan) - Doğrulama, yalnızca form submit edildiğinde yapılır.
// Form gönderilmeden önce doğrulama yapılmaz.
mode: 'onSubmit', 

// 'onChange' - Doğrulama, input değerleri her değiştirildiğinde yapılır.
// Kullanıcı her alanı değiştirdiğinde doğrulama çalışır.
mode: 'onChange', 

// 'onBlur' - Doğrulama, input alanından odak kaybolduğunda (blur) yapılır.
// Kullanıcı inputu terk ettiğinde doğrulama yapılır.
mode: 'onBlur', 

// 'all' - Doğrulama, hem input alanından odak kaybolduğunda hem de form submit edildiğinde yapılır.
// Hem blur hem de submit aşamalarında doğrulama gerçekleşir.
mode: 'all', 

// 'onTouched' - Doğrulama, input alanına dokunulup sonra kaybolduğunda yapılır.
// Kullanıcı input alanına girip çıkar çıkmaz doğrulama yapılır.
mode: 'onTouched', 

*/

import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  {
    /* useForm hook ile oluşturulan data obejesinden destruc edilen elemanlar */
  }

  const mainFunction = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h3>Kullanıcı adı seç</h3>
      <form onSubmit={handleSubmit(mainFunction)}>
        {/*
        form'a tanımlanan handleSubmit yardımcı fonksiyonuna,
        parametre olarak ana donksiyon veriliyor.
        */}

        <label>
          <input
            type="text"
            {...register("userName", {
              required: "Bu alan boş bırakılamaz.",
              minLength: { value: 3, message: "En az 3 karakter" },
            })}
          />

          {/* 
            register yardımcı fonksiyonu ile bu inputtaki value, 
            userName key'i ile useForm hook'un oluşturduğu data objesinin,
            bir elemanı olan register fonksiyonunun, veri oluşturduğu objeye kaydolur.
            */}

          {/* 
            data objesinin elemanı olan formState durum objesinin elemanı olan error objesinin
            içindeki type ve message elemanları verilen değerleri alıyorlar.
            */}
        </label>
        <button type="submit">Kaydet</button>
        {errors.username && (
          <p style={errorStyles}>{errors.username.message}</p>
        )}
      </form>
    </div>
  );
}

/* 
KURCALARKEN ÖĞRENDİKLERİM
        yorum satırı yapacağın yer doğrudan return içi ise {/*} gerekli;
    ama herhangi bir <... /* /> içinde ise {} gerekmiyor.
*/
