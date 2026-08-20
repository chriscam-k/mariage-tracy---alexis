// ---------------------------------------------------------------
// Tracy & Alexis — galerie de mariage
// Les photos viennent du dossier Drive du mariage (accès "lien public"
// requis côté Drive pour qu'elles s'affichent chez un visiteur).
// Pour changer une photo : remplace juste l'id dans le tableau ci-dessous.
// ---------------------------------------------------------------

const SECTIONS = [
  {
    id: 'preparatifs',
    layout: 'editorial',
    eyebrow: 'Matin',
    title: 'Les préparatifs',
    ids: [
      '1Y-5QQEDEpg7oq3z7MyI2QPhRrmZrVVPN', // _MG_9572.jpg
      '1PkncfKug1PClu19L6i7QNlXOMHAWlhyo', // _MG_9580.jpg
      '1K6t1NITQDn_j0squAeoPfa9TYnWHAPiW', // _MG_9587.jpg
      '1qx0R4QS5mF4GCk5TooRNw-dBywQSYuDL', // _MG_9589.jpg
      '1n-wgGshRZwDVo2YUmBY-1jd3SHE8dQr8', // _MG_9610.jpg
      '1yXDFmybQyip52BO2_qxQFnx3FhtF9FUk', // _MG_9618.jpg
      '1uYxAHllb7_4eIaZQbM_vaLwR-sYhZmUa', // _MG_9624.jpg
      '1PGFkltRaEZSWB-19OBUpHkpXW2kP1EMx', // _MG_9643.jpg
      '1eooXv_5lzB1epYIrTgvOzor2szzpjowE'  // _MG_9649.jpg
    ],
    mainIds: [
      '1yXDFmybQyip52BO2_qxQFnx3FhtF9FUk', // _MG_9618.jpg
      '1uYxAHllb7_4eIaZQbM_vaLwR-sYhZmUa', // _MG_9624.jpg
      '1eooXv_5lzB1epYIrTgvOzor2szzpjowE'  // _MG_9649.jpg
    ]
  },
  {
    id: 'salle',
    layout: 'reportage',
    eyebrow: 'Midi',
    title: 'Devant la salle',
    ids: [
      '1uu-zSQGOErQlCFrOoaDjbOF92IaE6wqJ', // _MG_9847.jpg
      '16EkEwnxXOnCYOaBbmnDkuTgqlctQthLI', // _MG_9850.jpg
      '1fkAsyUACqXFDANa07jN0xUOequXwJrKf', // _MG_9859.jpg
      '19jyqaPx3elQhJ3jUAPkBH7teDjhBvrhp', // _MG_9863.jpg
      '1c9-xCh1a6D9Sb1SjZttHdGB6dr6Y8Cbv', // _MG_9869.jpg
      '13UwUN_OiNifyJXbSpDJnYO1FcjPHaT4H'  // _MG_9871.jpg
    ],
    mainIds: [
      '1fkAsyUACqXFDANa07jN0xUOequXwJrKf', // _MG_9859.jpg
      '19jyqaPx3elQhJ3jUAPkBH7teDjhBvrhp'  // _MG_9863.jpg
    ]
  },
  {
    id: 'ceremonie',
    layout: 'reportage',
    eyebrow: 'Après-midi',
    title: 'La cérémonie',
    ids: [
      '1mEOkdXVlxWLtiXgk8f3BTHhrQQrE1_dc', // _MG_0014.jpg
      '1NxBFV4eC9JftZwMUTkRIOu358brKMe8c', // _MG_0024.jpg
      '1XzZ7QELHXtBUnutr1VcRlL7D78it6Wio', // _MG_0051.jpg
      '1DHSD9cjloelyrl_9hOs_8o-Ywt7fsA-h', // _MG_0056.jpg
      '1yzOc_kzW2E6eXDET7ki6JL6aXpj5nDQM', // _MG_0091.jpg
      '1qlDHQEUheQoH4_h46iPNq4r5bohv2qIA', // _MG_0108.jpg
      '1js9DBuJ9xoIyZbvHBUPQdVxKYBsoUMgz', // _MG_0115.jpg
      '1KkUieL8865fGIDCj08whA-AOR7Sb-XVe', // _MG_0126.jpg
      '1EgXqScMA9vLJN50K3FMXxWRZaD5-2V3w', // _MG_0139.jpg
      '19Q0xL0BAdP3LMcy0g1bF-YqeISsqRUdL', // _MG_0191.jpg
      '1G0oPI2BqC5a8qGN841kSY2hOjDH6oTJK', // _MG_0195.jpg
      '1H1OF53ueq5j-WTEaFDoloriB5kjMJCO9', // _MG_0198.jpg
      '1p2SsdH3BDJhTgQDIdLt7loaS5drV9MVc', // _MG_0273.jpg
      '1IrdKhV_rmFtuLEaCt-JFVHncPYqNUwWX', // _MG_0285-2.jpg
      '1e-lgpBDL4M3TFsoh5pc65J4izw2zi0ol', // _MG_0301.jpg
      '1JJE0Gz3QlMUDfVym8ioZZkAWtmhRtIY8', // _MG_0306.jpg
      '1nQEPZwP0xbV0uZCY5hkyhIaRbUrb362j', // _MG_9677.jpg
      '1rY5ET41Q_YyDNaDFrKtIYYBaYAodkiaD', // _MG_9691.jpg
      '1bybByXedBZxrKC4aejtlZJsVCUZWXzdJ', // _MG_9711.jpg
      '1l5BxowgwvMJWvFzaYo4YJQE9CbAw-me1', // _MG_9720.jpg
      '13Pdenfn-uVq1WnaKhRp8vhlkHrtZDC6X', // _MG_9734.jpg
      '1vqj6B0ipv9Q7YFglh7S1AFGr8nukqx_6', // _MG_9736.jpg
      '1g8f6mC_h4I1hCQvL1kbksuWfHwOw6aQ8', // _MG_9745.jpg
      '1FBoOP_NyvTeb9K9pDwCqUU0tXcG0XJjx', // _MG_9784.jpg
      '1TiEGmYKh4dFO_GPhF6h4WKYLe5BHLrLY', // _MG_9792.jpg
      '1wuXtaStohv1iwUm2A1068k6B1T1Ha7_T', // _MG_9800.jpg
      '1moxVrPIiWrYqcGlTxw81QlZGfrSI7mFm'  // _MG_9873.jpg
    ],
    mainIds: [
      '1DHSD9cjloelyrl_9hOs_8o-Ywt7fsA-h', // _MG_0056.jpg
      '1EgXqScMA9vLJN50K3FMXxWRZaD5-2V3w', // _MG_0139.jpg
      '19Q0xL0BAdP3LMcy0g1bF-YqeISsqRUdL', // _MG_0191.jpg
      '1G0oPI2BqC5a8qGN841kSY2hOjDH6oTJK', // _MG_0195.jpg
      '1H1OF53ueq5j-WTEaFDoloriB5kjMJCO9', // _MG_0198.jpg
      '1wuXtaStohv1iwUm2A1068k6B1T1Ha7_T'  // _MG_9800.jpg
    ],
    mobileMainIds: [
      '1l5BxowgwvMJWvFzaYo4YJQE9CbAw-me1', // _MG_9720.jpg
      '1TiEGmYKh4dFO_GPhF6h4WKYLe5BHLrLY'  // _MG_9792.jpg
    ]
  },
  {
    id: 'couple',
    layout: 'cinematic',
    eyebrow: 'À deux',
    title: 'Le couple',
    ids: [
      '1dut3WzXKEJx9QQNlttTnx3tJmeWeGFo-', // _MG_0205.jpg
      '1wQqE09H8g5DHX2K4rFpEnCF7bo33yaN9', // _MG_0208.jpg
      '1aT4xGx2XpneQFJB50ONm9dqm62VeigGv', // _MG_0211.jpg
      '12rNV1Ww65_Kq_auK2o0_X4u0WJgADq_4', // _MG_0214-2.jpg
      '1bLJCutfRWsvWHefyjyt-7zrnLgpRTbPs', // _MG_0265.jpg
      '1v9nNTfFuigcsXtnLc2VHSQITvLH950ig', // _MG_0276.jpg
      '1LJhfS0ZLCnYa6JhuRa38lKTaU114FlBy', // _MG_0311.jpg
      '1XhQemQRFDvkmun52yNNYWTItEICXUcTr'  // _MG_9840.jpg
    ],
    mainIds: [
      '1dut3WzXKEJx9QQNlttTnx3tJmeWeGFo-', // _MG_0205.jpg
      '1aT4xGx2XpneQFJB50ONm9dqm62VeigGv', // _MG_0211.jpg
      '12rNV1Ww65_Kq_auK2o0_X4u0WJgADq_4'  // _MG_0214-2.jpg
    ]
  },
  {
    id: 'foret',
    layout: 'cinematic',
    eyebrow: 'Golden hour',
    title: 'Dans la forêt',
    ids: [
      '1xQ4EiQFr4MkKM-EdPeV8mgszQsw8KS9t', // _MG_9677.jpg
      '1UR8mtvL3TeXVDbRyymDM2p-rbb-3CWIC', // _MG_9690.jpg
      '1dEMpCpeWqw-l9ZL0ieJS6-ywVBPcwmt4', // _MG_9697.jpg
      '19ahCHhxtcHhqaaWLLpyPRKkhz_RabmUq', // _MG_9705.jpg
      '18EopOfZRLh-BzZIxLWd243p7zpl3RLt2', // _MG_9711.jpg
      '1WL3n-XPinBHM_9zTb5KFZXTVZIP7Da7g', // _MG_9733.jpg
      '1ttQHAslz6wqKPTO_f3VZBzyfqbtPTLxI', // _MG_9740.jpg
      '1utEpx7M3zHqGPpJVr2Jbjb8-5ahFklt6', // _MG_9744.jpg
      '1tJulZFRbjbn8KdmDe83Mi8MaSuXypQXe', // _MG_9746.jpg
      '1IPwMKKi6XzlA6TK4lkfHdyPztQbXdvmH', // _MG_9752.jpg
      '11qqRlOxjUGw6P3c1zfMWIc-prUr5yB7S', // _MG_9757.jpg
      '1Gose7lB24d-DlWMysajjd9E4mdgFxuOj', // _MG_9762.jpg
      '172TeHGs42W6stUuMwlq9UENfmqWj3-Eg', // _MG_9769.jpg
      '1Vz6wTQAUMRUFefTFQ1qePoWgZ31lczIn'  // _MG_9771.jpg
    ],
    mainIds: [
      '1xQ4EiQFr4MkKM-EdPeV8mgszQsw8KS9t', // _MG_9677.jpg
      '1UR8mtvL3TeXVDbRyymDM2p-rbb-3CWIC', // _MG_9690.jpg
      '1dEMpCpeWqw-l9ZL0ieJS6-ywVBPcwmt4', // _MG_9697.jpg
      '18EopOfZRLh-BzZIxLWd243p7zpl3RLt2', // _MG_9711.jpg
      '1ttQHAslz6wqKPTO_f3VZBzyfqbtPTLxI', // _MG_9740.jpg
      '11qqRlOxjUGw6P3c1zfMWIc-prUr5yB7S'  // _MG_9757.jpg
    ]
  }
];

