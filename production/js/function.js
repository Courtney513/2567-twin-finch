// JavaScript Document

jQuery(document).ready(function($){
	
	// Smooth scroll home nav ==========================================
		$('#smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-100
			 }, 1000, function(){
		
			   // when done, add hash to url
			   // (default click behaviour)
			   window.location.hash = hash;
			 });
		
		});

	
	// google map ===========================================================
	function initialize() {
	  var mapProp = {
		center:new google.maps.LatLng(47.668643, -122.362423),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("google-map"),mapProp);
	}
	google.maps.event.addDomListener(window, 'load', initialize);
		
	
});


