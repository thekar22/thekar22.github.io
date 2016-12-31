$(function () {
	console.log('Page loaded');

	$(document).ready(function(){
	  $('.fade').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    fade: true,
  		cssEase: 'linear',
	    autoplay: true,
	    autoplaySpeed: 750,
	  });
	});


	$(document).ready(function(){
	  $('.slide').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    autoplay: true,
	    autoplaySpeed: 1000,
	  });
	});

	$(document).ready(function(){
	  $('.multiple-slide').slick({
	    dots: true,
	    autoplay: true,
	    autoplaySpeed: 2000,
	    // variableWidth: true,
	   	slidesToShow: 3,
	    slidesToScroll: 3
	  });
	});


});