const HERO_IMAGES = {
  desktop: [
    '1LiW-IBZ6EVaALI-JFyT49R3U8IHz0ooY', // _MG_0207.jpg
    '1z0UK5sGsGRzgtwbUYHscD6Xos5ejJj67', // _MG_9714.jpg
  ],
  mobile: [
    '1BC6x3qEOv8uy4LO3UFJXgGwtbEd615x4', // _MG_0324.jpg
    '1En-K6Lrs8aG9xcDa3yM7sphV6aeVwJxt', // _MG_0310.jpg
    '1n-wgGshRZwDVo2YUmBY-1jd3SHE8dQr8', // _MG_9610.jpg
  ]
};
const HERO_INTERVAL = 7500;
const HERO_CROSSFADE = 1000;
const LAYOUT_PATTERNS = {
  editorial: {
    main: ['e-main-feature', 'e-main-portrait', 'e-main-wide'],
    secondary: ['e-small', 'e-small', 'e-medium', 'e-small', 'e-medium']
  },
  reportage: {
    main: ['r-main-wide', 'r-main-large', 'r-main-tall'],
    secondary: ['r-medium', 'r-small', 'r-medium', 'r-large']
  },
  cinematic: {
    main: ['c-main-hero', 'c-main-wide', 'c-main-large'],
    secondary: ['c-half', 'c-side', 'c-half', 'c-wide']
  }
};

