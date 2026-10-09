/* Hero shader: domain-warped fbm "hevített fém" + a kurzort követő hegesztőív. Nincs külső függőség. */
(() => {
  const hero = document.querySelector('.hero');
  const cv = document.getElementById('gl');
  if (!cv || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const gl = cv.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return;
  const VS = 'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
  const FS = `precision mediump float;uniform vec2 r,m;uniform float t,s;
  float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
    return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
  float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+7.1;a*=.5;}return v;}
  void main(){
    float k=r.x/r.y;vec2 uv=gl_FragCoord.xy/r;vec2 p=(uv-.5)*vec2(k,1.);vec2 mp=(m-.5)*vec2(k,1.);
    float d=distance(p,mp);
    vec2 q=vec2(fbm(p*2.+t*.05),fbm(p*2.+5.2-t*.04));
    vec2 w=p*2.+2.2*q+(p-mp)*exp(-d*3.)*.9+vec2(0.,s*.6);
    float f=fbm(w+t*.03);
    float ridge=pow(1.-abs(f*2.-1.),6.);
    vec3 c=mix(vec3(.03,.05,.09),vec3(.04,.17,.40),smoothstep(.2,.8,f));
    c+=vec3(.29,.58,1.)*ridge*.32;
    c+=vec3(1.,.70,.28)*ridge*exp(-d*5.)*1.5;
    c+=vec3(1.,.70,.28)*exp(-d*16.)*.22;
    c*=smoothstep(1.5,.15,length(p*vec2(.8,1.)));
    gl_FragColor=vec4(c,1.);}`;
  const sh = (type, src) => { const o = gl.createShader(type); gl.shaderSource(o, src); gl.compileShader(o); return gl.getShaderParameter(o, gl.COMPILE_STATUS) ? o : null; };
  const vs = sh(gl.VERTEX_SHADER, VS), fs = sh(gl.FRAGMENT_SHADER, FS);
  if (!vs || !fs) return;
  const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return;
  gl.useProgram(pr);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'a'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = (n) => gl.getUniformLocation(pr, n);
  const uR = U('r'), uM = U('m'), uT = U('t'), uS = U('s');
  // Eszköz-szint: gyengébb/mobil eszközön alacsonyabb felbontás
  const q = (matchMedia('(pointer:coarse)').matches || (navigator.hardwareConcurrency || 8) <= 4) ? 0.5 : Math.min(devicePixelRatio, 1.5) * 0.75;
  const fit = () => { cv.width = Math.max(2, hero.clientWidth * q | 0); cv.height = Math.max(2, hero.clientHeight * q | 0); gl.viewport(0, 0, cv.width, cv.height); };
  fit(); addEventListener('resize', fit);
  const tgt = { x: .72, y: .55 }, cur = { x: .72, y: .55 };
  let last = 0;
  hero.addEventListener('pointermove', (e) => { const b = hero.getBoundingClientRect(); tgt.x = (e.clientX - b.left) / b.width; tgt.y = 1 - (e.clientY - b.top) / b.height; last = performance.now(); }, { passive: true });
  let vis = true, raf;
  new IntersectionObserver(([e]) => { vis = e.isIntersecting; if (vis) raf = requestAnimationFrame(draw); }).observe(hero);
  const t0 = performance.now();
  function draw(now) {
    if (!vis) return;
    const t = (now - t0) / 1000;
    if (now - last > 2500) { tgt.x = .66 + Math.sin(t * .35) * .18; tgt.y = .55 + Math.cos(t * .5) * .12; } // üresjárat: az ív magától vándorol
    cur.x += (tgt.x - cur.x) * .06; cur.y += (tgt.y - cur.y) * .06;
    gl.uniform2f(uR, cv.width, cv.height); gl.uniform2f(uM, cur.x, cur.y); gl.uniform1f(uT, t);
    gl.uniform1f(uS, Math.min(scrollY / innerHeight, 1));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    raf = requestAnimationFrame(draw);
  }
  raf = requestAnimationFrame(draw);
  hero.classList.add('gl'); cv.classList.add('on');
})();
