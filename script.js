
// Acessibilidade
const btnMenu = document.getElementById('botao-acessibilidade');
const painel = document.getElementById('opcoes-acessibilidade');
const btnMais = document.getElementById('aumentar-fonte');
const btnMenos = document.getElementById('diminuir-fonte');
const btnContraste = document.getElementById('alterna-contraste');

let tamanhoBase = 16;

btnMenu?.addEventListener('click', () => {
  const expanded = btnMenu.getAttribute('aria-expanded') === 'true';
  btnMenu.setAttribute('aria-expanded', String(!expanded));
  if (painel.hasAttribute('hidden')) painel.removeAttribute('hidden');
  else painel.setAttribute('hidden', '');
});

btnMais?.addEventListener('click', () => {
  tamanhoBase = Math.min(tamanhoBase + 1, 22);
  document.documentElement.style.fontSize = tamanhoBase + 'px';
});

btnMenos?.addEventListener('click', () => {
  tamanhoBase = Math.max(tamanhoBase - 1, 12);
  document.documentElement.style.fontSize = tamanhoBase + 'px';
});

btnContraste?.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});

// Efeito de entrada (IntersectionObserver)
const revelar = () => {
  const itens = document.querySelectorAll('.section-card, .gallery-card, .hero img, .hero h1, .hero p, .hero a');
  itens.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: .15 });
  itens.forEach(el => io.observe(el));
};

document.addEventListener('DOMContentLoaded', revelar);
