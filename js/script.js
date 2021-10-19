$(document).ready(function () {

    $(window).scroll(function () {
        var scrollCondition = $(this).scrollTop() > 100

        if (scrollCondition) $('.header').addClass('fixed');
        else $('.header').removeClass('fixed');
    });

    $('.hambuger-menu a').click(function (e) {
        e.preventDefault();

        var $this = $(this);
        var href = $this.attr('href');

        $this.parent().toggleClass('active');
        $(href).slideToggle('active');

        var hasActive = $this.parent().hasClass('active')

        if (hasActive) $('body').append('<div class="overlay"></div>');
        else $('.overlay').remove();
    });

    $('.slick-slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    dots: true,
                    slidesToShow: 1,
                    prevArrow: false,
                    nextArrow: false
                }
            },
        ]
    });

    $('.upcomings-area').eqHeights({ child: '.upcoming-item' });
});