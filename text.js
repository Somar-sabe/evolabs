if (window.innerWidth > 768) {
  // Create an Intersection Observer targeting elements with the class "animate-element"
  const observeranim = new IntersectionObserver(handleAnimateIntersection, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  function handleAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementsToAnimate = document.querySelectorAll('.animate-element');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          observer.unobserve(entry.target);
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  document.querySelectorAll('.animate-element').forEach(element => {
    observeranim.observe(element);
  });

  // reqiroanimate-element
  const observerreq = new IntersectionObserver(handleReqiroIntersection, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  function handleReqiroIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementsToAnimate = document.querySelectorAll('.reqiroanimate-element');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          observer.unobserve(entry.target);
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  document.querySelectorAll('.reqiroanimate-element').forEach(element => {
    observerreq.observe(element);
  });

  // storeanimate-element
  const observerstore = new IntersectionObserver(handleStoreAnimateIntersection, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  function handleStoreAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementsToAnimate = document.querySelectorAll('.storeanimate-element');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          observer.unobserve(entry.target);
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  document.querySelectorAll('.storeanimate-element').forEach(element => {
    observerstore.observe(element);
  });

  // hedinsanimate-element
  const observerhedins = new IntersectionObserver(handleHedinsAnimateIntersection, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  function handleHedinsAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementsToAnimate = document.querySelectorAll('.hedinsanimate-element');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          observer.unobserve(entry.target);
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  document.querySelectorAll('.hedinsanimate-element').forEach(element => {
    observerhedins.observe(element);
  });

  // wayanimate-element
  const observerway = new IntersectionObserver(handleWayAnimateIntersection, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  function handleWayAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementsToAnimate = document.querySelectorAll('.wayanimate-element');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          observer.unobserve(entry.target);
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  document.querySelectorAll('.wayanimate-element').forEach(element => {
    observerway.observe(element);
  });

  // creoanimate-element
  const observercreo = new IntersectionObserver(handleCreoAnimateIntersection, {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1,
  });

  function handleCreoAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
      const elementsToAnimate = document.querySelectorAll('.creoanimate-element');
      elementsToAnimate.forEach(element => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          observer.unobserve(entry.target);
        } else {
          element.classList.remove('animate');
        }
      });
    });
  }

  document.querySelectorAll('.creoanimate-element').forEach(element => {
    observercreo.observe(element);
  });
}
