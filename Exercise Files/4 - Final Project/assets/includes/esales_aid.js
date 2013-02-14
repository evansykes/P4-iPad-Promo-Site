/*  JavaScript Document                      */
/*  Written by Chris Converse for lynda.com  */

var isiPad = navigator.userAgent.indexOf("iPad") != -1;

// begin iScroll
var myScroll;
function loaded() {
	myScroll = new iScroll('scroll',{checkDOMChanges:true});
}
document.addEventListener('DOMContentLoaded', loaded, false);
// end iScroll

$(document).ready(function(){

	// Check to see if visitor is using an iPad
	checkDevice();  // turn on for final
	
	// Check to see if Web App is saved to Homescreen
	checkiPadStandAlone();
	
	document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);

	window.setTimeout('startMap()',3000);

	setOrientationListener();
	
	$('nav a').on('touchstart', function(){
		changePage($(this).attr('data-file'));
		$('nav .nav_trigger').trigger('touchstart');
		$('nav a').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('.banner_logo').on('touchstart', function(){
		$('nav a:nth-child(1)').trigger('touchstart');
	});

	$('nav a:nth-child(1)').trigger('touchstart');
	//$('nav a:nth-child(4)').trigger('touchstart');

});

function setOrientationListener(){
	rotationInterval = setInterval( function(){ updateOrientation(); }, 500 );
}

function updateOrientation(){
	if($('body').width() < 1024){
		$('.page').removeClass('landscape').addClass('portrait');
	}else{
		$('.page').removeClass('portrait').addClass('landscape');	
	}
}

function changePage(fileName){
	$('.content_container').animate({opacity:0}, 500, function(){
		// Check for home page
		if (fileName == 'home.html?v=1'){
			$('.page').addClass('home');
		}else{
			$('.page').removeClass('home');
		}
		// Check for contact page
		if (fileName == 'contact_us.html?v=1'){
			$('.content_container').addClass('contact_us');
			$('.map_container').removeClass('off').addClass('on');
		}else{
			$('.content_container').removeClass('contact_us');
			$('.map_container').removeClass('on').addClass('off');
		}
		// load content
		$('.content_loading_container').load('assets/content/'+fileName, function(){
			$('.content_container').delay(250).animate({opacity:1}, 500);
		});
	});
}

function startMap(){
    var latlng = new google.maps.LatLng(34.38576009017598, -119.48599576950073); 
    var myOptions = {zoom: 16, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP}; 
    var map = new google.maps.Map(document.getElementById('map_canvas'),myOptions); 
    var marker = new google.maps.Marker({
        position: latlng, 
        map: map,
        title:"Office Location"
    }); 
}

function checkDevice(){
	if(window.isiPad){
		// do nothing
	}else{
		$('.page').css('display','none');
		$('body').css('background-color','#fff').append('<a href="mailto:?subject=Check%20out%20this%20eSales%20Aid%20Web%20App%20for%20iPad&amp;body=Add%20this%20Web%20App%20to%20Your%20iPad%20by%20visiting:%20http://codifydesign.com/chris/lynda/samples/course-0010/"><img src="assets/images/template/non_ipad_message.png?v=1"/></a>');
	}
}

function checkiPadStandAlone(){
	if(window.navigator.standalone == false) {
		$('.page').css('display','none');
		$('body').css('background-image','url(assets/images/template/background_content_home.jpg?v=1)').append('<img  src="assets/images/template/add_to_homescreen.png?v=1"/>');
	}
}
