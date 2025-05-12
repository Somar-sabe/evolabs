document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
  
    const cursorDot = document.querySelector('.cursordot');
    const cursorOutline = document.querySelector('.cursoroutline');
  
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
  
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
  
    cursorOutline.animate([
      { left: `${posX}px`, top: `${posY}px` },
    ], {
      duration: 500,
      fill: 'forwards',
    });
  });