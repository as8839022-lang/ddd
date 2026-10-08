/* ================= EASY EDIT AREA =================
   1) Change LOGO_FILE to your logo filename.
   2) Put the logo image in this same folder.
   3) Put phone numbers in owner1Phone / owner2Phone.
   WhatsApp links are created automatically.
==================================================== */
const EASY_EDIT = {
  LOGO_FILE: "logo.png", // Change only this filename to change the logo.
  owner1Phone: "+91 9876543210",
  owner2Phone: "+91 9876543211",
  companyEmail: "company@example.com",
  creatorEmail: "your-email@example.com"
};
const siteLogo=document.getElementById('siteLogo'); if(siteLogo) siteLogo.src=EASY_EDIT.LOGO_FILE;

// ==========================================================
// EASY EDIT AREA — CHANGE YOUR CONTACTS, PHOTOS, DESCRIPTIONS
// ==========================================================
const CONTACT = {
  owner1Phone: "+91 9017382024",
  owner2Name: "DALJEET SINGH",
  owner2Phone: "+91 8360787473",
  companyEmail: "contact@theventuspacking.com",
  creatorName: "ANMOL",
  creatorEmail: "as8839022@gmail.com"
};

// Put your own files beside this HTML file and change these names.
const MEDIA = {
  productVideo: "assets/videos/product-video.mp4",
  spoonImage: "assets/images/spoon.png"
};
const productVideoEl=document.getElementById("productVideo");
if(productVideoEl) productVideoEl.src="product-video.mp4";

// ==========================================================
// PRODUCT DESCRIPTIONS — EDIT THE TEXT BETWEEN QUOTES
// ==========================================================
const PRODUCTS = [
  {title:"Milky White Container", image:"container.png", description:"Milky white food containers for packaging."},
  {title:"Transparent 1000ml Container", image:"clear-tall-containers.png", description:"Transparent 1000ml container for serving, storage and everyday packaging"},
  {title:"Multi-Colour Containers", image:"hero-containers.jpg", description:"Multiple colours available for different packaging requirements."},
  {title:"Food Tubs With Lids", image:"food-tubs-with-lids.png", description:"500ml ECO container"},
  {title:"Clear Round Containers", image:"clear-round-containers.png", description:"Transparent round containers for food and everyday packaging."},
  {title:"Disposable Spoons", image:"spoon.png", description:"Disposable spoons for convenient serving and takeaway packaging."}
];

function setText(id,text){const el=document.getElementById(id);if(el)el.textContent=text;}
function cleanWhatsAppNumber(phone){return phone.replace(/[^0-9]/g,'');}
function setWhatsApp(id,phone){
  const el=document.getElementById(id);
  if(!el)return;
  el.innerHTML='<i class="fa-brands fa-whatsapp"></i> '+phone;
  el.href='https://wa.me/'+cleanWhatsAppNumber(phone);
  el.target='_blank';
  el.rel='noopener';
  el.classList.add('whatsapp-link');
}
setText('owner1Link',CONTACT.owner1Name+' — '+CONTACT.owner1Phone); setWhatsApp('owner1Link',CONTACT.owner1Phone);
setText('owner2Link',CONTACT.owner2Name+' — '+CONTACT.owner2Phone); setWhatsApp('owner2Link',CONTACT.owner2Phone);
setWhatsApp('contactOwner1',CONTACT.owner1Phone); setWhatsApp('contactOwner2',CONTACT.owner2Phone);
setText('companyEmail',CONTACT.companyEmail); document.getElementById('companyEmail').href='mailto:'+CONTACT.companyEmail;
setText('creatorEmail',CONTACT.creatorEmail); document.getElementById('creatorEmail').href='mailto:'+CONTACT.creatorEmail;




function openProduct(i){const p=PRODUCTS[i];document.getElementById('modalImg').src=p.image;document.getElementById('modalImg').alt=p.title;setText('modalTitle',p.title);setText('modalDesc',p.description);document.getElementById('modal').classList.add('show');}
function closeProduct(){document.getElementById('modal').classList.remove('show');}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct();});
let currentFilter='all';
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');currentFilter=btn.dataset.filter;filterProducts();}));
function filterProducts(){const q=document.getElementById('search').value.toLowerCase().trim();document.querySelectorAll('.product').forEach(card=>{const categoryOK=currentFilter==='all'||card.dataset.category===currentFilter;const textOK=!q||card.dataset.name.toLowerCase().includes(q);card.style.display=categoryOK&&textOK?'':'none';});}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('nav').classList.remove('open')));
