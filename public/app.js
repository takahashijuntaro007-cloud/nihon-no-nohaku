const $=s=>document.querySelector(s), money=n=>'¥'+n.toLocaleString('ja-JP'),photo=(id,w=900)=>`https://images.unsplash.com/${id}?w=${w}&auto=format&fit=crop&q=85`;
const images={field:photo('photo-1500382017468-9049fed747ef'),house:photo('photo-1473973266408-ed4e27abdd47'),food:photo('photo-1542838132-92c53300491e'),nature:photo('photo-1472396961693-142e6e269027'),mountain:photo('photo-1464822759023-fed622ff2c3b'),room:photo('photo-1449844908441-8829872d2607'),hot:photo('photo-1519823551278-64ac92734fb1')};
Object.assign(images,{tomato:'assets/tomato.png',cabbage:'assets/cabbage.png',dairy:'assets/dairy.png',wine:'assets/wine.png',tea:'assets/tea.png',sake:'assets/sake.png'});
const themes=[['農業体験','',images.tomato],['地域の食事','♧',images.food],['自然','△',images.mountain],['地域の人との交流','', 'assets/hero-harvest.png'],['観光','⌖',images.nature],['温泉','', 'assets/onsen.png'],['設備','⌂',images.room]];
const farms=[{id:1,name:'里山の農家宿 こもれび',region:'長野県・安曇野',image:images.tomato,kind:'畑作 · トマト',caption:'赤く実ったトマトを収穫し、旬の料理を楽しむ宿。',price:8800,themes:['農業体験','地域の食事','自然'],duration:['日帰り','1泊2日','2泊3日'],tokyo:3,osaka:4,interaction:'mid',diet:['vegetarian','normal'],story:'北アルプスのふもとで、畑から食卓へ。赤く実ったトマトを収穫して、農家さんと一緒に夕ごはんを作る、あたたかな時間。',activity:'トマトの収穫・里山散歩',meal:'夕朝食付き。野菜中心の食事に対応',facility:'個室・Wi-Fi・専用浴室・駐車場',capacity:5}, {id:2,name:'畑のある宿 はるの音',region:'千葉県・南房総',image:images.cabbage,kind:'畑作 · キャベツ',caption:'キャベツ畑で収穫を体験し、農家の食卓を囲む宿。',price:7500,themes:['農業体験','地域の食事','地域の人との交流'],duration:['日帰り','1泊2日'],tokyo:2,osaka:5,interaction:'high',diet:['normal','vegetarian'],story:'海風が届くキャベツ畑で、土にふれる週末。収穫のあとには、旬の野菜を囲んで地域の人とのおしゃべりを。',activity:'キャベツの収穫・郷土料理づくり',meal:'夕朝食付き。菜食をご希望の場合は事前にご相談ください',facility:'家族部屋・Wi-Fi・共用浴室',capacity:6},{id:3,name:'酪農の宿 つむぎ',region:'京都府・南丹',image:images.dairy,kind:'酪農 · 乳牛',caption:'乳牛のお世話と、牧場の暮らしにふれる宿。',price:10500,themes:['農業体験','自然','地域の食事','設備'],duration:['1泊2日','2泊3日'],tokyo:4,osaka:2,interaction:'low',diet:['normal'],story:'乳牛が暮らす牧場で、ゆっくり過ごす休日。牛のお世話や牧場見学を通じて、酪農の日常にふれられます。',activity:'乳牛の餌やり・牧場見学（搾乳見学は要相談）',meal:'夕朝食付き。食事制限は要相談',facility:'個室・専用浴室・Wi-Fi・送迎は要相談',capacity:4},{id:4,name:'ぶどう農家の宿 みのり',region:'山梨県・北杜',image:images.wine,kind:'ぶどう栽培 · ワイン',caption:'ワイン用ぶどうの畑を歩き、栽培の仕事を知る宿。',price:9200,themes:['農業体験','自然','地域の食事'],duration:['日帰り','1泊2日','2泊3日'],tokyo:2.5,osaka:4,interaction:'mid',diet:['normal','vegetarian'],story:'ワイン用ぶどうが実る畑で、季節の仕事を体験。栽培からワインづくりまで、農家の話を聞きながら楽しめます。',activity:'ぶどう畑見学・季節の収穫体験・ワインづくりの紹介',meal:'夕朝食付き。菜食をご希望の場合は事前にご相談ください',facility:'個室・Wi-Fi・共用浴室',capacity:4},{id:5,name:'お茶の里 ふた葉',region:'奈良県・山添',image:images.tea,kind:'茶栽培 · 茶葉',caption:'茶畑を見学して、お茶の香りと味わいを楽しむ宿。',price:8000,themes:['農業体験','地域の人との交流','観光'],duration:['日帰り','1泊2日','2泊3日'],tokyo:4,osaka:1.5,interaction:'high',diet:['normal'],story:'茶畑の緑と、お茶を淹れる香り。農家さんから土地の話を聞きながら、ゆっくり過ごす一日。',activity:'茶畑見学・お茶淹れ体験',meal:'夕朝食付き。アレルギーは要相談',facility:'和室・Wi-Fi・共用浴室',capacity:5},{id:6,name:'酒蔵のある宿 なぎ',region:'滋賀県・高島',image:images.sake,kind:'酒造 · 日本酒',caption:'酒蔵を訪ね、米と水から生まれる日本酒を知る宿。',price:9800,themes:['観光','設備','地域の人との交流','地域の食事'],duration:['1泊2日','2泊3日'],tokyo:4,osaka:2,interaction:'low',diet:['normal','vegetarian'],story:'地域の米と水を使う酒蔵を訪ねる旅。蔵人から酒づくりの話を聞き、発酵文化と土地の食を楽しめます。',activity:'酒蔵見学・日本酒づくりの紹介（試飲は20歳以上）',meal:'夕朝食付き。野菜中心の食事への変更は事前にご相談ください',facility:'個室・専用浴室・Wi-Fi・駐車場',capacity:4}];
farms.push(...[
  {
    "id": 7,
    "price": 11500,
    "tokyo": 2,
    "osaka": 5,
    "interaction": "mid",
    "capacity": 6,
    "image": "assets/apple.png",
    "hotSpringType": "onsite",
    "themes": [
      "農業体験",
      "温泉",
      "地域の食事",
      "自然",
      "設備"
    ],
    "duration": [
      "日帰り",
      "1泊2日",
      "2泊3日"
    ],
    "diet": [
      "normal",
      "vegetarian"
    ],
    "name": "りんご農家の温泉宿 ほのか",
    "region": "群馬県・みなかみ",
    "kind": "果樹栽培 · りんご",
    "caption": "りんご畑で季節の仕事を体験し、宿の温泉でくつろぐ農家宿。",
    "story": "山に囲まれたりんご畑で、季節の手入れや収穫を体験。農家と旬の食卓を囲んだあとは、宿の温泉でゆっくり過ごせます。",
    "activity": "りんご畑の見学・季節の手入れや収穫・里山散歩",
    "meal": "夕朝食付き。日帰りは昼食付き。菜食への変更は事前にご相談ください",
    "facility": "個室・Wi-Fi・宿内の共用温泉浴場・駐車場",
    "hotSpring": "宿内の共用温泉浴場（徒歩移動）。入浴料は表示料金に含む想定です。利用時間・日帰りの入浴可否は事前確認が必要です。"
  },
  {
    "id": 8,
    "price": 9800,
    "tokyo": 2.5,
    "osaka": 5,
    "interaction": "high",
    "capacity": 6,
    "image": "assets/rice.png",
    "hotSpringType": "nearby",
    "themes": [
      "農業体験",
      "温泉",
      "地域の食事",
      "自然",
      "地域の人との交流"
    ],
    "duration": [
      "日帰り",
      "1泊2日",
      "2泊3日"
    ],
    "diet": [
      "normal",
      "vegetarian"
    ],
    "name": "田んぼの宿 うおぬま日和",
    "region": "新潟県・魚沼",
    "kind": "稲作 · 米",
    "caption": "田んぼの仕事と炊きたてのごはんを楽しみ、近隣の温泉へ。",
    "story": "田んぼが広がる里で、米づくりの一年を農家から教わる滞在。季節に合わせた農作業のあとは、地元の食材を使った料理と近隣の温泉を楽しめます。",
    "activity": "田んぼの見学・季節の田植えや稲刈り・おにぎりづくり",
    "meal": "夕朝食付き。日帰りは昼食付き。菜食への変更は事前にご相談ください",
    "facility": "和室・Wi-Fi・宿内の共用浴室・駐車場",
    "hotSpring": "近隣の日帰り温泉（車で約15分の想定）。入浴料・交通費は別途必要です。営業状況と送迎の可否は事前確認が必要です。"
  },
  {
    "id": 9,
    "price": 8500,
    "tokyo": 5,
    "osaka": 2,
    "interaction": "mid",
    "capacity": 5,
    "image": "assets/citrus.png",
    "hotSpringType": "nearby",
    "themes": [
      "農業体験",
      "温泉",
      "地域の食事",
      "自然"
    ],
    "duration": [
      "日帰り",
      "1泊2日",
      "2泊3日"
    ],
    "diet": [
      "normal",
      "vegetarian"
    ],
    "name": "みかん農家の宿 だいだい",
    "region": "和歌山県・有田",
    "kind": "果樹栽培 · みかん",
    "caption": "みかん畑と地域の食を楽しむ、近隣の温泉も訪ねられる宿。",
    "story": "山の斜面に広がるみかん畑で、果樹農家の暮らしにふれる旅。季節の手入れや収穫を体験し、食卓で土地の味を楽しんだあとには、近隣の温泉でひと休み。",
    "activity": "みかん畑の見学・季節の手入れや収穫・みかんを使ったお菓子づくり",
    "meal": "夕朝食付き。日帰りは昼食付き。菜食への変更は事前にご相談ください",
    "facility": "個室・Wi-Fi・宿内の共用浴室・駐車場",
    "hotSpring": "近隣の日帰り温泉（車で約20分の想定）。入浴料・交通費は別途必要です。営業状況と送迎の可否は事前確認が必要です。"
  },
  {
    "id": 10,
    "price": 13500,
    "tokyo": 5,
    "osaka": 4,
    "interaction": "low",
    "capacity": 4,
    "image": "assets/dairy.png",
    "hotSpringType": "onsite",
    "themes": [
      "農業体験",
      "温泉",
      "地域の食事",
      "自然",
      "設備"
    ],
    "duration": [
      "1泊2日",
      "2泊3日"
    ],
    "diet": [
      "normal"
    ],
    "name": "牧場と温泉の宿 ゆふの草",
    "region": "大分県・由布",
    "kind": "酪農 · 乳牛",
    "caption": "乳牛が暮らす牧場を見学し、宿の温泉でのんびり過ごす滞在。",
    "story": "山の景色を眺めながら、牧場の朝を体験する休日。乳牛への餌やりや見学を通じて酪農を知り、宿の温泉と静かな時間を自分のペースで楽しめます。",
    "activity": "乳牛の餌やり・牧場見学・草原散歩（搾乳見学は要相談）",
    "meal": "夕朝食付き。乳製品を使う料理があります。アレルギー・食事制限は事前にご相談ください",
    "facility": "個室・Wi-Fi・宿内の共用温泉浴場・駐車場",
    "hotSpring": "宿内の共用温泉浴場（徒歩移動）。入浴料は表示料金に含む想定です。利用時間・設備の詳細は事前確認が必要です。"
  },
  {
    "id": 11,
    "price": 10800,
    "tokyo": 2,
    "osaka": 4,
    "interaction": "mid",
    "capacity": 5,
    "image": "assets/tea.png",
    "hotSpringType": "nearby",
    "themes": [
      "農業体験",
      "温泉",
      "地域の食事",
      "自然"
    ],
    "duration": [
      "日帰り",
      "1泊2日",
      "2泊3日"
    ],
    "diet": [
      "normal",
      "vegetarian"
    ],
    "name": "伊豆の茶農家宿 かおり",
    "region": "静岡県・伊豆",
    "kind": "茶栽培 · 茶葉",
    "caption": "茶畑でお茶づくりを学び、近隣の温泉で旅の疲れをほどく宿。",
    "story": "茶畑を歩き、お茶が食卓に届くまでを農家から学ぶ旅。お茶の淹れ方を楽しんだあとは、里山の散歩や近隣の温泉でゆっくり過ごせます。",
    "activity": "茶畑見学・季節の茶摘み・お茶淹れ体験",
    "meal": "夕朝食付き。日帰りは昼食付き。菜食への変更は事前にご相談ください",
    "facility": "和室・Wi-Fi・宿内の共用浴室・駐車場",
    "hotSpring": "近隣の日帰り温泉（車で約10分の想定）。入浴料・交通費は別途必要です。営業状況と送迎の可否は事前確認が必要です。"
  },
  {
    "id": 12,
    "price": 8900,
    "tokyo": 4,
    "osaka": 1.5,
    "interaction": "high",
    "capacity": 6,
    "image": "assets/cabbage.png",
    "hotSpringType": "nearby",
    "themes": [
      "農業体験",
      "温泉",
      "地域の食事",
      "自然",
      "地域の人との交流"
    ],
    "duration": [
      "日帰り",
      "1泊2日",
      "2泊3日"
    ],
    "diet": [
      "normal",
      "vegetarian"
    ],
    "name": "丹波の畑宿 まる葉",
    "region": "兵庫県・丹波",
    "kind": "畑作 · キャベツ",
    "caption": "キャベツ畑で収穫を体験し、農家の食卓と近隣の温泉を楽しむ宿。",
    "story": "緑のキャベツ畑で、農家と一緒に季節の仕事を体験。採れた野菜を囲む食卓で交流し、里山を歩いたり近隣の温泉に足を延ばしたりできます。",
    "activity": "キャベツ畑の見学・季節の収穫・地元野菜の料理づくり",
    "meal": "夕朝食付き。日帰りは昼食付き。菜食への変更は事前にご相談ください",
    "facility": "家族部屋・Wi-Fi・宿内の共用浴室・駐車場",
    "hotSpring": "近隣の日帰り温泉（車で約15分の想定）。入浴料・交通費は別途必要です。営業状況と送迎の可否は事前確認が必要です。"
  }
]);
let duration='1泊2日',selected=new Set(),onlyFavorites=false,active=false;let saved=[];try{saved=JSON.parse(localStorage.getItem('satoyado-favorites')||'[]')}catch{}let traveler={diet:'normal',interaction:'mid'};
$('#themes').innerHTML=themes.map(([name,icon,img])=>`<button class="theme" data-theme="${name}" aria-pressed="false"><img src="${img}" alt="" loading="lazy"><span>${name}</span></button>`).join('');
$('#themes').onclick=e=>{const b=e.target.closest('button');if(!b)return;const t=b.dataset.theme;selected.has(t)?selected.delete(t):selected.add(t);b.classList.toggle('selected',selected.has(t));b.setAttribute('aria-pressed',selected.has(t))};
$('#duration').onclick=e=>{const b=e.target.closest('button');if(!b)return;duration=b.dataset.value;$('#duration').querySelectorAll('button').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',x===b)})};
function filtered(){let list=farms.filter(f=>(!onlyFavorites||saved.includes(f.id))&&(!active||(f.duration.includes(duration)&&f[$('#origin').value==='東京'?'tokyo':'osaka']<=Number($('#travel').value)&&[...selected].every(t=>f.themes.includes(t))&&($('#interaction').value==='all'||f.interaction===$('#interaction').value))));if($('#sort').value==='price')list.sort((a,b)=>rate(a)-rate(b));return list}
const rate=f=>active&&duration==='日帰り'?Math.round(f.price*.45):f.price;
function render(){const list=filtered();$('#count').textContent=list.length+'件';$('#results-title').textContent=onlyFavorites?'お気に入りの農泊':active?'あなたの条件に合う農泊':'おすすめの農泊';$('#cards').innerHTML=list.length?list.map(f=>`<article class="stay"><div class="stay-img"><img src="${f.image}" alt="${f.kind}のイメージ画像" loading="lazy"><button class="save" data-save="${f.id}" aria-label="${f.name}をお気に入り${saved.includes(f.id)?'から削除':'に追加'}" aria-pressed="${saved.includes(f.id)}">${saved.includes(f.id)?'♥':'♡'}</button><span class="location-badge">⌖ ${f.region}</span></div><div class="stay-body">${f.hotSpring?`<p class="onsen-badge">${f.hotSpringType==='onsite'?'宿に温泉あり':'近隣の温泉を利用'}</p>`:''}<p class="farm-kind">${f.kind}</p><div class="tags">${f.themes.slice(0,3).map(t=>`<span>${t}</span>`).join('')}</div><h3>${f.name}</h3><p>${f.caption}</p><p>▱ ${$('#origin').value}から約${f[$('#origin').value==='東京'?'tokyo':'osaka']}時間 · ${({low:'自分のペース',mid:'ほどよい交流',high:'交流たっぷり'})[f.interaction]}</p><div class="stay-foot"><span class="price">${money(rate(f))}<small> / 人〜</small></span><button data-detail="${f.id}">詳しく見る ↗</button></div></div></article>`).join(''):'<div class="empty"><h3>この条件に合う農泊はありません</h3><p>テーマや移動時間の条件をゆるめて、もう一度探してみてください。</p><button class="button" onclick="resetFilters()">条件をリセット</button></div>'}
$('#cards').onclick=e=>{let b=e.target.closest('button');if(!b)return;if(b.dataset.save){let id=+b.dataset.save;saved=saved.includes(id)?saved.filter(x=>x!==id):[...saved,id];try{localStorage.setItem('satoyado-favorites',JSON.stringify(saved))}catch{}render();toast('お気に入りを更新しました')}if(b.dataset.detail)detail(+b.dataset.detail)};
$('#search-btn').onclick=()=>{active=true;onlyFavorites=false;render();$('#stays').scrollIntoView({behavior:'smooth'})};$('#sort').onchange=render;$('#favorites').onclick=()=>{onlyFavorites=!onlyFavorites;active=false;render();$('#stays').scrollIntoView({behavior:'smooth'})};function resetFilters(){duration='1泊2日';selected.clear();active=false;onlyFavorites=false;$('#travel').value='99';$('#interaction').value='all';$('#sort').value='recommend';$('#duration').querySelectorAll('button').forEach(b=>{b.classList.toggle('selected',b.dataset.value===duration);b.setAttribute('aria-pressed',b.dataset.value===duration)});$('#themes').querySelectorAll('button').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false')});render()}$('#reset').onclick=resetFilters;
const baseRender=render;render=function(){baseRender();localize($('#stays'))};
let returnFocus;function modal(html){returnFocus=document.activeElement;$('#modal-body').innerHTML=html;$('#modal').scrollTop=0;localize($('#modal-body'));if(!$('#modal').open)$('#modal').showModal()}$('#close').onclick=()=>$('#modal').close();$('#modal').addEventListener('close',()=>returnFocus?.focus());$('#modal').addEventListener('click',e=>{if(e.target===$('#modal')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});function toast(t){setLocalizedText($('#toast'),t);$('#toast').style.display='block';setTimeout(()=>$('#toast').style.display='none',2600)}
function detail(id){const f=farms.find(x=>x.id===id);modal(`<img class="modal-img" src="${f.image}" alt="${f.kind}のイメージ画像"><p class="eyebrow">${f.region} · ${f.kind} · サンプル施設</p><h2 class="modal-title">${f.name}</h2><p>${f.story}</p><div class="details"><p><b>体験内容</b><br>${f.activity}</p><p><b>食事</b><br>${f.meal}</p><p><b>設備</b><br>${f.facility}</p><p><b>アクセス目安</b><br>東京から約${f.tokyo}時間 / 大阪から約${f.osaka}時間<br>交通状況・交通手段により変動</p></div>${f.hotSpring?`<div class="hot-spring-panel"><img src="assets/onsen.png" alt="露天風呂のイメージ画像"><div><h3>${f.hotSpringType==='onsite'?'宿に温泉あり':'近隣の温泉を利用'}</h3><p>${f.hotSpring}</p></div></div>`:''}<p>受け入れ人数：最大${f.capacity}人 / 交流：${{high:'積極的に交流',mid:'ほどよい交流',low:'自分のペース'}[f.interaction]}</p><div class="notice">体験は季節や天候によって変わります。食事制限への対応は農家との事前確認が必要です。施設・写真はイメージです。</div><button class="button" id="book-start">日程・人数を選ぶ →</button>`);$('#book-start').onclick=()=>booking(f)}
const ageOptions=['回答しない','10代以下','20代','30代','40代','50代','60代','70代以上'];
const relationshipOptions=['回答しない','配偶者・パートナー','子ども','親','兄弟・姉妹','その他の親族','友人','同僚','その他'];
const escapeHTML=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const optionList=(values,chosen='')=>values.map(v=>`<option value="${escapeHTML(v)}" ${v===chosen?'selected':''}>${escapeHTML(v)}</option>`).join('');
function booking(f,draft={}){
 modal(`<span class="eyebrow">BOOK YOUR FARM STAY · DEMO</span><h2 class="modal-title">${f.name}の予約申込（デモ）</h2><p>日程と過ごし方を選んでください。</p><form id="book-form"><div class="form-grid">
 <label>チェックイン日<input id="date" type="date" min="2026-10-14" value="${escapeHTML(draft.date||'')}" required></label>
 <label>人数（大人・子ども共通のデモ料金）<select id="people">${Array.from({length:f.capacity},(_,i)=>`<option value="${i+1}" ${Number(draft.people||1)===i+1?'selected':''}>${i+1}人</option>`).join('')}</select></label>
 <label>滞在期間<select id="plan">${optionList(f.duration,draft.plan||duration)}</select></label>
 <label>交流の希望<select id="contact">${optionList(['ほどよく交流したい','たくさん交流したい','自分のペースで過ごしたい'],draft.contact||'ほどよく交流したい')}</select></label>
 <div class="full guest-section"><h3>予約者について（任意）</h3><p class="field-help">農家が受け入れ準備をするための情報です。回答しなくても申込できます。</p><div class="form-grid">
 <label>予約者の年代<select id="age">${optionList(ageOptions,draft.age||'回答しない')}</select></label>
 <label>国籍<select id="nationality-type">${optionList(['回答しない','日本国籍','外国籍'],draft.nationalityType||'回答しない')}</select></label>
 <label id="nationality-field" class="full" hidden>国籍名（外国籍の場合・任意）<input id="nationality" maxlength="80" value="${escapeHTML(draft.nationality||'')}" placeholder="例：イタリア、アメリカ"></label>
 </div></div><fieldset id="companions-section" class="full guest-section" hidden><legend>同行者の続柄（任意）</legend><p class="field-help">予約者から見た続柄を、同行者ごとに選べます。氏名の入力は不要です。</p><div id="companions" class="form-grid"></div></fieldset>
 <label class="full">食事や滞在中に配慮してほしいこと（任意）<textarea id="request" placeholder="デモです。実在する個人情報は入力しないでください。" maxlength="500">${escapeHTML(draft.request||'')}</textarea></label></div>
 <div class="total"><span>税込合計（デモ）</span><strong id="sum"></strong></div><p id="cost-note" class="demo-label"></p>
 <div class="notice">年代・国籍・続柄は受け入れ準備のための任意項目です。検索や相性診断の順位付けには使いません。このデモでは入力内容を保存・送信しません。</div>
 <div class="notice">空室を確認する機能は未接続です。実際の宿泊予約は成立しません。氏名・メール・決済情報は入力不要です。</div>
 <label class="check"><input type="checkbox" required><span>実際には送信されないデモ申込であることを確認しました。</span></label><button class="button" type="submit">申込内容を確認する →</button></form>`);
 let companionValues=draft.companions?[...draft.companions]:[];
 const syncCompanions=()=>{document.querySelectorAll('#companions select').forEach((x,i)=>companionValues[i]=x.value);const n=Number($('#people').value)-1;companionValues=companionValues.slice(0,n);$('#companions-section').hidden=n===0;$('#companions').innerHTML=Array.from({length:n},(_,i)=>`<label>同行者 ${i+1} の続柄<select data-companion="${i}">${optionList(relationshipOptions,companionValues[i]||'回答しない')}</select></label>`).join('');localize($('#companions'))};
 const syncNationality=()=>{const foreign=$('#nationality-type').value==='外国籍';$('#nationality-field').hidden=!foreign;$('#nationality').disabled=!foreign;if(!foreign)$('#nationality').value=''};
 const amount=()=>{const nights=$('#plan').value==='2泊3日'?2:1,base=$('#plan').value==='日帰り'?Math.round(f.price*.45):f.price;$('#sum').textContent=money(base*nights*Number($('#people').value));setLocalizedText($('#cost-note'),$('#plan').value==='日帰り'?'日帰り体験・昼食を含む想定料金':'宿泊・夕朝食・記載の体験を含む想定料金（交通費別）')};
 $('#plan').onchange=amount;$('#people').onchange=()=>{syncCompanions();amount()};$('#nationality-type').onchange=syncNationality;syncCompanions();syncNationality();amount();
 $('#book-form').onsubmit=e=>{e.preventDefault();const data={date:$('#date').value,people:Number($('#people').value),plan:$('#plan').value,contact:$('#contact').value,total:$('#sum').textContent,request:$('#request').value,age:$('#age').value,nationalityType:$('#nationality-type').value,nationality:$('#nationality-type').value==='外国籍'?$('#nationality').value.trim():'',companions:[...document.querySelectorAll('#companions select')].map(x=>x.value)};bookingConfirmation(f,data)};
}
function bookingConfirmation(f,data){
 modal(`<span class="eyebrow">CONFIRMATION · DEMO</span><h2 class="modal-title">申込内容の確認</h2><div class="details"><p><b>農泊先</b><br>${f.name}</p><p><b>日程・人数</b><br>${data.date} / ${data.plan} / ${data.people}人</p><p><b>交流の希望</b><br>${data.contact}</p><p><b>税込合計</b><br>${data.total}</p><p><b>予約者の年代</b><br>${data.age}</p><p><b>国籍</b><br><span id="nationality-summary"></span></p></div>${data.people>1?`<div class="guest-section"><h3>同行者の続柄</h3>${data.companions.map((r,i)=>`<p>同行者 ${i+1}：${r}</p>`).join('')}</div>`:''}<p id="confirm-request"></p><div class="notice">実際の運用では、農家による空室・対応可否の確認後に予約が確定します。このデモは農家へ送信されません。</div><button id="finish-book" class="button">デモ申込を完了する →</button> <button id="back-book" class="text-button">申込内容を修正する</button>`);
 setLocalizedText($('#nationality-summary'),data.nationalityType);
 if(data.nationalityType==='外国籍'){const extra=document.createElement('span');$('#nationality-summary').append(extra);if(data.nationality){extra.dataset.i18nIgnore='';extra.textContent=' ('+data.nationality+')'}else{setLocalizedText(extra,'（国籍名は未記入）')}}
 setLocalizedText($('#confirm-request'),'配慮してほしいこと：');const requestValue=document.createElement('span');$('#confirm-request').append(requestValue);if(data.request){requestValue.dataset.i18nIgnore='';requestValue.textContent=' '+data.request}else{setLocalizedText(requestValue,' 記載なし')}
 $('#back-book').onclick=()=>booking(f,data);$('#finish-book').onclick=()=>modal(`<span class="eyebrow">THANK YOU</span><h2 class="success">予約申込のデモが完了しました。</h2><p>${f.name} / ${data.date} / ${data.people}人</p><div class="notice">予約申込のデモが完了しました。実際の予約は成立していません。申込内容は保存・送信されていません。</div><button class="button" onclick="document.querySelector('#modal').close()">農泊探しに戻る →</button>`);
}
function profile(match=false){modal(`<span class="eyebrow">YOUR PERSONAL JOURNEY</span><h2 class="modal-title">${match?'あなたに合う農泊を探す':'旅のプロフィール'}</h2><p>入力はすべて任意です。ご希望に合った農泊をご案内します。</p><form id="profile-form"><div class="form-grid"><label>食事の希望<select id="diet"><option value="normal">特に指定しない</option><option value="vegetarian" ${traveler.diet==='vegetarian'?'selected':''}>野菜中心・菜食の相談をしたい</option></select></label><label>交流の希望<select id="pref-interaction"><option value="mid">ほどよく交流したい</option><option value="high" ${traveler.interaction==='high'?'selected':''}>たくさん交流したい</option><option value="low" ${traveler.interaction==='low'?'selected':''}>自分のペースで過ごしたい</option></select></label><label class="full">アレルギー・食事制限（任意）<textarea placeholder="本番では本人の同意のもと農家に共有します。デモには個人情報を入力しないでください。"></textarea></label></div><div class="notice">プロフィールはこのページを開いている間だけ保持され、送信・永続保存されません。宗教・性別・国籍などは順位付けに使用しません。食事の安全性は、この診断で保証されません。</div><button class="button">${match?'相性のよい農泊を見る':'希望を反映する'} →</button> <button type="button" id="delete-profile" class="text-button">プロフィールをリセット</button></form>`);$('#delete-profile').onclick=()=>{traveler={diet:'normal',interaction:'mid'};$('#modal').close();toast('プロフィールをリセットしました')};$('#profile-form').onsubmit=e=>{e.preventDefault();traveler={diet:$('#diet').value,interaction:$('#pref-interaction').value};if(!match){$('#modal').close();toast('プロフィールを更新しました');return}let best=farms.map(f=>({f,score:(f.interaction===traveler.interaction?3:0)+(f.diet.includes(traveler.diet)?2:0)+[...selected].filter(t=>f.themes.includes(t)).length})).sort((a,b)=>b.score-a.score).slice(0,3);modal(`<span class="eyebrow">MATCHING RESULTS · DEMO</span><h2 class="modal-title">あなたの旅に合いそうな農泊</h2><p>交流や食事の希望、選択したテーマをもとにおすすめしています。生成AIへの送信はありません。</p>${best.map(({f})=>`<div class="match-result"><h3>${f.name}</h3><p>${f.interaction===traveler.interaction?'✓ 交流の希望に合います':'交流の希望は事前に相談できます'}<br>${f.diet.includes(traveler.diet)?'✓ 食事の希望を事前に相談できます':'食事対応は事前確認が必要です'}</p><button class="button" onclick="detail(${f.id})">農泊先を見る ↗</button></div>`).join('')}`)}}$('#profile').onclick=()=>profile();$('#match').onclick=()=>profile(true);
const products=[{name:'採れたて旬の野菜セット',origin:'南房総・はるの音',price:2800,img:images.food,shipping:800},{name:'里山の新米 3kg',origin:'高島・地域の米農家',price:2400,img:images.field,shipping:700},{name:'農家の季節のお茶',origin:'山添・ふた葉',price:1600,img:images.tea,shipping:400}];$('#products').innerHTML=products.map((p,i)=>`<article class="product"><img src="${p.img}" alt="${p.name}のイメージ" loading="lazy"><div><small>${p.origin}</small><h3>${p.name}</h3><p>${money(p.price)} <small>税込・送料別</small></p><button data-product="${i}">農家を応援する ↗</button></div></article>`).join('');$('#products').onclick=e=>{const b=e.target.closest('button');if(!b)return;const p=products[+b.dataset.product];modal(`<span class="eyebrow">SUPPORT YOUR FARMER · DEMO</span><h2 class="modal-title">${p.name}</h2><p>${p.origin}から届く、旬の農産物。</p><form id="order"><label>数量<select id="quantity">${[1,2,3].map(n=>`<option value="${n}">${n}点</option>`).join('')}</select></label><div class="total"><span>税込合計・送料込み</span><strong id="order-total"></strong></div><p>送料：${money(p.shipping)} / 配送先入力・決済はありません。</p><div class="notice">農産物購入のデモです。実際の注文・請求・配送は行われません。</div><label class="check"><input type="checkbox" required><span>デモ注文であることを確認しました。</span></label><button class="button">デモ注文を確認する →</button></form>`);const calc=()=>$('#order-total').textContent=money(p.price*Number($('#quantity').value)+p.shipping);$('#quantity').onchange=calc;calc();$('#order').onsubmit=e=>{e.preventDefault();modal(`<h2 class="success">農産物の注文デモが完了しました。</h2><p>${p.name}</p><div class="notice">デモ注文完了。実際の注文は成立していません。</div>`)} };
$('#host').onclick=()=>{modal(`<span class="eyebrow">FOR FARMERS</span><h2 class="modal-title">あなたの暮らしが、旅になる。</h2><p>提供できる体験や食事、設備、交流のスタイルを登録できます。</p><form id="host-form"><div class="form-grid"><label>施設名（サンプル）<input required maxlength="80" placeholder="例：里山の農家宿"></label><label>地域<input required maxlength="80" placeholder="例：長野県・安曇野"></label><label>受け入れ可能人数<input type="number" min="1" max="30" required></label><label>交流のスタイル<select><option>ほどよく交流</option><option>積極的に交流</option><option>滞在者のペースを尊重</option></select></label><label class="full">体験・食事・生活環境<textarea required maxlength="500" placeholder="対応できる食事制限や設備も記載"></textarea></label></div><div class="notice">登録のデモです。入力内容は保存・送信されません。受け入れ条件は安全・設備・体験対応に基づき設定します。</div><button class="button">登録内容を確認する →</button></form>`);$('#host-form').onsubmit=e=>{e.preventDefault();modal('<h2 class="success">農家登録のデモが完了しました。</h2><div class="notice">デモのため、掲載・保存・送信は行われていません。</div>')}};
$('#sns').onclick=()=>modal('<span class="eyebrow">SOCIAL JOURNAL</span><h2 class="modal-title">農泊の一日を、短い動画に。</h2><p>朝の収穫、採れたての料理、星空。体験者が撮った動画を、許可を得てInstagramのリールで紹介する発信プランです。</p><div class="details"><p><b>01 朝の畑</b><br>収穫の手触りと、農家の声</p><p><b>02 旬の食卓</b><br>土地の食材で作る夕ごはん</p><p><b>03 夜の風景</b><br>星空や静かな里山の時間</p><p><b>04 旅の記録</b><br>setlogなどの体験記録を紹介</p></div><div class="notice">公式アカウントは未開設です。実運用では投稿者・映り込む人の同意を得て紹介します。</div>');render();
