function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        console.log("Section ID:", entry.target.id);
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            switch (sectionId) {
                case "reqiroc":
                    // Change background color to color for "reqiroc" section
                    document.body.style.backgroundColor = "#003C37";
                    break;
                case "hedins":
                    // Change background color to color for "hedins" section
                    document.body.style.backgroundColor = "#004F51";
                    break;
                case "way":
                    // Change background color to color for "way" section
                    document.body.style.backgroundColor = "#00E967";
                    break;
                case "creo":
                    // Change background color to color for "creo" section
                    document.body.style.backgroundColor = "#cccccc";
                    break;
                    case "abb":
                        // Change background color to color for "stor" section
                        document.body.style.backgroundColor = "#131314";
                        break;
                case "stor":
                    // Change background color to color for "stor" section
                    document.body.style.backgroundColor = "#131314";
                    break;
                // Add more cases for other sections as needed
                default:
                    // Handle default background color or do nothing
                    break;
            }
        }
    });
}

// Create Intersection Observers targeting the sections you want to track
const sectionsToTrack = document.querySelectorAll('.case__item');

sectionsToTrack.forEach(section => {
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Start observing the section
    observer.observe(section);
});






























  





// Function to handle the intersection and apply the 3D effect
// Function to handle the intersection and apply the 3D effect
function handleIntersectiond(entries, observer) {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.case__image');

        if (entry.isIntersecting) {
            // Apply transformation when entering the section
            image.style.transition = 'transform 0.3s ease-in-out';
            image.style.transform = 'translate(0px)';
        } else {
            // Apply the initial transformation before entering the section
            image.style.transition = 'none';
            image.style.transform = 'rotate(16deg) scale(0.4)';
        }
    });
}

// Create Intersection Observers targeting the sections you want to track
const sectionsToTrackd = document.querySelectorAll('.case__item');

sectionsToTrackd.forEach(section => {
    const observery = new IntersectionObserver(handleIntersectiond, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Start observing the section
    observery.observe(section);
});














// Function to handle the intersection and apply the text animation
// Function to handle the intersection and apply the text animation
function handleTextIntersection(entries, observer) {
    entries.forEach(entry => {
        const textSection = entry.target;

        if (entry.isIntersecting) {
            // Apply transition and opacity when entering the section
            textSection.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            textSection.style.opacity = '1';
            textSection.style.transform = 'translate(0px)';

            observer.unobserve(textSection);
        } else {
            // Remove the transition and initial styles when exiting the section
            textSection.style.transition = 'none';
            textSection.style.opacity = '0';
            textSection.style.transform = 'translate(0px, 100px)';
        }
    });
}

// Create Intersection Observers targeting all sections with class "lines"
const textSectionsToTrack = document.querySelectorAll('.lines');

textSectionsToTrack.forEach(textSection => {
    const textSectionObserver = new IntersectionObserver(handleTextIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
    });

    // Start observing the text section
    textSectionObserver.observe(textSection);
});

