/* Ridons landing page behaviour: store links, mobile menu, FAQ, and the interactive price demo. */
document.documentElement.lang = 'en';

/* Store links, company details and social profiles live in business.json, so they are edited in one place.
   Until a store link is set, its button says "Coming soon" and goes nowhere. */
document.querySelectorAll('[data-store]').forEach(a => { a.removeAttribute('href'); a.setAttribute('aria-disabled', 'true'); a.setAttribute('role', 'link'); });
fetch('business.json').then(r => r.ok ? r.json() : null).then(biz => {
  if (!biz) return;
  const stores = biz.store_links || {};
  document.querySelectorAll('[data-store]').forEach(a => {
    const url = stores[a.dataset.store];
    if (!url) return;
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.removeAttribute('aria-disabled'); a.removeAttribute('role');
  });
  document.querySelectorAll('[data-biz]').forEach(el => { const v = biz[el.dataset.biz]; if (v) el.textContent = v; });
  document.querySelectorAll('[data-biz-line]').forEach(el => { el.hidden = !biz[el.dataset.bizLine]; });
  const social = biz.social || {};
  document.querySelectorAll('[data-social]').forEach(a => { const u = social[a.dataset.social]; if (u) { a.href = u; a.hidden = false; } });
}).catch(() => {});

/* mobile menu */
const menuBtn = document.querySelector('.menu-btn'), mnav = document.getElementById('mnav');
const setMenu = open => { menuBtn.setAttribute('aria-expanded', String(open)); menuBtn.textContent = open ? 'Close' : 'Menu'; mnav.hidden = !open; };
menuBtn.addEventListener('click', () => setMenu(mnav.hidden));
mnav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

/* language: the Kinyarwanda page isn't ready yet */
const lang = document.getElementById('lang');
lang.addEventListener('click', () => {
  const s = lang.querySelector('span');
  s.textContent = 'Kinyarwanda soon';
  setTimeout(() => { s.textContent = 'En'; }, 1600);
});

/* FAQ: show all */
document.getElementById('more').addEventListener('click', e => {
  document.querySelectorAll('.faq .extra').forEach(d => { d.hidden = false; });
  e.currentTarget.hidden = true;
});

/* Demo phone: set a price, get offers, pick a motari */
const sheet = document.getElementById('demo-sheet');
const fmt = n => n.toLocaleString('en-US');
const MOTARI = [
  { name: 'Jean Bosco', init: 'JB', color: '#2F6FDE', rating: '4.9', plate: 'RF 482 C', eta: 2 },
  { name: 'Eric N.', init: 'EN', color: '#C9822B', rating: '4.8', plate: 'RAD 123 B', eta: 1 },
  { name: 'Claudine U.', init: 'CU', color: '#7C5CBF', rating: '5.0', plate: 'RC 907 A', eta: 3 }
];
const tabbar = '<div class="tabbar"><span class="on"><svg><use href="#i-home"/></svg>Home</span><span><svg><use href="#i-act"/></svg>Activities</span><span><svg><use href="#i-acc"/></svg>Account</span></div>';
const stops = '<div class="stops"><span><svg><use href="#pin"/></svg>Nyarutarama</span><span><svg><use href="#pin"/></svg>Remera Bus Park</span></div>';
let price = 1900;

// A fair offer gets accepted. A low offer gets counter-offers. Eric is easier to please.
function replyFrom(i){
  if (price >= 1900) return price;
  if (i === 1 && price >= 1600) return price;
  return Math.max(price + 100, [1900, 1800, 2000][i]);
}

function setStep(n){
  document.querySelectorAll('#steps li').forEach(li => {
    const s = +li.dataset.step;
    li.classList.toggle('past', s < n);
    if (s === n) li.setAttribute('aria-current', 'step'); else li.removeAttribute('aria-current');
  });
}

function stepPrice(){
  setStep(1);
  sheet.innerHTML = `
    <div class="sheet-row"><h4>Price estimation</h4><span class="hint">Usual 1,800–2,200</span></div>
    <span class="hint">Change the price if you want</span>
    <div class="line-red"></div>
    <div class="fare"><button type="button" id="d-minus" aria-label="Lower price by 100">−</button><output class="num" id="d-price">${fmt(price)}<small>RWF</small></output><button type="button" id="d-plus" aria-label="Raise price by 100">+</button></div>
    <button type="button" class="p-btn" id="d-go">Confirm</button>
    ${stops}${tabbar}`;
  const out = document.getElementById('d-price');
  const set = d => { price = Math.min(6000, Math.max(500, price + d)); out.innerHTML = fmt(price) + '<small>RWF</small>'; };
  document.getElementById('d-minus').onclick = () => set(-100);
  document.getElementById('d-plus').onclick = () => set(100);
  document.getElementById('d-go').onclick = stepOffers;
}

function stepOffers(){
  setStep(2);
  sheet.innerHTML = `
    <div class="sheet-row"><h4>Offers for you</h4><span class="hint">You offered ${fmt(price)}</span></div>
    <span class="hint">Tap the motari you want</span>
    <div class="line-red"></div>
    <div class="offers" id="d-offers"></div>
    <button type="button" class="p-btn ghost" id="d-back">Change my price</button>
    ${tabbar}`;
  document.getElementById('d-back').onclick = stepPrice;
  const box = document.getElementById('d-offers');
  MOTARI.forEach((r, i) => setTimeout(() => {
    if (!box.isConnected) return;
    const amt = replyFrom(i), ok = amt === price;
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'offer';
    b.innerHTML = `<span class="av" style="background:${r.color}">${r.init}</span><span class="who"><b>${r.name}</b><small>★ ${r.rating} · ${r.eta} min away</small></span><span class="amt num">${fmt(amt)}<small class="${ok ? '' : 'ctr'}">${ok ? 'Accepted' : 'Counter-offer'}</small></span>`;
    b.onclick = () => stepDone(r, amt);
    box.appendChild(b);
    if (i === MOTARI.length - 1) setStep(3);
  }, 400 + i * 500));
}

function stepDone(r, amt){
  setStep(4);
  sheet.innerHTML = `
    <div class="done">
      <span class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg></span>
      <b>Price agreed: ${fmt(amt)} RWF</b>
      <p>${r.name} is on the way, ${r.eta} min.<br>Plate ${r.plate}. This price won't change.</p>
    </div>
    ${stops}
    <button type="button" class="p-btn" id="d-again">Try again</button>
    ${tabbar}`;
  document.getElementById('d-again').onclick = () => { price = 1900; stepPrice(); };
}
stepPrice();
