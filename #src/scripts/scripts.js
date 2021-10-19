
$(document).ready(function () {

    new WOW().init();

// header and menu options
    // $(".toggle-menu").on("click", function() {
    //     $(".menu-wrapper").addClass("active")
    // })
    // $(".close-menu").on("click", function() {
    //     $(".menu-wrapper").removeClass("active")
    // })
    $('.toggle-menu').on('click', function() {
        $(".toggle-menu").toggleClass("active")
        $(".site-menu.header-menu").toggleClass("active")
        $(".menu-wrapper").toggleClass("active")
        $(".menu-image").toggleClass("active")
    })
// header and menu options END

// fullpage options 
    fullpage = $('#fullpage').fullpage({
        licenseKey: '6D5A2159-B20143E0-8CE02F7F-AF19A3C4',
        //Навигация
        menu: '#menu',
        lockAnchors: false,
        anchors:['firstPage', 'presentPage', 'contactPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Скроллинг
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 2000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: true,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: true,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,

        scrollOverflowOptions: {
            scrollbars: true,
            mouseWheel: true,
            hideScrollbars: false,
            fadeScrollbars: true
        },

        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        bigSectionsDestination: null,

        //Доступ
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Дизайн
        controlArrows: true,
        verticalCentered: false,
        // sectionsColor : ['#fff', '#fff'],
        paddingTop: '0px',
        paddingBottom: '0px',
        // fixedElements: '#site-header, #site-footer',
        responsiveWidth: 767,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        cards: false,
        cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        //Настроить селекторы
        sectionSelector: '.section',
        slideSelector: '.screen-slide',
        lazyLoading: true,

        //события
        // onLeave: function(origin, destination, direction){
            // alert('onLeave');
        //     $('.page-index').addClass('animate-start');
        //     $('.page-index').removeClass('animate-finish');
        //     $('.section-title').addClass('hidden');
        //     $('.section-subtitle').addClass('hidden');

        // },
        // afterLoad: function(origin, destination, direction){
            // alert('afterLoad')
        //     $('.page-index').removeClass('animate-start');
        //     $('.page-index').addClass('animate-finish');
        //     $('.section-title').removeClass('hidden');
        //     $('.section-subtitle').removeClass('hidden');
        // },
        // afterRender: function(){
            // alert('afterRender')
        // },
        // afterResize: function(width, height){
            // alert('afterResize')
        // },
        // afterReBuild: function(){alert('afterReBuild')},
        // afterResponsive: function(isResponsive){alert('afterResponsive')},
        // afterSlideLoad: function(section, origin, destination, direction){alert('afterSlideLoad')},
        // onSlideLeave: function(section, origin, destination, direction){alert('onSlideLeave')}
        // onLeave: function(origin, destination, direction){},
        // afterLoad: function(origin, destination, direction){},
        // afterRender: function(){},
        // afterResize: function(width, height){},
        // afterReBuild: function(){},
        // afterResponsive: function(isResponsive){},
        // afterSlideLoad: function(section, origin, destination, direction){},
        // onSlideLeave: function(section, origin, destination, direction){}
    });

    let isHome = document.getElementsByClassName('body')
    if(isHome.length > 0){
        $('#scroll-down').on('click', function() {
            $.fn.fullpage.moveSectionDown();
        });
        $('#scroll-up').on('click', function() {
            $.fn.fullpage.moveTo(1);
        });
    }
// fullpage options END

// present screen tabs
    $(function() {
        $(".present-thumbs").on("click", ".present-thumb-item:not(.active)", function() {
          $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest(".home__present")
            .find(".present-tab-item")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
        });
    });
// present screen tabs END
    
});

// const testimonialSwiper = document.getElementById('testimonials-swiper');
// if (testimonialSwiper){
//     const mySwiper = new Swiper('#testimonials-swiper', {
//         // Optional parameters
//         slidesPerView: 1,
//         // spaceBetween: 10,
//         loop: true,
//         centeredSlides: true,
//         speed: 2000,
//         autoplay: {
//             delay: 5000,
//         },
//         breakpoints: {
//             1025:{
//                 slidesPerView: 1.5
//             },
//         },
//         navigation: {
//             nextEl: '.testimonials-swiper-next',
//             prevEl: '.testimonials-swiper-prev',
//         },
//     })
// }

