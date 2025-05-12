
const movingImage = document.getElementById("movingImage");
let lastScrollPosition = 0;

// Store the original transformation values
const originalTransform = movingImage.style.transform;

// Animation variables
let animationStartTime;
const animationDuration = 1000; // Duration in milliseconds (adjust as needed)
const horizontalPositionStart = 0; // Starting horizontal position
let horizontalPositionEnd = 0; // Ending horizontal position
let shouldReset = false;
// Function to reset the transformation with animation
function resetTransformationWithAnimation(timestamp) {
    if (!animationStartTime) {
        animationStartTime = timestamp;
    }

    const elapsed = timestamp - animationStartTime;
    const progress = Math.min(1, elapsed / animationDuration);

    // Calculate the current horizontal position based on progress
    const horizontalPosition = horizontalPositionStart + (horizontalPositionEnd - horizontalPositionStart) * progress;

    // Apply the transformation
    movingImage.style.transform = `translateX(${horizontalPosition}px)`;

    if (progress < 1) {
        // Continue the animation until it's complete
        requestAnimationFrame(resetTransformationWithAnimation);
    } else {
        // Animation is complete
        shouldReset = false;
    }
}

// Function to initiate the reset animation
function initiateResetAnimation() {
    shouldReset = true;
    horizontalPositionEnd = 0; // Set the ending position to the original position
    animationStartTime = null; // Reset the animation start time
    requestAnimationFrame(resetTransformationWithAnimation);
}

// Add a scroll event listener to the window for horizontal scrolling
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollX;

    if (scrollPosition > lastScrollPosition) {
        // Scrolling to the right
        horizontalPositionEnd = scrollPosition * 2;
    }

    if (!shouldReset && scrollPosition < lastScrollPosition) {
        // Scrolling to the left and not already resetting
        initiateResetAnimation();
    }

    lastScrollPosition = scrollPosition;
});


