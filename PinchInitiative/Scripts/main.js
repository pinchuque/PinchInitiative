// setEqualHeight function
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        });
    columns.height(tallestcolumn);
}

$(function() {
    var $solutionTolltip = $('.solution-desc-tooltip');

    setEqualHeight( $('.solution-block') );
    setEqualHeight( $solutionTolltip );

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
                min: 6,
                max: 12
            }
        }
    });

    $('.customers-slider').carouFredSel({
        auto: false,
        width: '100%',
        scroll: {
            items: 1
        },
        prev: {
            button: '#prev2',
            key: 'left'
        },
        next: {
            button: '#next2',
            key: 'right'
        },
        items: {
            height: 99,
            visible: {
                min: 1,
                max: 5
            }
        }
    });

    $solutionTolltip.each(function() {
        var solDescTooltipHeight = $(this).height() - 35;
        $(this).css('bottom', -solDescTooltipHeight);
    });

   // var solDescTooltipHeight = $solutionTolltip.height() - 35;
    //$solutionTolltip.css('bottom', -solDescTooltipHeight);

});