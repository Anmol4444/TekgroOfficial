$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.arrow').show();
        $('.navbar').addClass("fixed");
    } else {      
        $('.arrow').hide();
        $('.navbar').removeClass("fixed");
    }
});
//typing text animation string
var typed = new Typed(".typing-2", {
    strings: ["Thought Leadership", "Emerging Ideas", "Marketing Goals", "Consumer Insights", "Marketing Goals"],
    typeSpeed: 130,
    backSpeed: 60,
    loop: true
});
// slider //

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,2],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        slideSpeed:1000,
        autoPlay:true
    });
});
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover:false,
        responsive: [{
            breakpoint: 768,
            setting: {
                slidesToShow:4
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 3
            }
        }]
    });
});