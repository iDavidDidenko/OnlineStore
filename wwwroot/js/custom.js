$(document).ready(function(){
	"use strict";
    

	document.getElementById("cartList").addEventListener('click', function (event) {
		// Check if the clicked element has the class 'lnr-cross'
		if (event.target.classList.contains('lnr-cross')) {
			// Find the closest ancestor with class 'single-cart-list' (the <li> element)
			const listItem = event.target.closest('.single-cart-list');
	
			// Check if a listItem is found before attempting to remove
			if (listItem) {
				listItem.remove();
			}
		}
	});
	
	document.querySelectorAll('.addProduct').forEach(function (button) {
		button.addEventListener('click', addProductFunc);
	});
	
	function addProductFunc(event) {
		// 'event.currentTarget' refers to the clicked button
		const value = event.currentTarget.closest('.product-details').querySelector('.getSelectedProduct').dataset.index;
		// Create a new li element
		document.getElementById("cartList").innerHTML += ` <li class="single-cart-list">
			<a href="#" class="photo"><img src="" class="cart-thumb" alt="image" /></a>
			<div class="cart-list-txt">
				<h6><a href="#">arm <br> chair</a></h6>
				<p>1 x - <span class="price">$180.00</span></p>
			</div><!--/.cart-list-txt-->
			<div class="cart-close">
				<span class="lnr lnr-cross"></span>
			</div><!--/.cart-close-->
		</li>`;
		// Append the new li element to the cart list
	}
	
	
        /*==================================
* Author        : "ThemeSine"
* Template Name : Furniture E- commarce HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. owl carousel
3. welcome animation support
4. cart close
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	// 2. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:5,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:3
						},
						600:{
							items:3

						},
						1200:{
							items:5
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

		// ii.  testimonial-carousel
		
			$("#collection-carousel").owlCarousel({
				items: 1,
				autoplay: true,
				loop: true,
				dots:false,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


    // 3. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h4,.welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h4,.welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });


	// 4. cart-close
		$(".cart-close").click(function(){
			$(this).parents(".single-cart-list").fadeOut();
		});

});