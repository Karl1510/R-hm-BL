//Google mapsi Tartu skript
        function myMap() {
            var mapProp= {
                center:new google.maps.LatLng(58.377214, 26.727237),
                zoom:14,
                disableDefaultUI: true
                
            };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
                var toomkirik = {lat: 58.380256, lng: 26.714529};
                var lossi = {lat: 58.380315, lng: 26.720510};
                var marker = new google.maps.Marker({position: toomkirik, map: map, label: "Toomkirik"})
                var marker = new google.maps.Marker({position: lossi, map: map, label: "Lossi 1"})
        }