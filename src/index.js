const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
//HEADER
document.getElementById("logo-img").setAttribute("src",siteContent.images["logo-img"]);
const navLinks=document.querySelectorAll("header nav a");
navLinks.forEach((nav,i)=>{
  nav.textContent=Object.values(siteContent.nav)[i];
  nav.setAttribute("class","italic"); 
});

document
  .getElementById("cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);
document
.getElementById("middle-img")
.setAttribute("src", siteContent.images["accent-img"]);

const ctaText = document.querySelector(".cta-text h1");
ctaText.textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;

const theContentArray = Object.values(siteContent["ana-içerik"]);

const theContentBody = document.querySelectorAll(".text-content");
theContentBody.forEach((c, i) => {
  c.querySelector("h4").textContent = theContentArray[i * 2];
  c.querySelector("p").textContent = theContentArray[i * 2 + 1];
});

//CONTACT
const contactSection=document.querySelector(".contact");
contactSection.querySelector("h4").textContent=siteContent.iletisim["iletişim-h4"];

const contactSectionP=contactSection.querySelectorAll("p");
contactSectionP.forEach((p,i)=>{p.textContent=Object.values(siteContent.iletisim)[i+1]});

//COPYRIGHT

const footerC=document.querySelector("footer a");
footerC.textContent=siteContent.footer.copyright;
footerC.classList.add("bold");








