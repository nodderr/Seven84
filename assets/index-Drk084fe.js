(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const T=[{path:"",label:"Home"},{path:"events",label:"Events"},{path:"performances",label:"Performances"},{path:"results",label:"Results"},{path:"journey",label:"Our Journey"},{path:"about",label:"About Us"}];function L(){const a=document.getElementById("navbar");let e=window.location.pathname;e.startsWith("/")&&(e=e.slice(1)),e.endsWith("/")&&(e=e.slice(0,-1)),a.className="navbar",a.innerHTML=`
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${T.map(r=>`
          <a class="navbar-link ${e===r.path?"active":""}" data-nav="${r.path}">
            ${r.label}
          </a>
        `).join("")}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;let s=document.getElementById("mobile-overlay");s||(s=document.createElement("div"),s.id="mobile-overlay",s.className="navbar-mobile-overlay",document.body.appendChild(s)),s.innerHTML=`
    <div class="mobile-logo-wrap">
      <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: 3rem; color: var(--saffron);">Seven.84</span>
    </div>
    <div class="mobile-links-container">
      ${T.map(r=>`
        <a class="navbar-link ${e===r.path?"active":""}" data-nav="${r.path}">
          ${r.label}
        </a>
      `).join("")}
    </div>
  `,document.querySelectorAll("[data-nav]").forEach(r=>{r.addEventListener("click",n=>{n.preventDefault();const l=r.getAttribute("data-nav");window.appAPI.navigate(l),C()})});const t=document.getElementById("nav-toggle");t.addEventListener("click",()=>{t.classList.toggle("open"),s.classList.toggle("open"),document.body.style.overflow=s.classList.contains("open")?"hidden":""}),window.addEventListener("resize",()=>{window.innerWidth>768&&s.classList.contains("open")&&C()}),j(a)}function C(){const a=document.getElementById("nav-toggle"),e=document.getElementById("mobile-overlay");a&&e&&(a.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow="")}function j(a){let e=!1;window.addEventListener("scroll",()=>{e||(window.requestAnimationFrame(()=>{window.scrollY>50?a.classList.add("scrolled"):a.classList.remove("scrolled"),e=!1}),e=!0)})}function P(){let a=window.location.pathname;a.startsWith("/")&&(a=a.slice(1)),a.endsWith("/")&&(a=a.slice(0,-1)),document.querySelectorAll(".navbar-link").forEach(e=>{e.getAttribute("data-nav")===a?e.classList.add("active"):e.classList.remove("active")})}function K(){const a=document.getElementById("site-footer");a.className="footer",a.innerHTML=`
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo" style="font-family: 'Samarkan', cursive; color: var(--cream);">Seven.84</div>
          <p class="footer-tagline">
            A Hindustani-Bollywood-Fusion band from MIT Manipal. 
          </p>
          <div class="footer-socials" style="margin-top: var(--space-lg);">
            <a href="https://www.instagram.com/seven.84_" class="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener">📷</a>
          </div>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-group">
            <h4>Navigate</h4>
            <a href="/" data-nav="">Home</a>
            <a href="/events" data-nav="events">Events</a>
            <a href="/results" data-nav="results">Results</a>
            <a href="/about" data-nav="about">About Us</a>
            <a href="/journey" data-nav="journey">Our Journey</a>
            <a href="/performances" data-nav="performances">Performances</a>
          </div>
          <div class="footer-nav-group">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/seven.84_" target="_blank" rel="noopener">Instagram</a>
            <a href="mailto:nishant.verma04@yahoo.com">Email Us</a>
            <a href="tel:+918860671430">+91 88606 71430</a>
          </div>
          <div class="footer-nav-group">
            <h4>Book Us</h4>
            <a href="mailto:nishant.verma04@yahoo.com" style="color: var(--saffron);">Bookings & Collabs →</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Seven.84 — All rights reserved</span>
        <span>Based out of MIT, Manipal 🎶</span>
      </div>
    </div>
  `,a.querySelectorAll("[data-nav]").forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const t=e.getAttribute("data-nav");window.appAPI.navigate(t),window.scrollTo({top:0,behavior:"smooth"})})})}let i=[],o=0;function G(a,e=0){i=a,o=e;const s=document.getElementById("lightbox-overlay");s.classList.remove("hidden"),s.innerHTML=`
    <span class="lightbox-close" id="lightbox-close">✕</span>
    <span class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</span>
    <img class="lightbox-image" src="${i[o].src}" alt="${i[o].title||""}" />
    <span class="lightbox-nav lightbox-next" id="lightbox-next">›</span>
    <div class="lightbox-counter">${o+1} / ${i.length}</div>
  `,requestAnimationFrame(()=>s.classList.add("active")),document.getElementById("lightbox-close").addEventListener("click",I),s.addEventListener("click",t=>{t.target===s&&I()}),document.getElementById("lightbox-prev").addEventListener("click",t=>{t.stopPropagation(),u(-1)}),document.getElementById("lightbox-next").addEventListener("click",t=>{t.stopPropagation(),u(1)}),document.addEventListener("keydown",R),document.body.style.overflow="hidden"}function u(a){o=(o+a+i.length)%i.length;const e=document.querySelector(".lightbox-image"),s=document.querySelector(".lightbox-counter");e.style.opacity="0",setTimeout(()=>{e.src=i[o].src,e.alt=i[o].title||"",s.textContent=`${o+1} / ${i.length}`,e.style.opacity="1"},150)}function R(a){a.key==="Escape"&&I(),a.key==="ArrowLeft"&&u(-1),a.key==="ArrowRight"&&u(1)}function I(){const a=document.getElementById("lightbox-overlay");a.classList.remove("active"),setTimeout(()=>{a.classList.add("hidden"),a.innerHTML=""},300),document.removeEventListener("keydown",R),document.body.style.overflow=""}function $(a){const e=document.getElementById("video-modal");e.classList.remove("hidden"),e.innerHTML=`
    <div class="video-modal-inner">
      <span class="video-modal-close" id="video-close">✕</span>
      <iframe 
        src="https://www.youtube.com/embed/${a}?autoplay=1&rel=0&vq=hd1080&modestbranding=1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  `,requestAnimationFrame(()=>e.classList.add("active")),document.getElementById("video-close").addEventListener("click",w),e.addEventListener("click",s=>{s.target===e&&w()}),document.addEventListener("keydown",W),document.body.style.overflow="hidden"}function W(a){a.key==="Escape"&&w()}function w(){const a=document.getElementById("video-modal");a.classList.remove("active"),setTimeout(()=>{a.classList.add("hidden"),a.innerHTML=""},300),document.removeEventListener("keydown",W),document.body.style.overflow=""}const m=[{id:1,title:"Indian Rock — Waves 23",youtubeId:"1ZSdr3wMT70",category:"live",date:"November 2023",featured:!1,eventId:"waves-23-indian-rock",bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:2,title:"Silence of the Amps — Waves 23",youtubeId:"S8snpxnyAo8",category:"live",date:"November 2023",featured:!1,eventId:"waves-23-silence-amps",bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]},{id:3,title:"Mitwa - World Mental Health Day",youtubeId:"HFSOPSBH6_o",category:"cover",date:"October 2024",featured:!1,bandMembers:["Nishant Verma","Tushar Vikash K","Anjishnu Satpathy"]},{id:4,title:"Saiyaan - World Mental Health Day",youtubeId:"rCRwFbHOalw",category:"cover",date:"October 2024",featured:!1,bandMembers:["Nishant Verma","Tushar Vikash K","Anjishnu Satpathy"]},{id:5,title:"Battle of Bands - TAPMI Atharva'37",youtubeId:"a_520VVl9Ro",category:"live",date:"January 2024",featured:!1,eventId:"jan-24-tapmi-band-battle",bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:6,title:"Battle of Bands - Chords & Co. Flagship'24",youtubeId:"GzCzWCLVfaQ",category:"live",date:"January 2024",featured:!1,eventId:"jan-24-chords-band-battle",bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:7,title:"Battle of Bands - NITTE Incridea'24",youtubeId:"5v_M2xM4pPM",category:"live",date:"February 2024",featured:!1,eventId:"feb-24-nitte-band-battle",bandMembers:["Nishant Verma","Satvik Agrawal","Anjishnu Satpathy","Adithi Angeerasa","Vansh Srivastava","Aryan Raj","Milind Konwar","Tushar Vikash K"]},{id:8,title:"Battle of Bands (Pulse) - Incident'24",youtubeId:"yhkU7u_LxE8",category:"live",date:"March 2024",featured:!1,eventId:"incident-24-pulse",bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K"]},{id:9,title:"Battle of Bands (Bandish) - Incident'24",youtubeId:"BM_npwZ8tx0",category:"live",date:"March 2024",featured:!1,eventId:"incident-24-bandish",bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K","Vansh Srivastava"]},{id:10,title:"Maa - Taare Zameen Par",youtubeId:"YanXSPv8rns",category:"cover",date:"March 2024",featured:!1,bandMembers:["Brandon Rich Khonglam","Nishant Verma","Vansh Srivastava","Aryan Raj","Tushar Vikash K"]},{id:11,title:"Aaoge Tum Kabhi - Farewell Batch of '25",youtubeId:"-pvnT-zPLTM",category:"live",date:"October 2024",featured:!1,eventId:"farewell-25",bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava"]},{id:112,title:"Kurbaan Hua - Farewell Batch of '25",youtubeId:"EJOTpvzWi3k",category:"live",date:"October 2024",featured:!1,eventId:"farewell-25",bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava"]},{id:113,title:"Zara Zara - Farewell Batch of '25",youtubeId:"JTDrgrY6TjA",category:"live",date:"October 2024",featured:!1,eventId:"farewell-25",bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava"]},{id:12,title:"Perfect - KMC Open Mic",youtubeId:"2McegiJHGvI",category:"live",date:"October 2023",featured:!1,bandMembers:["Nishant Verma","Aryan Raj","Chaitanya Pandey","Tushar Vikash K","Anjishnu Satpathy"]},{id:13,title:"Saiyaan - KMC Open Mic",youtubeId:"SY3Xr04rahA",category:"live",date:"October 2023",featured:!1,bandMembers:["Nishant Verma","Aryan Raj","Tushar Vikash K","Anjishnu Satpathy"]},{id:14,title:"Battle of Bands - Revels 24",youtubeId:"YWx04bt-QsU",category:"live",date:"March 2024",featured:!1,eventId:"march-24-revels-band-battle",bandMembers:["Milind Konwar","Anjishnu Satpathy","Adithi Angeerasa","Vansh Srivastava","Aryan Raj","Satvik Agrawal","Nishant Verma","Tushar Vikash K"]},{id:15,title:"Zara Zara - Freshers Night '24",youtubeId:"R4IQh6x1M7U",category:"live",date:"October 2024",featured:!0,eventId:"freshers-night-24",bandMembers:["Brandon Rich Khonglam","Nishant Verma","Samarth Madhivanan","Anjishnu Satpathy","Vansh Srivastava","Adithi Angeerasa","Milind Konwar","Aryan Raj","Tushar Vikash K"]},{id:16,title:"Eastern Group Vocals - MAHE Utsav'24",youtubeId:"le_od3o-SGI",category:"live",date:"April 2024",featured:!1,eventId:"mahe-utsav-24-eastern-group-vocals",bandMembers:["Chaitanya Pandey","Nishant Verma","Anjishnu Satpathy","Aryan Raj"]},{id:17,title:"Navarasam - Uplift - Bits Goa Waves'24",youtubeId:"SreWVQtRnBQ",category:"live",date:"October 2024",featured:!1,eventId:"waves-24-indian-rock",bandMembers:["Kushant Pakam","Brandon Rich Khonglam","Vansh Srivastava","Sanjay K","Tushar Vikash K","Harshal Raje","Nishant Verma","Uday Rajan"]},{id:18,title:"Apsara Aali - Bits Goa Waves'24",youtubeId:"o9GaNAFnLzk",category:"live",date:"October 2024",featured:!1,eventId:"waves-24-indian-rock",bandMembers:["Kushant Pakam","Brandon Rich Khonglam","Vansh Srivastava","Sanjay K","Tushar Vikash K","Harshal Raje","Nishant Verma","Uday Rajan"]}],H=[{id:"all",label:"All"},{id:"live",label:"Live Performances"},{id:"cover",label:"Covers"}],v=[{id:"waves-23-indian-rock",name:"Indian Rock - Bits Goa Waves 23",type:"competition",date:"2023",time:"November 2023",venue:"Bits Goa Waves 23",rank:"5th",description:"Participated in the Indian Rock competition at Bits Goa Waves.",youtubeId:"1ZSdr3wMT70",thumbnail:"./gallery/events/Indian Rock - Waves 23/thumbnail/DSC_0004.webp",photos:[{src:"./gallery/events/Indian Rock - Waves 23/DSC_0003.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0005.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0007_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0008_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0010.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0011_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0012.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0013_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0014.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0015.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0017.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0018.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0019.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0020.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0022_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0023_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0029.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0030_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0031.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0032_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0033_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0034.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0036.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0037.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0038.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0039.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0042.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0043.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0044.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0045.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0046_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0047.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0048.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0049.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0052.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0053.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0057.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0058.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0059.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0060.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0061.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0063.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0074.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0076.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0080.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0081.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0082.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0084.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0085.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0087.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0088.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0089.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0091.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0092.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0093.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0094.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0095.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0096.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0097.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0098.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0099.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0100.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0101.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0102.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0103.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0104.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0105.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0106.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0107.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0108.webp"},{src:"./gallery/events/Indian Rock - Waves 23/IMG_20231105_095417.webp"},{src:"./gallery/events/Indian Rock - Waves 23/IMG_20231105_095837.webp"},{src:"./gallery/events/Indian Rock - Waves 23/IMG_20231107_132201.webp"}],bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:"waves-23-silence-amps",name:"Silence of the Amps - Bits Goa Waves 23",type:"competition",date:"2023",time:"November 2023",venue:"Bits Goa Waves 23",rank:"2nd Place",description:"Secured 2nd position in Silence of the Amps at Bits Goa Waves.",youtubeId:"S8snpxnyAo8",thumbnail:"./gallery/events/Silence of the Amps - Waves 23/thumbnail/IMG-20231029-WA0101.webp",photos:[{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7415.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7416.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7417.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7418.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7420.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0101.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0102.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0103.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0110.webp"}],bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]},{id:"waves-23-eastern-vocals",name:"Eastern Solo Vocals - Bits Goa Waves 23",type:"competition",date:"2023",time:"November 2023",venue:"Bits Goa Waves 23",rank:"3rd Place",description:"Secured 3rd position in Eastern Solo Vocals at Bits Goa Waves.",youtubeId:null,thumbnail:null,photos:[],bandMembers:["Vansh Srivastava"]},{id:"jan-24-tapmi-band-battle",name:"Battle of Bands - TAPMI Atharva'37",type:"competition",date:"2024",time:"January 2024",venue:"TAPMI Manipal",rank:"3rd Place",description:"Participated and secured 3rd place in the Battle of Bands at TAPMI's flagship fest Atharva'37.",youtubeId:"a_520VVl9Ro",thumbnail:"./gallery/events/TAPMI Atharva 37/thumbnail/Screenshot 2026-03-07 195459.png",photos:[],bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:"jan-24-chords-band-battle",name:"Battle of Bands - Chords & Co. Flagship'24",type:"competition",date:"2024",time:"January 2024",venue:"MIT Manipal",rank:"1st Place",description:"Won 1st place in the flagship Battle of Bands competition organized by Chords & Co.",youtubeId:"GzCzWCLVfaQ",thumbnail:"./gallery/events/Chords and Co Flagship 24/thumbnail/WhatsApp Image 2024-01-22 at 00.54.47.webp",photos:[{src:"./gallery/events/Chords and Co Flagship 24/2d4f518b.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0226.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0260.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0271.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0285.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0347.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0348.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0351.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0352 (2).webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0352.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0353.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0356.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0358.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0360.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0361.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0363.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0365.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0367.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0368.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0370.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0371.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0373.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0374.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0377.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0378.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0379.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0381.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0385.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0386.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0387.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0394.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0395.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0396.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0397.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0399.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0400.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0401.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0404.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0410.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0415.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0418.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0420.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0423.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0424.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0426.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0427.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0428.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0430.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0432 (2).webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0432.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0441.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0442.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0443.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0444.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0445.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0448.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0451.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0453.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0459.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0465.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0466.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0471.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0476.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0477.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0485.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0496.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0497.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0498.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0499.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0501.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0505.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0539.webp"},{src:"./gallery/events/Chords and Co Flagship 24/DSC_0543.webp"},{src:"./gallery/events/Chords and Co Flagship 24/IMG_20240121_235404.webp"},{src:"./gallery/events/Chords and Co Flagship 24/IMG_20240121_235446.webp"},{src:"./gallery/events/Chords and Co Flagship 24/IMG_20240121_235528.webp"},{src:"./gallery/events/Chords and Co Flagship 24/IMG_20240122_192344.webp"}],bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:"feb-24-nitte-band-battle",name:"Battle of Bands - NITTE Incridea'24",type:"competition",date:"2024",time:"February 2024",venue:"NITTE Meenakshi",rank:"2nd Place",description:"Secured 2nd place in the high-stakes Battle of Bands at NITTE's annual fest Incridea'24.",youtubeId:"5v_M2xM4pPM",thumbnail:"./gallery/events/Battle of Bands - NITTE Incridea 24/thumbnail/MVB02226.webp",photos:[{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02117.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02118.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02123.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02134.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02135.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02136.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02137.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02138.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02139.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02140.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02141.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02142.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02143.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02144.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02145.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02146.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02147.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02148.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02149.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02150.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02151.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02152.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02153.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02154.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02155.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02156.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02157.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02158.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02159.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02160.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02161.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02162.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02163.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02164.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02165.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02166.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02167.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02168.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02169.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02170.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02171.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02172.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02173.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02174.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02175.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02176.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02177.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02178.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02179.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02180.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02181.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02182.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02183.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02184.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02185.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02187.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02188.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02189.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02190.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02191.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02192.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02193.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02194.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02195.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02196.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02197.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02198.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02199.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02200.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02201.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02202.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02203.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02204.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02205.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02206.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02207.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02208.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02209.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02210.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02211.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02212.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02213.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02214.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02215.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02216.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02217.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02218.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02219.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02220.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02221.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02222.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02223.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02224.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02225.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02226.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02227.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02228.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02229.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02230.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02231.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02232.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02233.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02234.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02235.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02236.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02237.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02238.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02239.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02240.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02241.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02242.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02243.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02244.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02245.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02246.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02247.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02248.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02282.webp"}],bandMembers:["Nishant Verma","Satvik Agrawal","Anjishnu Satpathy","Adithi Angeerasa","Vansh Srivastava","Aryan Raj","Milind Konwar","Tushar Vikash K"]},{id:"incident-24-pulse",name:"Battle of Bands (Pulse) - Incident'24",type:"competition",date:"2024",time:"March 2024",venue:"NITK Surathkal",rank:"NA",description:"Participated in the Pulse - Battle of Bands competition at NITK Surathkal's annual fest Incident'24.",youtubeId:"yhkU7u_LxE8",thumbnail:"./gallery/events/Battle of Bands (Pulse) - Incident 24/thumbnail/Screenshot 2026-03-08 021444.webp",photos:[],bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K"]},{id:"incident-24-bandish",name:"Battle of Bands (Bandish) - Incident'24",type:"competition",date:"2024",time:"March 2024",venue:"NITK Surathkal",rank:"3rd Place",description:"Secured 3rd place in the Bandish - Battle of Bands competition at NITK Surathkal's annual fest Incident'24.",youtubeId:"BM_npwZ8tx0",thumbnail:"./gallery/events/Battle of Bands (Bandish) - Incident 24/thumbnail/Screenshot 2026-03-08 021323.webp",photos:[],bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K","Vansh Srivastava"]},{id:"march-24-revels-band-battle",name:"Battle of Bands - Revels 24",type:"competition",date:"2024",time:"March 2024",venue:"MIT Manipal",rank:"3rd Place",description:"Secured 3rd place in the Battle of Bands at Revels 24, MIT Manipal.",youtubeId:"YWx04bt-QsU",thumbnail:"./gallery/events/Battle of Bands - Revels 24/thumbnail/Screenshot 2026-03-08 114400.webp",photos:[{src:"./gallery/events/Battle of Bands - Revels 24/-000815-.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/-000816-.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC08478.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC08484.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC08487.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC08491.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSCF2495.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC_0144.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC_6611.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/DSC_6682.webp"},{src:"./gallery/events/Battle of Bands - Revels 24/bigBandTheory (19 of 33).webp"},{src:"./gallery/events/Battle of Bands - Revels 24/bigBandTheory (20 of 33).webp"},{src:"./gallery/events/Battle of Bands - Revels 24/bigBandTheory (21 of 33).webp"},{src:"./gallery/events/Battle of Bands - Revels 24/bigBandTheory (22 of 33).webp"},{src:"./gallery/events/Battle of Bands - Revels 24/bigBandTheory (23 of 33).webp"},{src:"./gallery/events/Battle of Bands - Revels 24/bigBandTheory (24 of 33).webp"}],bandMembers:["Milind Konwar","Anjishnu Satpathy","Adithi Angeerasa","Vansh Srivastava","Aryan Raj","Satvik Agrawal","Nishant Verma","Tushar Vikash K"]},{id:"freshers-night-24",name:"Freshers Night '24",type:"performance",date:"2024",time:"October 2024",venue:"MIT Manipal",rank:null,description:"Performed a series of Bollywood and fusion hits at the Freshers Night '24 at MIT Manipal.",youtubeId:"R4IQh6x1M7U",thumbnail:"./gallery/events/Freshers Night 24/thumbnail/IMG_0354-2.webp",photos:[{src:"./gallery/events/Freshers Night 24/IMG_0220-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0221-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0224-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0232-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0234-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0245-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0249-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0253-2-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0270-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0280-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0281-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0293-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0308-2.webp"},{src:"./gallery/events/Freshers Night 24/IMG_0354-2.webp"}],bandMembers:["Brandon Rich Khonglam","Nishant Verma","Samarth Madhivanan","Anjishnu Satpathy","Vansh Srivastava","Adithi Angeerasa","Milind Konwar","Aryan Raj","Tushar Vikash K"]},{id:"farewell-25",name:"Farewell - Batch of '25",type:"performance",date:"2024",time:"October 2024",venue:"MIT Manipal",rank:null,description:"Performed a special farewell set for the graduating batch of '25.",youtubeIds:["-pvnT-zPLTM","EJOTpvzWi3k","JTDrgrY6TjA"],thumbnail:"https://img.youtube.com/vi/-pvnT-zPLTM/hqdefault.jpg",photos:[],bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava"]},{id:"revels-24-unplugged",name:"Unplugged - Revels 24",type:"competition",date:"2024",time:"March 2024",venue:"MIT Manipal",rank:"3rd Place",description:"Secured 3rd place in the Unplugged competition at Revels 24, MIT Manipal.",thumbnail:null,photos:[],bandMembers:["Nishant Verma","Vansh Srivastava"]},{id:"mahe-utsav-24-eastern-group-vocals",name:"Eastern Group Vocals - MAHE Utsav'24",type:"competition",date:"2024",time:"April 2024",venue:"MAHE Utsav",rank:"NA",description:"Participated in the Eastern Group Vocals competition at MAHE Utsav'24.",youtubeId:"le_od3o-SGI",thumbnail:"https://img.youtube.com/vi/le_od3o-SGI/hqdefault.jpg",photos:[],bandMembers:["Chaitanya Pandey","Nishant Verma","Anjishnu Satpathy","Aryan Raj"]},{id:"waves-24-indian-rock",name:"Indian Rock - Bits Goa Waves'24",type:"competition",date:"2024",time:"October 2024",venue:"Bits Goa Waves 24",rank:"3rd Place",description:"Secured 3rd place in the Indian Rock competition at Bits Goa Waves'24.",youtubeIds:["SreWVQtRnBQ","o9GaNAFnLzk"],thumbnail:"https://img.youtube.com/vi/SreWVQtRnBQ/hqdefault.jpg",photos:[],bandMembers:["Kushant Pakam","Brandon Rich Khonglam","Vansh Srivastava","Sanjay K","Tushar Vikash K","Harshal Raje","Nishant Verma","Uday Rajan"]},{id:"waves-24-instrumental-solo",name:"Instrumental Solo - Bits Goa Waves'24",type:"competition",date:"2024",time:"October 2024",venue:"Bits Goa Waves 24",rank:"3rd Place",description:"Secured 3rd place in the Instrumental Solo competition at Bits Goa Waves'24.",youtubeId:null,thumbnail:null,photos:[],bandMembers:["Nishant Verma"]}],S=a=>{if(a.eventId){const e=v.find(s=>s.id===a.eventId);if(e&&e.thumbnail)return e.thumbnail}return`https://img.youtube.com/vi/${a.youtubeId}/hqdefault.jpg`};function q(){const a=m[m.length-1]||{title:"New Performance Coming Soon",youtubeId:""};return`
    <div class="page-enter">
      <!-- HERO -->
      <section class="hero">
        <div class="hero-bg"></div>
        
        <div class="hero-content container">
          <div class="hero-logo-css hero-anim-1" style="font-family: 'Samarkan', cursive; font-size: clamp(4rem, 15vw, 10rem); color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin-bottom: var(--space-xl); display: inline-block;">Seven.84</div>
          <div class="hero-cta hero-anim-2" style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
            <a href="/journey" class="btn btn-primary" style="width: 250px; justify-content: center;">Our Journey</a>
          </div>
        </div>
        
        <div class="hero-scroll-indicator">
          <span></span>
        </div>
      </section>

      <!-- PERFORMANCE HIGHLIGHTS -->
      <section class="section section-darker">
        <div class="container section-header">
          <span class="section-subtitle">Glimpses</span>
          <h2 class="section-title">Performance Highlights</h2>
        </div>
        
        <div class="highlight-reel" tabindex="0" role="region" aria-label="Performance highlights carousel" onkeydown="if(event.key==='ArrowLeft')window.appAPI.scrollHighlights(-1);if(event.key==='ArrowRight')window.appAPI.scrollHighlights(1);">
          <button class="reel-nav-btn prev" onclick="window.appAPI.scrollHighlights(-1)" aria-label="Previous">❮</button>
          <div class="highlight-scroll" id="infinite-reel-scroll">
            ${(()=>{const e=[...m].reverse().slice(0,10),s=e.slice(-4),t=e.slice(0,4),r=[...s,...e,...t];return r.map((n,l)=>`
                <div class="highlight-card img-skeleton ${l<4||l>=r.length-4?"is-clone":""}"
                     data-index="${l}"
                     data-action="open-video" data-value="${n.youtubeId}">
                   <img src="${S(n)}" alt="${n.title}" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" />
                  <div class="highlight-card-overlay">
                    <h4>${n.title}</h4>
                    <p>${n.date}</p>
                  </div>
                </div>
              `).join("")})()}
          </div>
          <button class="reel-nav-btn next" onclick="window.appAPI.scrollHighlights(1)" aria-label="Next">❯</button>
        </div>
      </section>

      <!-- LATEST PERFORMANCE -->
      <section class="section section-dark">
        <div class="container" style="text-align: center; max-width: 800px;">
          <div class="reveal-up">
            <span class="section-subtitle">Newest Upload</span>
            <h2 class="section-title">${a.title}</h2>
            <p class="section-description" style="margin-bottom: var(--space-xl);">
              Experience our latest performance where the soulful melodies of Hindustani classical meet the high-octane energy of modern fusion. 
            </p>
            <div class="featured-video-wrapper" style="margin: 0 auto var(--space-xl);" data-action="open-video" data-value="${a.youtubeId}">
               <img src="${S(a)}" alt="${a.title}" class="featured-video-thumb" />
              <div class="featured-play-btn"></div>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center;">
              <button class="btn btn-primary" data-action="open-video" data-value="${a.youtubeId}">Watch Now</button>
              <a href="/performances" class="btn btn-ghost">View All</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT STRIP -->
      <section class="contact-strip">
        <div class="contact-strip-bg"></div>
        <div class="container contact-strip-content">
          <div class="contact-strip-text">
            <span class="contact-strip-label">Ready to collaborate?</span>
            <h2 class="contact-strip-title">Let's Make <span class="text-saffron">Music</span> Together</h2>
            <p class="contact-strip-desc">Whether it's a college fest, a private gig, or a creative collaboration, we'd love to hear from you.</p>
          </div>
          <div class="contact-strip-actions">
            <a href="mailto:nishant.verma04@yahoo.com" class="btn btn-primary contact-btn">
              Book Us via Email
            </a>
            <a href="https://www.instagram.com/seven.84_" target="_blank" rel="noopener" class="btn btn-outline contact-btn">
              DM on Instagram
            </a>
            <a href="tel:+918860671430" class="contact-phone">
              <span class="contact-phone-icon">☎</span>
              <span class="contact-phone-details">
                <span class="contact-phone-name">Nishant Verma</span>
                <span class="contact-phone-number">+91 88606 71430</span>
              </span>
            </a>
          </div>
        </div>
      </section>

    </div>
  `}const d=[{name:"Nishant Verma",role:"Keys, Bass, Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Tushar Vikash K",role:"Drums, Percussion",photo:"",quote:"Test",instagram:"#"},{name:"Vansh Srivastava",role:"Guitars, Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Aryan Raj",role:"Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Anjishnu Satpathy",role:"Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Milind Konwar",role:"Keys, Bass",photo:"",quote:"Test",instagram:"#"},{name:"Chaitanya Pandey",role:"Guitar, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Satvik Agrawal",role:"Guitars",photo:"",quote:"Test",instagram:"#"},{name:"Samarth Madhivanan",role:"Tabla",photo:"",quote:"Test",instagram:"#"},{name:"Adithi Angeerasa",role:"Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Brandon Rich Khonglam",role:"Flute",photo:"",quote:"Test",instagram:"#"},{name:"Kushant Pakam",role:"Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Sanjay K",role:"Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Harshal Raje",role:"Guitars",photo:"",quote:"Test",instagram:"#"},{name:"Uday Rajan",role:"Tabla, Drums",photo:"",quote:"Test",instagram:"#"},{name:"Sitaraman Subramanian",role:"Violin",photo:"",quote:"Test",instagram:"#"},{name:"Vaibhav Anand",role:"Flute",photo:"",quote:"Test",instagram:"#"}],z=a=>(a.split(" ").map(e=>e[0]).join(""),`https://ui-avatars.com/api/?name=${encodeURIComponent(a)}&background=D05E1A&color=FFF4E5&size=400&font-size=0.35&bold=true`);function O(){return`
    <div class="page-enter">
      <section class="about-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Who We Are</h1>
          <div class="band-philosophy">
            <p>
              Seven.84 is more than a band — we are an exploration of sound.
              Born in the vibrant campus of MIT, Manipal, our music seeks to bridge the gap
              between the intricate melodies of Hindustani classical music and the driving
              energy of modern progressive rock and Bollywood fusion.
            </p>
          </div>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-subtitle">The Lineup</span>
            <h2 class="section-title">Meet the Band</h2>
          </div>

          <div class="members-roster">
            ${d.map((e,s)=>{const t=e.photo||z(e.name);return`
      <div class="member-tile" style="animation: fadeInUp 0.5s ${s*.05}s var(--ease-out) both">
        <div class="member-tile-img-wrap img-skeleton">
          <img src="${t}" alt="${e.name}" class="member-tile-img" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" />
          <div class="member-tile-overlay">
            <span class="member-tile-role">${e.role}</span>
            ${e.instagram&&e.instagram!=="#"?`<a href="${e.instagram}" class="member-tile-insta" target="_blank" rel="noopener" aria-label="${e.name} Instagram">&#9654;</a>`:""}
          </div>
        </div>
        <h3 class="member-tile-name">${e.name}</h3>
      </div>
    `}).join("")}
          </div>
        </div>
      </section>

      <section class="section section-darker">
        <div class="container reveal">
          <div class="group-photo-section">
            <img
              src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1600"
              alt="Seven.84 Group Photo"
              class="group-photo"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  `}const U=[{date:"August 2023",title:"Beginning the Journey",description:"The first sparks of Seven.84. A group of musicians from different backgrounds coming together in a college dorm room to create a new sound — a fusion of Hindustani classical depth and Bollywood energy.",image:null}],J=[{number:"50",suffix:"+",label:"Live Shows"},{number:"10",suffix:"+",label:"Awards Won"},{number:"17",suffix:"",label:"Band Members"},{number:"40000",suffix:"+",label:"Digital Reach"},{number:"80000",suffix:"+",label:"Prize Money (₹)"}];function Q(){const a=J.map(s=>`
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${s.number}" data-suffix="${s.suffix}">
        <span class="stat-number-sizer" aria-hidden="true">${Number(s.number).toLocaleString("en-IN")}${s.suffix}</span>
        <span class="stat-number-value">${Number(s.number).toLocaleString("en-IN")}${s.suffix}</span>
      </div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join(""),e=U.map((s,t)=>`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content ${t%2!==0?"reveal-left":"reveal-right"}">
          <div class="timeline-date">${s.date}</div>
          <h3 class="timeline-title">${s.title}</h3>
          <p class="timeline-description">${s.description}</p>
          ${s.image?`<img src="${s.image}" alt="${s.title}" class="timeline-image" loading="lazy" />`:""}
        </div>
      </div>
    `).join("");return setTimeout(()=>Y(),200),`
    <div class="page-enter">
      <section class="journey-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Our Story</h1>
          <p class="section-description hide-mobile" style="margin: 0 auto; max-width: 600px;">
            From late-night jam sessions in college rooms to headlining festivals. This is the timeline of our musical evolution.
          </p>
        </div>
      </section>

      <section class="section section-dark" style="padding-top: 0;">
        <div class="container">
          <div class="stats-bar stagger-children" id="stats-bar">
            ${a}
          </div>
        </div>
      </section>

      <section class="section section-darker" style="padding-top: var(--space-xl)">
        <div class="container-narrow">
          <div class="timeline stagger-children">
            ${e}
          </div>
        </div>
      </section>
    </div>
  `}function Y(){const a=document.getElementById("stats-bar");if(!a)return;const e=a.querySelectorAll(".stat-number");let s=!1;const t=()=>{s||(s=!0,e.forEach(n=>{const l=parseInt(n.dataset.count,10),p=n.dataset.suffix||"",h=1500,g=performance.now(),c=b=>{const y=b-g,B=Math.min(y/h,1),x=1-Math.pow(1-B,3),F=Math.round(x*l);n.querySelector(".stat-number-value").textContent=F.toLocaleString("en-IN")+p,B<1&&requestAnimationFrame(c)};requestAnimationFrame(c)}))},r=new IntersectionObserver(n=>{n[0].isIntersecting&&(t(),r.disconnect())},{threshold:.3});r.observe(a)}const M=a=>{if(a.eventId){const e=v.find(s=>s.id===a.eventId);if(e&&e.thumbnail)return e.thumbnail}return`https://img.youtube.com/vi/${a.youtubeId}/hqdefault.jpg`},V=a=>a.split(" ")[0],k=a=>[...a].sort((e,s)=>{const t=d.findIndex(n=>n.name===e||n.name.startsWith(e)),r=d.findIndex(n=>n.name===s||n.name.startsWith(s));return t-r});function Z(){const a=[...m].reverse(),e=a.find(n=>n.featured)||a[0],s=a.filter(n=>n.id!==e.id),t=H.map((n,l)=>`
    <button class="filter-tab ${l===0?"active":""}" data-filter="${n.id}">
      ${n.label}
    </button>
  `).join(""),r=s.map(n=>`
    <div class="performance-card reveal" data-category="${n.category}" data-action="open-video" data-value="${n.youtubeId}">
      <div class="performance-thumb-wrapper img-skeleton">
        <img src="${M(n)}" alt="${n.title}" class="performance-thumb" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" onerror="this.style.display='none'; this.parentElement.classList.remove('img-skeleton'); this.parentElement.classList.add('thumb-fallback'); this.parentElement.innerHTML='<span>Seven.84</span>'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${n.category.toUpperCase()}</div>
        <h3 class="performance-title">${n.title}</h3>
        <span class="performance-meta">${n.event||""} ${n.event?"•":""} ${n.date}</span>
        <div class="performer-tags">
          ${k(n.bandMembers||[]).map(l=>`<span class="performer-tag">${V(l)}</span>`).join("")}
        </div>
        ${n.eventId?`
          <button class="btn btn-ghost btn-sm mt-sm" data-action="navigate" data-value="/events?id=${n.eventId}">
            View Event Details
          </button>
        `:""}
      </div>
    </div>
  `).join("");return setTimeout(X,100),`
    <div class="page-enter">
      <section class="performances-hero grain-overlay">
        <div class="container reveal" style="text-align: center;">
          <h1 class="section-title">Live & Unplugged</h1>
          <p class="section-description">Experience the energy of Seven.84 on stage and in the studio.</p>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <!-- Featured Video -->
          <div class="featured-performance reveal-scale">
            <div class="section-header" style="margin-bottom: var(--space-lg)">
              <span class="section-subtitle">Featured Performance</span>
            </div>
            
            <div class="featured-video-wrapper" data-action="open-video" data-value="${e.youtubeId}">
              <!-- Fallback to unspash if youtube ID is invalid placeholder -->
              <img src="${M(e)}" alt="${e.title}" class="featured-video-thumb" onerror="this.style.display='none'; this.parentElement.classList.add('thumb-fallback'); this.parentElement.innerHTML='<span style='font-size:3rem'>Seven.84</span>'" />
              <div class="featured-play-btn"></div>
            </div>
            
            <div class="featured-video-info">
              <h3>${e.title}</h3>
              <p>${e.event||""} ${e.event?"•":""} ${e.date}</p>
              <div class="performer-tags">
                ${k(e.bandMembers||[]).map(n=>`<span class="performer-tag">${V(n)}</span>`).join("")}
              </div>
              ${e.eventId?`
                <button class="btn btn-outline btn-sm mt-md" data-action="navigate" data-value="/events?id=${e.eventId}">
                  View Event Details & Photos
                </button>
              `:""}
            </div>
          </div>
        </div>
      </section>

      <section class="section section-darker">
        <div class="container">
          <div class="filter-tabs reveal">
            ${t}
          </div>
          
          <div class="performances-grid stagger-children" id="video-grid">
            ${r}
          </div>
        </div>
      </section>
    </div>
  `}function X(){const a=document.querySelectorAll(".filter-tab"),e=document.querySelectorAll(".performance-card");a.forEach(s=>{s.addEventListener("click",()=>{a.forEach(r=>r.classList.remove("active")),s.classList.add("active");const t=s.getAttribute("data-filter");e.forEach(r=>{t==="all"||r.getAttribute("data-category")===t?(r.style.display="block",setTimeout(()=>{r.style.opacity="1",r.style.transform="translateY(0)"},50)):(r.style.opacity="0",r.style.transform="translateY(10px)",setTimeout(()=>{r.style.display="none"},300))})})})}const E=a=>a.split(" ")[0],N=a=>[...a].sort((e,s)=>{const t=d.findIndex(n=>n.name===e||n.name.startsWith(e)),r=d.findIndex(n=>n.name===s||n.name.startsWith(s));return t-r});function ee(a){const e=a?a.get("id"):null;return e?te(e):ae()}function ae(){return`
    <div class="page-container page-events fade-in">
      <header class="section-hero">
        <h1 class="font-display size-xxl section-title slide-up">Our <span class="text-saffron">Events</span></h1>
        <p class="font-body opacity-80 slide-up" style="animation-delay: 0.1s">
          A definitive timeline of our on-stage battles and exhibitions.
        </p>
      </header>
      
      <section class="events-catalog slide-up" style="animation-delay: 0.2s">
        <!-- Optional Tabs for Filtering if needed later, keeping it unified for now -->
        
        <div class="events-grid">
          ${v.filter(e=>e.youtubeId||e.youtubeIds&&e.youtubeIds.length>0||e.thumbnail||e.photos&&e.photos.length>0).reverse().map(e=>`
            <div class="event-card" data-action="navigate" data-value="/events?id=${e.id}">
              <div class="event-thumbnail img-skeleton">
                <img src="${e.thumbnail}" alt="${e.name}" loading="lazy" onload="this.parentElement.classList.remove('img-skeleton')" />
                ${e.rank?`<div class="event-badge">${e.rank}</div>`:""}
              </div>
              <div class="event-info">
                <span class="event-date font-accent text-saffron size-sm">${e.date}</span>
                <h3 class="font-display size-md">${e.name}</h3>
                <span class="event-venue opacity-70 size-sm">📍 ${e.venue}</span>
                <p class="event-desc font-body opacity-80 mt-sm line-clamp-2">${e.description}</p>
                <div class="event-media-icons mt-md">
                  ${e.youtubeId||e.youtubeIds&&e.youtubeIds.length>0?'<span class="media-icon" title="Video available">🎥 Video</span>':""}
                  ${e.photos&&e.photos.length>0?`<span class="media-icon" title="Photos available">📸 ${e.photos.length} Photos</span>`:""}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `}function te(a){const e=v.find(t=>t.id===a);if(!e)return`
      <div class="page-container page-events fade-in text-center" style="padding: 150px 20px;">
        <h1 class="font-display size-xl">Event Not Found</h1>
        <a href="/events" class="btn btn-primary mt-lg text-charcoal">Back to Events</a>
      </div>
    `;const s=e.photos&&e.photos.length>0;return window.appAPI.openEventLightbox=t=>{window.appAPI.openEventSpecificLightbox(e.photos,t)},`
    <div class="page-container page-event-detail fade-in">
      <button class="back-button btn btn-outline slide-up" data-action="navigate" data-value="/events">
        ← Back to Events
      </button>

      <header class="event-detail-hero slide-up" style="animation-delay: 0.1s">
        <div class="event-meta mb-sm">
          <span class="font-accent text-saffron size-md">${e.date}</span> • <span class="opacity-80">${e.venue}</span>
        </div>
        <h1 class="font-display size-xxl mb-xs">${e.name}</h1>
        ${e.rank?`<div class="event-badge inline-badge mb-md">${e.rank}</div>`:""}
        <p class="font-body opacity-80 size-md mt-sm max-w-lg">${e.description}</p>
      </header>

      ${e.youtubeId?`
        <section class="event-main-media slide-up" style="animation-delay: 0.2s">
          <div class="video-embed-container mb-md">
            <iframe 
              src="https://www.youtube.com/embed/${e.youtubeId}?rel=0&vq=hd1080&modestbranding=1" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="performer-tags">
            ${N(e.bandMembers||[]).map(t=>`<span class="performer-tag">${E(t)}</span>`).join("")}
          </div>
        </section>
      `:e.youtubeIds&&e.youtubeIds.length>0?`
        <section class="event-main-media slide-up" style="animation-delay: 0.2s">
          ${e.youtubeIds.map(t=>`
            <div class="video-embed-container mb-xl">
              <iframe 
                src="https://www.youtube.com/embed/${t}?rel=0&vq=hd1080&modestbranding=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
          `).join("")}
          <div class="performer-tags">
            ${N(e.bandMembers||[]).map(t=>`<span class="performer-tag">${E(t)}</span>`).join("")}
          </div>
        </section>
      `:""}

      ${s?`
        <section class="event-gallery slide-up" style="animation-delay: 0.3s">
          <h2 class="font-display size-xl mb-xl">Event <span class="text-saffron">Gallery</span></h2>
          <div class="gallery-masonry" style="--columns: 3;">
            ${e.photos.map((t,r)=>`
              <div class="gallery-item" onclick="appAPI.openEventLightbox(${r})">
                <img src="${t.src}" alt="Event Photo" loading="lazy" />
              </div>
            `).join("")}
          </div>
          
          <div class="event-footer-cta mt-4xl text-center">
            <p class="opacity-60 mb-md">Want to see more of our music?</p>
            <a href="/performances" class="btn btn-primary">Explore All Performances</a>
          </div>
        </section>
      `:""}
    </div>
  `}const A=a=>[...a].sort((e,s)=>{const t=d.findIndex(n=>n.name===e||n.name.startsWith(e)),r=d.findIndex(n=>n.name===s||n.name.startsWith(s));return t-r});function se(){const a=v.filter(t=>t.type==="competition").reverse(),e=`
    <section class="results-table-container slide-up results-desktop" style="animation-delay: 0.2s">
      <div class="results-table-wrapper">
        <table class="results-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Competition</th>
              <th>Venue</th>
              <th>Result / Rank</th>
            </tr>
          </thead>
          <tbody>
            ${a.length>0?a.map((t,r)=>`
              <tr class="result-row" data-action="toggle-details" data-value="details-${r}">
                <td class="font-accent text-saffron text-nowrap">
                  <span class="dropdown-icon">▶</span> ${t.date}
                </td>
                <td class="font-accent text-saffron text-nowrap">${t.time||""}</td>
                <td class="font-display size-md text-cream">${t.name}</td>
                <td class="opacity-80">${t.venue}</td>
                <td>
                  ${t.rank?`<span class="result-badge ${_(t.rank)}">${t.rank}</span>`:'<span class="opacity-50">—</span>'}
                </td>
              </tr>
              <tr id="details-${r}" class="result-details-row" style="display: none;">
                <td colspan="5" class="result-details-cell">
                  <div class="result-details-content">
                    <div class="result-members">
                      <strong class="text-saffron">Lineup:</strong>
                      <span class="opacity-80">${t.bandMembers&&t.bandMembers.length>0?A(t.bandMembers).join(", "):"Lineup not specified"}</span>
                    </div>
                    ${t.youtubeId||t.thumbnail||t.photos&&t.photos.length>0?`
                      <a href="/events?id=${t.id}" class="result-event-link">
                        View Event Media <span>&rarr;</span>
                      </a>
                    `:""}
                  </div>
                </td>
              </tr>
            `).join(""):`
              <tr>
                <td colspan="5" class="text-center opacity-50 py-xl">No competition results available yet.</td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </section>`,s=`
    <section class="results-cards results-mobile" style="animation-delay: 0.2s">
      ${a.length>0?a.map((t,r)=>`
        <div class="result-card" data-action="toggle-details" data-value="card-details-${r}">
          <div class="result-card-header">
            <div class="result-card-info">
              <h3 class="result-card-title">${t.name}</h3>
              <div class="result-card-meta">
                <span class="text-saffron">${t.date}</span>
                ${t.time?`<span class="result-card-sep">·</span><span>${t.time}</span>`:""}
                <span class="result-card-sep">·</span><span>${t.venue}</span>
              </div>
            </div>
            ${t.rank?`<span class="result-badge ${_(t.rank)}">${t.rank}</span>`:""}
          </div>
          <div id="card-details-${r}" class="result-card-details">
            <div class="result-members">
              <strong class="text-saffron">Lineup:</strong>
              <span class="opacity-80">${t.bandMembers&&t.bandMembers.length>0?A(t.bandMembers).join(", "):"Lineup not specified"}</span>
            </div>
            ${t.youtubeId||t.thumbnail||t.photos&&t.photos.length>0?`
              <a href="/events?id=${t.id}" class="result-event-link">
                View Event Media <span>&rarr;</span>
              </a>
            `:""}
          </div>
        </div>
      `).join(""):`
        <p class="text-center opacity-50" style="padding: var(--space-xl);">No competition results available yet.</p>
      `}
    </section>`;return`
    <div class="page-container page-results fade-in">
      <header class="section-hero text-center">
        <h1 class="font-display size-xxl section-title slide-up">Our <span class="text-saffron">Results</span></h1>
        <p class="font-body opacity-80 slide-up" style="animation-delay: 0.1s; max-width: 600px; margin: 0 auto;">
          An ongoing tally of our competitive journey across various college fests and battle of the bands.
        </p>
      </header>
      ${e}
      ${s}
    </div>
  `}function _(a){const e=String(a).toLowerCase();return e.includes("1st")||e.includes("winner")||e==="first"?"badge-gold":e.includes("2nd")||e.includes("runner")?"badge-silver":e.includes("3rd")?"badge-bronze":"badge-neutral"}window.appAPI={openEventSpecificLightbox:(a,e)=>G(a,e),openVideo:a=>$(a),scrollHighlights:a=>{const e=document.getElementById("infinite-reel-scroll");if(e){const s=e.clientWidth*.8;e.scrollBy({left:a*s,behavior:"smooth"})}},navigate:a=>{const e=a.startsWith("/")?a:"/"+a;window.location.pathname+window.location.search!==e&&(history.pushState(null,"",e),window.dispatchEvent(new Event("popstate")))},initInfiniteScroll:()=>{const a=document.getElementById("infinite-reel-scroll");if(!a)return;const e=a.querySelectorAll(".highlight-card");if(e.length===0)return;const s=e[0].offsetWidth+parseInt(getComputedStyle(a).gap),t=e.length-8;a.scrollLeft=s*4,a.addEventListener("scroll",()=>{const r=a.scrollLeft;r>=s*(t+6)?a.scrollTo({left:s*6,behavior:"instant"}):r<=s*2&&a.scrollTo({left:s*(t+2),behavior:"instant"})})}};const f={"":q,about:O,journey:Q,performances:Z,events:ee,results:se};function ne(){return`
    <div class="page-enter" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: var(--space-xl);">
      <div>
        <div style="font-family: 'Samarkan', cursive; font-size: clamp(5rem, 15vw, 10rem); color: var(--saffron); line-height: 1; margin-bottom: var(--space-md);">404</div>
        <p style="font-size: var(--text-lg); color: var(--grey-400); margin-bottom: var(--space-2xl); max-width: 400px;">This page doesn't exist, but our music does.</p>
        <a href="/" class="btn btn-primary">Back to Home</a>
      </div>
    </div>
  `}function D(){const a=document.getElementById("page-content");let e=window.location.pathname;e.startsWith("/")&&(e=e.slice(1)),e.endsWith("/")&&(e=e.slice(0,-1));const s=e&&!f[e],t=window.location.search,r=new URLSearchParams(t||"");a.classList.add("page-exit"),setTimeout(()=>{var p,h,g,c,b;if(s)a.innerHTML=ne();else{const y=f[e]||f[""];a.innerHTML=y(r)}a.classList.remove("page-exit"),a.classList.add("page-enter-active"),(!e||e==="")&&window.appAPI.initInfiniteScroll();const n={"":{title:"Seven.84 — Hindustani Bollywood Fusion",description:"Seven.84 is a Hindustani-Bollywood-Fusion band from MIT Manipal. Explore our music, performances, gallery, and journey."},about:{title:"Seven.84 — About Us",description:"Meet the 17 musicians of Seven.84 — a Hindustani-Bollywood-Fusion band blending classical ragas with modern energy."},journey:{title:"Seven.84 — Our Journey",description:"From dorm room jams to festival headliners. The timeline of Seven.84's musical evolution at MIT Manipal."},performances:{title:"Seven.84 — Performances",description:"Watch Seven.84 live and unplugged — performances spanning Hindustani classical fusion, Bollywood covers, and original compositions."},events:{title:"Seven.84 — Events & Diary",description:"A complete timeline of Seven.84's on-stage battles, exhibitions, and college fest appearances."},results:{title:"Seven.84 — Competitions & Results",description:"An ongoing tally of Seven.84's competitive journey across college fests and battle of the bands."}},l=n[e]||n[""];document.title=l.title,(p=document.querySelector('meta[name="description"]'))==null||p.setAttribute("content",l.description),(h=document.querySelector('meta[property="og:title"]'))==null||h.setAttribute("content",l.title),(g=document.querySelector('meta[property="og:description"]'))==null||g.setAttribute("content",l.description),(c=document.querySelector('meta[property="twitter:title"]'))==null||c.setAttribute("content",l.title),(b=document.querySelector('meta[property="twitter:description"]'))==null||b.setAttribute("content",l.description),window.scrollTo({top:0,behavior:"instant"}),setTimeout(()=>a.classList.remove("page-enter-active"),500),a.setAttribute("tabindex","-1"),a.focus({preventScroll:!0}),P()},150)}function re(){L(),K(),window.addEventListener("popstate",D),document.addEventListener("click",a=>{const e=a.target.closest("a");if(e&&!e.target&&e.host===window.location.host){const n=e.getAttribute("href");if(n&&(n.startsWith("/")||n.startsWith("#"))){a.preventDefault();const l=n.startsWith("#")?n.slice(1):n;window.appAPI.navigate(l)}}const s=a.target.closest("[data-action]");if(!s)return;const t=s.dataset.action,r=s.dataset.value;if(t==="open-video")a.preventDefault(),$(r);else if(t==="navigate")a.preventDefault(),window.appAPI.navigate(r);else if(t==="toggle-details"){const n=document.getElementById(r);n&&(n.tagName==="TR"?(n.style.display=n.style.display==="table-row"?"none":"table-row",s.classList.toggle("active-row")):(n.classList.toggle("open"),s.classList.toggle("active")))}}),D()}document.addEventListener("DOMContentLoaded",re);
