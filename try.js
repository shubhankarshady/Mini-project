function readText(text) {
    
    window.speechSynthesis.cancel();

    
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}


document.querySelectorAll('.nav-link, .card-body,.form-group,.leb,.btn btn-primary,.dis,.signup-link').forEach(item => {
    item.addEventListener('focus', (event) => {
        const text = event.target.getAttribute('data-text');
        readText(text);
    });
});


let currentFontSize = 16;
function changeFontSize(delta) {
    currentFontSize += delta;
    document.body.style.fontSize = currentFontSize + 'px';
}

function speakCharacter(character) {
    const utterance = new SpeechSynthesisUtterance(character);
    window.speechSynthesis.speak(utterance);
}

document.querySelectorAll('.type-speech').forEach(inputField => {
    inputField.addEventListener('input', (event) => {
        const typedChar = event.target.value.slice(-1);
        // Check if typedChar is present and not due to a backspace deletion
        if (typedChar && event.inputType !== 'deleteContentBackward') {
            speakCharacter(typedChar);
        }
    });
});



$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });
});


if ('scrollBehavior' in document.documentElement.style === false) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,               // Allows the carousel to loop infinitely
            autoplay: true,           // Enables autoplay
            autoplayTimeout: 3000,    // Time between slides (3 seconds)
            autoplayHoverPause: true, // Pause on hover
            items: 1,                 // Number of items visible at once
            nav: true,                // Navigation buttons (optional)
            dots: true,               // Enable pagination dots
        });
    });




    

    

      




  





