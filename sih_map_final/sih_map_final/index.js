var zoom=5
setTimeout(function(){
  zoom=8;
}, 3000);
var map = L.map('map').setView([21.1458, 79.0882], zoom);
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Amit Mondal';
const tiles=L.tileLayer(tileUrl,{attribution});
tiles.addTo(map);  
const cities=["Nagpur","Delhi","Ahemdabad","Mumbai","Chennai","Kolkata","Agra"] 
const locat=[[21.1458, 79.0882],
[28.7041,77.1025],
[23.0225,72.5714],
[19.0760,72.8777],
[13.0827,80.2707],
[22.5726,88.3639],
[27.1767,78.0081],
]
c=1;
lc=1;
const loc_visited=[[21.1458, 79.0882]];
const visited=["Nagpur"];
L.marker([21.1458, 79.0882]).addTo(map)
    .bindPopup('Nagpur')
    .openPopup();

arr=[
    [21.1458, 79.0882],
    [28.7041,77.1025],
    [23.0225,72.5714],
    [19.0760,72.8777],
    [13.0827,80.2707]
]
const redIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
const poly=L.polyline(loc_visited);

for(var i=0;i<visited.length;i++){
    
    if(i==visited.length-1){
        L.marker(loc_visited[i],{icon: redIcon}).addTo(map).bindPopup(visited[i]).openPopup();
        
    }
    else{
        L.marker(loc_visited[i]).addTo(map).bindPopup(visited[i]).openPopup();
    }
}
function makecities(){
    const poly=L.polyline(loc_visited);

    for(var i=0;i<visited.length;i++){
    
        if(i==visited.length-1){
            L.marker(loc_visited[i],{icon: redIcon}).addTo(map).bindPopup(visited[i]).openPopup().on('click',onClick);
        }
        else{
            L.marker(loc_visited[i]).addTo(map).bindPopup(visited[i]).openPopup().on('click',onClick);
        }
    }
    poly.addTo(map);
}
function onClick(){
    window.location.replace("grandpa"+".html");

}
document.addEventListener('keydown',()=>{
    visited.push(cities[c]);
    loc_visited.push(locat[lc]);
    console.log(visited);
    console.log(loc_visited);
    makecities();
    c++;
    lc++;
})
// L.marker([28.7041,77.1025]).addTo(map).bindPopup("Delhi").openPopup().on('click', onClick);
// L.marker([23.0225,72.5714]).addTo(map).bindPopup("Ahemdabad").openPopup();
// L.marker([19.0760,72.8777]).addTo(map).bindPopup("Mumbai").openPopup();
// L.marker([13.0827,80.2707], {icon: redIcon}).addTo(map).bindPopup("Chennai").openPopup();
poly.addTo(map);