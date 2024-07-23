(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);

//typing effect

/*document.addEventListener("DOMContentLoaded", function() {
    const text = "Your Future-Proof Web 3.0 Government OS";
    const typingSpeed = 150; // Speed in milliseconds

    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("header-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    typeWriter();
});*/



document.addEventListener("DOMContentLoaded", function() {
    const headers = [
        {text: "Your Future-Proof Web 3.0 Government OS", subtext: "Unleash Efficiency, Enhance Transparency - The Next Generation of Digital Governments"},
        {text: "Modern Government’s at the Nexus of Trust, Transparency, & Trade", subtext: "Connect, Collaborate, & Thrive in the New Era of Governance"},
        {text: "Streamline Operations, Boost Transparency - The Future is Here", subtext: "Unify Your 'Whole-of-Government' & 'Whole-of-Economy' on our Next-Gen Blockchain"},
        {text: "Unlock Global Potential - Powerful Tools for a Thriving Economy", subtext: "Elevate Your Economic Global Rankings: Drive Growth & Empower Economic Reforms with Our Solution"}
    ];

    let headerIndex = 0;
    const typingSpeed = 150; // Speed in milliseconds
    const pauseBetweenHeaders = 3000; // Pause between headers in milliseconds
    const subtextDelay = 1000; // Delay before showing subtext in milliseconds

    function typeWriter(text, element, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, typingSpeed);
            } else {
                element.classList.add('blink-caret');
                callback();
            }
        }
        element.innerHTML = '';
        element.classList.remove('blink-caret');
        type();
    }

    function showNextHeader() {
        if (headerIndex >= headers.length) {
            headerIndex = 0;
        }

        const headerElement = document.getElementById('header-text');
        const subtextElement = document.getElementById('subtext');
        const currentHeader = headers[headerIndex];

        headerElement.innerHTML = '';
        subtextElement.innerHTML = '';
        subtextElement.classList.remove('fade-in');

        typeWriter(currentHeader.text, headerElement, function() {
            setTimeout(function() {
                subtextElement.innerHTML = currentHeader.subtext;
                subtextElement.classList.add('fade-in');
                setTimeout(function() {
                    subtextElement.classList.remove('fade-in');
                    headerIndex++;
                    setTimeout(showNextHeader, pauseBetweenHeaders);
                }, pauseBetweenHeaders - subtextDelay);
            }, subtextDelay);
        });
    }

    showNextHeader();
});


