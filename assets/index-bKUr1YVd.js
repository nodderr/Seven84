(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const h=[{path:"",label:"Home"},{path:"events",label:"Events"},{path:"performances",label:"Performances"},{path:"results",label:"Results"},{path:"journey",label:"Our Journey"},{path:"about",label:"About Us"}];function w(){const a=document.getElementById("navbar"),e=window.location.hash.slice(1)||"";a.className="navbar",a.innerHTML=`
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${h.map(s=>`
          <a class="navbar-link ${e===s.path?"active":""}" data-nav="${s.path}">
            ${s.label}
          </a>
        `).join("")}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar-mobile-overlay" id="mobile-overlay">
      ${h.map(s=>`
        <a class="navbar-link ${e===s.path?"active":""}" data-nav="${s.path}">
          ${s.label}
        </a>
      `).join("")}
    </div>
  `,a.querySelectorAll("[data-nav]").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const l=s.getAttribute("data-nav");window.location.hash=l,k()})});const t=document.getElementById("nav-toggle"),n=document.getElementById("mobile-overlay");t.addEventListener("click",()=>{t.classList.toggle("open"),n.classList.toggle("open"),document.body.style.overflow=n.classList.contains("open")?"hidden":""}),S(a)}function k(){const a=document.getElementById("nav-toggle"),e=document.getElementById("mobile-overlay");a&&e&&(a.classList.remove("open"),e.classList.remove("open"),document.body.style.overflow="")}function S(a){let e=!1;window.addEventListener("scroll",()=>{e||(window.requestAnimationFrame(()=>{window.scrollY>50?a.classList.add("scrolled"):a.classList.remove("scrolled"),e=!1}),e=!0)})}function $(){const a=window.location.hash.slice(1)||"";document.querySelectorAll(".navbar-link").forEach(e=>{e.getAttribute("data-nav")===a?e.classList.add("active"):e.classList.remove("active")})}function C(){const a=document.getElementById("site-footer");a.className="footer",a.innerHTML=`
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo" style="font-family: 'Samarkan', cursive; color: var(--cream);">Seven.84</div>
          <p class="footer-tagline">
            A Hindustani-Bollywood-Fusion band from MIT Manipal. 
            Where raga meets rhythm, where tradition meets today.
          </p>
          <div class="footer-socials" style="margin-top: var(--space-lg);">
            <a href="#" class="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener">📷</a>
            <a href="#" class="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener">▶️</a>
            <a href="#" class="footer-social-link" aria-label="Spotify" target="_blank" rel="noopener">🎵</a>
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
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Spotify</a>
            <a href="mailto:seven84band@gmail.com">Email Us</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Seven.84 — All rights reserved</span>
        <span>Based out of MIT, Manipal 🎶</span>
      </div>
    </div>
  `,a.querySelectorAll("[data-nav]").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("data-nav");window.location.hash=n,window.scrollTo({top:0,behavior:"smooth"})})})}let o=[],r=0;function _(a,e=0){o=a,r=e;const t=document.getElementById("lightbox-overlay");t.classList.remove("hidden"),t.innerHTML=`
    <span class="lightbox-close" id="lightbox-close">✕</span>
    <span class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</span>
    <img class="lightbox-image" src="${o[r].src}" alt="${o[r].title||""}" />
    <span class="lightbox-nav lightbox-next" id="lightbox-next">›</span>
    <div class="lightbox-counter">${r+1} / ${o.length}</div>
  `,requestAnimationFrame(()=>t.classList.add("active")),document.getElementById("lightbox-close").addEventListener("click",p),t.addEventListener("click",n=>{n.target===t&&p()}),document.getElementById("lightbox-prev").addEventListener("click",n=>{n.stopPropagation(),d(-1)}),document.getElementById("lightbox-next").addEventListener("click",n=>{n.stopPropagation(),d(1)}),document.addEventListener("keydown",y),document.body.style.overflow="hidden"}function d(a){r=(r+a+o.length)%o.length;const e=document.querySelector(".lightbox-image"),t=document.querySelector(".lightbox-counter");e.style.opacity="0",setTimeout(()=>{e.src=o[r].src,e.alt=o[r].title||"",t.textContent=`${r+1} / ${o.length}`,e.style.opacity="1"},150)}function y(a){a.key==="Escape"&&p(),a.key==="ArrowLeft"&&d(-1),a.key==="ArrowRight"&&d(1)}function p(){const a=document.getElementById("lightbox-overlay");a.classList.remove("active"),setTimeout(()=>{a.classList.add("hidden"),a.innerHTML=""},300),document.removeEventListener("keydown",y),document.body.style.overflow=""}function x(a){const e=document.getElementById("video-modal");e.classList.remove("hidden"),e.innerHTML=`
    <div class="video-modal-inner">
      <span class="video-modal-close" id="video-close">✕</span>
      <iframe 
        src="https://www.youtube.com/embed/${a}?autoplay=1&rel=0&vq=hd1080&modestbranding=1" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  `,requestAnimationFrame(()=>e.classList.add("active")),document.getElementById("video-close").addEventListener("click",m),e.addEventListener("click",t=>{t.target===e&&m()}),document.addEventListener("keydown",f),document.body.style.overflow="hidden"}function f(a){a.key==="Escape"&&m()}function m(){const a=document.getElementById("video-modal");a.classList.remove("active"),setTimeout(()=>{a.classList.add("hidden"),a.innerHTML=""},300),document.removeEventListener("keydown",f),document.body.style.overflow=""}const c=[{id:1,title:"Indian Rock — Waves 24",youtubeId:"1ZSdr3wMT70",category:"live",date:"November 2024",featured:!0,bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:2,title:"Silence of the Amps — Waves 24",youtubeId:"S8snpxnyAo8",category:"live",date:"November 2024",featured:!1,bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]}],D=[{id:"all",label:"All"},{id:"live",label:"Live Performances"},{id:"cover",label:"Covers"}];function E(){const a=c.find(e=>e.featured)||c[0]||{title:"New Performance Coming Soon",youtubeId:""};return`
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

      <!-- HIGHLIGHT REEL -->
      <section class="section section-darker">
        <div class="container section-header">
          <span class="section-subtitle">Glimpses</span>
          <h2 class="section-title">Stage Moments</h2>
        </div>
        
        <div class="highlight-reel">
          <div class="highlight-scroll">
            <a href="#gallery" class="highlight-card">
              <img src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800" alt="Revels Performance" />
              <div class="highlight-card-overlay">
                <h4>Main Stage Magic</h4>
                <p>Revels 2024</p>
              </div>
            </a>
            <a href="#gallery" class="highlight-card">
              <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800" alt="Acoustic Session" />
              <div class="highlight-card-overlay">
                <h4>Unplugged Setup</h4>
                <p>College Auditorium</p>
              </div>
            </a>
            <a href="#gallery" class="highlight-card">
              <img src="https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800" alt="Classical Meets Rock" />
              <div class="highlight-card-overlay">
                <h4>Fusion Grooves</h4>
                <p>Inter-college Fest</p>
              </div>
            </a>
            <a href="#gallery" class="highlight-card reveal-left">
              <img src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800" alt="Behind the scenes" />
              <div class="highlight-card-overlay">
                <h4>Soundcheck</h4>
                <p>Before the storm</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- FEATURED PERFORMANCE -->
      <section class="section section-dark">
        <div class="container grid-2 align-center gap-xl">
          <div>
            <span class="section-subtitle">Latest Drop</span>
            <h2 class="section-title">Vande Mataram<br>Fusion Reimagined</h2>
            <p class="section-description" style="margin-left: 0; margin-bottom: var(--space-xl);">
              Our biggest undertaking yet. A 10-minute arrangement combining the timeless melody with progressive rock riffs, complex Indian rhythms, and soaring synthesizer leads. 
            </p>
            <a href="#performances" class="btn btn-ghost">View All Performances</a>
          </div>
          
          <div>
            <div class="featured-video-wrapper" onclick="window.appAPI.openVideo('${a.youtubeId}')">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800" alt="${a.title}" class="featured-video-thumb" />
              <div class="featured-play-btn"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- QUOTE STRIP -->
      <section class="quote-strip section-gradient">
        <div class="container">
          <p class="quote-text">"Seven.84 isn't just a band playing songs; they are architects of sound, building bridges between classical heritage and modern energy."</p>
          <p class="quote-author">MIT Post</p>
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
            <a href="mailto:seven84band@gmail.com" class="quick-link-card">
              <div class="quick-link-icon">✉️</div>
              <h4>Book Us</h4>
              <p>Get in touch for live events</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  `}const L=[{name:"Nishant Verma",role:"Keys, Bass, Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Tushar Vikash K",role:"Drums, Percussion",photo:"",quote:"Test",instagram:"#"},{name:"Vansh Srivastava",role:"Guitars, Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Aryan Raj",role:"Guitars, Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Anjishnu Satpathy",role:"Lead Vocals",photo:"",quote:"Test",instagram:"#"},{name:"Milind Konwar",role:"Keys, Bass",photo:"",quote:"Test",instagram:"#"},{name:"Chaitanya Pandey",role:"Guitar, Vocals",photo:"",quote:"Test",instagram:"#"}];function I(){return`
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
            ${L.map(e=>`
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
  `}const A=[],M=[];function T(){const a=M.map(t=>`
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${t.number}" data-suffix="${t.suffix}">0</div>
      <div class="stat-label">${t.label}</div>
    </div>
  `).join(""),e=A.map((t,n)=>`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content ${n%2!==0?"reveal-left":"reveal-right"}">
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
  `}const g=a=>a.split(" ")[0];function V(){const a=c.find(s=>s.featured)||c[0],e=c.filter(s=>s.id!==a.id),t=D.map((s,i)=>`
    <button class="filter-tab ${i===0?"active":""}" data-filter="${s.id}">
      ${s.label}
    </button>
  `).join(""),n=e.map(s=>`
    <div class="performance-card reveal" data-category="${s.category}" onclick="window.appAPI.openVideo('${s.youtubeId}')">
      <div class="performance-thumb-wrapper">
        <img src="https://img.youtube.com/vi/${s.youtubeId}/maxresdefault.jpg" alt="${s.title}" class="performance-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${s.category.toUpperCase()}</div>
        <h3 class="performance-title">${s.title}</h3>
        <span class="performance-meta">${s.event||""} ${s.event?"•":""} ${s.date}</span>
        <div class="performer-tags">
          ${(s.bandMembers||[]).map(i=>`<span class="performer-tag">${g(i)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");return setTimeout(P,100),`
    <div class="page-enter">
      <section class="performances-hero grain-overlay">
        <div class="container reveal">
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
              <img src="https://img.youtube.com/vi/${a.youtubeId}/maxresdefault.jpg" alt="${a.title}" class="featured-video-thumb" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80'" />
              <div class="featured-play-btn"></div>
            </div>
            
            <div class="featured-video-info">
              <h3>${a.title}</h3>
              <p>${a.event||""} ${a.event?"•":""} ${a.date}</p>
              <div class="performer-tags">
                ${(a.bandMembers||[]).map(s=>`<span class="performer-tag">${g(s)}</span>`).join("")}
              </div>
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
            ${n}
          </div>
        </div>
      </section>
    </div>
  `}function P(){const a=document.querySelectorAll(".filter-tab"),e=document.querySelectorAll(".performance-card");a.forEach(t=>{t.addEventListener("click",()=>{a.forEach(s=>s.classList.remove("active")),t.classList.add("active");const n=t.getAttribute("data-filter");e.forEach(s=>{n==="all"||s.getAttribute("data-category")===n?(s.style.display="block",setTimeout(()=>{s.style.opacity="1",s.style.transform="translateY(0)"},50)):(s.style.opacity="0",s.style.transform="translateY(10px)",setTimeout(()=>{s.style.display="none"},300))})})})}const u=[{id:"waves-24-indian-rock",name:"Indian Rock",type:"competition",date:"2024",time:"November 2024",venue:"Bits Goa Waves 24",rank:"5th",description:"Participated in the Indian Rock competition at Bits Goa Waves.",youtubeId:"1ZSdr3wMT70",thumbnail:"./gallery/events/waves-24-indian-rock/thumbnail/DSC_0004.webp",photos:[{src:"./gallery/events/waves-24-indian-rock/DSC_0003.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0005.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0007_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0008_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0010.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0011_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0012.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0013_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0014.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0015.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0017.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0018.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0019.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0020.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0022_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0023_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0029.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0030_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0031.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0032_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0033_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0034.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0036.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0037.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0038.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0039.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0042.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0043.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0044.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0045.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0046_1.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0047.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0048.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0049.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0052.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0053.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0057.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0058.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0059.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0060.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0061.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0063.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0074.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0076.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0080.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0081.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0082.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0084.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0085.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0087.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0088.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0089.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0091.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0092.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0093.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0094.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0095.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0096.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0097.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0098.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0099.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0100.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0101.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0102.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0103.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0104.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0105.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0106.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0107.webp"},{src:"./gallery/events/waves-24-indian-rock/DSC_0108.webp"},{src:"./gallery/events/waves-24-indian-rock/IMG_20231105_095417.webp"},{src:"./gallery/events/waves-24-indian-rock/IMG_20231105_095837.webp"},{src:"./gallery/events/waves-24-indian-rock/IMG_20231107_132201.webp"}],bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:"waves-24-silence-amps",name:"Silence of the Amps",type:"competition",date:"2024",time:"November 2024",venue:"Bits Goa Waves 24",rank:"2nd Place",description:"Secured 2nd position in Silence of the Amps at Bits Goa Waves.",youtubeId:"S8snpxnyAo8",thumbnail:"./gallery/events/waves-24-silence-amps/thumbnail/IMG-20231029-WA0101.webp",photos:[{src:"./gallery/events/waves-24-silence-amps/7M4A7415.webp"},{src:"./gallery/events/waves-24-silence-amps/7M4A7416.webp"},{src:"./gallery/events/waves-24-silence-amps/7M4A7417.webp"},{src:"./gallery/events/waves-24-silence-amps/7M4A7418.webp"},{src:"./gallery/events/waves-24-silence-amps/7M4A7420.webp"},{src:"./gallery/events/waves-24-silence-amps/IMG-20231029-WA0101.webp"},{src:"./gallery/events/waves-24-silence-amps/IMG-20231029-WA0102.webp"},{src:"./gallery/events/waves-24-silence-amps/IMG-20231029-WA0103.webp"},{src:"./gallery/events/waves-24-silence-amps/IMG-20231029-WA0110.webp"}],bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]},{id:"waves-24-eastern-vocals",name:"Eastern Solo Vocals",type:"competition",date:"2024",time:"November 2024",venue:"Bits Goa Waves 24",rank:"3rd Place",description:"Secured 3rd position in Eastern Solo Vocals at Bits Goa Waves.",youtubeId:null,thumbnail:"",photos:[],bandMembers:["Vansh Srivastava"]}],j=a=>a.split(" ")[0];function q(a){const e=a?a.get("id"):null;return e?R(e):B()}function B(){return`
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
          ${u.filter(e=>e.youtubeId||e.thumbnail||e.photos&&e.photos.length>0).map(e=>`
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
  `}function R(a){const e=u.find(n=>n.id===a);if(!e)return`
      <div class="page-container page-events fade-in text-center" style="padding: 150px 20px;">
        <h1 class="font-display size-xl">Event Not Found</h1>
        <a href="#events" class="btn btn-primary mt-lg text-charcoal">Back to Events</a>
      </div>
    `;const t=e.photos&&e.photos.length>0;return window.appAPI.openEventLightbox=n=>{window.appAPI.openEventSpecificLightbox(e.photos,n)},`
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
            ${(e.bandMembers||[]).map(n=>`<span class="performer-tag">${j(n)}</span>`).join("")}
          </div>
        </section>
      `:""}

      ${t?`
        <section class="event-gallery slide-up" style="animation-delay: 0.3s">
          <h2 class="font-display size-xl mb-xl">Event <span class="text-saffron">Gallery</span></h2>
          <div class="gallery-masonry" style="--columns: 3;">
            ${e.photos.map((n,s)=>`
              <div class="gallery-item" onclick="appAPI.openEventLightbox(${s})">
                <img src="${n.src}" alt="Event Photo" loading="lazy" />
              </div>
            `).join("")}
          </div>
        </section>
      `:""}
    </div>
  `}function G(){const a=u.filter(e=>e.type==="competition");return`
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
                    ${e.rank?`<span class="result-badge ${F(e.rank)}">${e.rank}</span>`:'<span class="opacity-50">—</span>'}
                  </td>
                </tr>
                <tr id="details-${t}" class="result-details-row" style="display: none;">
                  <td colspan="5" class="result-details-cell">
                    <div class="result-details-content">
                      <div class="result-members">
                        <strong class="text-saffron">Lineup:</strong> 
                        <span class="opacity-80">${e.bandMembers&&e.bandMembers.length>0?e.bandMembers.join(", "):"Lineup not specified"}</span>
                      </div>
                      <a href="#events?id=${e.id}" class="result-event-link">
                        View Event Media <span>&rarr;</span>
                      </a>
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
  `}function F(a){const e=String(a).toLowerCase();return e.includes("1st")||e.includes("winner")||e==="first"?"badge-gold":e.includes("2nd")||e.includes("runner")?"badge-silver":e.includes("3rd")?"badge-bronze":"badge-neutral"}window.appAPI={openEventSpecificLightbox:(a,e)=>_(a,e),openVideo:a=>x(a)};const v={"":E,about:I,journey:T,performances:V,events:q,results:G};function b(){const a=document.getElementById("page-content"),e=window.location.hash.slice(1),[t,n]=e.split("?");if(t&&!v[t]){window.location.hash="";return}const s=new URLSearchParams(n||"");a.style.opacity="0",setTimeout(()=>{const i=v[t]||v[""];a.innerHTML=i(s),window.scrollTo({top:0,behavior:"instant"}),a.style.opacity="1",$()},150)}function N(){w(),C(),window.addEventListener("hashchange",b),b()}document.addEventListener("DOMContentLoaded",N);
