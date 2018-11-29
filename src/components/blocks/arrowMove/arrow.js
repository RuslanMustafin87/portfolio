// const arrowDown = document.querySelector('.arrow__down');

// arrowDown.addEventListener('click', () => {

// 	var timerId = setInterval( () => {
        
// 		if (window.pageYOffset >= window.innerHeight) {
// 			clearInterval(timerId);
// 		} else {
// 			window.scrollBy(0, 7);
// 		}

// 	}, 1);

// });

export default  function(blockClick, toBlockMove){
	const elementClick = document.querySelector(blockClick);
	const toElementMove = document.querySelector(toBlockMove);
    
	elementClick.addEventListener('click', ()=>{
		var timerId = setInterval( () => {
        
			if (0 >= toElementMove.getBoundingClientRect().top) {
				clearInterval(timerId);
			} else {
				window.scrollBy(0, 8);
				console.log(toElementMove.getBoundingClientRect().top);
			}
    
		}, 1);
	});
}
