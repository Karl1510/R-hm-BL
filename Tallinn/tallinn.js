//Google mapsi skript
        function myMap() {
            var mapProp= {
                center:new google.maps.LatLng(59.440676, 24.746248),
                zoom:14,
                disableDefaultUI: true
                
            };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
                var vabakas = {lat: 59.433949, lng: 24.744169};
                var kalamaja = {lat: 59.446923, lng: 24.743763};
                var marker = new google.maps.Marker({position: vabakas, map: map, label: "Vabakas"})
                var marker = new google.maps.Marker({position: kalamaja, map: map, label: "Kalamaja"})
        }