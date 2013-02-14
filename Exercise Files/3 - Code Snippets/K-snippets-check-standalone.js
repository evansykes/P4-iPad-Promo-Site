/* JavaScript snippet: Written by Chris Converse for lynda.com */

function checkiPadStandAlone(){
	if(window.navigator.standalone == false) {
		$('.page').css('display','none');
		$('body').css('background-image','url(assets/images/template/background_content_home.jpg?v=1)').append('<img  src="assets/images/template/add_to_homescreen.png?v=1"/>');
	}
}