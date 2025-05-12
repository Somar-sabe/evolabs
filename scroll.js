const elements = document.getElementsByClassName('sticker-scroll');
const svgElement = elements[0].querySelector('svg');
//const svgElement = document.querySelector('.sticker-scroll svg');
const section = document.getElementById('w-node-_5304795a-4bad-c6bb-2836-db0763a2a195-62fbbdd9'); // Replace with the actual ID of your section

window.addEventListener('scroll', () => {
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Calculate when the section is approximately 50% into the viewport
  const triggerPoint = windowHeight * 0.5;

  if (sectionTop < triggerPoint) {
    svgElement.classList.add('animate'); // Add a class to start the animation
  } else {
    svgElement.classList.remove('animate'); // Remove the class to pause the animation
  }
});
