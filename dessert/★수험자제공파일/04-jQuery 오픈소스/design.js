function gnbSubLayer() {
	var gnbWrap = $('.navi');

	var submenuOpen = function(){ gnbWrap.addClass('on'); }
	var submenuClose = function(){ gnbWrap.removeClass('on'); }

	var foucsOutClose = function(){
		var focusout = 0;
		setTimeout(function(){		
			if(!gnbWrap.find(':focus').length){
				gnbWrap.removeClass('on');
			}
		},10)
	}

	//event binding
	gnbWrap.hover(submenuOpen, submenuClose);
	gnbWrap.bind('focusin',submenuOpen);
	gnbWrap.bind('focusout',foucsOutClose);
	
}

function wrapWindowByMask(sw){
	// 화면의 높이와 너비를 변수로 만듭니다.
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	// 마스크의 높이와 너비를 화면의 높이와 너비 변수로 설정합니다.
	$('.mask').css({'width':maskWidth,'height':maskHeight});

	// fade 애니메이션 : 1초 동안 검게 됐다가 80%의 불투명으로 변합니다.
	$('.mask').fadeIn(1000);
	$('.mask').fadeTo("slow",0.8);

	// 레이어 팝업을 가운데로 띄우기 위해 화면의 높이와 너비의 가운데 값과 스크롤 값을 더하여 변수로 만듭니다.
	var left = ( $(window).scrollLeft() + ( $(window).width() - $('.window').width()) / 2 );
	var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );

	// css 스타일을 변경합니다.
	$('.window.'+ sw).css({'left':left,'top':top, 'position':'absolute'});

	// 레이어 팝업을 띄웁니다.
	$('.window.'+ sw).show();
}


$(document).ready(function(){
	var slider = $('.bxslider').bxSlider({
			auto: true, mode:'fade',
		});
	var slider_01 =	$('.bxslider_01').bxSlider({
			auto: true,autoControls: true, mode:'vertical',
		});
	var slider_02 =	$('.bxslider_02').bxSlider({
			auto: true,controls:false,pagerCustom: '#bx-pager1'
		});
	var slider_03 =	$('.bxslider_03').bxSlider({
			auto: true,controls:false,pager:false,maxSlides: 3,moveSlides:1,  slideWidth: 100,slideMargin:0,autoHover:true,
		});

		// showMask를 클릭시 작동하며 검은 마스크 배경과 레이어 팝업을 띄웁니다.
	$('.showMask.m1').click(function(e){
		e.preventDefault();
		wrapWindowByMask('m1');
	});
	$('.showMask.m2').click(function(e){
		e.preventDefault();
		wrapWindowByMask('m2');
	});
	$('.showMask.m3').click(function(e){
		e.preventDefault();
		wrapWindowByMask('m3');
	});
	$('.showMask.m4').click(function(e){
		e.preventDefault();
		wrapWindowByMask('m4');
	});

	// 닫기(close)를 눌렀을 때 작동합니다.
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('.mask, .window').hide();
	});

	// 뒤 검은 마스크를 클릭시에도 모두 제거하도록 처리합니다.
	$('.mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

	gnbSubLayer();
});
