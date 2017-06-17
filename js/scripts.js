$(function(){
	var carouselList = $("#carousel ul");
	setInterval(moveToLeft, 8000);

	function moveToLeft() {
		carouselList.animate({'marginLeft':-600}, 500, moveFirstSlide);

	}
	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}	
	$('#right').click(moveToLeft);

	function moveToRight() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-600});
		carouselList.animate({'marginLeft':0}, 500);

	}

	$('#left').click(moveToRight);
});
