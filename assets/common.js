function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function fetchJSON(path){return fetch(path).then(function(r){return r.json();});}

var NAV_LINKS = [
{key:'home', href:'index.html', label:'Home'},
{key:'about', href:'about.html', label:'About'},
{key:'services', href:'services.html', label:'Services'},
{key:'team', href:'team.html', label:'Team'},
{key:'contact', href:'contact.html', label:'Contact'}
];

function headerHtml(active){
var navLinks = NAV_LINKS.map(function(l){
return '<a href="'+l.href+'"'+(l.key===active?' class="active"':'')+'>'+l.label+'</a>';
}).join('');
return '<header class="site-header"><a href="index.html" class="logo" style="text-decoration:none;">RULISON <span>TAX CONSULTING</span></a><button class="menu-toggle" id="menuToggle"><span></span><span></span><span></span></button><nav class="main-nav" id="mainNav">'+navLinks+'<a href="contact.html" class="nav-cta">Schedule a Consultation</a></nav></header>';
}

function footerHtml(){
return '<footer class="site-footer">&copy; '+new Date().getFullYear()+' Rulison Tax Consulting. All rights reserved.</footer>';
}

function initHeaderInteractions(){
var mt = document.getElementById('menuToggle');
var mn = document.getElementById('mainNav');
if(mt){ mt.addEventListener('click', function(){ mn.classList.toggle('open'); }); }
}
