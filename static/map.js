function addToMap(){
    bvdotData = JSON.parse(httpGet('/serve?filename=bvdot'))
    for(i=0;i<bvdotData.length;i++){
        cam = bvdotData[i]
        marker = L.circleMarker([cam.coordinates.latitude, cam.coordinates.longitude],{radius:5,fillColor:'#438cc1',fillOpacity:1,color:'#ffffff',weight:0.5})
        marker.identifier = cam.URL
        marker.identifier2 = cam.id
        marker.on('click',addStream)
        marker.bindTooltip(cam.address)
        marker.addTo(map)
    }

    rdotData = JSON.parse(httpGet('/serve?filename=rdot'))
    for(i=0;i<rdotData.length;i++){
        cam = rdotData[i]
        marker = L.circleMarker([cam.coordinates.latitude, cam.coordinates.longitude],{radius:5,fillColor:'#696969',fillOpacity:1,color:'#ffffff',weight:0.5})
        marker.identifier = cam.URL
        marker.identifier2 = cam.id
        marker.on('click',addRdot)
        marker.bindTooltip(cam.address)
        marker.addTo(map)
    }
}

var map = L.map('map')
map.setView([47.61019328139843, -122.20153249317289],12)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);