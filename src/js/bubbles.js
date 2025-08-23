// Attach bubble backgrounds to any element with [data-bubbles]
export function initBubblesBackground(root=document){
  root.querySelectorAll('[data-bubbles]').forEach(el => new BubblesBackground(el));
}

class BubblesBackground{
  constructor(el){
    this.el = el;
    this.density = parseInt(el.dataset.density,10) || 48;
    this.min = parseFloat(el.dataset.minRadius) || 4;
    this.max = parseFloat(el.dataset.maxRadius) || 12;

    // canvas is prepended so it sits behind other content
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    el.prepend(this.canvas);

    // ensure element styles
    if(getComputedStyle(el).position === 'static') el.style.position = 'relative';

    this.resize = this.resize.bind(this);
    this.tick = this.tick.bind(this);

    window.addEventListener('resize', this.resize);
    this.resize(); // initial sizing

    this.initBubbles();

    // pause animation when the section scrolls out of view
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.isIntersecting ? this.start() : this.stop();
      });
    });
    this.observer.observe(el);
  }

  resize(){
    // resize canvas to match element bounds and device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const rect = this.el.getBoundingClientRect();
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.canvas.style.width = rect.width + 'px';
    this.canvas.style.height = rect.height + 'px';
    this.ctx.scale(dpr, dpr);
  }

  initBubbles(){
    // pull accent from CSS and create initial bubble set
    const styles = getComputedStyle(this.el);
    this.accent = styles.getPropertyValue('--accent').trim() || '#ffcf40';
    this.bubbles = Array.from({length:this.density}, () => this.spawn());
  }

  spawn(){
    // create a single bubble with random position, radius and velocity
    return {
      x: Math.random()*this.el.clientWidth,
      y: Math.random()*this.el.clientHeight,
      r: this.min + Math.random()*(this.max - this.min),
      v: 0.2 + Math.random()*0.5,
      drift: (Math.random()-0.5)*0.5
    };
  }

  draw(){
    // render current frame
    const ctx = this.ctx;
    const w = this.el.clientWidth;
    const h = this.el.clientHeight;
    ctx.clearRect(0,0,w,h);
    this.bubbles.forEach(b => {
      const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      g.addColorStop(0, hexToRgba(this.accent,0.6));
      g.addColorStop(1, hexToRgba(this.accent,0));
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.r, 0, Math.PI*2);
      ctx.fill();
    });
  }

  update(){
    // move bubbles upwards with slight horizontal drift
    this.bubbles.forEach(b => {
      b.y -= b.v;
      b.x += b.drift;
      if(b.y + b.r < 0){
        Object.assign(b, this.spawn(), {y: this.el.clientHeight + b.r});
      }
    });
  }

  tick(){
    this.update();
    this.draw();
    this.frame = requestAnimationFrame(this.tick);
  }

  start(){
    if(!this.frame) this.tick();
  }

  stop(){
    if(this.frame){
      cancelAnimationFrame(this.frame);
      this.frame = null;
    }
  }
}

function hexToRgba(hex, alpha){
  const int = parseInt(hex.replace('#',''),16);
  const r = (int>>16)&255;
  const g = (int>>8)&255;
  const b = int&255;
  return `rgba(${r},${g},${b},${alpha})`;
}
