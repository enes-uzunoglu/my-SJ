/* */

npm install react-toastify  // npm ile toastify kütüphanesini instal ediyoruz.

import React from "react";

import { ToastContainer, toast } from "react-toastify";

/* Toastify kütüphanesini projemize dahil ediyoruz. */

/* ToastContainer >> Toastify için gerekli html yapısı */
/* Toast >> kütüphaneyi çağırmamıza yarıyan method */

import "react-toastify/dist/ReactToastify.css";

/* Toastify kütüphanesini css özelliklerini projemize dahil ediyoruz. */

function App() {
  const notify = () => toast("Take Care!");
  /* toast methodu parantezleri içinde bildirim veriliyor. */

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />{" "}
      {/* ToastContainer gerekli html yapısını tutan React component (.jsx) */}
    </div>
  );
}

export default App;

/*
    
    toast.info('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });

*/

// ÇEŞİTLİ STİLLER MEVCUT. Success,Error,Info ...
// POP-UP PENCERESİ POZİSYONU DEĞİŞTİRİLEBİLİYOR.

/*

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce,
/>
<ToastContainer />

*/

/*
YUKARIDAKİ GİBİ DÜZENLEMELERİ
        https://fkhadra.github.io/react-toastify/introduction/
    BU ADRESTEN YAPIP KOPYALAYABİLİRSİN.
*/

/*
KURCALARKEN ÖĞRENDİKLERİM
        npm install ettikten sonra kütüphaneleri ve geliştirme araçlarını
    package.json dosyasından kontrol etmeyi alışkanlık edinebilirsin.
*/
