// Create an Intersection Observer targeting elements with the class "animate-element"
const observeranim = new IntersectionObserver(handleAnimateIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px 0px -100px 0px', // Adjust this value to control when the animation triggers.
    threshold: 0.1,
});

function handleAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
        const elementsToAnimate = document.querySelectorAll('.animate-element');
        elementsToAnimate.forEach(element => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the viewport
                element.classList.add('animate');
                observer.unobserve(entry.target);
            } else {
                // Remove the animation class when the element exits the viewport
                element.classList.remove('animate');
            }
        });
    });
}

// Start observing the elements with the class "animate-element"
document.querySelectorAll('.animate-element').forEach(element => {
    observeranim.observe(element);
});

// Create an Intersection Observer targeting elements with the class "reqiroanimate-element"
const observerreq = new IntersectionObserver(handleReqiroIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px 0px -100px 0px', // Adjust this value to control when the animation triggers.
    threshold: 0.1,
});

function handleReqiroIntersection(entries, observer) {
    entries.forEach(entry => {
        const elementsToAnimate = document.querySelectorAll('.reqiroanimate-element');
        elementsToAnimate.forEach(element => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the viewport
                element.classList.add('animate');
                observer.unobserve(entry.target);
            } else {
                // Remove the animation class when the element exits the viewport
                element.classList.remove('animate');
            }
        });
    });
}

// Start observing the elements with the class "reqiroanimate-element"
document.querySelectorAll('.reqiroanimate-element').forEach(element => {
    observerreq.observe(element);
});

// Create an Intersection Observer targeting elements with the class "storeanimate-element"
const observerstore = new IntersectionObserver(handleStoreAnimateIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px 0px -100px 0px', // Adjust this value to control when the animation triggers.
    threshold: 0.1,
});

function handleStoreAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
        const elementsToAnimate = document.querySelectorAll('.storeanimate-element');
        elementsToAnimate.forEach(element => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the viewport
                element.classList.add('animate');
                observer.unobserve(entry.target);
            } else {
                // Remove the animation class when the element exits the viewport
                element.classList.remove('animate');
            }
        });
    });
}

// Start observing the elements with the class "storeanimate-element"
document.querySelectorAll('.storeanimate-element').forEach(element => {
    observerstore.observe(element);
});

// Create an Intersection Observer targeting elements with the class "hedinsanimate-element"
const observerhedins = new IntersectionObserver(handleHedinsAnimateIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px 0px -100px 0px', // Adjust this value to control when the animation triggers.
    threshold: 0.1,
});

function handleHedinsAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
        const elementsToAnimate = document.querySelectorAll('.hedinsanimate-element');
        elementsToAnimate.forEach(element => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the viewport
                element.classList.add('animate');
                observer.unobserve(entry.target);
            } else {
                // Remove the animation class when the element exits the viewport
                element.classList.remove('animate');
            }
        });
    });
}

// Start observing the elements with the class "hedinsanimate-element"
document.querySelectorAll('.hedinsanimate-element').forEach(element => {
    observerhedins.observe(element);
});

// Create an Intersection Observer targeting elements with the class "wayanimate-element"
const observerway = new IntersectionObserver(handleWayAnimateIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px 0px -100px 0px', // Adjust this value to control when the animation triggers.
    threshold: 0.1,
});

function handleWayAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
        const elementsToAnimate = document.querySelectorAll('.wayanimate-element');
        elementsToAnimate.forEach(element => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the viewport
                element.classList.add('animate');
                observer.unobserve(entry.target);
            } else {
                // Remove the animation class when the element exits the viewport
                element.classList.remove('animate');
            }
        });
    });
}

// Start observing the elements with the class "wayanimate-element"
document.querySelectorAll('.wayanimate-element').forEach(element => {
    observerway.observe(element);
});

// Create an Intersection Observer targeting elements with the class "creoanimate-element"
const observercreo = new IntersectionObserver(handleCreoAnimateIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px 0px -100px 0px', // Adjust this value to control when the animation triggers.
    threshold: 0.1,
});

function handleCreoAnimateIntersection(entries, observer) {
    entries.forEach(entry => {
        const elementsToAnimate = document.querySelectorAll('.creoanimate-element');
        elementsToAnimate.forEach(element => {
            if (entry.isIntersecting) {
                // Add the animation class when the element enters the viewport
                element.classList.add('animate');
                observer.unobserve(entry.target);
            } else {
                // Remove the animation class when the element exits the viewport
                element.classList.remove('animate');
            }
        });
    });
}

// Start observing the elements with the class "creoanimate-element"
document.querySelectorAll('.creoanimate-element').forEach(element => {
    observercreo.observe(element);
});


