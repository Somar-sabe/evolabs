// Select the element you want to scroll horizontally
const scrollContainer = document.getElementsByClassName('scroll-container');

// Set up an event listener for the 'wheel' event (scrolling)
scrollContainer.addEventListener('wheel', (event) => {
    // Check if the user is scrolling vertically
    if (event.deltaY !== 0) {
        // Prevent the default scroll behavior (vertical scrolling)
        event.preventDefault();

        // Calculate the amount to scroll horizontally based on the vertical scroll
        const scrollAmount = event.deltaY * 0.5;

        // Update the horizontal scroll position
        scrollContainer.scrollLeft += scrollAmount;
    }
});
