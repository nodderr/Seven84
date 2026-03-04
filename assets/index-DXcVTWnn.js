(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();const g=[{path:"",label:"Home"},{path:"gallery",label:"Gallery"},{path:"about",label:"About Us"},{path:"journey",label:"Our Journey"},{path:"events",label:"Events"},{path:"performances",label:"Performances"}];function w(){const e=document.getElementById("navbar"),t=window.location.hash.slice(1)||"";e.className="navbar",e.innerHTML=`
    <div class="navbar-inner">
      <a class="navbar-logo" data-nav="">
        <span class="navbar-logo-text" style="font-family: 'Samarkan', cursive; font-size: var(--text-2xl); color: var(--cream);">Seven.84</span>
      </a>
      <div class="navbar-links">
        ${g.map(a=>`
          <a class="navbar-link ${t===a.path?"active":""}" data-nav="${a.path}">
            ${a.label}
          </a>
        `).join("")}
      </div>
      <button class="navbar-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="navbar-mobile-overlay" id="mobile-overlay">
      ${g.map(a=>`
        <a class="navbar-link ${t===a.path?"active":""}" data-nav="${a.path}">
          ${a.label}
        </a>
      `).join("")}
    </div>
  `,e.querySelectorAll("[data-nav]").forEach(a=>{a.addEventListener("click",i=>{i.preventDefault();const r=a.getAttribute("data-nav");window.location.hash=r,k()})});const s=document.getElementById("nav-toggle"),o=document.getElementById("mobile-overlay");s.addEventListener("click",()=>{s.classList.toggle("open"),o.classList.toggle("open"),document.body.style.overflow=o.classList.contains("open")?"hidden":""}),$(e)}function k(){const e=document.getElementById("nav-toggle"),t=document.getElementById("mobile-overlay");e&&t&&(e.classList.remove("open"),t.classList.remove("open"),document.body.style.overflow="")}function $(e){let t=!1;window.addEventListener("scroll",()=>{t||(window.requestAnimationFrame(()=>{window.scrollY>50?e.classList.add("scrolled"):e.classList.remove("scrolled"),t=!1}),t=!0)})}function x(){const e=window.location.hash.slice(1)||"";document.querySelectorAll(".navbar-link").forEach(t=>{t.getAttribute("data-nav")===e?t.classList.add("active"):t.classList.remove("active")})}function I(){const e=document.getElementById("site-footer");e.className="footer",e.innerHTML=`
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
  `,e.querySelectorAll("[data-nav]").forEach(t=>{t.addEventListener("click",s=>{s.preventDefault();const o=t.getAttribute("data-nav");window.location.hash=o,window.scrollTo({top:0,behavior:"smooth"})})})}let n=[],l=0;function L(e,t=0){n=e,l=t;const s=document.getElementById("lightbox-overlay");s.classList.remove("hidden"),s.innerHTML=`
    <span class="lightbox-close" id="lightbox-close">✕</span>
    <span class="lightbox-nav lightbox-prev" id="lightbox-prev">‹</span>
    <img class="lightbox-image" src="${n[l].src}" alt="${n[l].title||""}" />
    <span class="lightbox-nav lightbox-next" id="lightbox-next">›</span>
    <div class="lightbox-counter">${l+1} / ${n.length}</div>
  `,requestAnimationFrame(()=>s.classList.add("active")),document.getElementById("lightbox-close").addEventListener("click",h),s.addEventListener("click",o=>{o.target===s&&h()}),document.getElementById("lightbox-prev").addEventListener("click",o=>{o.stopPropagation(),p(-1)}),document.getElementById("lightbox-next").addEventListener("click",o=>{o.stopPropagation(),p(1)}),document.addEventListener("keydown",f),document.body.style.overflow="hidden"}function p(e){l=(l+e+n.length)%n.length;const t=document.querySelector(".lightbox-image"),s=document.querySelector(".lightbox-counter");t.style.opacity="0",setTimeout(()=>{t.src=n[l].src,t.alt=n[l].title||"",s.textContent=`${l+1} / ${n.length}`,t.style.opacity="1"},150)}function f(e){e.key==="Escape"&&h(),e.key==="ArrowLeft"&&p(-1),e.key==="ArrowRight"&&p(1)}function h(){const e=document.getElementById("lightbox-overlay");e.classList.remove("active"),setTimeout(()=>{e.classList.add("hidden"),e.innerHTML=""},300),document.removeEventListener("keydown",f),document.body.style.overflow=""}function E(e){const t=document.getElementById("video-modal");t.classList.remove("hidden"),t.innerHTML=`
    <div class="video-modal-inner">
      <span class="video-modal-close" id="video-close">✕</span>
      <iframe 
        src="https://www.youtube.com/embed/${e}?autoplay=1&rel=0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  `,requestAnimationFrame(()=>t.classList.add("active")),document.getElementById("video-close").addEventListener("click",m),t.addEventListener("click",s=>{s.target===t&&m()}),document.addEventListener("keydown",b),document.body.style.overflow="hidden"}function b(e){e.key==="Escape"&&m()}function m(){const e=document.getElementById("video-modal");e.classList.remove("active"),setTimeout(()=>{e.classList.add("hidden"),e.innerHTML=""},300),document.removeEventListener("keydown",b),document.body.style.overflow=""}const c=[{id:"featured-1",title:"Vande Mataram — Fusion Arrangement",event:"Revels 2024 Main Stage",date:"March 2024",category:"live",youtubeId:"dQw4w9WgXcQ",featured:!0},{id:"perf-1",title:"Raag Yaman meets Rock",event:"MIT Unplugged",date:"January 2024",category:"original",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-2",title:"Kun Faya Kun — Live Cover",event:"College Annual Day",date:"December 2023",category:"cover",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-3",title:"Moh Moh Ke Dhaage — Reimagined",event:"Fusion Night",date:"November 2023",category:"cover",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-4",title:'Original — "Safar"',event:"MIT Cultural Fest",date:"October 2023",category:"original",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-5",title:"Tum Hi Ho — Hindustani Fusion",event:"Inter-College Competition",date:"September 2023",category:"cover",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-6",title:"Acoustic Set — Raag Desh",event:"Open Mic Night",date:"August 2023",category:"live",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-7",title:"Bollywood Mashup — Live",event:"Freshers Night 2023",date:"July 2023",category:"live",youtubeId:"dQw4w9WgXcQ",featured:!1},{id:"perf-8",title:'Original — "Naya Raasta"',event:"Band Room Sessions",date:"June 2023",category:"original",youtubeId:"dQw4w9WgXcQ",featured:!1}],A=[{id:"all",label:"All"},{id:"live",label:"Live Performances"},{id:"cover",label:"Covers & Mashups"}];function S(){const e=c.find(t=>t.featured)||c[0];return`
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
  `}const T=["All","Events","Behind the Scenes","Band Photos","Rehearsals"],y=[{src:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",thumb:"https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400",title:"Revels 2023",category:"Events",date:"March 2023",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",thumb:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",title:"Soundcheck Session",category:"Behind the Scenes",date:"May 2023",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",thumb:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",title:"Lead Guitar Solo",category:"Events",date:"August 2023",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800",thumb:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400",title:"Crowd at Annual Fest",category:"Events",date:"October 2023",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",thumb:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400",title:"Studio Recording",category:"Behind the Scenes",date:"November 2023",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",thumb:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",title:"Band Photo — Outdoors",category:"Band Photos",date:"January 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",thumb:"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",title:"Acoustic Rehearsal",category:"Rehearsals",date:"February 2024",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800",thumb:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",title:"Fusion Night",category:"Events",date:"March 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=800",thumb:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=400",title:"Backstage Moments",category:"Behind the Scenes",date:"April 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",thumb:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",title:"Full Band Setup",category:"Band Photos",date:"May 2024",aspectRatio:"landscape"},{src:"https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800",thumb:"https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=400",title:"Tabla Close-Up",category:"Rehearsals",date:"June 2024",aspectRatio:"portrait"},{src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",thumb:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",title:"Pre-show Huddle",category:"Behind the Scenes",date:"July 2024",aspectRatio:"landscape"}];function M(){const e=T.map((s,o)=>`
    <button class="filter-tab ${o===0?"active":""}" data-filter="${s==="All"?"all":s}">
      ${s}
    </button>
  `).join(""),t=y.map((s,o)=>`
    <div class="gallery-item reveal" data-category="${s.category}" onclick="window.appAPI.openLightbox(${o})">
      <img src="${s.thumb}" alt="${s.title}" loading="lazy" />
      <div class="gallery-item-overlay">
        <div class="gallery-item-info">
          <h4>${s.title}</h4>
          <p>${s.date}</p>
        </div>
      </div>
    </div>
  `).join("");return setTimeout(q,100),`
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
            ${t}
          </div>
        </div>
      </section>
    </div>
  `}function q(){const e=document.querySelectorAll(".filter-tab"),t=document.querySelectorAll(".gallery-item");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),s.classList.add("active");const o=s.getAttribute("data-filter");t.forEach(a=>{o==="all"||a.getAttribute("data-category")===o?(a.style.display="block",setTimeout(()=>{a.style.opacity="1",a.style.transform="scale(1)"},50)):(a.style.opacity="0",a.style.transform="scale(0.8)",setTimeout(()=>{a.style.display="none"},300))})})})}const B=[{name:"Nishant Verma",role:"Keys, Bass, Guitars, Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Tushar Vikash K",role:"Drums, Percussion",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Vansh Srivastava",role:"Guitars, Lead Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Aryan Raj",role:"Guitars, Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Anjishnu Satpathy",role:"Lead Vocals",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"},{name:"Milind Konwar",role:"Keys, Bass",photo:"https://images.unsplash.com/photo-1516280440502-61019d146c99?q=80&w=800&auto=format&fit=crop",quote:"Test",instagram:"#"}];function P(){return`
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
            ${B.map(t=>`
    <div class="member-card reveal-scale">
      <div class="member-photo-wrapper">
        <img src="${t.photo}" alt="${t.name}" class="member-photo" loading="lazy" />
      </div>
      <h3 class="member-name">${t.name}</h3>
      <div class="member-role">${t.role}</div>
      <p class="member-quote">"${t.quote}"</p>
      <div class="member-socials">
        ${t.instagram?`<a href="${t.instagram}" class="member-social-link" aria-label="Instagram">📷</a>`:""}
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
  `}const R=[{date:"August 2021",title:"The Beginning",description:"Seven.84 was born in the corridors of MIT Manipal, when a group of music enthusiasts decided to fuse Hindustani classical with contemporary sounds.",image:null},{date:"November 2021",title:"First Jam Session",description:"Our first official jam session at the college music room. Six hours of pure experimentation with ragas, grooves, and zero sleep.",image:null},{date:"February 2022",title:"Debut Performance — Revels",description:"Our first stage performance at MIT's annual cultural fest Revels. The crowd's response was beyond anything we had imagined.",image:null},{date:"July 2022",title:"Original Compositions Begin",description:"Started working on our first original compositions, blending Hindustani ragas with progressive rock arrangements.",image:null},{date:"October 2022",title:"Inter-College Circuit",description:"Performed at multiple inter-college competitions across Karnataka, winning hearts and a few trophies along the way.",image:null},{date:"March 2023",title:"Workshop with Agam",description:"A dream come true — attended a masterclass workshop conducted by members of Agam. Learned invaluable lessons about arrangement and stage presence.",image:null},{date:"August 2023",title:"First YouTube Release",description:'Released our first performance video on YouTube. The fusion of "Vande Mataram" with progressive rock elements received overwhelming response.',image:null},{date:"January 2024",title:"Growing Stronger",description:"Expanded the band's lineup, refined our sound, and began performing regularly at venues across Manipal and Udupi.",image:null},{date:"2024 — Present",title:"The Journey Continues",description:"Continuing to push boundaries, create original music, and spread the fusion wave from MIT Manipal to the world.",image:null}],F=[{number:50,suffix:"+",label:"Live Performances"},{number:7,suffix:"",label:"Band Members"},{number:3,suffix:"+",label:"Years of Music"},{number:1e4,suffix:"+",label:"Hearts Touched"}];function C(){const e=F.map(s=>`
    <div class="stat-item reveal-scale">
      <div class="stat-number" data-count="${s.number}" data-suffix="${s.suffix}">0</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join(""),t=R.map((s,o)=>`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content ${o%2!==0?"reveal-left":"reveal-right"}">
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
            ${t}
          </div>
        </div>
      </section>
    </div>
  `}function O(){const e=c.find(a=>a.featured)||c[0],t=c.filter(a=>a.id!==e.id),s=A.map((a,i)=>`
    <button class="filter-tab ${i===0?"active":""}" data-filter="${a.id}">
      ${a.label}
    </button>
  `).join(""),o=t.map(a=>`
    <div class="performance-card reveal" data-category="${a.category}" onclick="window.appAPI.openVideo('${a.youtubeId}')">
      <div class="performance-thumb-wrapper">
        <img src="https://img.youtube.com/vi/${a.youtubeId}/maxresdefault.jpg" alt="${a.title}" class="performance-thumb" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80'" />
        <div class="performance-play-overlay">
          <div class="performance-play-icon"></div>
        </div>
      </div>
      <div class="performance-info">
        <div class="performance-category">${a.category.toUpperCase()}</div>
        <h3 class="performance-title">${a.title}</h3>
        <span class="performance-meta">${a.event} • ${a.date}</span>
      </div>
    </div>
  `).join("");return setTimeout(Q,100),`
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
            ${o}
          </div>
        </div>
      </section>
    </div>
  `}function Q(){const e=document.querySelectorAll(".filter-tab"),t=document.querySelectorAll(".performance-card");e.forEach(s=>{s.addEventListener("click",()=>{e.forEach(a=>a.classList.remove("active")),s.classList.add("active");const o=s.getAttribute("data-filter");t.forEach(a=>{o==="all"||a.getAttribute("data-category")===o?(a.style.display="block",setTimeout(()=>{a.style.opacity="1",a.style.transform="translateY(0)"},50)):(a.style.opacity="0",a.style.transform="translateY(10px)",setTimeout(()=>{a.style.display="none"},300))})})})}const d=[{id:"revels-2024",name:"Revels 2024 (Proshow Opening)",type:"exhibition",date:"April 2024",venue:"MIT Manipal (Quadrangle)",rank:null,description:"Opening the main Proshow night at Revels 2024 in front of 5000+ people. We played a 45-minute set featuring our best Hindustani-Rock fusions.",youtubeId:"dQw4w9WgXcQ",thumbnail:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1470&auto=format&fit=crop",photos:[{src:"https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",caption:"On Stage"},{src:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800",caption:"Crowd view"},{src:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",caption:"Lead singer"},{src:"https://images.unsplash.com/photo-1493225457124-a1a2a5f51608?w=800",caption:"Guitar Solo"}]},{id:"indian-ocean-opener",name:"Opening for Indian Ocean",type:"exhibition",date:"February 2024",venue:"KMC Greens",rank:null,description:"An absolute dream come true. We had the honor of opening the stage for the legendary Indian Ocean. A night of pure musical magic.",youtubeId:"dQw4w9WgXcQ",thumbnail:"https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop",photos:[]},{id:"battle-of-bands-2023",name:"Battle of the Bands",type:"competition",date:"November 2023",venue:"NITK Surathkal",rank:"1st Place",description:"Competed against 15 amazing bands from across South India and secured the 1st position with our original composition.",youtubeId:"dQw4w9WgXcQ",thumbnail:"https://images.unsplash.com/photo-1598387181032-a310322db565?q=80&w=1526&auto=format&fit=crop",photos:[{src:"https://images.unsplash.com/photo-1598387181032-a310322db565?w=800",caption:"Trophy Celebration"},{src:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",caption:"Performance"}]},{id:"technomeet-2023",name:"TechnoMeet Cultural Night",type:"competition",date:"September 2023",venue:"VIT Vellore",rank:"Runners Up",description:"A high-energy performance securing 2nd place. The crowd energy was unmatched during our closing track.",youtubeId:"dQw4w9WgXcQ",thumbnail:"https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1470&auto=format&fit=crop",photos:[]},{id:"first-gig",name:"First Public Gig",type:"exhibition",date:"March 2023",venue:"Edge Cafe, Manipal",rank:null,description:"Where it all started. An intimate gig introducing the Seven.84 sound to our local supporters.",youtubeId:null,thumbnail:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop",photos:[{src:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",caption:"Small crowd"}]}];function j(e){const t=e?e.get("id"):null;return t?V(t):H()}function H(){return d.filter(e=>e.type==="competition"),d.filter(e=>e.type==="exhibition"),`
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
  `}function V(e){const t=d.find(o=>o.id===e);if(!t)return`
      <div class="page-container page-events fade-in text-center" style="padding: 150px 20px;">
        <h1 class="font-display size-xl">Event Not Found</h1>
        <a href="#events" class="btn btn-primary mt-lg text-charcoal">Back to Events</a>
      </div>
    `;const s=t.photos&&t.photos.length>0;return window.appAPI.openEventLightbox=o=>{window.appAPI.openEventSpecificLightbox(t.photos,o)},`
    <div class="page-container page-event-detail fade-in">
      <button class="back-button btn btn-outline slide-up" onclick="window.location.hash = '#events'">
        ← Back to Events
      </button>

      <header class="event-detail-hero slide-up" style="animation-delay: 0.1s">
        <div class="event-meta mb-sm">
          <span class="font-accent text-saffron size-md">${t.date}</span> • <span class="opacity-80">${t.venue}</span>
        </div>
        <h1 class="font-display size-xxl mb-xs">${t.name}</h1>
        ${t.rank?`<div class="event-badge inline-badge mb-md">${t.rank}</div>`:""}
        <p class="font-body opacity-80 size-md mt-sm max-w-lg">${t.description}</p>
      </header>

      ${t.youtubeId?`
        <section class="event-main-media slide-up" style="animation-delay: 0.2s">
          <div class="video-embed-container">
            <iframe 
              src="https://www.youtube.com/embed/${t.youtubeId}" 
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
            ${t.photos.map((o,a)=>`
              <div class="gallery-item" onclick="appAPI.openEventLightbox(${a})">
                <img src="${o.src}" alt="${o.caption}" loading="lazy" />
                <div class="gallery-overlay">
                  <span class="font-display">${o.caption}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </section>
      `:""}
    </div>
  `}window.appAPI={openLightbox:e=>L(y,e),openVideo:e=>E(e)};const u={"":S,gallery:M,about:P,journey:C,performances:O,events:j};function v(){const e=document.getElementById("page-content"),t=window.location.hash.slice(1),[s,o]=t.split("?");if(s&&!u[s]){window.location.hash="";return}const a=new URLSearchParams(o||"");e.style.opacity="0",setTimeout(()=>{const i=u[s]||u[""];e.innerHTML=i(a),window.scrollTo({top:0,behavior:"instant"}),e.style.opacity="1",x()},150)}function z(){w(),I(),window.addEventListener("hashchange",v),v()}document.addEventListener("DOMContentLoaded",z);
