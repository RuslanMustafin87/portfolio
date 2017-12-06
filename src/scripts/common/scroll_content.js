const container =  document.querySelector('.blog-content__container');
var accoMenuItems = document.querySelectorAll('.menu-acco__item');

accoMenuItems.addEventListener('click', function(){
    accoMenuItems.style.color = 'red';
    alert('hi');
});
