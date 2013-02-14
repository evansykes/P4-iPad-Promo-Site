/* JavaScript snippet: Written by Chris Converse for lynda.com  */

$('.thumbnail img').on('click', function(){
$('.detail img').attr('src',$(this).attr('src')).removeClass('selected');
$('.thumbnails img').removeClass('selected');
$(this).addClass('selected');
	$('.thumbnails .caption').html($(this).parent().find('.caption_text').html());
});
		
