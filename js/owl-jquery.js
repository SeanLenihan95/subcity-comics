$(document).ready(function(){
	$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	dots: false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

var owl = $('.owl-1');
owl.owlCarousel();
// Go to the next item
$('.CarouselBtnNxt-1').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.CarouselBtnPrv-1').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});
});

$(document).ready(function(){
	$('.owl-2').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	})

	var owl = $('.owl-2');
	owl.owlCarousel();
	// Go to the next item
	$('.CarouselBtnNxt-2').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.CarouselBtnPrv-2').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});
});

$(document).ready(function(){
	$('.owl-3').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	})

	var owl = $('.owl-3');
	owl.owlCarousel();
	// Go to the next item
	$('.CarouselBtnNxt-3').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.CarouselBtnPrv-3').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});
});

$(document).ready(function(){
	$('.owl-4').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	})

	var owl = $('.owl-4');
	owl.owlCarousel();
	// Go to the next item
	$('.CarouselBtnNxt-4').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.CarouselBtnPrv-4').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});
});

$(document).ready(function(){
	$('.owl-5').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:4
			}
		}
	})

	var owl = $('.owl-5');
	owl.owlCarousel();
	// Go to the next item
	$('.CarouselBtnNxt-5').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.CarouselBtnPrv-5').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});
});

$(document).ready(function(){
	$('.owl-6').owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:4
			},
			1000:{
				items:6
			}
		}
	})

	var owl = $('.owl-6');
	owl.owlCarousel();
	// Go to the next item
	$('.CarouselBtnNxt-6').click(function() {
		owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.CarouselBtnPrv-6').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});
});