function uniqueIds(ids = []){
  return [...new Set(ids.filter(Boolean))];
}

// Keeps priority photos spread throughout a section without duplicating them.
function distributePriorityIds(ids, priorityIds){
  const prioritySet = new Set(priorityIds);
  const priorities = ids.filter(id => prioritySet.has(id));
  const secondary = ids.filter(id => !prioritySet.has(id));
  if (!priorities.length || !secondary.length) return ids;

  const distributed = [];
  let secondaryIndex = 0;

  for (let slot = 0; slot <= priorities.length; slot++) {
    const remainingSecondary = secondary.length - secondaryIndex;
    const remainingSlots = priorities.length - slot + 1;
    const take = Math.ceil(remainingSecondary / remainingSlots);
    distributed.push(...secondary.slice(secondaryIndex, secondaryIndex + take));
    secondaryIndex += take;
    if (slot < priorities.length) distributed.push(priorities[slot]);
  }

  return distributed;
}

function prepareGallery(section){
  const ids = uniqueIds(section.ids);
  const idSet = new Set(ids);
  const declaredMainIds = uniqueIds(section.mainIds);
  const declaredMobileMainIds = section.mobileMainIds?.length
    ? uniqueIds(section.mobileMainIds)
    : declaredMainIds;
  const mainIds = declaredMainIds.filter(id => idSet.has(id));
  const mobileMainIds = declaredMobileMainIds.filter(id => idSet.has(id));
  const invalidPriorityIds = [...declaredMainIds, ...declaredMobileMainIds]
    .filter(id => !idSet.has(id));

  if (ids.length !== (section.ids || []).length) {
    console.warn(`[Galerie ${section.id}] Un ID vide ou dupliqué dans ids a été ignoré.`);
  }
  if (invalidPriorityIds.length) {
    console.warn(`[Galerie ${section.id}] Priorités absentes de ids :`, uniqueIds(invalidPriorityIds));
  }

  const priorityIds = uniqueIds([...mainIds, ...mobileMainIds]);
  return {
    ids: distributePriorityIds(ids, priorityIds),
    mainIds: new Set(mainIds),
    mobileMainIds: new Set(mobileMainIds)
  };
}

