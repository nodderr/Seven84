(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const v=[{path:"",label:"Home"},{path:"gallery",label:"Gallery"},{path:"events",label:"Events"},{path:"performances",label:"Performances"},{path:"results",label:"Results"},{path:"journey",label:"Our Journey"},{path:"about",label:"About Us"}];function w(){const e=document.getElementById("navbar"),a=window.location.hash.slice(1)||"";e.className="navbar",e.innerHTML=`
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${v.map(t=>`
          <a class="navbar-link ${a===t.path?"active":""}" data-nav="${t.path}">
            ${t.label}
          </a>
        `).join("")}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar-mobile-overlay" id="mobile-overlay">
      ${v.map(t=>`
        <a class="navbar-link ${a===t.path?"active":""}" data-nav="${t.path}">
          ${t.label}
        </a>
      `).join("")}
    </div>
  `,e.querySelectorAll("[data-nav]").forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const r=t.getAttribute("data-nav");window.location.hash=r,k()})});const s=document.getElementById("nav-toggle"),i=document.getElementById("mobile-overlay");s.addEventListener("click",()=>{s.classList.toggle("open"),i.classList.toggle("open"),document.body.style.overflow=i.classList.contains("open")?"hidden":""}),$(e)}function k(){const e=document.getElementById("nav-toggle"),a=document.getElementById("mobile-overlay");e&&a&&(e.classList.remove("open"),a.classList.remove("open"),document.body.style.overflow="")}function $(e){let a=!1;window.addEventListener("scroll",()=>{a||(window.requestAnimationFrame(()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled"),a=!1}),a=!0)})}function x(){const e=window.location.hash.slice(1)||"";document.querySelectorAll(".navbar-link").forEach(a=>{a.getAttribute("data-nav")===e?a.classList.add("active"):a.classList.remove("active")})}function L(){const e=document.getElementById("site-footer");e.className="footer",e.innerHTML=`
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
            <a href="#gallery" data-nav="gallery">Gallery</a>
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
  `,e.querySelectorAll("[data-nav]").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const i=a.getAttribute("data-nav");window.location.hash=i,window.scrollTo({top:0,behavior:"smooth"})})})}let n=[],l=0;function E(e,a=0){n=e,l=a;const s=document.getElementById("lightbox-overlay");s.classList.remove("hidden"),s.innerHTML=`
    <span class="lightbox-close" id="lightbox-close">✕</span>
    <span class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</span>
    <img class="lightbox-image" src="${n[l].src}" alt="${n[l].title||""}" />
    <span class="lightbox-nav lightbox-next" id="lightbox-next">›</span>
    <div class="lightbox-counter">${l+1} / ${n.length}</div>
  `,requestAnimationFrame(()=>s.classList.add("active")),document.getElementById("lightbox-close").addEventListener("click",h),s.addEventListener("click",i=>{i.target===s&&h()}),document.getElementById("lightbox-prev").addEventListener("click",i=>{i.stopPropagation(),p(-1)}),document.getElementById("lightbox-next").addEventListener("click",i=>{i.stopPropagation(),p(1)}),document.addEventListener("keydown",f),document.body.style.overflow="hidden"}function p(e){l=(l+e+n.length)%n.length;const a=document.querySelector(".lightbox-image"),s=document.querySelector(".lightbox-counter");a.style.opacity="0",setTimeout(()=>{a.src=n[l].src,a.alt=n[l].title||"",s.textContent=`${l+1} / ${n.length}`,a.style.opacity="1"},150)}function f(e){e.key==="Escape"&&h(),e.key==="ArrowLeft"&&p(-1),e.key==="ArrowRight"&&p(1)}function h(){const e=document.getElementById("lightbox-overlay");e.classList.remove("active"),setTimeout(()=>{e.classList.add("hidden"),e.innerHTML=""},300),document.removeEventListener("keydown",f),document.body.style.overflow=""}function S(e){const a=document.getElementById("video-modal");a.classList.remove("hidden"),a.innerHTML=`
    <div class="video-modal-inner">
      <span class="video-modal-close" id="video-close">✕</span>
      <iframe 
        src="https://www.youtube.com/embed/${e}?autoplay=1&rel=0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  `,requestAnimationFrame(()=>a.classList.add("active")),document.getElementById("video-close").addEventListener("click",u),a.addEventListener("click",s=>{s.target===a&&u()}),document.addEventListener("keydown",b),document.body.style.overflow="hidden"}function b(e){e.key==="Escape"&&u()}function u(){const e=document.getElementById("video-modal");e.classList.remove("active"),setTimeout(()=>{e.classList.add("hidden"),e.innerHTML=""},300),document.removeEventListener("keydown",b),document.body.style.overflow=""}const c=[],A=[{id:"all",label:"All"},{id:"live",label:"Live Performances"},{id:"cover",label:"Covers"}];function I(){const e=c.find(a=>a.featured)||c[0]||{title:"New Performance Coming Soon",youtubeId:""};return`
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
            <div class="featured-video-wrapper" onclick="window.appAPI.openVideo('${e.youtubeId}')">
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800" alt="${e.title}" class="featured-video-thumb" />
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
  `}const M=["All","Events","Behind the Scenes","Band Photos","Rehearsals"],y=[{src:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",thumb:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400",title:"Revels 2023",category:"Events",date:"March 2023",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",thumb:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",title:"Soundcheck Session",category:"Behind the Scenes",date:"May 2023",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",thumb:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",title:"Lead Guitar Solo",category:"Events",date:"August 2023",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800",thumb:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400",title:"Crowd at Annual Fest",category:"Events",date:"October 2023",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",thumb:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400",title:"Studio Recording",category:"Behind the Scenes",date:"November 2023",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",thumb:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",title:"Band Photo — Outdoors",category:"Band Photos",date:"January 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",thumb:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",title:"Acoustic Rehearsal",category:"Rehearsals",date:"February 2024",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",thumb:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",title:"Fusion Night",category:"Events",date:"March 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800",thumb:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400",title:"Backstage Moments",category:"Behind the Scenes",date:"April 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",thumb:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",title:"Full Band Setup",category:"Band Photos",date:"May 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800",thumb:"https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=400",title:"Tabla Close-Up",category:"Rehearsals",date:"June 2024",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",thumb:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",title:"Pre-show Huddle",category:"Behind the Scenes",date:"July 2024",aspectRatio:"landscape"}];function T(){const e=M.map((s,i)=>`
    <button class="filter-tab ${i===0?"active":""}" data-filter="${s==="All"?"all":s}">
      ${s}
    </button>
  `).join(""),a=y.map((s,i)=>`
    <div class="gallery-item reveal" data-category="${s.category}" onclick="window.appAPI.openLightbox(${i})">
      <img src="${s.thumb}" alt="${s.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h4>${s.title}</h4>
          <p>${s.date}</p>
        </div>
      </div>
    </div>
  `).join("");return setTimeout(B,100),`
    <div class="page-enter">
      <section class="gallery-hero grain-overlay">
        <div class="container reveal">
          <h1 class="section-title">Visual Archive</h1>
          <p class="section-description">Moments frozen in time across stages, studios, and practice rooms.</p>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="filter-tabs reveal">
            ${e}
          </div>
          
          <div class="gallery-masonry stagger-children" id="gallery-grid">
            ${a}
          </div>
        </div>
      </section>
    </div>
  `}function B(){const e=document.querySelectorAll(".filter-tab"),a=document.querySelectorAll(".gallery-item");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(t=>t.classList.remove("active")),s.classList.add("active");const i=s.getAttribute("data-filter");a.forEach(t=>{i==="all"||t.getAttribute("data-category")===i?(t.style.display="block",setTimeout(()=>{t.style.opacity="1",t.style.transform="scale(1)"},50)):(t.style.opacity="0",t.style.transform="scale(0.8)",setTimeout(()=>{t.style.display="none"},300))})})})}const P=[{name:"Nishant Verma",role:"Keys, Bass, Guitars, Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Tushar Vikash K",role:"Drums, Percussion",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Vansh Srivastava",role:"Guitars, Lead Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Aryan Raj",role:"Guitars, Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Anjishnu Satpathy",role:"Lead Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Milind Konwar",role:"Keys, Bass",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Chaitanya Pandey",role:"Guitar, Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"}];function R(){return`
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
            ${P.map(a=>`
    <div class="member-card reveal-scale">
      <div class="member-photo-wrapper">
        <img src="${a.photo}" alt="${a.name}" class="member-photo" loading="lazy" />
      </div>
      <h3 class="member-name">${a.name}</h3>
      <div class="member-role">${a.role}</div>
      <p class="member-quote">"${a.quote}"</p>
      <div class="member-socials">
        ${a.instagram?`<a href="${a.instagram}" class="member-social-link" aria-label="Instagram">📷</a>`:""}
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
  `}const q=[{date:"August 2021",title:"The Beginning",description:"Seven.84 was born in the corridors of MIT Manipal, when a group of music enthusiasts decided to fuse Hindustani classical with contemporary sounds.",image:null},{date:"November 2021",title:"First Jam Session",description:"Our first official jam session at the college music room. Six hours of pure experimentation with ragas, grooves, and zero sleep.",image:null},{date:"February 2022",title:"Debut Performance — Revels",description:"Our first stage performance at MIT's annual cultural fest Revels. The crowd's response was beyond anything we had imagined.",image:null},{date:"July 2022",title:"Original Compositions Begin",description:"Started working on our first original compositions, blending Hindustani ragas with progressive rock arrangements.",image:null},{date:"October 2022",title:"Inter-College Circuit",description:"Performed at multiple inter-college competitions across Karnataka, winning hearts and a few trophies along the way.",image:null},{date:"March 2023",title:"Workshop with Agam",description:"A dream come true — attended a masterclass workshop conducted by members of Agam. Learned invaluable lessons about arrangement and stage presence.",image:null},{date:"August 2023",title:"First YouTube Release",description:'Released our first performance video on YouTube. The fusion of "Vande Mataram" with progressive rock elements received overwhelming response.',image:null},{date:"January 2024",title:"Growing Stronger",description:"Expanded the band's lineup, refined our sound, and began performing regularly at venues across Manipal and Udupi.",image:null},{date:"2024 — Present",title:"The Journey Continues",description:"Continuing to push boundaries, create original music, and spread the fusion wave from MIT Manipal to the world.",image:null}],V=[{number:50,suffix:"+",label:"Live Performances"},{number:7,suffix:"",label:"Band Members"},{number:3,suffix:"+",label:"Years of Music"},{number:1e4,suffix:"+",label:"Hearts Touched"}];function C(){const e=V.map(s=>`
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${s.number}" data-suffix="${s.suffix}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join(""),a=q.map((s,i)=>`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content ${i%2!==0?"reveal-left":"reveal-right"}">
          <div class="timeline-date">${s.date}</div>
          <h3 class="timeline-title">${s.title}</h3>
          <p class="timeline-description">${s.description}</p>
          ${s.image?`<img src="${s.image}" alt="${s.title}" class="timeline-image" loading="lazy" />`:""}
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
            ${e}
          </div>
        </div>
      </section>

      <section class="section section-darker" style="padding-top: var(--space-xl)">
        <div class="container-narrow">
          <div class="timeline stagger-children">
            ${a}
          </div>
        </div>
      </section>
    </div>
  `}function j(){const e=c.find(t=>t.featured)||c[0],a=c.filter(t=>t.id!==e.id),s=A.map((t,o)=>`
    <button class="filter-tab ${o===0?"active":""}" data-filter="${t.id}">
      ${t.label}
    </button>
  `).join(""),i=a.map(t=>`
    <div class="performance-card reveal" data-category="${t.category}" onclick="window.appAPI.openVideo('${t.youtubeId}')">
      <div class="performance-thumb-wrapper">
        <img src="https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg" alt="${t.title}" class="performance-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${t.category.toUpperCase()}</div>
        <h3 class="performance-title">${t.title}</h3>
        <span class="performance-meta">${t.event} • ${t.date}</span>
      </div>
    </div>
  `).join("");return setTimeout(F,100),`
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
            
            <div class="featured-video-wrapper" onclick="window.appAPI.openVideo('${e.youtubeId}')">
              <!-- Fallback to unspash if youtube ID is invalid placeholder -->
              <img src="https://img.youtube.com/vi/${e.youtubeId}/maxresdefault.jpg" alt="${e.title}" class="featured-video-thumb" onerror="this.src='https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&q=80'" />
              <div class="featured-play-btn"></div>
            </div>
            
            <div class="featured-video-info">
              <h3>${e.title}</h3>
              <p>${e.event} • ${e.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-darker">
        <div class="container">
          <div class="filter-tabs reveal">
            ${s}
          </div>
          
          <div class="performances-grid stagger-children" id="video-grid">
            ${i}
          </div>
        </div>
      </section>
    </div>
  `}function F(){const e=document.querySelectorAll(".filter-tab"),a=document.querySelectorAll(".performance-card");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(t=>t.classList.remove("active")),s.classList.add("active");const i=s.getAttribute("data-filter");a.forEach(t=>{i==="all"||t.getAttribute("data-category")===i?(t.style.display="block",setTimeout(()=>{t.style.opacity="1",t.style.transform="translateY(0)"},50)):(t.style.opacity="0",t.style.transform="translateY(10px)",setTimeout(()=>{t.style.display="none"},300))})})})}const d=[{id:"waves-24-indian-rock",name:"Indian Rock",type:"competition",date:"2024",time:"November 2024",venue:"Bits Goa Waves 24",rank:"5th",description:"Participated in the Indian Rock competition at Bits Goa Waves.",youtubeId:null,thumbnail:"/gallery/events/waves-24-indian-rock/DSC_0006_1.webp",photos:[{src:"/gallery/events/waves-24-indian-rock/DSC_0006_1.webp",caption:"Live at Waves 24"},{src:"/gallery/events/waves-24-indian-rock/DSC_0023_1.webp",caption:"Performance"},{src:"/gallery/events/waves-24-indian-rock/DSC_0042.webp",caption:"Band in action"},{src:"/gallery/events/waves-24-indian-rock/DSC_0080.webp",caption:"Crowd view"},{src:"/gallery/events/waves-24-indian-rock/DSC_0096.webp",caption:"Stage magic"}],bandMembers:["Nishant Verma","Tushar Vikash K","Aryan Raj","Vansh Srivastava","Anjishnu Satpathy","Milind Konwar"]},{id:"waves-24-silence-amps",name:"Silence of the Amps",type:"competition",date:"2024",time:"November 2024",venue:"Bits Goa Waves 24",rank:"2nd Place",description:"Secured 2nd position in Silence of the Amps at Bits Goa Waves.",youtubeId:null,thumbnail:"/gallery/events/waves-24-silence-amps/7M4A7414.webp",photos:[{src:"/gallery/events/waves-24-silence-amps/7M4A7414.webp",caption:"Acoustic Set"},{src:"/gallery/events/waves-24-silence-amps/7M4A7418.webp",caption:"Silence of the Amps"},{src:"/gallery/events/waves-24-silence-amps/IMG-20231029-WA0101.webp",caption:"Unplugged"},{src:"/gallery/events/waves-24-silence-amps/IMG-20231029-WA0102.webp",caption:"Vibes"}],bandMembers:["Nishant Verma","Chaitanya Pandey","Aryan Raj","Vansh Srivastava","Tushar Vikash K","Milind Konwar"]},{id:"waves-24-eastern-vocals",name:"Eastern Solo Vocals",type:"competition",date:"2024",time:"November 2024",venue:"Bits Goa Waves 24",rank:"3rd Place",description:"Secured 3rd position in Eastern Solo Vocals at Bits Goa Waves.",youtubeId:null,thumbnail:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",photos:[],bandMembers:["Vansh Srivastava"]}];function G(e){const a=e?e.get("id"):null;return a?z(a):O()}function O(){return d.filter(e=>e.type==="competition"),d.filter(e=>e.type==="exhibition"),`
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
          ${d.map(e=>`
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
  `}function z(e){const a=d.find(i=>i.id===e);if(!a)return`
      <div class="page-container page-events fade-in text-center" style="padding: 150px 20px;">
        <h1 class="font-display size-xl">Event Not Found</h1>
        <a href="#events" class="btn btn-primary mt-lg text-charcoal">Back to Events</a>
      </div>
    `;const s=a.photos&&a.photos.length>0;return window.appAPI.openEventLightbox=i=>{window.appAPI.openEventSpecificLightbox(a.photos,i)},`
    <div class="page-container page-event-detail fade-in">
      <button class="back-button btn btn-outline slide-up" onclick="window.location.hash = '#events'">
        ← Back to Events
      </button>

      <header class="event-detail-hero slide-up" style="animation-delay: 0.1s">
        <div class="event-meta mb-sm">
          <span class="font-accent text-saffron size-md">${a.date}</span> • <span class="opacity-80">${a.venue}</span>
        </div>
        <h1 class="font-display size-xxl mb-xs">${a.name}</h1>
        ${a.rank?`<div class="event-badge inline-badge mb-md">${a.rank}</div>`:""}
        <p class="font-body opacity-80 size-md mt-sm max-w-lg">${a.description}</p>
      </header>

      ${a.youtubeId?`
        <section class="event-main-media slide-up" style="animation-delay: 0.2s">
          <div class="video-embed-container">
            <iframe 
              src="https://www.youtube.com/embed/${a.youtubeId}" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </section>
      `:""}

      ${s?`
        <section class="event-gallery slide-up" style="animation-delay: 0.3s">
          <h2 class="font-display size-xl mb-xl">Event <span class="text-saffron">Gallery</span></h2>
          <div class="gallery-masonry" style="--columns: 3;">
            ${a.photos.map((i,t)=>`
              <div class="gallery-item" onclick="appAPI.openEventLightbox(${t})">
                <img src="${i.src}" alt="${i.caption}" loading="lazy" />
                <div class="gallery-overlay">
                  <span class="font-display">${i.caption}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `:""}
    </div>
  `}function H(){const e=d.filter(a=>a.type==="competition");return`
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
              ${e.length>0?e.map((a,s)=>`
                <tr class="result-row" onclick="const details = document.getElementById('details-${s}'); details.style.display = details.style.display === 'table-row' ? 'none' : 'table-row'; this.classList.toggle('active-row');">
                  <td class="font-accent text-saffron text-nowrap">
                    <span class="dropdown-icon">▶</span> ${a.date}
                  </td>
                  <td class="font-accent text-saffron text-nowrap">${a.time||""}</td>
                  <td class="font-display size-md text-cream">${a.name}</td>
                  <td class="opacity-80">${a.venue}</td>
                  <td>
                    ${a.rank?`<span class="result-badge ${N(a.rank)}">${a.rank}</span>`:'<span class="opacity-50">—</span>'}
                  </td>
                </tr>
                <tr id="details-${s}" class="result-details-row" style="display: none;">
                  <td colspan="5" class="result-details-cell">
                    <div class="result-details-content">
                      <div class="result-members">
                        <strong class="text-saffron">Lineup:</strong> 
                        <span class="opacity-80">${a.bandMembers&&a.bandMembers.length>0?a.bandMembers.join(", "):"Lineup not specified"}</span>
                      </div>
                      <a href="#events?id=${a.id}" class="result-event-link">
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
  `}function N(e){const a=String(e).toLowerCase();return a.includes("1st")||a.includes("winner")||a==="first"?"badge-gold":a.includes("2nd")||a.includes("runner")?"badge-silver":a.includes("3rd")?"badge-bronze":"badge-neutral"}window.appAPI={openLightbox:e=>E(y,e),openVideo:e=>S(e)};const m={"":I,gallery:T,about:R,journey:C,performances:j,events:G,results:H};function g(){const e=document.getElementById("page-content"),a=window.location.hash.slice(1),[s,i]=a.split("?");if(s&&!m[s]){window.location.hash="";return}const t=new URLSearchParams(i||"");e.style.opacity="0",setTimeout(()=>{const o=m[s]||m[""];e.innerHTML=o(t),window.scrollTo({top:0,behavior:"instant"}),e.style.opacity="1",x()},150)}function D(){w(),L(),window.addEventListener("hashchange",g),g()}document.addEventListener("DOMContentLoaded",D);
