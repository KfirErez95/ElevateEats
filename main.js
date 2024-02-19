
// Scale Meals images while screen moves between 1200 - 850px

document.addEventListener("DOMContentLoaded", function() {
    function updateScaleAndMargin() {
        const screenWidth = window.innerWidth;
        let scaleFactor = 1 - (0.3 * (1200 - screenWidth) / 350);
        scaleFactor = Math.max(0.7, Math.min(1, scaleFactor));
        let marginValue = -110 * (1200 - screenWidth) / 350;
        marginValue = Math.max(marginValue, -110); 
        marginValue = Math.min(marginValue, 0);
        
        const leftMeals = document.querySelector('.hero-left-meals');
        const rightMeals = document.querySelector('.hero-right-meals');
        
        leftMeals.style.transform = `translateY(-50%) scale(${scaleFactor})`;
        leftMeals.style.marginLeft = `${marginValue}px`;
        
        rightMeals.style.transform = `translateY(-50%) scale(${scaleFactor})`; // Keep translateY
        rightMeals.style.marginRight = `${marginValue}px`;
        rightMeals.style.top = '40%'; // Change top value to 40%
    }

    updateScaleAndMargin();
    window.addEventListener('resize', updateScaleAndMargin);
});




// When screen is between 800-320, it moves and scales the images (Left03 and Right03)

document.addEventListener("DOMContentLoaded", function() {
    function updateWidthAndPosition() {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 800 && screenWidth >= 320) {
            let newWidth = 350 - (100 * (800 - screenWidth) / 320);
            newWidth = Math.max(250, Math.min(350, newWidth));
            const newPosition = 30 + (20 * (800 - screenWidth) / 320);
            const left03 = document.getElementById('left03');
            const right03 = document.getElementById('right03');
            
            // left03.style.width = `${newWidth}px`;
            left03.style.left = `${newPosition}%`;
            // right03.style.width = `${newWidth}px`;
            right03.style.right = `${newPosition}%`;
        } else {
            const left03 = document.getElementById('left03');
            const right03 = document.getElementById('right03');
            
            left03.style.width = '233px'; 
            left03.style.left = '30%'; 
            right03.style.width = '305px';
            right03.style.right = '28%'; 
        }
    }

    updateWidthAndPosition();
    window.addEventListener('resize', updateWidthAndPosition);
});



// Hero Height change from 600 to 450 height when screen shrinks

// document.addEventListener("DOMContentLoaded", function() {
//     function updateHeight() {
//         const screenWidth = window.innerWidth;
//         if (screenWidth <= 500 && screenWidth >= 350) {
//             let newHeight = 600 - (150 * (500 - screenWidth) / 150);
//             newHeight = Math.max(450, Math.min(600, newHeight));
//             const hero = document.querySelector('.hero');
            
//             hero.style.height = `${newHeight}px`;
//         } else if (screenWidth < 350) {
//             const hero = document.querySelector('.hero');
            
//             hero.style.height = '450px'; // Set height to 450px when screen width is below 350px
//         } else {
//             const hero = document.querySelector('.hero');
            
//             hero.style.height = ''; // Reset height
//         }
//     }

//     updateHeight();
//     window.addEventListener('resize', updateHeight);
// });






