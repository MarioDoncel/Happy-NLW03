const {lat,lng} = document.querySelector('span[data-lat]').dataset


const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}
const mymap = L.map('map-id', options).setView([lat, lng], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

const happyIcon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize:     [58, 68], // size of the icon
    iconAnchor:   [29, 68], // point of the icon which will correspond to marker's location
    popupAnchor:  [170, 2] // point from which the popup should open relative to the iconAnchor
});



L
    .marker([lat, lng],{icon:happyIcon})
    .addTo(mymap)
    
// image-gallery

function selectImage(event) {
    const buttons = document.querySelectorAll('.images button')
    const buttonTarget = event.currentTarget
    const buttonActive = Array.from(buttons).find(({classList:{value}}) => value == 'active' )
    const imagetarget =  buttonTarget.querySelector('img')
    const imagecontainer = document.querySelector('.orphanage-details > img')

    buttonActive.classList.remove('active')
    buttonTarget.classList.add('active')
    imagecontainer['src'] = imagetarget['src']
}