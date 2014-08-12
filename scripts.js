$(function(){ // document ready
	var slideshow     = $('div.clients-slideshow'),
		train         = $('div.clients-slideshow .clients-train'),
		slides     	  = $('div.clients-slideshow .clients-train > div'),
		lists         = $('.clients-container ul.btns li'),
		currentSlide  = 0;

	(go2slide = function (n) {
		if(n>slides.length-1) n=0;
		if(n<0) n=slides.length-1;
		train.css({left: (-390*n)+'px' });
		lists.eq(currentSlide).removeClass('active');
		lists.eq(n).addClass('active');
		currentSlide=n;
	})(0); 

	lists.click(function(){
		go2slide($(this).index());
	});

	$('div.clients-slideshow #right').click(nextSlide=function(){
		go2slide(currentSlide+1);
	});

	$('div.clients-slideshow #left').click(function(){
		go2slide(currentSlide-1);
	});
	////////////////////////////////  GALLERY ////////////////////////////
	var slideshowGallery     = $('div.gallery-slide'),
		trainGallery        = $('div.gallery-slide .gallery-train'),
		slidesGalleryH  = $('div.gallery-slide .gallery-train div.horizontals'),
		slidesGalleryV = $('div.gallery-slide .gallery-train div.horizontals div.verticals'),
		vList   = $('.gallery-slide ul.updown li'),
		hList   = $('.gallery ul.hbtns li'),
		currentSlideGallery = 0,
		currentSlideGalleryV = 0;



	(go2slideGalleryh = function (n) {
		if(n>slidesGalleryH.length-1) n=0;
		if(n<0) n=slidesGalleryH.length-1;

		trainGallery.css({
			top:0,
			left: (-500*n)+'px'
		});
		hList.eq(currentSlideGallery).removeClass('active');
		hList.eq(n).addClass('active');
		vList.eq(currentSlideGalleryV).removeClass('active');
		vList.eq(0).addClass('active')
		currentSlideGallery=n;
	})(0);

	(go2slideGalleryv = function (n) {
		if(n>slidesGalleryV.length-1) n=0;
		if(n<0) n=slidesGalleryV.length-1;
		trainGallery.css({top: (-390*n)+'px' });
		vList.eq(currentSlideGalleryV).removeClass('active');
		vList.eq(n).addClass('active');
		currentSlideGalleryV=n;
	})(0); 

	vList.click(function(){
		go2slideGalleryv($(this).index());
	});

	hList.click(function(){
		go2slideGalleryh($(this).index());
	});

	$('div.gallery-slide div.right').click(nextSlide=function(){
		go2slideGalleryh(currentSlideGallery+1);
	});

	$('div.gallery-slide div.left').click(function(){
		go2slideGalleryh(currentSlideGallery-1);
	});


});