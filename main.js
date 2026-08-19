// ---------------------------------------------------------------
// Tracy & Alexis — galerie de mariage
// Les photos viennent du dossier Drive du mariage (accès "lien public"
// requis côté Drive pour qu'elles s'affichent chez un visiteur).
// Pour changer une photo : remplace juste l'id dans le tableau ci-dessous.
// ---------------------------------------------------------------

const SECTIONS = [
  {
    id: 'preparatifs',
    eyebrow: 'Matin',
    title: 'Les préparatifs',
    desc: "Avant que tout commence.",
    ids: [
      '1IPRUNiMNyI-8qC8bt44uecgvVTEdoBAZ',
      '1n-wgGshRZwDVo2YUmBY-1jd3SHE8dQr8',
      '1mYqKSyY-Gw7FnUVP7WNndOYU1kurjsfM',
      '1Y-5QQEDEpg7oq3z7MyI2QPhRrmZrVVPN',
      '1LPmuFVVEhbsykp2sULO1PCEQdWQ5xNRq',
      '1PGFkltRaEZSWB-19OBUpHkpXW2kP1EMx',
      '1G1NWDXxNhi-C6CQc2vXTPJ_vKUc-KvGH',
      '1iGQyH9DV_RvyH_Zw9jJbZMIjQyE7cvlj',
      '1-dBBKuPwP5OK3bjXh9J6KZvnpbpGXWP9',
      '1aJvF_PiJWqeb3AXZARgqIaQTRn3WtJ8I'
    ]
  },
  {
    id: 'salle',
    eyebrow: 'Midi',
    title: 'Devant la salle',
    desc: "L'arrivée, les premiers sourires, l'attente joyeuse avant la cérémonie.",
    ids: [
      '1Vwc4rl5U1MNAQ4F-we6u__Pf-jP-7TSy',
      '1rLQd9Lq-8RNe-cP6InqgEUdFv6Cf6u_t',
      '112qB3EH0uNuCUnp4vOSr-8VNaweyP4Lw',
      '1Ak2cRrf55G2pVapRqmxxbJYF9RMnlDPE',
      '1ohCE7DWTssnOFGE2uYb9tWS5MnOW0oCo',
      '18ACyrQUmrRq5Ku4QdtHZUY3tBAlpTmth'
    ]
  },
  {
    id: 'ceremonie',
    eyebrow: 'Après-midi',
    title: 'La cérémonie',
    desc: "Les vœux, les alliances, l'instant où tout devient officiel.",
    ids: [
      '1T11_NeKuE_WarEEksLAvuT1n0aVyjWS-',
      '1A_uwaXQPWRAALLU4-J8uGpQ4Kb8ysqB9',
      '1WaUzVdffl6vbLp2Hy2kSAXfdRgPA9MBs',
      '14S6rBxwNoJ80HhvwfHpb9xqVKL-zIn5w',
      '1G2j41u5r7kW_OdIhfY0OtRHXYCfz7-rk',
      '1z0UK5sGsGRzgtwbUYHscD6Xos5ejJj67',
      '1K133aXTc-HPMLGCaxfTCpG1jxbYz8rNX',
      '1eXCV0WmOl0dflI5kmUEG42K6ChNMPZnw',
      '1g8f6mC_h4I1hCQvL1kbksuWfHwOw6aQ8',
      '1S6dOGlXxXLD8yRVDYNmVgin0lqhDI3Oz',
      '1mx8o9Dkm7oxBjf-2y25HuWRO9bhMQjZw',
      '1TiEGmYKh4dFO_GPhF6h4WKYLe5BHLrLY'
    ]
  },
  {
    id: 'couple',
    eyebrow: 'À deux',
    title: 'Le couple',
    desc: 'Le temps suspendu, juste pour eux.',
    // Ajoutez ici les IDs Google Drive des photos du couple.
    ids: []
  },
  {
    id: 'foret',
    eyebrow: 'Golden hour',
    title: 'Dans la forêt',
    desc: 'La lumière du soir, les mariés seuls, la séance qui referme la journée.',
    ids: [
      '1fTLlYUGfHyJ8nVmWHvVb3ARMvOT0uJkO',
      '172TeHGs42W6stUuMwlq9UENfmqWj3-Eg',
      '1Vz6wTQAUMRUFefTFQ1qePoWgZ31lczIn',
      '1jyDXHhVGWQp9arwnb8uw0wznk9h-3iiw',
      '1nZhTqDbSScGnLB_xkwZynxnS0pN0eTxz',
      '1HREN3DlDTw81YEyR5_J2CqNyrS2pLBDo',
      '1lPMEFVkc6YYMNJbirvanKEjJ7RNcS7S0',
      '1I0xE725DE4uXIttEzJzFo4gm_YHoaLno',
      '1ESZbFpPZTMwl8zKo_6NL4tLycwt4jMqV',
      '10BaNSYfaDhVp8Gp3eU7RPyx9dVBQmLFm'
    ]
  }
];

const HERO_ID = '1fTLlYUGfHyJ8nVmWHvVb3ARMvOT0uJkO';
const SPAN_PATTERN = ['g-a','g-c','g-d','g-b','g-h','g-e','g-c','g-i','g-f','g-g','g-c','g-d'];

function thumb(id, w){ return `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`; }

// ---------- Smooth page loader + hero ----------
const loaderStartedAt = performance.now();
const loaderBar = document.getElementById('loader-bar');
const loaderProgress = document.getElementById('loader-progress');
const heroImg = document.getElementById('hero-img');
let displayedProgress = 0;
let loaderFinished = false;

