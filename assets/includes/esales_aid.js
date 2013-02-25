/*  JavaScript Document                      */

$(document).ready(function() {
  
  setOrientationListener();
  
    
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