function thumb(id, w){ return `https://drive.google.com/thumbnail?id=${id}&sz=w${w}`; }

// ---------- Smooth page loader + hero ----------
const loaderStartedAt = performance.now();
const loaderBar = document.getElementById('loader-bar');
const loaderProgress = document.getElementById('loader-progress');
const heroImg = document.getElementById('hero-img');
const heroSlides = [heroImg, document.getElementById('hero-img-next')];
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileHeroQuery = window.matchMedia('(max-width: 760px) and (orientation: portrait)');
const heroIds = mobileHeroQuery.matches ? HERO_IMAGES.mobile : HERO_IMAGES.desktop;
const heroWidth = mobileHeroQuery.matches ? 1200 : 2000;
let displayedProgress = 0;
let loaderFinished = false;
let heroIndex = 0;
let activeHeroSlide = 0;
let heroSwapTimer;

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
  setTimeout(() => {
    document.body.classList.add('page-ready');
    startHeroSlideshow();
  }, 280);
}

function preloadHeroImage(src){
  return new Promise(resolve => {
    const image = new Image();
    image.onload = () => {
      const decoded = image.decode ? image.decode() : Promise.resolve();
      decoded.catch(() => {}).then(() => resolve(true));
    };
    image.onerror = () => resolve(false);
    image.src = src;
  });
}

async function prepareNextHero(displayStartedAt){
  if (reducedMotionQuery.matches || heroIds.length < 2) return;

  const nextIndex = (heroIndex + 1) % heroIds.length;
  const nextSrc = thumb(heroIds[nextIndex], heroWidth);
  const loaded = await preloadHeroImage(nextSrc);

  if (reducedMotionQuery.matches) return;

  if (!loaded) {
    heroSwapTimer = setTimeout(() => prepareNextHero(performance.now()), HERO_INTERVAL);
    return;
  }

  const inactiveSlideIndex = 1 - activeHeroSlide;
  const inactiveSlide = heroSlides[inactiveSlideIndex];
  inactiveSlide.src = nextSrc;

  const elapsed = performance.now() - displayStartedAt;
  heroSwapTimer = setTimeout(() => {
    if (reducedMotionQuery.matches) return;

    const outgoingSlide = heroSlides[activeHeroSlide];
    inactiveSlide.classList.add('is-visible', 'is-zooming');
    outgoingSlide.classList.remove('is-visible');

    heroIndex = nextIndex;
    activeHeroSlide = inactiveSlideIndex;
    const nextDisplayStartedAt = performance.now();

    setTimeout(() => {
      outgoingSlide.classList.remove('is-zooming');
      prepareNextHero(nextDisplayStartedAt);
    }, HERO_CROSSFADE);
  }, Math.max(0, HERO_INTERVAL - elapsed));
}

