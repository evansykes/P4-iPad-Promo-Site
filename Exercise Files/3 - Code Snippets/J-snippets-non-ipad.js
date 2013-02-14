/* JavaScript snippet: Written by Chris Converse for lynda.com */

function checkDevice(){
	if(window.isiPad){
		// do nothing
	}else{
		$('.page').css('display','none');
		$('body').css('background-color','#fff').append('<a href="mailto:?subject=Check%20out%20this%20eSales%20Aid%20Web%20App%20for%20iPad&amp;body=Add%20this%20Web%20App%20to%20your%20iPad%20by%20visiting:%20http://codifydesign.com/chris/lynda/samples/course-0010/"><img src="assets/images/template/non_ipad_message.png?v=1"/></a>');
	}
}