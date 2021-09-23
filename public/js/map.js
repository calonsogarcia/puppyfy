/* document.addEventListener(
    "DOMContentLoaded",
    () => {
        console.log("map script loaded!");
        var mymap = L.map('mapid').setView([40.2085, -3.713], 13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "pk.eyJ1IjoibHVjaWF2cCIsImEiOiJja3R3NDJ4enQyZ2RnMnZwbnhpaGUwbGExIn0 .30 YzArySY966fvc0WZZj0A"

        }).addTo(mymap);
        var marker = L.marker([51.5, -0.09]).addTo(mymap);
        marker.bindPopup("<b>Hello</b>").openPopup();
    },
    false
); */