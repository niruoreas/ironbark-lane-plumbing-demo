/* Ironbark Lane Plumbing · demo site behaviour */
(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;

// fade sections up, slow zoom on photos, once each is on screen
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add(e.target.classList.contains('kb')?'go':'in');io.unobserve(e.target)}}),{threshold:.15});
$$('.rv,.kb').forEach(el=>io.observe(el));

// before / after slider
const ba=$('#ba'), r=$('#baR');
if(ba&&r){const set=()=>ba.style.setProperty('--p',r.value+'%');r.addEventListener('input',set);set()}

// notifications and message bubbles arrive one after another
const stagger=(sel,gap)=>{const items=$$(sel);if(!items.length)return;
  if(still){items.forEach(i=>i.classList.add('in'));return}
  const o=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();
    items.forEach((i,n)=>setTimeout(()=>i.classList.add('in'),n*gap))}),{threshold:.3});
  o.observe(items[0].parentElement)};
stagger('#ntStack .note',380);
stagger('.thread .msg',650);

// suburb check
const q=$('#subQ'), res=$('#subRes'), subs=$$('#subs li');
if(q)q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();subs.forEach(s=>s.classList.remove('hit'));res.className='res';
  if(v.length<2){res.textContent='';return}
  const m=subs.find(s=>s.textContent.toLowerCase().startsWith(v));
  if(m){m.classList.add('hit');res.classList.add('ok');res.textContent=`Yes, we cover ${m.textContent}.`}
  else res.textContent="Not on the list, but give us a ring. We may still get there."});

// service links pre-pick the matching chip in the form
$$('[data-pick]').forEach(a=>a.addEventListener('click',()=>{$$('#qSvc input').forEach(i=>{i.checked=i.value===a.dataset.pick})}));

// demo form: check name + phone, then show the thank-you (nothing is sent)
const f=$('#qForm');
if(f)f.addEventListener('submit',e=>{e.preventDefault();let ok=true;
  ['name','phone'].forEach(n=>{const el=f[n];const bad=!el.value.trim();el.style.borderColor=bad?'#c0392b':'';if(bad)ok=false});
  if(ok)$('#formBox').classList.add('sent')});
})();