function startHeroSlideshow(){
  if (reducedMotionQuery.matches || heroIds.length < 2) return;
  firstHeroReady.then(() => prepareNextHero(performance.now()));
}

requestAnimationFrame(animateLoader);
heroImg.src = thumb(heroIds[0], heroWidth);

const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
const minimumIntro = new Promise(resolve => setTimeout(resolve, 900));
const firstHeroReady = assetReady(heroImg);
const criticalAssets = Promise.all([firstHeroReady, fontsReady, minimumIntro]);
const safetyTimeout = new Promise(resolve => setTimeout(resolve, 4500));
Promise.race([criticalAssets, safetyTimeout]).then(finishLoader);

// ---------- Build sections + flat list for lightbox ----------
const main = document.getElementById('main');
const sideNav = document.getElementById('side-nav');
const allImages = []; // {id, alt}

SECTIONS.forEach((section) => {
  const section_el = document.createElement('section');
  const layout = LAYOUT_PATTERNS[section.layout] ? section.layout : 'reportage';
  const layoutPattern = LAYOUT_PATTERNS[layout];
  const gallery = prepareGallery(section);
  const patternIndexes = { main: 0, secondary: 0 };
  let mobileMainIndex = 0;
  section_el.className = `moment layout-${layout}`;
  section_el.id = section.id;

  const section_inner = document.createElement('div');
  section_inner.className = 'wrap';

  const head = document.createElement('div');
  head.className = 'moment-head';
  head.innerHTML = `
    <p class="eyebrow">${section.eyebrow}</p>
    <h2>${section.title}</h2>
    <span class="moment-count">${gallery.ids.length ? `${gallery.ids.length} photos` : 'Photos à venir'}</span>
  `;
  section_inner.appendChild(head);

  const grid = document.createElement('div');
  grid.className = 'grid';

  gallery.ids.forEach((id) => {
    const globalIndex = allImages.length;
    allImages.push({ id, alt: section.title });

    const fig = document.createElement('figure');
    const isMain = gallery.mainIds.has(id);
    const isMobileMain = gallery.mobileMainIds.has(id);
    const isMobileFeature = isMobileMain && mobileMainIndex === 0;
    const role = isMain ? 'main' : 'secondary';
    const rolePattern = layoutPattern[role];
    if (isMobileMain) mobileMainIndex++;
    fig.className = rolePattern[patternIndexes[role] % rolePattern.length];
    fig.classList.toggle('is-main', isMain);
    fig.classList.toggle('is-mobile-main', isMobileMain);
    fig.classList.toggle('is-mobile-feature', isMobileFeature);
    fig.dataset.layout = layout;
    fig.dataset.photoId = id;
    patternIndexes[role]++;
    fig.tabIndex = 0;
    fig.dataset.index = globalIndex;

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = section.title;

    const markImageLoaded = () => {
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        const ratio = img.naturalWidth / img.naturalHeight;
        const format = ratio < 0.72
          ? 'tall'
          : ratio < 0.92
            ? 'portrait'
            : ratio <= 1.12
              ? 'square'
              : ratio < 1.75
                ? 'landscape'
                : 'panoramic';

        fig.style.setProperty('--photo-ratio', `${img.naturalWidth} / ${img.naturalHeight}`);
        fig.classList.add('has-natural-ratio', `photo-${format}`);
      }
      img.classList.add('is-loaded');
    };
    const markImageError = () => img.classList.add('is-loaded', 'is-error');
    img.addEventListener('load', markImageLoaded, { once:true });
    img.addEventListener('error', markImageError, { once:true });
    img.src = thumb(id, 800);
    if (img.complete) {
      if (img.naturalWidth > 0) markImageLoaded();
      else markImageError();
    }

    fig.appendChild(img);
    grid.appendChild(fig);
  });

  section_inner.appendChild(grid);
  section_el.appendChild(section_inner);
  main.appendChild(section_el);

  // side nav entry
  const a = document.createElement('a');
  a.href = `#${section.id}`;
  a.innerHTML = `<span class="dot"></span><span class="label">${section.title}</span>`;
  sideNav.appendChild(a);
});

