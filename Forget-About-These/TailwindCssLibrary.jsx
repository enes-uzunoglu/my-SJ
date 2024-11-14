/* */


npm install -D tailwindcss // Tailwind Css kütüphanesini npm ile install etmek.


// kurulumdan hemen sonra başlatalım.


npx tailwindcss init // Tailwind Css kütüphanesini initialize etmek.


// initialize işleminden sonra explorer sekmesinde tailwind.confing.js dosyası oluşur.

/*
tailwind.confing.js configuration dosyasıdır. Burada çalışmasına yönelik özelleştirmeler yapabiliriz.
*/

/*
tailwind.confing.js içerisine bunu ekliyoruz. Zaten sadece content değişecek.
*/

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

// @tailwind directive'ini kullanarak projemizin index.css dosyasına import ediyoruz.

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Tailwind css kütüphanesini index.css'e Global Olarak Import Ederseniz:

in all components of project can use this styles.
component'a ekstra bir import yapmanıza gerek yoktur.

*/

/*
Tailwind CSS IntelliSense eklentisini  extensions sekmesinden install ederek
TailwindCss kütüphanesine ait özellikler yazarken alt açılır pencerede intelligences görebiliriz.
*/

/*
Tailwind CSS customization (özelleştirme), Tailwind'in varsayılan yapılarını değiştirmek için kullanılır. 
Özelleştirme, tailwind.config.js dosyasına yazılır ve burada 
renkler, fontlar, spacings (boşluklar) gibi ayarları değiştirebilirsiniz.
https://tailwindcss.com/docs/theme
*/

module.exports = {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  }

/*
@apply Directive ile projemize özel oluşturacağımız CSS kodlarını TailwindCss kodları ile yazabiliriz.
Uzun uzun utility class yazmak yerine, bunları apply kullanarak 
index.css dosyasında bir class altında gruplayıp kullanabiliriz.
*/

// utility classlar da tıpkı tailwindCss import'ları gibi index.css içinde yazılarak global yapılır.

.button {
    @apply bg-blue-500 text-white px-4 py-2 rounded;
  }


  /*
  Arbitrary (keyfi) Value []
  Projemizde tekrar edilmeyecek özellikleri TailwindCss kütüphanesi ile yazmak için
  özellik-[değer] şeklinde, TailwindCss'te varsayılan olarak tanımlı olmayan veya
  customization ile varsayılan olarak ayarlamadan köşeli parantezler içinde spesifik değerlerimizi yazabiliriz.
  */

  // bg-[#f90e90] gibi  özellik - [ değer ]

  export default function App() {

    return (
      <div className="p-3">
        <button className="h-9 px-6 bg-[#f90e90] text-white rounded">Satın al</button>
      </div>
    );
  };

/* 
KURCALARKEN ÖĞRENDİKLERİM
        Geliştirme esnasında kullanılan bağımlılıklar,
    package.json dosyamızda devDependencies altında bulunur.

        index.css global style alanıdır. main.jsx dosyasında import edilmesi yeterli,
    diğer dosyalarda import edilmesine gerek yoktur.
    
        @ ile başlayan directive denilen özel kodlamalar altı çizili olmasına
    sebep olabilir; fakat bu bir hata değildir.
*/
