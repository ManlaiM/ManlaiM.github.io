document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-toggle');
    
    // Dynamically find the indicator elements (works for both pages)
    const navIndicatorGlow = document.querySelector('.nav-indicator-glow') || 
                            document.querySelector('.nav-indicator-glow-about');
    const navIndicatorSquare = document.querySelector('.nav-indicator-square') || 
                              document.querySelector('.nav-indicator-square-about');

    // Determine which page we're on
    const isAboutPage = document.querySelector('.nav-indicator-glow-about') !== null;
    
    // Get the nav links array for easier indexing
    const portfolioLink = navLinks[0]; // First link (Portfolio)
    const aboutLink = navLinks[1]; // Second link (About)

    // Set initial position (no transform needed, CSS handles default position)
    // The indicators are already positioned correctly by CSS

    // Add hover effects
    navLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            if (navIndicatorGlow && navIndicatorSquare) {
                let glowTranslateX = 0;
                let squareTranslateX = 0;
                
                if (isAboutPage) {
                    // On about page: Portfolio = move left, About = no movement (0px)
                    glowTranslateX = index === 0 ? -92 : 0;
                    squareTranslateX = index === 0 ? -88 : 0; // Slightly different for square
                } else {
                    // On portfolio page: Portfolio = no movement (0px), About = move right
                    glowTranslateX = index === 0 ? 0 : 92;
                    squareTranslateX = index === 0 ? 0 : 88; // Slightly different for square
                }
                
                navIndicatorGlow.style.transform = `translateX(${glowTranslateX}px)`;
                navIndicatorSquare.style.transform = `translateX(${squareTranslateX}px)`;
            }
        });

        link.addEventListener('mouseleave', () => {
            // Reset to original position (no transform)
            if (navIndicatorGlow && navIndicatorSquare) {
                navIndicatorGlow.style.transform = `translateX(0px)`;
                navIndicatorSquare.style.transform = `translateX(0px)`;
            }
        });
    });
});