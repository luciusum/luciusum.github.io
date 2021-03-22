$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // fade: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');
        $(blockId).slideToggle();
        $this.toggleClass("active");
    });
});