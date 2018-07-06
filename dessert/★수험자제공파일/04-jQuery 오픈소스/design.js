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
	// ȭ���� ���̿� �ʺ� ������ ����ϴ�.
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	// ����ũ�� ���̿� �ʺ� ȭ���� ���̿� �ʺ� ������ �����մϴ�.
	$('.mask').css({'width':maskWidth,'height':maskHeight});

	// fade �ִϸ��̼� : 1�� ���� �˰� �ƴٰ� 80%�� ���������� ���մϴ�.
	$('.mask').fadeIn(1000);
	$('.mask').fadeTo("slow",0.8);

	// ���̾� �˾��� ����� ���� ���� ȭ���� ���̿� �ʺ��� ��� ���� ��ũ�� ���� ���Ͽ� ������ ����ϴ�.
	var left = ( $(window).scrollLeft() + ( $(window).width() - $('.window').width()) / 2 );
	var top = ( $(window).scrollTop() + ( $(window).height() - $('.window').height()) / 2 );

	// css ��Ÿ���� �����մϴ�.
	$('.window.'+ sw).css({'left':left,'top':top, 'position':'absolute'});

	// ���̾� �˾��� ���ϴ�.
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

		// showMask�� Ŭ���� �۵��ϸ� ���� ����ũ ���� ���̾� �˾��� ���ϴ�.
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

	// �ݱ�(close)�� ������ �� �۵��մϴ�.
	$('.window .close').click(function (e) {
		e.preventDefault();
		$('.mask, .window').hide();
	});

	// �� ���� ����ũ�� Ŭ���ÿ��� ��� �����ϵ��� ó���մϴ�.
	$('.mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

	gnbSubLayer();
});
