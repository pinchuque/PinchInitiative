$(function() {
    $('.technology-slider').carouFredSel({
        auto: false,
        width: '100%',
        scroll: {
            items: 1
        },
        prev: {
            button: '#prev1',
            key: 'left'
        },
        next: {
            button: '#next1',
            key: 'right'
        },
        items: {
            height: 45,
            visible: {
                min: 2,
                max: 12
            }
        }
    });

    //Mobile menu
    $(document).on('click', '[data-open-menu]', function() {
        $(this).toggleClass('active');
        $('.nav').toggleClass('open');
        $('.nav-sublist').removeClass('open');
        $('.menu-back').removeClass('open');
    });

    $(document).on('click', '.nav-list > .parent > a', function(event) {
        $(this).next().addClass('open');
        $('.menu-back').addClass('open');

        if (window.innerWidth < 675) {
            event.preventDefault();
        }
    });

    $(document).on('click', '.menu-back', function() {
        $(this).removeClass('open');
        $('.nav-sublist').removeClass('open');
    });

    $(window).on('resize', function() {
        $('.carousel').carouFredSel({
            auto: true,
            responsive: true,
            direction: "left",
            items: {
                visible: 1
            },
            scroll: {
                fx : "crossfade",  //fade, crossfade, cover, uncover, scroll
                duration : 3,
                items : 1,
                pauseOnHover : false
            },
            pagination: '#pager'
        });
    });

});