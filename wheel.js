function handleKeyDown(event) {
    // Check if the user pressed the left arrow key
    if (event.key === 'ArrowUp') {
        // Check if the screen width is greater than a certain threshold (e.g., 768 pixels)
        if (window.innerWidth > 768) {
            // Scroll the page to the left smoothly
            window.scrollBy({
                top: 0,
                left: -300, // Adjust the scroll amount as needed
                behavior: 'smooth', // Use smooth scrolling
            });
            event.preventDefault(); // Prevent the default arrow key behavior
        }
    }
    // Check if the user pressed the right arrow key
    else if (event.key === 'ArrowDown') {
        // Check if the screen width is greater than a certain threshold (e.g., 768 pixels)
        if (window.innerWidth > 768) {
            // Scroll the page to the right smoothly
            window.scrollBy({
                top: 0,
                left: 300, // Adjust the scroll amount as needed
                behavior: 'smooth', // Use smooth scrolling
            });
            event.preventDefault(); // Prevent the default arrow key behavior
        }
    }
}

// Add the keydown event listener to the document
document.addEventListener('keydown', handleKeyDown);










//**wheeel */


function handleMouseWheel(event) {
    // Check if the screen width is greater than a certain threshold (e.g., 768 pixels)
    if (window.innerWidth > 768) {
        // Calculate the desired scroll direction based on the mouse wheel event
        const scrollDirection = event.deltaY > 0 ? 1 : -1; // Positive for down, negative for up

        // Scroll the page horizontally smoothly
        window.scrollBy({
            top: 0,
            left: scrollDirection * window.innerWidth, // Adjust the scroll amount as needed
            behavior: 'smooth', // Use smooth scrolling
        });

        //   event.preventDefault(); // Prevent the default vertical scroll behavior
    }
}

// Add the event listener to the window
window.addEventListener('wheel', handleMouseWheel);



