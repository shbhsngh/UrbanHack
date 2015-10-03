
var data_bus_stops = [];

console.log("ready!");
getBusStops("https://166.78.185.237:9990/urbanhack/0.1/stops");



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
            //console.log("" + xmlhttp.responseText);

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

                console.log("new Bus" + data_array[i].stop_name);
            }
        }
    }

    xmlhttp.open("GET", api_url, true);
    xmlhttp.setRequestHeader("Authorization", "Basic dXJiYW5oYWNrMjAxNUBnbWFpbC5jb206eHJjaU5ibXRjMTEy");
    xmlhttp.send();

}
