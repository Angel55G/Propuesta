function soltarEstrellasNeon() {
  let star = document.createElement('div');
  star.className = 'estrella';
  let size = 5 + Math.random() * 10;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.top = Math.random() * window.innerHeight + 'px';
  star.style.background = ['#ff00ff','#00ffff','#ff1493','#8a2be2'][Math.floor(Math.random()*4)];
  star.style.borderRadius = '50%';
  star.style.boxShadow = `0 0 10px ${star.style.background}, 0 0 20px ${star.style.background}`;
  star.style.opacity = Math.random() * 0.8 + 0.2;
  star.style.position = 'absolute';
  star.style.zIndex = 0; // detrás de todo
  document.body.appendChild(star);

  // animación de parpadeo
  let dur = 1000 + Math.random() * 2000;
  star.animate([
    {opacity: star.style.opacity, transform: 'scale(1)'},
    {opacity: 0.1, transform: 'scale(0.5)'},
    {opacity: star.style.opacity, transform: 'scale(1)'}
  ], {duration: dur, iterations: Infinity});
}

// lanzar varias estrellas cada cierto tiempo
setInterval(soltarEstrellasNeon, 500);
