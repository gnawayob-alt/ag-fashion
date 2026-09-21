(function(){
  "use strict";

  /* ================== الإعدادات (عدّلها بسهولة) ================== */
  var CURRENCY = "MAD";
  var SITE_URL = "https://www.example.com/";
  var WHATSAPP = "212715051217";   // 0715051217 بالصيغة الدولية
  var INSTAGRAM = "AYOUBGNAW10";

  var CATS = [
    {id:"tee",    name:"تيشيرتات",   color:"#123B6D", icon:'<path d="M8 4 3 7l2 4 3-1v10h8V10l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>'},
    {id:"pants",  name:"سراويل",     color:"#1E6A34", icon:'<path d="M7 3h10l1 18h-4l-2-10-2 10H6z"/>'},
    {id:"jacket", name:"جاكيتات",    color:"#8B1D24", icon:'<path d="M9 3 4 6v14h5V8m6-5 5 3v14h-5V8M9 3h6M12 8v12"/>'},
    {id:"shoes",  name:"أحذية",      color:"#6B3F1A", icon:'<path d="M2 17v-4l6-1 3-4 2 3 6 2a3 3 0 0 1 3 3v1z"/>'},
    {id:"acc",    name:"إكسسوارات",  color:"#4B2A78", icon:'<path d="M4 15a8 8 0 0 1 16 0zM2 15h20l-1 2H3zM12 7V4"/>'}
  ];
  var C = {
    black:{n:"أسود",h:"#15171A"}, white:{n:"أبيض",h:"#FFFFFF"}, gray:{n:"رمادي",h:"#9A9CA1"},
    navy:{n:"كحلي",h:"#14245A"}, green:{n:"أخضر",h:"#1B5E3B"}, beige:{n:"بيج",h:"#E0CFAE"},
    blue:{n:"أزرق",h:"#0E4FA0"}, red:{n:"أحمر",h:"#C2202B"}, brown:{n:"بني",h:"#5B3A21"}
  };
  var CL = ["S","M","L","XL","XXL"], JEANS = ["28","30","32","34","36"], SHOE = ["40","41","42","43","44","45"], ONE = ["مقاس واحد"];

  /* المنتجات: عدّل الأسعار والأسماء والألوان من هنا */
  var P = [
    {id:"T-001",cat:"tee",name:"تيشيرت Nike كلاسيك",price:149,sizes:CL,colors:["black","white","gray","navy"],desc:"تيشيرت كلاسيكي بقصّة مريحة للاستعمال اليومي."},
    {id:"T-002",cat:"tee",name:"تيشيرت Adidas Originals",price:159,sizes:CL,colors:["black","white","gray","navy","green"],desc:"تيشيرت بشعار بارز وقصّة مريحة."},
    {id:"T-003",cat:"tee",name:"تيشيرت تصميم عصري",price:129,sizes:CL,colors:["beige","white","black","green"],desc:"تيشيرت بطبعة عصرية على الصدر."},
    {id:"T-004",cat:"tee",name:"تيشيرت بولو",price:179,sizes:CL,colors:["navy","white","gray","red"],desc:"بولو بياقة كلاسيكية يناسب الخروج والعمل."},
    {id:"P-001",cat:"pants",name:"سروال رياضي Nike",price:199,sizes:CL,colors:["black","white","gray"],desc:"سروال رياضي بخصر مطاطي وأطراف ضيقة."},
    {id:"P-002",cat:"pants",name:"سروال كارجو",price:219,sizes:CL,colors:["gray","green","beige"],desc:"سروال كارجو بجيوب جانبية عملية."},
    {id:"P-003",cat:"pants",name:"سروال جينز كلاسيك",price:179,sizes:JEANS,colors:["blue","gray","black"],desc:"جينز كلاسيكي بقصّة مستقيمة."},
    {id:"P-004",cat:"pants",name:"سروال رياضي Adidas",price:199,sizes:CL,colors:["black","gray","navy"],desc:"سروال رياضي بخطوط جانبية مميزة."},
    {id:"J-001",cat:"jacket",name:"جاكيت The North Face",price:399,sizes:CL,colors:["black","gray","beige","green"],desc:"جاكيت منفوخ دافئ لأيام البرد."},
    {id:"J-002",cat:"jacket",name:"جاكيت Nike",price:349,sizes:CL,colors:["black","gray"],desc:"جاكيت بقبعة وقصّة رياضية عملية."},
    {id:"J-003",cat:"jacket",name:"جاكيت جينز",price:299,sizes:CL,colors:["blue","black","gray"],desc:"جاكيت جينز بطبقة داخلية دافئة."},
    {id:"J-004",cat:"jacket",name:"جاكيت خفيف",price:249,sizes:CL,colors:["beige","green","black"],desc:"جاكيت خفيف بقبعة للمواسم المعتدلة."},
    {id:"S-001",cat:"shoes",name:"حذاء رياضي Nike",price:299,sizes:SHOE,colors:["white","black","gray"],desc:"حذاء رياضي بتصميم كلاسيكي مريح."},
    {id:"S-002",cat:"shoes",name:"حذاء Adidas",price:279,sizes:SHOE,colors:["gray","black","white"],desc:"حذاء بخطوط جانبية ونعل سميك."},
    {id:"S-003",cat:"shoes",name:"حذاء كاجوال",price:249,sizes:SHOE,colors:["gray","black","white"],desc:"حذاء كاجوال بتصميم رياضي عصري."},
    {id:"S-004",cat:"shoes",name:"حذاء بوت",price:329,sizes:SHOE,colors:["black","gray","brown"],desc:"حذاء بوت بربط أمامي ونعل قوي."},
    {id:"A-001",cat:"acc",name:"كاب",price:79,sizes:ONE,colors:["black","gray","navy","white"],desc:"كاب بمقاس قابل للتعديل."},
    {id:"A-002",cat:"acc",name:"نظارة شمسية",price:99,sizes:ONE,colors:["black","white"],desc:"نظارة شمسية بإطار كلاسيكي."},
    {id:"A-003",cat:"acc",name:"حقيبة ظهر",price:149,sizes:ONE,colors:["black","gray","navy"],desc:"حقيبة ظهر عملية للدراسة والسفر."},
    {id:"A-004",cat:"acc",name:"حزام جلد",price:89,sizes:ONE,colors:["black","brown"],desc:"حزام جلد بإبزيم معدني."}
  ];
  var FAQ = [
    ["هل التوصيل متوفر لكل المدن؟","نعم، نوفّر توصيلًا سريعًا لكل المدن. تُحدَّد مدة التوصيل وتكلفته عند تأكيد الطلب."],
    ["هل يمكنني إرجاع المنتج؟","نعم، يمكنك إرجاع المنتج خلال 7 أيام من الاستلام."],
    ["كيف أعرف مقاسي؟","استخدم جدول المقاسات في هذه الصفحة: يعتمد على محيط الصدر بالسنتيمتر. الأحذية من 40 إلى 45، وسروال الجينز من 28 إلى 36."],
    ["ما طرق الدفع المتاحة؟","الدفع عند الاستلام أو بالبطاقة البنكية."],
    ["هل يمكنني الطلب عبر واتساب؟","نعم، اضغط «اطلب عبر واتساب» في صفحة المنتج أو السلة وستصل رسالتك جاهزة، أو راسلنا مباشرة على 0715051217."],
    ["هل الألوان المذكورة متوفرة لكل مقاس؟","الألوان المعروضة في صفحة كل منتج هي المتاحة له. وفي حال نفاد لون أو مقاس نتواصل معك قبل الشحن."]
  ];

  /* ================== دوال مساعدة ================== */
  var $ = function(s,r){return (r||document).querySelector(s)};
  var $$ = function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
  var fmt = function(n){return '<bdi dir="ltr">'+n.toLocaleString("en-US")+"\u00A0"+CURRENCY+"</bdi>"};
  var esc = function(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
  var byId = function(id){return P.filter(function(p){return p.id===id})[0]};
  var catOf = function(id){return CATS.filter(function(c){return c.id===id})[0]};
  var img = function(p){return "images/"+p.id+".jpg"};
  var store = function(k,v){try{if(v===undefined){var r=localStorage.getItem(k);return r?JSON.parse(r):null}localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}};
  var dot = function(k,size){return '<span class="dot" title="'+C[k].n+'" style="background:'+C[k].h+(size?';width:'+size+'px;height:'+size+'px':'')+'"></span>'};

  var waLink = function(t){return "https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(t)};
  function waProduct(p){
    var t="مرحبًا، أريد طلب:\n"+p.name+" ("+p.id+")\nالسعر: "+p.price+" "+CURRENCY;
    if(sel.color!==undefined) t+="\nاللون: "+C[p.colors[sel.color]].n;
    if(sel.size&&sel.size!==ONE[0]) t+="\nالمقاس: "+sel.size;
    return waLink(t);
  }
  function waCart(){
    var t="مرحبًا، أريد طلب:\n"+cart.map(function(l){var p=byId(l.id);return "• "+p.name+" ("+p.id+") – "+C[l.color].n+(l.size!==ONE[0]?" – "+l.size:"")+" × "+l.qty}).join("\n")+"\nالمجموع: "+subtotal()+" "+CURRENCY;
    return waLink(t);
  }
  var state = {cat:"all",q:"",sort:"def"};
  var cart = store("ag_cart")||[];
  var wish = store("ag_wish")||[];

  /* ================== الصفحة الرئيسية ================== */
  $("#heroTiles").innerHTML = ["J-001","T-002","S-002","P-003"].map(function(id){
    var p=byId(id),c=catOf(p.cat);
    return '<button class="tile" data-open="'+id+'" style="--c:'+c.color+'" aria-label="'+esc(p.name)+'"><img src="'+img(p)+'" width="300" height="360" alt="'+esc(p.name)+'"><span>'+esc(p.name)+'<b>'+fmt(p.price)+'</b></span></button>';
  }).join("");

  $("#cats").innerHTML = CATS.map(function(c){
    var first=P.filter(function(p){return p.cat===c.id})[0],n=P.filter(function(p){return p.cat===c.id}).length;
    return '<button class="cat" data-cat="'+c.id+'" style="--c:'+c.color+'"><img src="'+img(first)+'" width="300" height="360" alt="" loading="lazy"><span>'+c.name+'<small>'+n+' منتجات</small></span></button>';
  }).join("");

  $("#swatches").innerHTML = ["black","white","gray","navy","green","beige","blue","red"].map(function(k){
    return '<li><i style="background:'+C[k].h+'"></i>'+C[k].n+'</li>';
  }).join("");

  $("#faqList").innerHTML = FAQ.map(function(f){return '<details><summary>'+f[0]+'</summary><p>'+f[1]+'</p></details>'}).join("");

  /* الكتالوج الكامل */
  var catImg=$("#catImg");
  function openZoom(){$("#zoomImg").src=catImg.src;openDlg($("#zoomDlg"))}
  $("#zoomBtn").addEventListener("click",openZoom);
  catImg.addEventListener("click",openZoom);
  $("#dlBtn").href=catImg.src;

  /* ================== المتجر ================== */
  function renderChips(){
    var all=[{id:"all",name:"الكل"}].concat(CATS);
    $("#chips").innerHTML = all.map(function(c){return '<button class="chip" data-cat="'+c.id+'" aria-pressed="'+(state.cat===c.id)+'">'+c.name+'</button>'}).join("");
  }
  function renderCard(p){
    var c=catOf(p.cat),w=wish.indexOf(p.id)>-1;
    return '<li class="card" id="p-'+p.id+'" style="--c:'+c.color+'">'+
      '<button class="icon-btn heart" data-wish="'+p.id+'" aria-pressed="'+w+'" aria-label="'+(w?'إزالة':'إضافة')+' '+esc(p.name)+' '+(w?'من':'إلى')+' المفضلة"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>'+
      '<button class="frame" data-open="'+p.id+'" aria-label="عرض '+esc(p.name)+'"><img src="'+img(p)+'" width="300" height="360" loading="lazy" alt="'+esc(p.name)+' – '+p.id+'"></button>'+
      '<p class="code">'+p.id+'</p>'+
      '<h3><a href="#p-'+p.id+'" data-open="'+p.id+'">'+esc(p.name)+'</a></h3>'+
      '<span class="pill">'+fmt(p.price)+'</span>'+
      '<p class="sizes">المقاسات: '+(p.sizes===ONE?'مقاس واحد':p.sizes.join(" - "))+'</p>'+
      '<div class="dots" aria-label="الألوان المتوفرة">'+p.colors.map(function(k){return dot(k)}).join("")+'</div>'+
    '</li>';
  }
  function renderShop(){
    var q=state.q.trim().toLowerCase(),total=0,html="";
    CATS.forEach(function(c){
      if(state.cat!=="all"&&state.cat!==c.id) return;
      var r=P.filter(function(p){return p.cat===c.id&&(!q||(p.name+" "+p.id+" "+p.desc).toLowerCase().indexOf(q)>-1)});
      if(!r.length) return;
      if(state.sort==="low") r.sort(function(a,b){return a.price-b.price});
      if(state.sort==="high") r.sort(function(a,b){return b.price-a.price});
      total+=r.length;
      html+='<section class="block" style="--c:'+c.color+';padding:0" aria-labelledby="h-'+c.id+'">'+
        '<div class="cat-head"><svg viewBox="0 0 24 24" aria-hidden="true">'+c.icon+'</svg><h3 id="h-'+c.id+'">'+c.name+'</h3><span>'+r.length+' منتجات</span></div>'+
        '<ul class="grid">'+r.map(renderCard).join("")+'</ul></section>';
    });
    $("#catalogList").innerHTML=html;
    $("#results").textContent=total+" منتج";
    $("#empty").hidden=total>0;
  }
  function renderAll(){renderChips();renderShop()}

  function updateCounts(){
    var n=cart.reduce(function(a,l){return a+l.qty},0);
    var c=$("#cartCount");c.textContent=n;c.hidden=!n;
    var w=$("#wishCount");w.textContent=wish.length;w.hidden=!wish.length;
  }
  var tt;
  function toast(m){var t=$("#toast");$("div",t).textContent=m;t.classList.add("show");clearTimeout(tt);tt=setTimeout(function(){t.classList.remove("show")},2400)}

  /* ================== النوافذ ================== */
  var lastFocus=null;
  function openDlg(d){lastFocus=document.activeElement;if(!d.open)d.showModal()}
  $$("dialog").forEach(function(d){
    d.addEventListener("click",function(e){if(e.target===d||e.target.closest("[data-close]"))d.close()});
    d.addEventListener("close",function(){if(lastFocus&&document.contains(lastFocus)){try{lastFocus.focus()}catch(e){}}});
  });

  /* صفحة المنتج */
  var sel={id:null,color:0,size:null};
  function openPdp(id){
    var p=byId(id);if(!p)return;
    sel={id:id,color:0,size:p.sizes===ONE?ONE[0]:null};
    renderPdp();openDlg($("#pdpDlg"));
    try{history.replaceState(null,"","#p-"+id)}catch(e){}
    document.title=p.name+" | A.G Fashion";
  }
  function renderPdp(){
    var p=byId(sel.id),c=catOf(p.cat);
    var lbl=p.cat==="shoes"?"المقاس (EU)":"المقاس";
    var sizeBlock=p.sizes===ONE?'':
      '<fieldset class="opt"><legend>'+lbl+'</legend><div class="opts">'+
      p.sizes.map(function(s){return '<button class="sw" data-size="'+esc(s)+'" aria-pressed="'+(sel.size===s)+'">'+esc(s)+'</button>'}).join("")+
      '</div><a href="#sizes" data-close-link style="display:inline-block;margin-top:8px;text-decoration:underline">دليل المقاسات</a></fieldset>';
    $("#pdpBody").innerHTML=
      '<div class="pic"><img src="'+img(p)+'" width="600" height="720" alt="'+esc(p.name)+' – '+p.id+'"></div>'+
      '<div style="--c:'+c.color+'">'+
        '<p class="code">'+p.id+' · '+c.name+'</p>'+
        '<h2 id="pdpTitle">'+esc(p.name)+'</h2>'+
        '<span class="pill">'+fmt(p.price)+'</span>'+
        '<p class="desc">'+esc(p.desc)+'</p>'+
        '<fieldset class="opt"><legend>اللون: <span style="font-weight:400">'+C[p.colors[sel.color]].n+'</span></legend><div class="opts">'+
          p.colors.map(function(k,i){return '<button class="sw color" data-color="'+i+'" aria-pressed="'+(i===sel.color)+'">'+dot(k,18)+C[k].n+'</button>'}).join("")+
        '</div></fieldset>'+
        sizeBlock+
        '<p class="err" id="pdpErr" role="alert"></p>'+
        '<button class="btn block" id="addBtn">أضف إلى السلة</button>'+
        '<a class="btn ghost block" style="margin-top:10px" target="_blank" rel="noopener" href="'+esc(waProduct(p))+'">اطلب عبر واتساب</a>'+
        '<ul class="specs"><li>توصيل سريع لكل المدن</li><li>جودة عالية ومضمونة</li><li>إمكانية الإرجاع خلال 7 أيام</li></ul>'+
      '</div>';
  }
  $("#pdpDlg").addEventListener("click",function(e){
    var t=e.target.closest("button,a");if(!t)return;
    if(t.dataset.color!==undefined){sel.color=+t.dataset.color;renderPdp();var b=$('[data-color="'+sel.color+'"]');if(b)b.focus()}
    else if(t.dataset.size!==undefined){sel.size=t.dataset.size;renderPdp();var b2=$('[data-size="'+sel.size+'"]');if(b2)b2.focus()}
    else if(t.id==="addBtn"){
      if(!sel.size){$("#pdpErr").textContent="اختر المقاس قبل الإضافة إلى السلة.";return}
      addToCart(sel.id,sel.size,sel.color);$("#pdpDlg").close();
    } else if(t.hasAttribute("data-close-link")){$("#pdpDlg").close()}
  });
  $("#pdpDlg").addEventListener("close",function(){
    document.title="A.G Fashion | تيشيرتات، سراويل، جاكيتات وأحذية بأسعار مناسبة";
    try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}
  });

  /* ================== السلة ================== */
  function addToCart(id,size,ci){
    var col=byId(id).colors[ci];
    var l=cart.filter(function(x){return x.id===id&&x.size===size&&x.color===col})[0];
    if(l) l.qty=Math.min(10,l.qty+1); else cart.push({id:id,size:size,color:col,qty:1});
    store("ag_cart",cart);updateCounts();renderCart();toast("أُضيف إلى السلة");
  }
  function subtotal(){return cart.reduce(function(a,l){return a+byId(l.id).price*l.qty},0)}
  function renderCart(){
    var b=$("#cartBody"),f=$("#cartFoot");
    if(!cart.length){
      b.innerHTML='<div class="empty"><p>سلتك فارغة.</p><p style="margin-top:8px">ابدأ باختيار قطعة تعجبك.</p></div>';
      f.innerHTML='<button class="btn block" data-close-go="#shop">تصفّح المنتجات</button>';return;
    }
    b.innerHTML=cart.map(function(l,i){
      var p=byId(l.id);
      return '<div class="line"><img src="'+img(p)+'" alt="'+esc(p.name)+'">'+
        '<div><h3>'+esc(p.name)+'</h3><small>'+p.id+' · '+C[l.color].n+(l.size!==ONE[0]?' · '+esc(l.size):'')+'</small>'+
        '<div class="qty" role="group" aria-label="الكمية"><button data-dec="'+i+'" aria-label="إنقاص الكمية">−</button><span aria-live="polite">'+l.qty+'</span><button data-inc="'+i+'" aria-label="زيادة الكمية">+</button></div></div>'+
        '<div style="text-align:end"><strong>'+fmt(p.price*l.qty)+'</strong><br><button class="link" data-rm="'+i+'">حذف</button></div></div>';
    }).join("");
    f.innerHTML='<div class="sum"><div><span>المجموع</span><span>'+fmt(subtotal())+'</span></div><div><span>التوصيل</span><span>يُحدَّد عند التأكيد</span></div><div class="total"><span>الإجمالي</span><span>'+fmt(subtotal())+'</span></div></div>'+
      '<button class="btn block" id="toCheckout">متابعة إتمام الطلب</button>'+
      '<a class="btn ghost block" style="margin-top:10px" target="_blank" rel="noopener" href="'+esc(waCart())+'">اطلب عبر واتساب</a>';
  }
  $("#cartDlg").addEventListener("click",function(e){
    var t=e.target.closest("button");if(!t)return;
    var d=t.dataset;
    if(d.inc!==undefined){cart[+d.inc].qty=Math.min(10,cart[+d.inc].qty+1)}
    else if(d.dec!==undefined){cart[+d.dec].qty--;if(cart[+d.dec].qty<1)cart.splice(+d.dec,1)}
    else if(d.rm!==undefined){cart.splice(+d.rm,1)}
    else if(d.closeGo){$("#cartDlg").close();location.hash=d.closeGo;return}
    else if(t.id==="toCheckout"){$("#cartDlg").close();renderCheckout();openDlg($("#coDlg"));return}
    else return;
    store("ag_cart",cart);updateCounts();renderCart();
  });

  /* ================== إتمام الطلب (تجريبي) ================== */
  function renderCheckout(){
    $("#coBody").innerHTML=
      '<div class="checkout"><form class="form" id="coForm" novalidate>'+
        '<label>الاسم الكامل<input name="name" autocomplete="name" required></label>'+
        '<div class="row"><label>رقم الهاتف<input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="06xxxxxxxx" required></label>'+
        '<label>المدينة<input name="city" autocomplete="address-level2" required></label></div>'+
        '<label>العنوان<textarea name="address" rows="2" autocomplete="street-address" required></textarea></label>'+
        '<fieldset style="border:0;padding:0;margin:0;display:grid;gap:8px"><legend style="font-weight:700;margin-bottom:6px;padding:0">طريقة الدفع</legend>'+
          '<label class="radio"><input type="radio" name="pay" value="cod" checked> الدفع عند الاستلام</label>'+
          '<label class="radio"><input type="radio" name="pay" value="card"> بطاقة بنكية</label></fieldset>'+
        '<p class="err" id="coErr" role="alert"></p>'+
        '<button class="btn block" type="submit">تأكيد الطلب · '+fmt(subtotal())+'</button>'+
        '<p style="color:var(--muted);font-size:.9rem">نسخة تجريبية: لا تُنفَّذ عملية دفع فعلية.</p>'+
      '</form>'+
      '<aside aria-label="ملخص الطلب"><h3 style="margin-bottom:10px">ملخص الطلب</h3>'+
        cart.map(function(l){var p=byId(l.id);return '<div style="display:flex;justify-content:space-between;gap:8px;padding:6px 0"><span>'+esc(p.name)+' × '+l.qty+'</span><span>'+fmt(p.price*l.qty)+'</span></div>'}).join("")+
        '<div class="sum" style="margin-top:10px"><div class="total"><span>الإجمالي</span><span>'+fmt(subtotal())+'</span></div></div></aside></div>';
  }
  $("#coDlg").addEventListener("submit",function(e){
    e.preventDefault();
    var f=e.target,v=function(n){return f.elements[n].value.trim()},err=$("#coErr");
    if(!v("name")||!v("city")||!v("address")){err.textContent="أكمل الاسم والمدينة والعنوان.";return}
    if(!/^(?:\+212|00212|0)[5-7]\d{8}$/.test(v("phone").replace(/[\s-]/g,""))){err.textContent="أدخل رقم هاتف صحيحًا مثل 0612345678.";f.elements.phone.focus();return}
    var no="AG-"+Math.floor(100000+Math.random()*900000);
    var orderMsg="طلب جديد 🛍️ رقم "+no+"\n\nالاسم: "+v("name")+"\nالهاتف: "+v("phone")+"\nالمدينة: "+v("city")+"\nالعنوان: "+v("address")+"\nالدفع: "+(f.elements.pay.value==="card"?"بطاقة بنكية":"الدفع عند الاستلام")+"\n\nالمنتجات:\n"+cart.map(function(l){var p=byId(l.id);return "• "+p.name+" ("+p.id+") – "+C[l.color].n+(l.size!==ONE[0]?" – "+l.size:"")+" × "+l.qty+" = "+(p.price*l.qty)+" "+CURRENCY}).join("\n")+"\n\nالمجموع: "+subtotal()+" "+CURRENCY;
    window.open(waLink(orderMsg),"_blank");
    cart=[];store("ag_cart",cart);updateCounts();renderCart();
    $("#coBody").innerHTML='<div class="done"><div class="tick" aria-hidden="true">✓</div><h3 style="font-size:1.6rem">تم استلام طلبك</h3><p>رقم الطلب <strong>'+no+'</strong>. سنتصل بك على '+esc(v("phone"))+' لتأكيد التوصيل.</p><button class="btn" data-close>متابعة التسوق</button></div>';
  });

  /* ================== المفضلة ================== */
  function toggleWish(id){
    var i=wish.indexOf(id);
    if(i>-1){wish.splice(i,1);toast("أُزيل من المفضلة")}else{wish.push(id);toast("أُضيف إلى المفضلة")}
    store("ag_wish",wish);updateCounts();renderShop();
    var b=$('[data-wish="'+id+'"]');if(b)b.focus();
  }

  /* ================== الأحداث ================== */
  document.addEventListener("click",function(e){
    var t=e.target.closest("[data-cat],[data-open],[data-wish]");if(!t)return;
    if(t.dataset.cat){state.cat=t.dataset.cat;renderAll();if(t.classList.contains("cat")){location.hash="#shop"}}
    else if(t.dataset.open){e.preventDefault();openPdp(t.dataset.open)}
    else if(t.dataset.wish){toggleWish(t.dataset.wish)}
  });
  $("#q").addEventListener("input",function(e){state.q=e.target.value;renderShop()});
  $("#sort").addEventListener("change",function(e){state.sort=e.target.value;renderShop()});
  $("#resetBtn").addEventListener("click",function(){state.cat="all";state.q="";$("#q").value="";renderAll()});
  $("#searchBtn").addEventListener("click",function(){location.hash="#shop";setTimeout(function(){$("#q").focus()},300)});
  $("#wishBtn").addEventListener("click",function(){
    if(!wish.length){toast("لم تضف منتجات إلى المفضلة بعد");return}
    $("#coBody").innerHTML='<div style="padding:20px"><ul style="list-style:none;margin:0;padding:0">'+wish.map(function(id){var p=byId(id);return '<li style="border-bottom:1px solid var(--line)"><button class="link" style="text-decoration:none;text-align:start" data-open="'+id+'">'+esc(p.name)+' – '+fmt(p.price)+'</button></li>'}).join("")+'</ul></div>';
    $("#coTitle").textContent="المفضلة";openDlg($("#coDlg"));
  });
  $("#coDlg").addEventListener("close",function(){$("#coTitle").textContent="إتمام الطلب"});
  $("#coDlg").addEventListener("click",function(e){var o=e.target.closest("[data-open]");if(o){$("#coDlg").close();openPdp(o.dataset.open)}});
  $("#cartBtn").addEventListener("click",function(){renderCart();openDlg($("#cartDlg"))});

  var mb=$("#menuBtn"),nav=$("#nav");
  mb.addEventListener("click",function(){var o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
  nav.addEventListener("click",function(e){if(e.target.tagName==="A"){nav.classList.remove("open");mb.setAttribute("aria-expanded","false")}});

  $("#newsForm").addEventListener("submit",function(e){
    e.preventDefault();
    var v=$("#newsEmail").value.trim(),m=$("#newsMsg");
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)){m.textContent="أدخل بريدًا إلكترونيًا صحيحًا مثل name@email.com";return}
    m.textContent="تم الاشتراك بنجاح.";e.target.reset();
  });

  /* ================== SEO: البيانات المنظّمة ================== */
  function jsonld(o){var s=document.createElement("script");s.type="application/ld+json";s.textContent=JSON.stringify(o);document.head.appendChild(s)}
  jsonld({"@context":"https://schema.org","@type":"FAQPage","mainEntity":FAQ.map(function(f){return {"@type":"Question","name":f[0],"acceptedAnswer":{"@type":"Answer","text":f[1]}}})});
  jsonld({"@context":"https://schema.org","@type":"ItemList","itemListElement":P.map(function(p,i){
    return {"@type":"ListItem","position":i+1,"item":{"@type":"Product","sku":p.id,"name":p.name,"description":p.desc,"category":catOf(p.cat).name,
      "image":SITE_URL+img(p),"color":p.colors.map(function(k){return C[k].n}).join("، "),
      "offers":{"@type":"Offer","priceCurrency":CURRENCY,"price":p.price,"availability":"https://schema.org/InStock","url":SITE_URL+"#p-"+p.id}}};
  })});

  /* ================== التشغيل ================== */
  renderAll();updateCounts();renderCart();
  var m=location.hash.match(/^#p-([A-Z]-\d{3})$/);if(m&&byId(m[1]))openPdp(m[1]);
})();
