
var data_bus_stops = [];
<<<<<<< HEAD
/*var neighborhoods = [
  {lat: 12.961, lng: 77.587},
  {lat: 12.951, lng: 77.577},
  {lat: 12.941, lng: 77.567}
 
];*/

var neighborhoods = [];
=======
var startPosition;
var endPosition;
>>>>>>> origin/master

console.log("ready!");
getBusStops("https://166.78.185.237:9990/urbanhack/0.1/stops");

<<<<<<< HEAD
=======
// initialize


>>>>>>> origin/master
//function to read all the data from API
function  getBusStops(api_url) {

    var xmlhttp;
    // code for IE7+, Firefox, Chrome, Opera, Safari
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    } else// code for IE6, IE5
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function ()
    {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            var a = JSON.parse(xmlhttp.responseText);
            var data_array = a["result"];
            //console.log(data_array);

            var len = data_array.length;
            //console.log("length : " + len);
            for (var i = 0; i < len; i++) {
                data_bus_stops.push({
                    number: (i + 1),
                    stop_name: data_array[i].stop_name,
                    area_name: data_array[i].area_name,
                    lat: data_array[i].lat,
                    long: data_array[i].long
                });
			    //console.log(data_array[i].lat);
				//drop();
				neighborhoods.push({lat: Number(data_array[i].lat), lng: Number(data_array[i].long)});
				//neighborhoods.push({lat: 12.961, lng: 77.587});

                
            }
<<<<<<< HEAD
			drop();
//			/console.log(data_bus_stops[1000]);
=======
            populateSearch();
>>>>>>> origin/master
        }
    }

    xmlhttp.open("GET", api_url, true);
    xmlhttp.setRequestHeader("Authorization", "Basic dXJiYW5oYWNrMjAxNUBnbWFpbC5jb206eHJjaU5ibXRjMTEy");
    xmlhttp.send();

}

function populateSearch() {
    for (var i = 0; i < data_bus_stops.length; i++) {
        $("#stoplist").append("<option>" + data_bus_stops[i].stop_name + "</option>");
    }
    awesomplete.evaluate();
}
