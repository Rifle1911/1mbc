'use strict';
const $=id=>document.getElementById(id);
const config=window.ANNIVERSARY||{};
if(config.to){$('envelope-name').textContent=config.to;$('letter-title').textContent='ถึง '+config.to+' คนโปรดของเค้า';}
if(config.from)$('signature').textContent='รักนะ จาก '+config.from;
if(Array.isArray(config.letter)&&config.letter.length){$('letter-copy').replaceChildren(...config.letter.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));}
const motionQuery=matchMedia('(prefers-reduced-motion: reduce)');
let paused=motionQuery.matches;
function setMotion(value){paused=value;document.body.classList.toggle('paused',paused);$('motion').setAttribute('aria-pressed',String(paused));$('motion').textContent=paused?'ให้น้องขยับอีกครั้ง':'พักดอกไม้สักแป๊บ';document.querySelectorAll('.animated-img').forEach(img=>{img.src=paused?img.dataset.still:img.dataset.animated;});if(paused)$('particles').replaceChildren();}
setMotion(paused);
$('motion').addEventListener('click',()=>setMotion(!paused));
motionQuery.addEventListener('change',e=>setMotion(e.matches));
document.querySelectorAll('.love-card').forEach(card=>card.addEventListener('click',()=>{const open=card.getAttribute('aria-expanded')!=='true';card.setAttribute('aria-expanded',String(open));$(card.getAttribute('aria-controls')).hidden=!open;card.querySelector('.card-bottom').textContent=open?'แตะเพื่อเก็บไว้':'แตะเพื่อเปิด';}));
const dialog=$('letter-dialog');
$('open-letter').addEventListener('click',()=>{dialog.showModal();document.body.classList.add('modal-open');});
function closeLetter(){dialog.close();}
$('close-letter').addEventListener('click',closeLetter);$('keep-letter').addEventListener('click',closeLetter);
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');$('open-letter').focus();});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeLetter();}});
const wishes=['เธอไม่ต้องเก่งตลอดเวลาก็ได้\nอยู่ตรงนี้ เป็นตัวเองได้เต็มที่เลยนะ','เหนื่อยเมื่อไหร่ พักก่อนได้นะ\nเค้าอยากเห็นเธอใจดีกับตัวเองเหมือนกัน','ไม่ว่าจะเป็นวันที่สดใสหรือวันที่แย่\nเธอก็ยังเป็นคนโปรดของเค้าเสมอ','ขอบคุณที่เป็นเธอ\nแค่นี้ก็เป็นของขวัญที่ดีมากแล้ว','อย่าลืมกินข้าวแล้วก็กินมัจฉะ แล้วก็ยิ้มให้ตัวเอง\nมีคนตรงนี้เป็นห่วงเธออยู่นะ','ถ้าวันนี้ยังไม่มีใครบอก\nเค้าดีใจมากนะที่ได้รู้จักเธอ'];
let wishIndex=0;$('new-wish').addEventListener('click',()=>{wishIndex=(wishIndex+1)%wishes.length;$('wish').textContent=wishes[wishIndex];});
let petIndex=0;const petNotes=['น้องส่งหัวใจให้เธอแล้ว ♡','คนอะไร น่ารักจังเลย 🌻','อีกหนึ่งหัวใจ เป็นของเธอ ♡'];
$('pet').addEventListener('click',()=>{$('pet-message').textContent=petNotes[petIndex++%petNotes.length];if(!paused){$('pet').classList.remove('pet-pop');void $('pet').offsetWidth;$('pet').classList.add('pet-pop');}});
function hearts(){if(paused)return;$('couple').classList.remove('hug-bounce');void $('couple').offsetWidth;$('couple').classList.add('hug-bounce');const root=$('particles');root.replaceChildren();for(let i=0;i<38;i++){const p=document.createElement('span');p.className='particle';p.textContent=i%4===0?'✦':'♡';p.style.left=Math.random()*100+'%';p.style.setProperty('--drift',(Math.random()-.5)*180+'px');p.style.animationDelay=Math.random()*.65+'s';p.style.color=['#ca6b88','#daa942','#bd856d'][i%3];root.append(p);p.addEventListener('animationend',()=>p.remove());}}
$('celebrate').addEventListener('click',()=>{$('celebrate').hidden=true;$('hug-message').hidden=false;hearts();$('hug-again').focus({preventScroll:true});});$('hug-again').addEventListener('click',hearts);


const audio=$('our-audio');
audio.volume=0.05;
const songUrl=typeof config.musicUrl==='string'?config.musicUrl.trim():'';
const songStart=Number.isFinite(config.musicStart)?Math.max(0,config.musicStart):46;
function seekFavorite(){audio.currentTime=Number.isFinite(audio.duration)?Math.min(songStart,Math.max(0,audio.duration-.1)):songStart;}
if(songUrl){$('audio-panel').hidden=false;audio.src=songUrl;$('song-title').textContent=config.musicTitle||'เพลงของเค้า';$('restart-song').textContent='ฟังจากท่อนโปรด '+Math.floor(songStart/60)+':'+String(Math.floor(songStart%60)).padStart(2,'0');audio.addEventListener('loadedmetadata',seekFavorite,{once:true});}
audio.addEventListener('error',()=>{$('audio-status').textContent='เปิดเพลงไม่ได้ ลองตรวจการเชื่อมต่อแล้วเปิดหน้าเว็บอีกครั้งนะ';});
audio.addEventListener('playing',()=>{$('audio-status').textContent='';});
$('restart-song').addEventListener('click',()=>{seekFavorite();audio.play().catch(()=>{$('audio-status').textContent='แตะปุ่มเล่นในตัวเล่นเพลงอีกครั้งนะ';});});
let collected=new Set();const heartButtons=[...document.querySelectorAll('[data-heart]')];
heartButtons.forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.heart;if(collected.has(id))return;collected.add(id);btn.disabled=true;btn.classList.add('collected');btn.setAttribute('aria-label','เก็บหัวใจดวงที่ '+id+' แล้ว');$('heart-count').textContent='เก็บแล้ว '+collected.size+' / 5 ดวง';if(collected.size===5){$('secret-note').hidden=false;hearts();$('secret-note').focus({preventScroll:true});$('secret-note').scrollIntoView({behavior:paused?'instant':'smooth',block:'nearest'});}}));
$('reset-game').addEventListener('click',()=>{collected.clear();heartButtons.forEach(b=>{b.disabled=false;b.classList.remove('collected');b.setAttribute('aria-label','เก็บหัวใจดวงที่ '+b.dataset.heart);});$('heart-count').textContent='เก็บแล้ว 0 / 5 ดวง';$('secret-note').hidden=true;});
const actions={hold:{gif:'assets/couple-hold.gif',still:'assets/couple-hold.png',text:'จับมือเค้าไว้นะ เดินไปด้วยกัน ♡'},hug:{gif:'assets/couple.gif',still:'assets/couple.png',text:'ขอกอดเธอแบบนี้ไปนาน ๆ เลยนะ ♡'},kiss:{gif:'assets/couple-kiss.gif',still:'assets/couple-kiss.png',text:'หอมแก้มหนึ่งที ให้คนดีของเค้า ♡'}};
document.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>{const action=actions[button.dataset.action],img=$('couple');img.dataset.animated=action.gif;img.dataset.still=action.still;img.src=paused?action.still:action.gif;$('couple-caption').textContent=action.text;document.querySelectorAll('[data-action]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));if(button.dataset.action==='kiss')hearts();}));
