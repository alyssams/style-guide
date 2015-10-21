$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollUp').fadeIn();
        } else {
            $('.scrollUp').fadeOut();
        }
    });

    $('.scrollUp').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.subpane-layout').addClass('active');

    $(function() {
        $(".dropdown").hover(
            function(){ $(this).addClass('open') },
            function(){ $(this).removeClass('open') }
        );
    });

    // $('.group').click(function(e){
    //     e.preventDefault();
    //     var id = $(this).attr('data-slug');
    //     $('.shelf-entries').css('display','block');
    //     // $('html,body').animate({
    //     // scrollTop: $('#'+id).offset().top
    //     // }, 1000);
    // });

    //if any of the sub entries are active, make sure that it's counterpart is active as well.
    // so if sublayout is active, make sure it's shelf entry is active


    // if i hover over any sub list then remove active state and add it to other.
});

