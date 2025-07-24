const movingImage = document.getElementById("movingImage");

// Run only on desktop screens
if (window.innerWidth >= 768 && movingImage) {
    let lastScrollPosition = 0;

    const originalTransform = movingImage.style.transform;

    // Animation variables
    let animationStartTime;
    const animationDuration = 1000;
    const horizontalPositionStart = 0;
    let horizontalPositionEnd = 0;
    let shouldReset = false;

    function resetTransformationWithAnimation(timestamp) {
        if (!animationStartTime) {
            animationStartTime = timestamp;
        }

        const elapsed = timestamp - animationStartTime;
        const progress = Math.min(1, elapsed / animationDuration);

        const horizontalPosition = horizontalPositionStart + (horizontalPositionEnd - horizontalPositionStart) * progress;
        movingImage.style.transform = `translateX(${horizontalPosition}px)`;

        if (progress < 1) {
            requestAnimationFrame(resetTransformationWithAnimation);
        } else {
            shouldReset = false;
        }
    }

    function initiateResetAnimation() {
        shouldReset = true;
        horizontalPositionEnd = 0;
        animationStartTime = null;
        requestAnimationFrame(resetTransformationWithAnimation);
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollX;

        if (scrollPosition > lastScrollPosition) {
            horizontalPositionEnd = scrollPosition * 2;
        }

        if (!shouldReset && scrollPosition < lastScrollPosition) {
            initiateResetAnimation();
        }

        lastScrollPosition = scrollPosition;
    });
}
