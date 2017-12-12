    // scroll_blog 

    var accoMenuItems = document.querySelectorAll('.menu-acco__item');
    var blogContentPosition; 

    $(accoMenuItems).on('click', function(){
        var indexAccoMenuItems = $(this).index();
            blogContentPosition = $('.blog__content-item').eq(indexAccoMenuItems).position();
            scrollContent(blogContentPosition);
            toggleClass($(this));
    });

    function scrollContent(pos){
        $('.blog-content__container').css('top', '-' + pos.top + 'px');
    }

    function toggleClass(activeItem){
        $(accoMenuItems).removeClass('acco__item-active');
        $(activeItem).addClass('acco__item-active');
    }

    