const galleryTotal = document.getElementById('gallery-total');
if (galleryTotal) galleryTotal.textContent = allImages.length;

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

// ---------- Discreet back-to-top control ----------
const backToTop = document.getElementById('back-to-top');
let backToTopFrame = 0;

function updateBackToTop(){
  const isVisible = window.scrollY > Math.max(640, window.innerHeight * 0.85);
  backToTop.classList.toggle('is-visible', isVisible);
  backToTop.setAttribute('aria-hidden', String(!isVisible));
}

window.addEventListener('scroll', () => {
  if (backToTopFrame) return;
  backToTopFrame = requestAnimationFrame(() => {
    updateBackToTop();
    backToTopFrame = 0;
  });
}, { passive:true });
window.addEventListener('resize', updateBackToTop);
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top:0,
    behavior:reducedMotionQuery.matches ? 'auto' : 'smooth'
  });
});
updateBackToTop();

// ---------- Lightbox ----------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCounter = document.getElementById('lightbox-counter');
let currentIndex = 0;
let imageRequestId = 0;
let imageSwapTimer;
let lightboxCloseTimer;

function showImage(index, opening = false){
  currentIndex = (index + allImages.length) % allImages.length;
  const item = allImages[currentIndex];
  const requestId = ++imageRequestId;

  clearTimeout(imageSwapTimer);
  lightboxImg.classList.remove('is-visible');

  const swapImage = () => {
    if (requestId !== imageRequestId || !lightbox.classList.contains('open')) return;

    const revealImage = () => {
      if (requestId !== imageRequestId || lightboxImg.naturalWidth === 0) return;
      lightboxImg.classList.add('is-visible');
    };

    lightboxImg.onload = revealImage;
    lightboxImg.onerror = () => {
      if (requestId === imageRequestId) lightboxImg.classList.remove('is-visible');
    };
    lightboxImg.src = thumb(item.id, 2000);
    lightboxImg.alt = item.alt;
    lightboxCounter.textContent = `${currentIndex + 1} / ${allImages.length}`;

    if (lightboxImg.complete) revealImage();
  };

  const fadeOutDuration = reducedMotionQuery.matches || opening ? 0 : 90;
  imageSwapTimer = setTimeout(swapImage, fadeOutDuration);
}

function openLightbox(index){
  clearTimeout(lightboxCloseTimer);
  lightbox.classList.add('open');
  showImage(index, true);
}
function closeLightbox(){
  if (!lightbox.classList.contains('open')) return;
  ++imageRequestId;
  clearTimeout(imageSwapTimer);
  lightboxImg.classList.remove('is-visible');
  lightbox.classList.remove('open');
  clearTimeout(lightboxCloseTimer);
  const closeDuration = reducedMotionQuery.matches ? 0 : 220;
  lightboxCloseTimer = setTimeout(() => {
    if (lightbox.classList.contains('open')) return;
    lightboxImg.onload = null;
    lightboxImg.onerror = null;
    lightboxImg.src = '';
  }, closeDuration);
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

let touchStartX = null;
let touchStartY = null;
let lastSwipeAt = 0;
const swipeThreshold = 50;

lightbox.addEventListener('touchstart', e => {
  if (!lightbox.classList.contains('open') || e.touches.length !== 1 || e.target.closest('button')) {
    touchStartX = null;
    touchStartY = null;
    return;
  }
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}, { passive:true });

lightbox.addEventListener('touchend', e => {
  if (touchStartX === null || touchStartY === null || e.changedTouches.length !== 1) return;

  const deltaX = e.changedTouches[0].clientX - touchStartX;
  const deltaY = e.changedTouches[0].clientY - touchStartY;
  touchStartX = null;
  touchStartY = null;

  if (Math.abs(deltaX) < swipeThreshold || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  lastSwipeAt = Date.now();
  showImage(deltaX < 0 ? currentIndex + 1 : currentIndex - 1);
}, { passive:true });

lightbox.addEventListener('touchcancel', () => {
  touchStartX = null;
  touchStartY = null;
}, { passive:true });

lightbox.addEventListener('click', e => {
  const followsSwipe = Date.now() - lastSwipeAt < 400;
  if (e.target === lightbox && !followsSwipe) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
});
