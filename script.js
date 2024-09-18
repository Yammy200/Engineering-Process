// Select all hoverable sprites and the hover text element
const hoverables = document.querySelectorAll('.hoverable');
const hoverText = document.getElementById('hoverText');

// Loop through each hoverable sprite and add hover event listeners
hoverables.forEach(sprite => {
    sprite.addEventListener('mouseover', () => {
        // Get the custom text from data-text attribute
        const customText = sprite.getAttribute('data-text');
        
        // Show the hover text and set its content
        hoverText.textContent = customText;
        hoverText.classList.add('hover-visible');
    });

    sprite.addEventListener('mouseout', () => {
        // Hide the hover text when mouse is out
        hoverText.classList.remove('hover-visible');
    });
});
