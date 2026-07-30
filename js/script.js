// site gerado pelo Editor de Vitrine — funciona 100% offline (exceto fontes do Google e mapas/vídeos incorporados)
function numeroWhats(){ return document.getElementById('whatsNum').textContent.replace(/\D/g,''); }
function comprar(nome, preco){
  const msg = encodeURIComponent('Olá! Tenho interesse no produto "'+nome+'" ('+preco+').');
  window.open('https://wa.me/'+numeroWhats()+'?text='+msg, '_blank');
}
function abrirWhats(){
  const msg = encodeURIComponent('Olá! Vi a vitrine e gostaria de mais informações.');
  window.open('https://wa.me/'+numeroWhats()+'?text='+msg, '_blank');
}
document.getElementById('btnWhatsFloat').addEventListener('click', abrirWhats);
window.addEventListener('scroll', function(){
  document.getElementById('btnTopo').classList.toggle('visivel', window.scrollY > 500);
});
document.getElementById('btnTopo').addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });
document.querySelectorAll('.faq-item').forEach(function(el){
  el.querySelector('.faq-pergunta').addEventListener('click', function(){ el.classList.toggle('aberto'); });
});
// animação de entrada (fade-in) ao rolar a página
(function(){
  const observer = new IntersectionObserver(function(entradas){
    entradas.forEach(function(entrada){
      if(entrada.isIntersecting){ entrada.target.classList.add('in-view'); observer.unobserve(entrada.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll('.fade-in').forEach(function(el){ observer.observe(el); });
})();
