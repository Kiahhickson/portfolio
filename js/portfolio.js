$(document).ready(function () {
var bubble = function (event) {
	// console.log(event.clientX, event.clientY);

	var $b =$('<div/>').addClass('bubble');
	$b.css({
		left: event.clientX,
		top: event.clientY
	});
	$('body').append($b);

	//clean up after ourselves.

	setTimeout(function () {
		
		$b.animate({
			top: -1000 //Disappear off the top of the screen.
		}, 2000, function () {
			$b.remove();
		}};

	}, 1400);
	
};

$(window).on('mousemove', bubble);

});