const mymap = L.map('map-id').setView([-22.3577, -47.3849], 12);
const orphanagesSpan = document.querySelectorAll('#orphanages span')

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

const happyIcon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize:     [58, 68], // size of the icon
    iconAnchor:   [29, 68], // point of the icon which will correspond to marker's location
    popupAnchor:  [170, 2] // point from which the popup should open relative to the iconAnchor
});


function addMarkers({id, name, lat, lng}) {
    const popup = L.popup({
        closeButton:false,
        className:'map-popup',
        minWidth:240,
        minHeigth:240
    }).setContent(`${name} <a href="orphanage?id=${id}" class="choose-orphanage"><img src="/images/arrow-white.svg"></a>`)
    
    L
        .marker([lat, lng],{icon:happyIcon})
        .addTo(mymap)
        .bindPopup(popup)
}

orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }
    addMarkers(orphanage)
})
    