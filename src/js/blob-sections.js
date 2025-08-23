(function(global){
  function initBlobSections({selector='.blobbed'}={}){
    const sections=[...document.querySelectorAll(selector)];
    if(!sections.length) return ()=>{};
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const variants=[[.25,.75],[.2,.8],[.3,.7],[.15,.85]];
    const items=[];

    sections.forEach((sec,idx)=>{
      const opts={
        intensity:parseFloat(sec.dataset.intensity)||1,
        tilt:parseFloat(sec.dataset.tilt)||0,
        skew:parseFloat(sec.dataset.skew)||0,
        speed:Math.max(0,Math.min(1.5,parseFloat(sec.dataset.speed)||0))
      };
      const sides=(sec.dataset.blob||'bottom').split(/\s+/);
      sides.forEach(side=>{
        const wrap=document.createElement('div');
        wrap.className=`blob-wrap blob-${side}`;
        wrap.setAttribute('aria-hidden','true');
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
        svg.setAttribute('viewBox','0 0 1440 160');
        svg.setAttribute('preserveAspectRatio','none');
        const defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
        const gid=`blob-grad-${idx}-${side}`;
        const grad=document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
        grad.setAttribute('id',gid);
        grad.setAttribute('x1','0');grad.setAttribute('y1','0');
        grad.setAttribute('x2','0');grad.setAttribute('y2','1');
        grad.innerHTML='<stop offset="0%" stop-color="var(--accent)" stop-opacity="0.6"/><stop offset="100%" stop-color="var(--accent)" stop-opacity="0"/>';
        const fid=`blob-fade-${idx}-${side}`;
        const fade=document.createElementNS('http://www.w3.org/2000/svg','linearGradient');
        fade.setAttribute('id',fid);
        fade.setAttribute('x1','0');fade.setAttribute('y1','0');
        fade.setAttribute('x2','0');fade.setAttribute('y2','1');
        fade.innerHTML='<stop offset="0%" stop-color="var(--bg)" stop-opacity="0"/><stop offset="100%" stop-color="var(--bg)" stop-opacity="1"/>';
        defs.appendChild(grad);defs.appendChild(fade);
        svg.appendChild(defs);
        const path=document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('fill',`url(#${gid})`);
        svg.appendChild(path);
        const rect=document.createElementNS('http://www.w3.org/2000/svg','rect');
        rect.setAttribute('width','1440');
        rect.setAttribute('height','160');
        rect.setAttribute('fill',`url(#${fid})`);
        svg.appendChild(rect);
        wrap.appendChild(svg);
        sec.appendChild(wrap);
        const item={section:sec,wrap,path,opts,variant:idx%variants.length};
        items.push(item);
        if(!reduce){
          const d1=genPath(item);
          const d2=genPath(item,0.02);
          path.setAttribute('d',d1);
          item.anim=path.animate([{d:d1},{d:d2}],{duration:8000+Math.random()*6000,direction:'alternate',easing:'ease-in-out',iterations:Infinity});
        }else{
          path.setAttribute('d',genPath(item));
        }
      });
    });

    function genPath(it,j=0){
      const w=1440,h=160,v=variants[it.variant];
      const amp=h*0.5*it.opts.intensity;
      const t=it.opts.tilt*h*0.1;
      const k=it.opts.skew*w*0.1;
      const jv=j*h;
      const c1x=w*v[0]+k,c2x=w*v[1]+k;
      const c1y=amp+t+jv,c2y=-amp+t-jv;
      return `M0,0 C${c1x},${c1y} ${c2x},${c2y} ${w},0 L${w},${h} L0,${h}Z`;
    }

    function update(){
      items.forEach(it=>{
        const d=genPath(it);
        it.path.setAttribute('d',d);
      });
    }
    window.addEventListener('resize',update);

    let rafId=null,visible=0;
    const maxShift=()=>window.innerHeight*0.015;
    function raf(){
      const max=maxShift();
      items.forEach(it=>{
        const r=it.section.getBoundingClientRect();
        const off=Math.max(-max,Math.min(max,-r.top*it.opts.speed*0.1));
        it.wrap.style.transform=`translateY(${off}px)`;
      });
      rafId=requestAnimationFrame(raf);
    }
    const io=new IntersectionObserver(ents=>{
      ents.forEach(e=>{visible+=e.isIntersecting?1:-1;});
      if(visible>0&&!rafId&&!reduce) raf();
      else if(visible<=0&&rafId){cancelAnimationFrame(rafId);rafId=null;}
    });
    sections.forEach(sec=>io.observe(sec));

    return function teardown(){
      window.removeEventListener('resize',update);
      io.disconnect();
      if(rafId) cancelAnimationFrame(rafId);
      items.forEach(it=>it.anim&&it.anim.cancel());
    };
  }
  global.initBlobSections=initBlobSections;
})(window);
