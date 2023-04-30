var players = []
var containers = []
var complete = false
var identifiers = []

function addStream(ID){
    console.log(ID.target.identifier2,identifiers)
    if (identifiers.includes(ID.target.identifier2)){
        idx = identifiers.indexOf(ID.target.identifier2)
        document.getElementById('streams').removeChild(document.getElementById('streams').children[idx])
        ID.target.setStyle({fillColor:'#438cc1'})
        players.splice(idx,1)
        containers.splice(idx,1)
        identifiers.splice(idx,1)
        console.log('remove')
    }else{
        ID.target.setStyle({fillColor:'#c17a43'})
        link = `https://trafficcams.bellevuewa.gov/traffic-edge/${ID.target.identifier}.stream/playlist.m3u8`
        video = document.createElement('video')
        video.id=ID.target.identifier2
        video.className = 'video-js vjs-default-skin players'
        video.controls = true
        video.preload='auto'

        source = document.createElement('source')
        source.src=link
        source.type='application/x-mpegURL'
        video.appendChild(source)
        containers.push(video)

        document.getElementById('streams').appendChild(video)
        newPlayer = videojs(ID.target.identifier2,{controlBar:{volumePanel:false,fullscreenToggle:true}})
        players.push(newPlayer)
        identifiers.push(ID.target.identifier2)
    }
    complete=false
    
}
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
