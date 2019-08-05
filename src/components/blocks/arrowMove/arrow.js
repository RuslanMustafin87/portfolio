export default  function(blockClick, toBlockMove){
	const elementClick = document.querySelector(blockClick);
	const toElementMove = document.querySelector(toBlockMove);
    
	elementClick.addEventListener('click', ()=>{

		function elementMoveDown(){
			var timerId = setInterval( () => {
        
				if (0 >= toElementMove.getBoundingClientRect().top) {
					window.scrollBy(0, toElementMove.getBoundingClientRect().top);
					clearInterval(timerId);
				} else {
					window.scrollBy(0, 8);
				}
    
			}, 1);
		}

		function elementMoveUp(){
			var timerId = setInterval( () => {
        
				if (0 <= toElementMove.getBoundingClientRect().top) {
					window.scrollBy(0, toElementMove.getBoundingClientRect().top);
					clearInterval(timerId);
				} else {
					window.scrollBy(0, -12);
				}
    
			}, 1);
		}

		toElementMove.getBoundingClientRect().top >= 0 ? elementMoveDown() : elementMoveUp();
	});
}
