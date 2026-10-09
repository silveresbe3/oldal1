(() => {
  gsap.registerPlugin(ScrollTrigger);
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hover = matchMedia('(hover:hover)').matches;
  const body = document.body, header = $('#header'), headLogo = $('#headLogo'), pre = $('#preloader');
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Szavakra bontott címek ---------- */
  $$('[data-split]').forEach((el) => {
    el.setAttribute('aria-label', el.textContent);
    el.innerHTML = el.textContent.trim().split(/\s+/)
      .map((w) => `<span class="word" aria-hidden="true"><span>${w}</span></span>`).join(' ');
  });

  /* ---------- Lenis: finom görgetés a ScrollTrigger-rel szinkronban ---------- */
  let lenis = null;
  if (window.Lenis && !reduce) {
    lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
    $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
      const el = $(a.getAttribute('href')); if (!el) return;
      e.preventDefault(); lenis.scrollTo(el, { offset: -70, duration: 1.4 });
    }));
  }

  /* ---------- Fejléc: görgetésre eltűnik, felfelé visszajön + haladásjelző ---------- */
  const bar = $('#progress');
  let lastY = 0;
  addEventListener('scroll', () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    header.classList.toggle('solid', y > 60);
    header.classList.toggle('hide', y > lastY && y > 400 && !body.classList.contains('is-loading'));
    lastY = y;
  }, { passive: true });

  /* ---------- Kurzor: hegesztőív-fény + sor-reflektor ---------- */
  const glow = $('#glow');
  if (hover && !reduce) {
    const gx = gsap.quickTo(glow, 'x', { duration: 0.8, ease: 'power3.out' });
    const gy = gsap.quickTo(glow, 'y', { duration: 0.8, ease: 'power3.out' });
    addEventListener('pointermove', (e) => { glow.classList.add('on'); gx(e.clientX); gy(e.clientY); }, { passive: true });
    document.addEventListener('pointerleave', () => glow.classList.remove('on'));
    $$('.row').forEach((r) => r.addEventListener('pointermove', (e) => {
      const b = r.getBoundingClientRect();
      r.style.setProperty('--mx', e.clientX - b.left + 'px');
      r.style.setProperty('--my', e.clientY - b.top + 'px');
    }));
  }

  /* ---------- Szolgáltatás-sorok (harmonika) ---------- */
  $$('.rows').forEach((list) => {
    const rows = $$('.row', list);
    const open = (row) => rows.forEach((r) => {
      const on = r === row;
      r.classList.toggle('open', on);
      $('.row-h', r).setAttribute('aria-expanded', on);
    });
    rows.forEach((r) => {
      $('.row-h', r).addEventListener('click', () => open(r.classList.contains('open') ? null : r));
      if (hover) r.addEventListener('mouseenter', () => open(r));
    });
  });

  /* ---------- Görgetéses animációk ---------- */
  function initScroll() {
    if (reduce) return;
    const items = $$('[data-reveal]');
    gsap.set(items, { opacity: 0, y: 60 });
    ScrollTrigger.batch(items, {
      start: 'top 88%', once: true,
      onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.08 }),
    });
    $$('[data-split]').forEach((h) => {
      const w = $$('.word>span', h);
      gsap.set(w, { yPercent: 110 });
      ScrollTrigger.create({
        trigger: h, start: 'top 88%', once: true,
        onEnter: () => gsap.to(w, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.07 }),
      });
    });
    gsap.to('.blueprint', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    $$('.steps li').forEach((li) => ScrollTrigger.create({ trigger: li, start: 'top 70%', onEnter: () => li.classList.add('on'), onLeaveBack: () => li.classList.remove('on') }));
    gsap.to('#rail', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 75%', end: 'bottom 60%', scrub: true } });
  }

  /* ---------- Számlálók ---------- */
  function initCounters() {
    $$('[data-count]').forEach((el) => {
      const to = +el.dataset.count, o = { v: 0 };
      if (reduce) return;
      el.textContent = '0';
      gsap.to(o, { v: to, duration: 1.6, ease: 'power2.out', delay: 0.2, onUpdate: () => (el.textContent = Math.round(o.v)) });
    });
  }

  /* ---------- Mágneses gombok ---------- */
  function initMagnetic() {
    if (reduce || !hover) return;
    $$('.magnetic').forEach((el) => {
      const mx = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
      const my = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect();
        mx((e.clientX - (r.left + r.width / 2)) * 0.3);
        my((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      el.addEventListener('mouseleave', () => { mx(0); my(0); });
    });
  }

  /* ---------- Intró ---------- */
  function finish() {
    headLogo.style.opacity = 1;
    pre.remove();
    $('.logo.intro')?.remove();
    body.classList.remove('is-loading');
    lenis?.start();
    initScroll(); initMagnetic(); initCounters();
    ScrollTrigger.refresh();
  }

  function runIntro() {
    const hero = $$('[data-hero]:not(h1)');
    const lines = $$('h1 .ln>span');
    if (reduce) { finish(); return; }

    // Az intró-logó a fejléc logó pontos másolata, a képernyő közepére nagyítva.
    const r = headLogo.getBoundingClientRect();
    const intro = headLogo.cloneNode(true);
    intro.removeAttribute('id'); intro.removeAttribute('href');
    intro.classList.add('intro');
    Object.assign(intro.style, { left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
    document.body.appendChild(intro);

    const vw = innerWidth, vh = innerHeight;
    const sym = $('.logo-sym', intro), words = $$('.mask > span', intro);
    gsap.set(intro, { x: vw / 2 - (r.left + r.width / 2), y: vh / 2 - (r.top + r.height / 2), scale: Math.min(2.4, (vw * 0.8) / r.width), transformOrigin: '50% 50%' });
    gsap.set(sym, { opacity: 0, rotationY: -110, transformPerspective: 900, transformOrigin: '50% 50%' });
    gsap.set(words, { yPercent: 115 });
    gsap.set(hero, { opacity: 0, y: 40 });
    gsap.set(lines, { yPercent: 115 });

    const counter = $('#counter'), state = { v: 0 };
    gsap.timeline({ onComplete: finish })
      .to(state, { v: 100, duration: 1.8, ease: 'power2.inOut',
        onUpdate: () => { counter.textContent = String(Math.round(state.v)).padStart(3, '0') + ' / 100'; } })
      .to(counter, { opacity: 0, y: -14, duration: 0.4, ease: 'power2.out' })
      .to(sym, { opacity: 1, rotationY: 0, duration: 1.1, ease: 'power3.out' }, '>-0.1')
      .to(words, { yPercent: 0, duration: 0.9, ease: 'power4.out', stagger: 0.12 }, '>-0.35')
      .addLabel('go', '>+0.4')
      .to(intro, { x: 0, y: 0, scale: 1, duration: 1.3, ease: 'power4.inOut' }, 'go')
      .to(pre, { clipPath: 'inset(0 0 100% 0)', duration: 1.3, ease: 'power4.inOut' }, 'go')
      .to(lines, { yPercent: 0, duration: 1.2, ease: 'power4.out', stagger: 0.14 }, 'go+=0.7')
      .to(hero, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.1 }, 'go+=0.95');
  }

  /* ---------- Modal ---------- */
  const modal = $('#modal'), panel = $('.modal-panel', modal), select = $('select[name=service]', modal);
  let lastFocus = null;

  function openModal(e) {
    e?.preventDefault();
    const svc = e?.currentTarget?.dataset?.ask;
    lastFocus = document.activeElement;
    modal.hidden = false;
    body.style.overflow = 'hidden'; lenis?.stop();
    if (svc) { const o = [...select.options].find((x) => x.text.startsWith(svc.split(' (')[0])); if (o) select.value = o.value || o.text; }
    if (!reduce) {
      gsap.fromTo($('.modal-backdrop', modal), { opacity: 0 }, { opacity: 1, duration: 0.4 });
      gsap.fromTo(panel, { y: 40, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' });
    }
    $('input', modal).focus();
  }
  function closeModal() {
    const done = () => { modal.hidden = true; body.style.overflow = ''; lenis?.start(); lastFocus?.focus(); };
    if (reduce) return done();
    gsap.to(panel, { y: 30, opacity: 0, duration: 0.3, ease: 'power2.in' });
    gsap.to($('.modal-backdrop', modal), { opacity: 0, duration: 0.35, onComplete: done });
  }
  [$('#openModal'), ...$$('[data-open-modal]'), ...$$('[data-ask]')].forEach((b) => b.addEventListener('click', openModal));
  $$('[data-close]', modal).forEach((b) => b.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (modal.hidden) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'Tab') { // fókuszcsapda
      const f = $$('input,select,textarea,button', panel).filter((x) => !x.disabled);
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------- Űrlap: validáció + e-mail kliens megnyitása (backend nélkül is működik) ---------- */
  const form = $('#quoteForm'), msg = $('#formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    const ok = d.name.trim() && /\S+@\S+\.\S+/.test(d.email) && d.service;
    msg.classList.toggle('err', !ok);
    if (!ok) { msg.textContent = 'Adja meg a nevét, egy érvényes e-mail-címet és a szolgáltatást.'; return; }
    const text = `Név: ${d.name}\nE-mail: ${d.email}\nTelefon: ${d.phone || '-'}\nSzolgáltatás: ${d.service}\n\n${d.message || ''}`;
    // Éles használathoz ide köthető a backend / űrlapszolgáltatás (fetch POST).
    location.href = `mailto:ajanlat@titan-techbau.hu?subject=${encodeURIComponent('Ajánlatkérés: ' + d.service)}&body=${encodeURIComponent(text)}`;
    msg.textContent = 'Köszönjük! Megnyitottuk az e-mail-programját, a küldéssel véglegesítheti az ajánlatkérést.';
    form.reset();
  });

  addEventListener('load', () => { scrollTo(0, 0); runIntro(); });
})();
