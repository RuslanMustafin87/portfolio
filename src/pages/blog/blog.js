import 'normalize.css';
import '../main.scss';
import './blog.scss';

// прокрутка статей в blog-content 

var container = document.querySelector('.blog-content__articles');
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

import {hamburger} from '../../components/blocks/hamburger_icon/hamburger_icon.js';

hamburger();

// появление левого меню 

const toggleLeftMenu = document.querySelector('.blog-content__left-toggle');
const leftMenu = document.querySelector('.blog-content__left');

toggleLeftMenu.addEventListener('click', () => {
	leftMenu.classList.toggle('blog-content__left_active');
});