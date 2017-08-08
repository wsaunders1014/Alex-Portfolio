var active = 0;
$(document).ready(function(){
	$('#nav').find('li').hover(function(){
		$('#nav').find('li').eq(0).removeClass('hover');
		$(this).addClass('hover');
	}, function(){
		$('#nav').find('li').removeClass('hover');
	}).click(function(){
		var text = $(this).find('.text').html().split(' ').join('-');
		$('#content .wrapper > div').hide();
		$('#content')[0].scrollTop = 0;
		active = $(this).index();
		$('#'+text).show();

	});
	$('#nav').on('mouseleave', function(){
		$('#nav').find('li').eq(active).addClass('hover');
	})
})