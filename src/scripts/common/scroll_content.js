$(function(){
    // scroll_blog 

    const container =  document.querySelector('.blog-content__container');
    var accoMenuItems = document.querySelectorAll('.menu-acco__item');

    $(accoMenuItems).on('click', function(){
        $(this).css('color',  'red');
    });

});
