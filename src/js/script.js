$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src= "icons/arrow_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src= "icons/arrow_right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    //First option

    // $('[data-modal=consultation]').on('click', function(){
    //     $('.overlay').css("display","block");
    //     $('#consultation').css("display","block");
    // });

    // $('.modal__close').on('click', function(){
    //     $('.overlay').css("display","none");
    //     $('#consultation').css("display","none");
    // });

    //Second option
    // $('[data-modal=consultation]').on('click', () => {
    //     $('.overlay,#consultation').fadeIn('slow');
    // });

    // $('.modal__close').on('click', function(){
    //     $('.overlay,#consultation,#order,#thanks').fadeOut('slow');
    // });

    // $('.button_mini').on('click', () => {
    //     $('.overlay,#order').fadeIn('slow');
    // });


    //Optimized second option

    function modal(consultation,order, close) {
        consultation.on('click', () => {
            $('.overlay,#consultation').fadeIn('slow');
        });
        // order.on('click', () => {
        //     $('.overlay,#order').fadeIn('slow');
        // });
        order.each(function(i){
            $(this).on('click',() => {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });
        close.on('click', () => {
            $('.overlay,#consultation,#order,#thanks').fadeOut('slow');
        });
    

    }
    modal($('[data-modal=consultation]'), $('.button_mini'), $('.modal__close'));


});
  

