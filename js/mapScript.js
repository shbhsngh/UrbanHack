
/*var neighborhoods = [
  {lat: 12.961, lng: 77.587},
  {lat: 12.951, lng: 77.577},
  {lat: 12.941, lng: 77.567}
 
];*/

var markers = [];

var map;
function initMap() 
{
		console.log("init Map");
		 map = new google.maps.Map(document.getElementById('map'), {
				center: {lat:12.97, lng:77.59},
				zoom: 15
			 
  		});
	
	
		// Try HTML5 geolocation.
		  if (navigator.geolocation) 
		  {
			  navigator.geolocation.getCurrentPosition(function(position) 
			 {
				  var pos = 
				  {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				  };

				 infoWindow.setPosition(pos);
				 infoWindow.setContent('Your Location');
				 map.setCenter(pos);
			}, function() 
			{
			  console.log("Blocked or browser doesn't support GeoLocation");
			 // handleLocationError(true, infoWindow, map.getCenter());
			});
		  } 
		  else 
		  {
			  console.log("Blocked or browser doesn't support GeoLocation");
			// Browser doesn't support Geolocation
			//handleLocationError(false, infoWindow, map.getCenter());
		  }
}


function drop() 
{
	  clearMarkers();
	  console.log(neighborhoods);
	  for (var i = 0; i < neighborhoods.length; i++) 
	  {
		addMarkerWithTimeout(neighborhoods[i], i*1); 

	  }
}

function addMarkerWithTimeout(position, timeout) 
{
	window.setTimeout(function() 
	{
		markers.push(new google.maps.Marker({
		position: position,
		map: map,
		animation: google.maps.Animation.DROP
    	}));
  	}, timeout);
}

function clearMarkers() 
{
	  for (var i = 0; i < markers.length; i++) 
	  {
		markers[i].setMap(null);
	  }
	  markers = [];
}



 /* var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });*/
 