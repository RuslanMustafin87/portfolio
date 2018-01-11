import 'normalize.css';
import '../main.scss';
import './blog.scss';

// scroll_blog 
var container = document.querySelector('.blog-content__container');
var accoMenuItems = document.querySelectorAll('.menu-acco__item');
var blogContentPosition; 

$(accoMenuItems).on('click', function(){
	var indexAccoMenuItems = $(this).index();
	blogContentPosition = $('.blog__content-item').eq(indexAccoMenuItems).position();
	scrollContent(blogContentPosition.top);
	toggleClass($(this));
});

function scrollContent(pos){
	$(container).css('top', '-' + pos + 'px');
}

function toggleClass(activeItem){
	$(accoMenuItems).removeClass('acco__item-active');
	$(activeItem).addClass('acco__item-active');
}

// $(document).on('mousewheel', '.blog-content__container',  function(event, delta){
//     console.log(event.delta);
//     // scrollContent(200); 
// });

// $(container).on('mousewheel', function(){
        
// });
