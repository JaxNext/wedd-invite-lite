"use strict";
$(document).ready(function () {

	/*==============================
		3. TimeCircles Countdown
	==============================*/
	/*  */
	$(".countdown").TimeCircles({
		fg_width: 0.02,
		bg_width: 0.3,
		circle_bg_color: '#7b7571',
		time: {
			Days: {
				text: '天',
				color: '#f9667e'
			},
			Hours: {
				text: '小时',
				color: '#f9667e'
			},
			Minutes: {
				text: '分钟',
				color: '#f9667e'
			},
			Seconds: {
				text: '秒钟',
				color: '#f9667e'
			}
		},
		count_past_zero: false
	});
	$(window).on("resize", function () {
		$(".countdown").TimeCircles().rebuild();
	});


	//滚动视差背景
	var wdWidth = $(window).width(); //窗口宽度
	var wdHeight = $(window).height(); //窗口高度
	var nvHeight = $('#nav').height() + pxCutter($('#nav').css('padding-top')) + pxCutter($('#nav').css('padding-bottom')); //导航栏高度
	var hmHeight = $('#home').height() + pxCutter($('#home').css('padding-top')) + pxCutter($('#home').css('padding-bottom')); //首屏高度
	var hmWidth = $('#home').width(); //首屏宽度
	var frsHeight = $('#frase').height() + pxCutter($('#frase').css('padding-top')) + pxCutter($('#frase').css('padding-bottom')); //请柬高度
	var frsWidth = $('#frase').width(); //请柬宽度
	var ctrHeight = $('#counter').height() + pxCutter($('#counter').css('padding-top')) + pxCutter($('#counter').css('padding-bottom')); //倒计时高度
	var ctrWidth = $('#counter').width(); //倒计时宽度
	var ftrHeight = $('#footer').height() + pxCutter($('#footer').css('padding-top')) + pxCutter($('#footer').css('padding-bottom')); //页脚高度
	var ftrWidth = $('#footer').width(); //页脚宽度

	if (frsHeight < wdHeight - nvHeight) {
		frsHeight = wdHeight - nvHeight
	}
	if (ctrHeight < wdHeight - nvHeight) {
		ctrHeight = wdHeight - nvHeight
	}

	$('.home-box').css('height', hmHeight + 'px');
	var hmDim = imgScaler($('.home-box').find('img'), hmWidth, hmHeight);
	$('.home-box').find('img').css('height', hmDim.h + 'px');
	$('.home-box').find('img').css('width', hmDim.w + 'px');

	$('.frase-box').css('height', frsHeight + 'px');
	var frsDim = imgScaler($('.frase-box').find('img'), frsWidth, frsHeight);
	$('.frase-box').find('img').css('height', frsDim.h + 'px');
	$('.frase-box').find('img').css('width', frsDim.w + 'px');

	$('.counter-box').css('height', ctrHeight + 'px');
	var ctrDim = imgScaler($('.counter-box').find('img'), ctrWidth, ctrHeight);
	$('.counter-box').find('img').css('height', ctrDim.h + 'px');
	$('.counter-box').find('img').css('width', ctrDim.w + 'px');

	$('.footer-box').css('height', ftrHeight + 'px');
	var ftrDim = imgScaler($('.footer-box').find('img'), ftrWidth, ftrHeight, 'ftr');
	$('.footer-box').find('img').css('height', ftrDim.h + 'px');
	$('.footer-box').find('img').css('width', ftrDim.w + 'px');


	$(document).scroll(function () {
		var wdScrollTop = $(window).scrollTop();
		// console.log($('#footer').offset().top-wdScrollTop,wdHeight)
		if (wdScrollTop < hmHeight) {
			$('.home-box').css('transform', 'translateY(0)');
		} else {
			$('.home-box').css('transform', 'translateY(-100%)');
		}

		if (($('#frase').offset().top - wdScrollTop) <= wdHeight && ($('#frase').offset().top - wdScrollTop) > -$('#frase').height()) {
			$('.frase-box').css('transform', 'translateY(' + nvHeight + 'px)');
		} else {
			$('.frase-box').css('transform', 'translateY(-100%)');
		}

		if (($('#counter').offset().top - wdScrollTop) <= wdHeight && ($('#counter').offset().top - wdScrollTop) > -$('#counter').height()) {
			$('.counter-box').css('transform', 'translateY(' + nvHeight + 'px)');
		} else {
			$('.counter-box').css('transform', 'translateY(-100%)');
		}

		if (($('#footer').offset().top - wdScrollTop) <= wdHeight) {
			$('.footer-box').css('transform', 'translateY(' + (wdHeight - ftrHeight) + 'px)');
		} else {
			$('.footer-box').css('transform', 'translateY(-100%)');
		}
	});

	$(window).resize(function () {
		wdWidth = $(window).width(); //窗口宽度
		wdHeight = $(window).height(); //窗口高度
		nvHeight = $('#nav').height() + pxCutter($('#nav').css('padding-top')) + pxCutter($('#nav').css('padding-bottom')); //导航栏高度
		hmHeight = $('#home').height() + pxCutter($('#home').css('padding-top')) + pxCutter($('#home').css('padding-bottom')); //首屏高度
		hmWidth = $('#home').width(); //首屏宽度
		frsHeight = $('#frase').height() + pxCutter($('#frase').css('padding-top')) + pxCutter($('#frase').css('padding-bottom')); //请柬高度
		frsWidth = $('#frase').width(); //请柬宽度
		ctrHeight = $('#counter').height() + pxCutter($('#counter').css('padding-top')) + pxCutter($('#counter').css('padding-bottom')); //倒计时高度
		ctrWidth = $('#counter').width(); //倒计时宽度
		ftrHeight = $('#footer').height() + pxCutter($('#footer').css('padding-top')) + pxCutter($('#footer').css('padding-bottom')); //页脚高度
		ftrWidth = $('#footer').width(); //页脚宽度

		if (frsHeight < wdHeight - nvHeight) {
			frsHeight = wdHeight - nvHeight
		}
		if (ctrHeight < wdHeight - nvHeight) {
			ctrHeight = wdHeight - nvHeight
		}

		$('.home-box').css('height', hmHeight + 'px');
		hmDim = imgScaler($('.home-box').find('img'), hmWidth, hmHeight);
		$('.home-box').find('img').css('height', hmDim.h + 'px');
		$('.home-box').find('img').css('width', hmDim.w + 'px');

		$('.frase-box').css('height', frsHeight + 'px');
		frsDim = imgScaler($('.frase-box').find('img'), frsWidth, frsHeight);
		$('.frase-box').find('img').css('height', frsDim.h + 'px');
		$('.frase-box').find('img').css('width', frsDim.w + 'px');

		$('.counter-box').css('height', ctrHeight + 'px');
		ctrDim = imgScaler($('.counter-box').find('img'), ctrWidth, ctrHeight);
		$('.counter-box').find('img').css('height', ctrDim.h + 'px');
		$('.counter-box').find('img').css('width', ctrDim.w + 'px');

		$('.footer-box').css('height', ftrHeight + 'px');
		ftrDim = imgScaler($('.footer-box').find('img'), ftrWidth, ftrHeight);
		$('.footer-box').find('img').css('height', ftrDim.h + 'px');
		$('.footer-box').find('img').css('width', ftrDim.w + 'px');
	});

	//设置请柬称呼
	var info = window.location.search;
	if (info.length) {
		var arr = info.replace(/\?/, '').split('&');
		var a = (arr[0].split('='))[1];
		var n = (arr[1].split('='))[1];
		var t = (arr[2].split('='))[1];
		$('#guest-att').html(decodeURI(a))
		$('#guest-name').html(decodeURI(n))
		$('#guest-gender').html(decodeURI(t))
	}

	/*==============================
		1. Nav - Sticky
	==============================*/
	$(window).on("load", function () {
		$('#fullscreenloading').delay(350).fadeOut('slow');
		$("#nav-sticky-wrapper").sticky({
			topSpacing: 0
		});
	});

	/*==============================
		2. Nav - One Page 
	==============================*/
	$('#nav_list').onePageNav({
		currentClass: 'active',
	});



	/*==============================
		4. Magnific Popup
	==============================*/
	$('.gallery-popup').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		gallery: {
			enabled: true
		},
		//type: 'image', //Detecta el tipo con la clase mfp-TYPE
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function (openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},
		markup: '<div class="mfp-figure">' +
			'<div class="mfp-close"></div>' +
			'<div class="mfp-img"></div>' +
			'<div class="mfp-bottom-bar">' +
			'<div class="mfp-title"></div>' +
			'<div class="mfp-counter"></div>' +
			'</div>' +
			'</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
		titleSrc: 'title'
		// other options
	});

});

function pxCutter(str) {
	return parseFloat(str.replace('px', ''));
}

function imgScaler(img, containerW, containerH, ftr) {
	var obj = null;
	var realW = img.width();
	var realH = img.height();
	var ratio = realW / realH;

	if (ratio < containerW / containerH) {
		if (ftr && ftr === 'ftr') {
			// alert('narrow '+realW+' '+realH)
		}

		realW = containerW;
		realH = realW / ratio;
	} else {
		if (ftr && ftr === 'ftr') {
			// alert('narrow '+realW+' '+realH)
		}

		realH = containerH;
		realW = realH * ratio;
	}

	obj = {
		'w': realW,
		'h': realH
	}
	return obj;
}