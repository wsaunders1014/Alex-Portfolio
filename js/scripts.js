$(document).ready(function(){
	$('#nav').find('li').hover(function(){
		$('#nav').find('li').eq(0).removeClass('hover');
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	}).click(function(){
		var text = $(this).find('.text').html().split(' ').join('-');
		console.log(text);
		$('#content .wrapper > div').hide();
		$('#'+text).show();
	});
})