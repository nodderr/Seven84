(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const m=[{path:"",label:"Home"},{path:"events",label:"Events"},{path:"performances",label:"Performances"},{path:"results",label:"Results"},{path:"journey",label:"Our Journey"},{path:"about",label:"About Us"}];function k(){const a=document.getElementById("navbar"),e=window.location.hash.slice(1)||"";a.className="navbar",a.innerHTML=`
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${m.map(s=>`
          <a class="navbar-link ${e===s.path?"active":""}" data-nav="${s.path}">
            ${s.label}
          </a>
        `).join("")}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;let t=document.getElementById("mobile-overlay");t||(t=document.createElement("div"),t.id="mobile-overlay",t.className="navbar-mobile-overlay",document.body.appendChild(t)),t.innerHTML=`
    <div class="mobile-logo-wrap">
      <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: 3rem; color: var(--saffron);">Seven.84</span>
    </div>
    <div class="mobile-links-container">
      ${m.map(s=>`
        <a class="navbar-link ${e===s.path?"active":""}" data-nav="${s.path}">
          ${s.label}
        </a>
      `).join("")}
    </div>
  `,document.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",n=>{n.preventDefault();const i=s.getAttribute("data-nav");window.location.hash=i,y()})});const r=document.getElementById("nav-toggle");r.addEventListener("click",()=>{r.classList.toggle("open"),t.classList.toggle("open"),document.body.style.overflow=t.classList.contains("open")?"hidden":""}),window.addEventListener("resize",()=>{window.innerWidth>768&&t.classList.contains("open")&&y()}),E(a)}function y(){const a=document.getElementById("nav-toggle"),e=document.getElementById("mobile-overlay");a&&e&&(a.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow="")}function E(a){let e=!1;window.addEventListener("scroll",()=>{e||(window.requestAnimationFrame(()=>{window.scrollY>50?a.classList.add("scrolled"):a.classList.remove("scrolled"),e=!1}),e=!0)})}function V(){const a=window.location.hash.slice(1)||"";document.querySelectorAll(".navbar-link").forEach(e=>{e.getAttribute("data-nav")===a?e.classList.add("active"):e.classList.remove("active")})}function S(){const a=document.getElementById("site-footer");a.className="footer",a.innerHTML=`
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo" style="font-family: 'Samarkan', cursive; color: var(--cream);">Seven.84</div>
          <p class="footer-tagline">
            A Hindustani-Bollywood-Fusion band from MIT Manipal. 
            Where raga meets rhythm, where tradition meets today.
          </p>
          <div class="footer-socials" style="margin-top: var(--space-lg);">
            <a href="https://www.instagram.com/seven.84_" class="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener">📷</a>
          </div>
        </div>
        <div class="footer-nav">
          <div class="footer-nav-group">
            <h4>Navigate</h4>
            <a href="#" data-nav="">Home</a>
            <a href="#events" data-nav="events">Events</a>
            <a href="#results" data-nav="results">Results</a>
            <a href="#about" data-nav="about">About Us</a>
            <a href="#journey" data-nav="journey">Our Journey</a>
            <a href="#performances" data-nav="performances">Performances</a>
          </div>
          <div class="footer-nav-group">
            <h4>Connect</h4>
            <a href="https://www.instagram.com/seven.84_" target="_blank" rel="noopener">Instagram</a>
            <a href="mailto:nishant.verma04@yahoo.com">Email Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Seven.84 — All rights reserved</span>
        <span>Based out of MIT, Manipal 🎶</span>
      </div>
    </div>
  `,a.querySelectorAll("[data-nav]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("data-nav");window.location.hash=r,window.scrollTo({top:0,behavior:"smooth"})})})}let l=[],o=0;function N(a,e=0){l=a,o=e;const t=document.getElementById("lightbox-overlay");t.classList.remove("hidden"),t.innerHTML=`
    <span class="lightbox-close" id="lightbox-close">✕</span>
    <span class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</span>
    <img class="lightbox-image" src="${l[o].src}" alt="${l[o].title||""}" />
    <span class="lightbox-nav lightbox-next" id="lightbox-next">›</span>
    <div class="lightbox-counter">${o+1} / ${l.length}</div>
  `,requestAnimationFrame(()=>t.classList.add("active")),document.getElementById("lightbox-close").addEventListener("click",g),t.addEventListener("click",r=>{r.target===t&&g()}),document.getElementById("lightbox-prev").addEventListener("click",r=>{r.stopPropagation(),p(-1)}),document.getElementById("lightbox-next").addEventListener("click",r=>{r.stopPropagation(),p(1)}),document.addEventListener("keydown",T),document.body.style.overflow="hidden"}function p(a){o=(o+a+l.length)%l.length;const e=document.querySelector(".lightbox-image"),t=document.querySelector(".lightbox-counter");e.style.opacity="0",setTimeout(()=>{e.src=l[o].src,e.alt=l[o].title||"",t.textContent=`${o+1} / ${l.length}`,e.style.opacity="1"},150)}function T(a){a.key==="Escape"&&g(),a.key==="ArrowLeft"&&p(-1),a.key==="ArrowRight"&&p(1)}function g(){const a=document.getElementById("lightbox-overlay");a.classList.remove("active"),setTimeout(()=>{a.classList.add("hidden"),a.innerHTML=""},300),document.removeEventListener("keydown",T),document.body.style.overflow=""}function A(a){const e=document.getElementById("video-modal");e.classList.remove("hidden"),e.innerHTML=`
    <div class="video-modal-inner">
      <span class="video-modal-close" id="video-close">✕</span>
      <iframe 
        src="https://www.youtube.com/embed/${a}?autoplay=1&rel=0&vq=hd1080&modestbranding=1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  `,requestAnimationFrame(()=>e.classList.add("active")),document.getElementById("video-close").addEventListener("click",b),e.addEventListener("click",t=>{t.target===e&&b()}),document.addEventListener("keydown",M),document.body.style.overflow="hidden"}function M(a){a.key==="Escape"&&b()}function b(){const a=document.getElementById("video-modal");a.classList.remove("active"),setTimeout(()=>{a.classList.add("hidden"),a.innerHTML=""},300),document.removeEventListener("keydown",M),document.body.style.overflow=""}const d=[{id:1,title:"Indian Rock — Waves 23",youtubeId:"1ZSdr3wMT70",category:"live",date:"November 2023",featured:!0,eventId:"waves-23-indian-rock",bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:2,title:"Silence of the Amps — Waves 23",youtubeId:"S8snpxnyAo8",category:"live",date:"November 2023",featured:!1,eventId:"waves-23-silence-amps",bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]},{id:3,title:"Mitwa - World Mental Health Day",youtubeId:"HFSOPSBH6_o",category:"cover",date:"October 2024",featured:!1,bandMembers:["Nishant Verma","Tushar Vikash K","Anjishnu Satpathy"]},{id:4,title:"Saiyaan - World Mental Health Day",youtubeId:"rCRwFbHOalw",category:"cover",date:"October 2024",featured:!1,bandMembers:["Nishant Verma","Tushar Vikash K","Anjishnu Satpathy"]},{id:5,title:"Battle of Bands - TAPMI Atharva'37",youtubeId:"a_520VVl9Ro",category:"live",date:"January 2024",featured:!1,eventId:"jan-24-tapmi-band-battle",bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:6,title:"Battle of Bands - Chords & Co. Flagship'24",youtubeId:"GzCzWCLVfaQ",category:"live",date:"January 2024",featured:!1,eventId:"jan-24-chords-band-battle",bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:7,title:"Battle of Bands - NITTE Incridea'24",youtubeId:"5v_M2xM4pPM",category:"live",date:"February 2024",featured:!1,eventId:"feb-24-nitte-band-battle",bandMembers:["Nishant Verma","Satvik Agrawal","Anjishnu Satpathy","Adithi Angeerasa","Vansh Srivastava","Aryan Raj","Milind Konwar","Tushar Vikash K"]},{id:8,title:"Battle of Bands (Pulse) - Incident'24",youtubeId:"yhkU7u_LxE8",category:"live",date:"March 2024",featured:!1,eventId:"incident-24-pulse",bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K"]},{id:9,title:"Battle of Bands (Bandish) - Incident'24",youtubeId:"BM_npwZ8tx0",category:"live",date:"March 2024",featured:!1,eventId:"incident-24-bandish",bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K","Vansh Srivastava"]},{id:10,title:"Maa - Taare Zameen Par",youtubeId:"YanXSPv8rns",category:"cover",date:"March 2024",featured:!1,bandMembers:["Brandon Rich Khonglam","Nishant Verma","Vansh Srivastava","Aryan Raj","Tushar Vikash K"]},{id:11,title:"Farewell - Batch of '25",youtubeId:"aRQ0wWoybco",category:"live",date:"October 2024",featured:!1,bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava"]}],C=[{id:"all",label:"All"},{id:"live",label:"Live Performances"},{id:"cover",label:"Covers"}],v=[{id:"waves-23-indian-rock",name:"Indian Rock",type:"competition",date:"2023",time:"November 2023",venue:"Bits Goa Waves 23",rank:"5th",description:"Participated in the Indian Rock competition at Bits Goa Waves.",youtubeId:"1ZSdr3wMT70",thumbnail:"./gallery/events/Indian Rock - Waves 23/thumbnail/DSC_0004.webp",photos:[{src:"./gallery/events/Indian Rock - Waves 23/DSC_0003.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0005.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0007_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0008_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0010.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0011_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0012.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0013_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0014.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0015.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0017.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0018.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0019.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0020.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0022_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0023_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0029.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0030_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0031.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0032_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0033_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0034.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0036.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0037.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0038.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0039.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0042.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0043.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0044.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0045.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0046_1.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0047.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0048.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0049.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0052.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0053.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0057.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0058.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0059.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0060.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0061.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0063.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0074.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0076.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0080.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0081.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0082.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0084.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0085.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0087.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0088.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0089.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0091.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0092.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0093.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0094.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0095.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0096.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0097.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0098.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0099.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0100.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0101.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0102.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0103.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0104.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0105.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0106.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0107.webp"},{src:"./gallery/events/Indian Rock - Waves 23/DSC_0108.webp"},{src:"./gallery/events/Indian Rock - Waves 23/IMG_20231105_095417.webp"},{src:"./gallery/events/Indian Rock - Waves 23/IMG_20231105_095837.webp"},{src:"./gallery/events/Indian Rock - Waves 23/IMG_20231107_132201.webp"}],bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:"waves-23-silence-amps",name:"Silence of the Amps",type:"competition",date:"2023",time:"November 2023",venue:"Bits Goa Waves 23",rank:"2nd Place",description:"Secured 2nd position in Silence of the Amps at Bits Goa Waves.",youtubeId:"S8snpxnyAo8",thumbnail:"./gallery/events/Silence of the Amps - Waves 23/thumbnail/IMG-20231029-WA0101.webp",photos:[{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7415.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7416.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7417.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7418.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/7M4A7420.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0101.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0102.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0103.webp"},{src:"./gallery/events/Silence of the Amps - Waves 23/IMG-20231029-WA0110.webp"}],bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]},{id:"waves-23-eastern-vocals",name:"Eastern Solo Vocals",type:"competition",date:"2023",time:"November 2023",venue:"Bits Goa Waves 23",rank:"3rd Place",description:"Secured 3rd position in Eastern Solo Vocals at Bits Goa Waves.",youtubeId:null,thumbnail:null,photos:[],bandMembers:["Vansh Srivastava"]},{id:"jan-24-tapmi-band-battle",name:"Battle of Bands - TAPMI Atharva'37",type:"competition",date:"2024",time:"January 2024",venue:"TAPMI Manipal",rank:"3rd Place",description:"Participated and secured 3rd place in the Battle of Bands at TAPMI's flagship fest Atharva'37.",youtubeId:"a_520VVl9Ro",thumbnail:"./gallery/events/TAPMI Atharva 37/thumbnail/Screenshot 2026-03-07 195459.png",photos:[],bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:"jan-24-chords-band-battle",name:"Battle of Bands - Chords & Co. Flagship'24",type:"competition",date:"2024",time:"January 2024",venue:"MIT Manipal",rank:"1st Place",description:"Won 1st place in the flagship Battle of Bands competition organized by Chords & Co.",youtubeId:"GzCzWCLVfaQ",thumbnail:"./gallery/events/Chords and Co Flagship 24/thumbnail/WhatsApp Image 2024-01-22 at 00.54.47.jpeg",photos:[{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.42.30.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.53.01.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.54.47.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.55.06.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.55.13.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.55.53.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.56.01.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.56.19.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.58.27.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.58.43.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.58.53.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.59.04.jpeg"},{src:"./gallery/events/Chords and Co Flagship 24/WhatsApp Image 2024-01-22 at 00.59.09.jpeg"}],bandMembers:["Nishant Verma","Tushar Vikash K","Milind Konwar","Satvik Agrawal","Anjishnu Satpathy","Aryan Raj","Vansh Srivastava","Samarth Madhivanan"]},{id:"feb-24-nitte-band-battle",name:"Battle of Bands - NITTE Incridea'24",type:"competition",date:"2024",time:"February 2024",venue:"NITTE Meenakshi",rank:"2nd Place",description:"Secured 2nd place in the high-stakes Battle of Bands at NITTE's annual fest Incridea'24.",youtubeId:"5v_M2xM4pPM",thumbnail:"./gallery/events/Battle of Bands - NITTE Incridea 24/thumbnail/MVB02226.webp",photos:[{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02117.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02118.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02123.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02134.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02135.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02136.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02137.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02138.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02139.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02140.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02141.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02142.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02143.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02144.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02145.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02146.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02147.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02148.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02149.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02150.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02151.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02152.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02153.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02154.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02155.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02156.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02157.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02158.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02159.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02160.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02161.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02162.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02163.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02164.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02165.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02166.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02167.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02168.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02169.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02170.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02171.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02172.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02173.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02174.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02175.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02176.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02177.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02178.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02179.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02180.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02181.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02182.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02183.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02184.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02185.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02187.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02188.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02189.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02190.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02191.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02192.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02193.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02194.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02195.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02196.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02197.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02198.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02199.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02200.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02201.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02202.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02203.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02204.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02205.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02206.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02207.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02208.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02209.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02210.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02211.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02212.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02213.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02214.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02215.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02216.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02217.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02218.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02219.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02220.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02221.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02222.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02223.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02224.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02225.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02226.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02227.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02228.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02229.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02230.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02231.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02232.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02233.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02234.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02235.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02236.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02237.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02238.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02239.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02240.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02241.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02242.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02243.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02244.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02245.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02246.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02247.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02248.webp"},{src:"./gallery/events/Battle of Bands - NITTE Incridea 24/MVB02282.webp"}],bandMembers:["Nishant Verma","Satvik Agrawal","Anjishnu Satpathy","Adithi Angeerasa","Vansh Srivastava","Aryan Raj","Milind Konwar","Tushar Vikash K"]},{id:"incident-24-pulse",name:"Battle of Bands (Pulse) - Incident'24",type:"competition",date:"2024",time:"March 2024",venue:"NITK Surathkal",rank:"NA",description:"Participated in the Pulse - Battle of Bands competition at NITK Surathkal's annual fest Incident'24.",youtubeId:"yhkU7u_LxE8",thumbnail:"./gallery/events/Battle of Bands (Pulse) - Incident 24/thumbnail/Screenshot 2026-03-08 021444.webp",photos:[],bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K"]},{id:"incident-24-bandish",name:"Battle of Bands (Bandish) - Incident'24",type:"competition",date:"2024",time:"March 2024",venue:"NITK Surathkal",rank:"3rd Place",description:"Secured 3rd place in the Bandish - Battle of Bands competition at NITK Surathkal's annual fest Incident'24.",youtubeId:"BM_npwZ8tx0",thumbnail:"./gallery/events/Battle of Bands (Bandish) - Incident 24/thumbnail/Screenshot 2026-03-08 021323.webp",photos:[],bandMembers:["Nishant Verma","Samarth Madhivanan","Adithi Angeerasa","Milind Konwar","Anjishnu Satpathy","Satvik Agrawal","Aryan Raj","Tushar Vikash K","Vansh Srivastava"]}],u=a=>{if(a.eventId){const e=v.find(t=>t.id===a.eventId);if(e&&e.thumbnail)return e.thumbnail}return`https://img.youtube.com/vi/${a.youtubeId}/hqdefault.jpg`};function W(){const a=d.find(e=>e.featured)||d[0]||{title:"New Performance Coming Soon",youtubeId:""};return`
    <div class="page-enter">
      <!-- HERO -->
      <section class="hero">
        <div class="hero-bg"></div>
        
        <div class="hero-content container">
          <div class="hero-logo-css" style="font-family: 'Samarkan', cursive; font-size: clamp(4rem, 15vw, 10rem); color: white; text-align: center; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin-bottom: var(--space-xl); display: inline-block;">Seven.84</div>
          <div class="hero-cta" style="margin-top: 2rem; display: flex; justify-content: center; gap: 1rem;">
            <a href="#journey" class="btn btn-primary" style="width: 250px; justify-content: center;">Our Journey</a>
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
        
        <div class="highlight-reel">
          <button class="reel-nav-btn prev" onclick="window.appAPI.scrollHighlights(-1)" aria-label="Previous">❮</button>
          <div class="highlight-scroll" id="infinite-reel-scroll">
            ${(()=>{const e=d.slice(0,10),t=e.slice(-4),r=e.slice(0,4),s=[...t,...e,...r];return s.map((n,i)=>`
                <div class="highlight-card ${i<4||i>=s.length-4?"is-clone":""}" 
                     data-index="${i}"
                     onclick="window.appAPI.openVideo('${n.youtubeId}')">
                   <img src="${u(n)}" alt="${n.title}" loading="lazy" />
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
            <div class="featured-video-wrapper" style="margin: 0 auto var(--space-xl);" onclick="window.appAPI.openVideo('${a.youtubeId}')">
               <img src="${u(a)}" alt="${a.title}" class="featured-video-thumb" />
              <div class="featured-play-btn"></div>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center;">
              <button class="btn btn-primary" onclick="window.appAPI.openVideo('${a.youtubeId}')">Watch Now</button>
              <a href="#performances" class="btn btn-ghost">View All</a>
            </div>
          </div>
        </div>
      </section>

      <!-- CONTACT STRIP -->
      <section class="section section-gradient">
        <div class="container" style="text-align: center;">
          <h2 class="section-title" style="margin-bottom: var(--space-md);">Contact us for Bookings/ Collabs</h2>
          <p class="section-description" style="margin-bottom: var(--space-xl);">For bookings, collaborations, or just to say hi.</p>
          <a href="mailto:nishant.verma04@yahoo.com" class="btn btn-primary" style="background: white; color: var(--saffron);">Book Us via Email</a>
        </div>
      </section>

      <!-- QUICK LINKS -->
      <section class="section section-dark">
        <div class="container">
          <div class="quick-links">
            <a href="#about" class="quick-link-card">
              <div class="quick-link-icon">👥</div>
              <h4>Meet the Band</h4>
              <p>The musicians behind the sound</p>
            </a>
            <a href="#journey" class="quick-link-card">
              <div class="quick-link-icon">🎸</div>
              <h4>Our Story</h4>
              <p>From a dorm room jam to main stage</p>
            </a>
            <a href="#gallery" class="quick-link-card">
              <div class="quick-link-icon">📸</div>
              <h4>Photo Gallery</h4>
              <p>Visuals from our best shows</p>
            </a>
            <a href="https://www.instagram.com/seven.84_" class="quick-link-card" target="_blank" rel="noopener">
              <div class="quick-link-icon">📱</div>
              <h4>Instagram</h4>
              <p>Follow our daily journey</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  `}const c=[{name:"Nishant Verma",role:"Keys, Bass, Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Tushar Vikash K",role:"Drums, Percussion",photo:"",quote:"Test",instagram:"#"},{name:"Vansh Srivastava",role:"Guitars, Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Aryan Raj",role:"Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Anjishnu Satpathy",role:"Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Milind Konwar",role:"Keys, Bass",photo:"",quote:"Test",instagram:"#"},{name:"Chaitanya Pandey",role:"Guitar, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Satvik Agrawal",role:"Guitars",photo:"",quote:"Test",instagram:"#"},{name:"Samarth Madhivanan",role:"Tabla",photo:"",quote:"Test",instagram:"#"},{name:"Adithi Angeerasa",role:"Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Brandon Rich Khonglam",role:"Flute",photo:"",quote:"Test",instagram:"#"}];function $(){return`
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

      <section class="section">
        <div class="container">
          <div class="section-header reveal">
            <span class="section-subtitle">The Lineup</span>
            <h2 class="section-title">Meet the Band</h2>
          </div>
          
          <div class="members-grid stagger-children">
            ${c.map(e=>`
    <div class="member-card reveal-scale">
      <div class="member-photo-wrapper">
        <img src="${e.photo}" alt="${e.name}" class="member-photo" loading="lazy" />
      </div>
      <h3 class="member-name">${e.name}</h3>
      <div class="member-role">${e.role}</div>
      <p class="member-quote">"${e.quote}"</p>
      <div class="member-socials">
        ${e.instagram?`<a href="${e.instagram}" class="member-social-link" aria-label="Instagram">📷</a>`:""}
      </div>
    </div>
  `).join("")}
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
  `}const x=[{date:"August 2023",title:"Beginning the Journey",description:"The first sparks of Seven.84. A group of musicians from different backgrounds coming together in a college dorm room to create a new sound — a fusion of Hindustani classical depth and Bollywood energy.",image:null}],R=[{number:"15",suffix:"+",label:"Live Shows"},{number:"5",suffix:"",label:"Awards Won"},{number:"8",suffix:"",label:"Band Members"},{number:"50",suffix:"k+",label:"Digital Reach"}];function _(){const a=R.map(t=>`
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${t.number}" data-suffix="${t.suffix}">0</div>
      <div class="stat-label">${t.label}</div>
    </div>
  `).join(""),e=x.map((t,r)=>`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content ${r%2!==0?"reveal-left":"reveal-right"}">
          <div class="timeline-date">${t.date}</div>
          <h3 class="timeline-title">${t.title}</h3>
          <p class="timeline-description">${t.description}</p>
          ${t.image?`<img src="${t.image}" alt="${t.title}" class="timeline-image" loading="lazy" />`:""}
        </div>
      </div>
    `).join("");return`
    <div class="page-enter">
      <section class="journey-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Our Story</h1>
          <p class="section-description hide-mobile" style="margin: 0 auto; max-width: 600px;">
            From late-night jam sessions in college rooms to headlining festivals. This is the timeline of our musical evolution.
          </p>
        </div>
      </section>

      <section class="section section-dark">
        <div class="container">
          <div class="stats-bar stagger-children">
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
  `}const f=a=>{if(a.eventId){const e=v.find(t=>t.id===a.eventId);if(e&&e.thumbnail)return e.thumbnail}return`https://img.youtube.com/vi/${a.youtubeId}/hqdefault.jpg`},I=a=>a.split(" ")[0],B=a=>[...a].sort((e,t)=>{const r=c.findIndex(n=>n.name===e||n.name.startsWith(e)),s=c.findIndex(n=>n.name===t||n.name.startsWith(t));return r-s});function D(){const a=d.find(s=>s.featured)||d[0],e=d.filter(s=>s.id!==a.id),t=C.map((s,n)=>`
    <button class="filter-tab ${n===0?"active":""}" data-filter="${s.id}">
      ${s.label}
    </button>
  `).join(""),r=e.map(s=>`
    <div class="performance-card reveal" data-category="${s.category}" onclick="window.appAPI.openVideo('${s.youtubeId}')">
      <div class="performance-thumb-wrapper">
        <img src="${f(s)}" alt="${s.title}" class="performance-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${s.category.toUpperCase()}</div>
        <h3 class="performance-title">${s.title}</h3>
        <span class="performance-meta">${s.event||""} ${s.event?"•":""} ${s.date}</span>
        <div class="performer-tags">
          ${B(s.bandMembers||[]).map(n=>`<span class="performer-tag">${I(n)}</span>`).join("")}
        </div>
        ${s.eventId?`
          <button class="btn btn-ghost btn-sm mt-sm" onclick="event.stopPropagation(); window.location.hash = '#events?id=${s.eventId}'">
            View Event Details
          </button>
        `:""}
      </div>
    </div>
  `).join("");return setTimeout(L,100),`
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
            
            <div class="featured-video-wrapper" onclick="window.appAPI.openVideo('${a.youtubeId}')">
              <!-- Fallback to unspash if youtube ID is invalid placeholder -->
              <img src="${f(a)}" alt="${a.title}" class="featured-video-thumb" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80'" />
              <div class="featured-play-btn"></div>
            </div>
            
            <div class="featured-video-info">
              <h3>${a.title}</h3>
              <p>${a.event||""} ${a.event?"•":""} ${a.date}</p>
              <div class="performer-tags">
                ${B(a.bandMembers||[]).map(s=>`<span class="performer-tag">${I(s)}</span>`).join("")}
              </div>
              ${a.eventId?`
                <button class="btn btn-outline btn-sm mt-md" onclick="event.stopPropagation(); window.location.hash = '#events?id=${a.eventId}'">
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
  `}function L(){const a=document.querySelectorAll(".filter-tab"),e=document.querySelectorAll(".performance-card");a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(s=>s.classList.remove("active")),t.classList.add("active");const r=t.getAttribute("data-filter");e.forEach(s=>{r==="all"||s.getAttribute("data-category")===r?(s.style.display="block",setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},50)):(s.style.opacity="0",s.style.transform="translateY(10px)",setTimeout(()=>{s.style.display="none"},300))})})})}const j=a=>a.split(" ")[0],P=a=>[...a].sort((e,t)=>{const r=c.findIndex(n=>n.name===e||n.name.startsWith(e)),s=c.findIndex(n=>n.name===t||n.name.startsWith(t));return r-s});function K(a){const e=a?a.get("id"):null;return e?q(e):F()}function F(){return`
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
          ${v.filter(e=>e.youtubeId||e.thumbnail||e.photos&&e.photos.length>0).map(e=>`
            <div class="event-card" onclick="window.location.hash = '#events?id=${e.id}'">
              <div class="event-thumbnail">
                <img src="${e.thumbnail}" alt="${e.name}" loading="lazy" />
                ${e.rank?`<div class="event-badge">${e.rank}</div>`:""}
              </div>
              <div class="event-info">
                <span class="event-date font-accent text-saffron size-sm">${e.date}</span>
                <h3 class="font-display size-md">${e.name}</h3>
                <span class="event-venue opacity-70 size-sm">📍 ${e.venue}</span>
                <p class="event-desc font-body opacity-80 mt-sm line-clamp-2">${e.description}</p>
                <div class="event-media-icons mt-md">
                  ${e.youtubeId?'<span class="media-icon" title="Video available">🎥 Video</span>':""}
                  ${e.photos&&e.photos.length>0?`<span class="media-icon" title="Photos available">📸 ${e.photos.length} Photos</span>`:""}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    </div>
  `}function q(a){const e=v.find(r=>r.id===a);if(!e)return`
      <div class="page-container page-events fade-in text-center" style="padding: 150px 20px;">
        <h1 class="font-display size-xl">Event Not Found</h1>
        <a href="#events" class="btn btn-primary mt-lg text-charcoal">Back to Events</a>
      </div>
    `;const t=e.photos&&e.photos.length>0;return window.appAPI.openEventLightbox=r=>{window.appAPI.openEventSpecificLightbox(e.photos,r)},`
    <div class="page-container page-event-detail fade-in">
      <button class="back-button btn btn-outline slide-up" onclick="window.location.hash = '#events'">
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
          <div class="video-embed-container">
            <iframe 
              src="https://www.youtube.com/embed/${e.youtubeId}?rel=0&vq=hd1080&modestbranding=1" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="performer-tags">
            ${P(e.bandMembers||[]).map(r=>`<span class="performer-tag">${j(r)}</span>`).join("")}
          </div>
        </section>
      `:""}

      ${t?`
        <section class="event-gallery slide-up" style="animation-delay: 0.3s">
          <h2 class="font-display size-xl mb-xl">Event <span class="text-saffron">Gallery</span></h2>
          <div class="gallery-masonry" style="--columns: 3;">
            ${e.photos.map((r,s)=>`
              <div class="gallery-item" onclick="appAPI.openEventLightbox(${s})">
                <img src="${r.src}" alt="Event Photo" loading="lazy" />
              </div>
            `).join("")}
          </div>
          
          <div class="event-footer-cta mt-4xl text-center">
            <p class="opacity-60 mb-md">Want to see more of our music?</p>
            <a href="#performances" class="btn btn-primary">Explore All Performances</a>
          </div>
        </section>
      `:""}
    </div>
  `}const H=a=>[...a].sort((e,t)=>{const r=c.findIndex(n=>n.name===e||n.name.startsWith(e)),s=c.findIndex(n=>n.name===t||n.name.startsWith(t));return r-s});function z(){const a=v.filter(e=>e.type==="competition");return`
    <div class="page-container page-results fade-in">
      <header class="section-hero text-center">
        <h1 class="font-display size-xxl section-title slide-up">Our <span class="text-saffron">Results</span></h1>
        <p class="font-body opacity-80 slide-up" style="animation-delay: 0.1s; max-width: 600px; margin: 0 auto;">
          An ongoing tally of our competitive journey across various college fests and battle of the bands.
        </p>
      </header>
      
      <section class="results-table-container slide-up" style="animation-delay: 0.2s">
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
              ${a.length>0?a.map((e,t)=>`
                <tr class="result-row" onclick="const details = document.getElementById('details-${t}'); details.style.display = details.style.display === 'table-row' ? 'none' : 'table-row'; this.classList.toggle('active-row');">
                  <td class="font-accent text-saffron text-nowrap">
                    <span class="dropdown-icon">▶</span> ${e.date}
                  </td>
                  <td class="font-accent text-saffron text-nowrap">${e.time||""}</td>
                  <td class="font-display size-md text-cream">${e.name}</td>
                  <td class="opacity-80">${e.venue}</td>
                  <td>
                    ${e.rank?`<span class="result-badge ${G(e.rank)}">${e.rank}</span>`:'<span class="opacity-50">—</span>'}
                  </td>
                </tr>
                <tr id="details-${t}" class="result-details-row" style="display: none;">
                  <td colspan="5" class="result-details-cell">
                    <div class="result-details-content">
                      <div class="result-members">
                        <strong class="text-saffron">Lineup:</strong> 
                        <span class="opacity-80">${e.bandMembers&&e.bandMembers.length>0?H(e.bandMembers).join(", "):"Lineup not specified"}</span>
                      </div>
                      ${e.youtubeId||e.thumbnail||e.photos&&e.photos.length>0?`
                        <a href="#events?id=${e.id}" class="result-event-link">
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
      </section>
    </div>
  `}function G(a){const e=String(a).toLowerCase();return e.includes("1st")||e.includes("winner")||e==="first"?"badge-gold":e.includes("2nd")||e.includes("runner")?"badge-silver":e.includes("3rd")?"badge-bronze":"badge-neutral"}window.appAPI={openEventSpecificLightbox:(a,e)=>N(a,e),openVideo:a=>A(a),scrollHighlights:a=>{const e=document.getElementById("infinite-reel-scroll");if(e){const t=e.clientWidth*.8;e.scrollBy({left:a*t,behavior:"smooth"})}},initInfiniteScroll:()=>{const a=document.getElementById("infinite-reel-scroll");if(!a)return;const e=a.querySelectorAll(".highlight-card");if(e.length===0)return;const t=e[0].offsetWidth+parseInt(getComputedStyle(a).gap),r=e.length-8;a.scrollLeft=t*4,a.addEventListener("scroll",()=>{const s=a.scrollLeft;s>=t*(r+6)?a.scrollTo({left:t*6,behavior:"instant"}):s<=t*2&&a.scrollTo({left:t*(r+2),behavior:"instant"})})}};const h={"":W,about:$,journey:_,performances:D,events:K,results:z};function w(){const a=document.getElementById("page-content"),e=window.location.hash.slice(1),[t,r]=e.split("?");if(t&&!h[t]){window.location.hash="";return}const s=new URLSearchParams(r||"");a.style.opacity="0",setTimeout(()=>{const n=h[t]||h[""];a.innerHTML=n(s),(!t||t==="")&&window.appAPI.initInfiniteScroll(),window.scrollTo({top:0,behavior:"instant"}),a.style.opacity="1",V()},150)}function O(){k(),S(),window.addEventListener("hashchange",w),w()}document.addEventListener("DOMContentLoaded",O);