function animateLoader(now){
  if (loaderFinished) return;
  const elapsed = now - loaderStartedAt;
  // The progress stays fluid, then waits for the real critical assets at 92%.
  displayedProgress = Math.min(92, 100 * (1 - Math.exp(-elapsed / 1050)));
  loaderBar.style.transform = `scaleX(${displayedProgress / 100})`;
  loaderProgress.textContent = `${Math.round(displayedProgress)}%`;
  requestAnimationFrame(animateLoader);
}

function assetReady(element){
  if (element.complete) return Promise.resolve();
  return new Promise(resolve => {
    element.addEventListener('load', resolve, { once:true });
    element.addEventListener('error', resolve, { once:true });
  });
}

function finishLoader(){
  if (loaderFinished) return;
  loaderFinished = true;
  loaderBar.style.transition = 'transform .38s cubic-bezier(.2,.7,.2,1)';
  loaderBar.style.transform = 'scaleX(1)';
  loaderProgress.textContent = '100%';
  setTimeout(() => document.body.classList.add('page-ready'), 280);
}

requestAnimationFrame(animateLoader);
heroImg.src = thumb(HERO_ID, 2400);

const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
const minimumIntro = new Promise(resolve => setTimeout(resolve, 900));
const criticalAssets = Promise.all([assetReady(heroImg), fontsReady, minimumIntro]);
const safetyTimeout = new Promise(resolve => setTimeout(resolve, 4500));
Promise.race([criticalAssets, safetyTimeout]).then(finishLoader);

// ---------- Build sections + flat list for lightbox ----------
const main = document.getElementById('main');
const sideNav = document.getElementById('side-nav');
const allImages = []; // {id, alt}

SECTIONS.forEach((section) => {
  const section_el = document.createElement('section');
  section_el.className = 'moment';
  section_el.id = section.id;

  const head = document.createElement('div');
  head.className = 'moment-head';
  head.innerHTML = `
    <p class="eyebrow">${section.eyebrow}</p>
    <h2>${section.title}</h2>
    <p>${section.desc}</p>
    <span class="moment-count">${section.ids.length ? `${section.ids.length} photos` : 'Photos à venir'}</span>
  `;
  section_el.appendChild(head);

  const grid = document.createElement('div');
  grid.className = 'grid';

  section.ids.forEach((id, i) => {
    const globalIndex = allImages.length;
    allImages.push({ id, alt: section.title });

    const fig = document.createElement('figure');
    fig.className = SPAN_PATTERN[i % SPAN_PATTERN.length];
    fig.tabIndex = 0;
    fig.dataset.index = globalIndex;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = thumb(id, 1200);
    img.alt = section.title;
    fig.appendChild(img);
    grid.appendChild(fig);
  });

  section_el.appendChild(grid);
  main.appendChild(section_el);

  // side nav entry
  const a = document.createElement('a');
  a.href = `#${section.id}`;
  a.innerHTML = `<span class="dot"></span><span class="label">${section.title}</span>`;
  sideNav.appendChild(a);
});

const thanksLink = document.createElement('a');
thanksLink.href = '#remerciements';
thanksLink.innerHTML = '<span class="dot"></span><span class="label">Remerciements &amp; liens</span>';
sideNav.appendChild(thanksLink);

// ---------- Scroll reveal ----------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.grid figure').forEach(fig => revealObserver.observe(fig));

// ---------- Side nav active state ----------
const navLinks = Array.from(sideNav.querySelectorAll('a'));
const sectionEls = [
  ...SECTIONS.map(s => document.getElementById(s.id)),
  document.getElementById('remerciements')
];

function clearActiveNav(){
  navLinks.forEach(link => {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  });
}

function updateActiveNav(){
  const viewportCenter = window.innerHeight / 2;
  const activeSection = sectionEls.find(section => {
    const rect = section.getBoundingClientRect();
    return rect.top <= viewportCenter && rect.bottom > viewportCenter;
  });

  if (!activeSection) {
    clearActiveNav();
    return;
  }
  const activeLink = sideNav.querySelector(`a[href="#${activeSection.id}"]`);
  if (!activeLink || activeLink.classList.contains('active')) return;

  clearActiveNav();
  activeLink.classList.add('active');
  activeLink.setAttribute('aria-current', 'true');
}

const navObserver = new IntersectionObserver(updateActiveNav, {
  rootMargin: '-49% 0px -49% 0px',
  threshold: 0
});
sectionEls.forEach(el => navObserver.observe(el));
window.addEventListener('resize', updateActiveNav);
updateActiveNav();

// Keep the contextual navigation out of the hero, then reveal it near its end.
const hero = document.querySelector('.hero');
const heroObserver = new IntersectionObserver(([entry]) => {
  const heroMostlyLeft = entry.boundingClientRect.top < 0 && entry.intersectionRatio < 0.12;
  sideNav.classList.toggle('is-visible', heroMostlyLeft);
}, { threshold: [0, 0.12] });
heroObserver.observe(hero);

// ---------- Lightbox ----------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCounter = document.getElementById('lightbox-counter');
let currentIndex = 0;

function showImage(index){
  currentIndex = (index + allImages.length) % allImages.length;
  const item = allImages[currentIndex];
  lightboxImg.src = thumb(item.id, 2000);
  lightboxImg.alt = item.alt;
  lightboxCounter.textContent = `${currentIndex + 1} / ${allImages.length}`;
}

function openLightbox(index){
  showImage(index);
  lightbox.classList.add('open');
}
function closeLightbox(){
  lightbox.classList.remove('open');
  lightboxImg.src = '';
}

document.querySelectorAll('.grid figure').forEach(fig => {
  const open = () => openLightbox(parseInt(fig.dataset.index, 10));
  fig.addEventListener('click', open);
  fig.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });
});

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', () => showImage(currentIndex - 1));
document.getElementById('lightbox-next').addEventListener('click', () => showImage(currentIndex + 1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
});
