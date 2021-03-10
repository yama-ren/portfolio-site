const mySwiper1 = new Swiper('.swiper-container', {
	autoplay: {
		delay: 3500,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});
