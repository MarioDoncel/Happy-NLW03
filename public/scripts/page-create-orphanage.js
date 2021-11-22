
// MAP

const mymap = L.map('map-id').setView([-22.3577, -47.3849], 13);
let marker;

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);

const happyIcon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize:     [58, 68], // size of the icon
    iconAnchor:   [29, 68], // point of the icon which will correspond to marker's location
});


mymap.on('click', (event) => {
    const {lat, lng} = event.latlng
    const latInput = document.querySelector('input[name="lat"]')
    const lngInput = document.querySelector('input[name="lng"]')

    if (marker) mymap.removeLayer(marker)
    marker = L.marker([lat,lng], {icon:happyIcon})
                .addTo(mymap)
    
    latInput.value = lat
    lngInput.value = lng
})

// ----------------------------------------

function addPhotoField() {
    const photoInputsContainer = document.querySelector('#images')
    const lastPhotoInput = photoInputsContainer.lastElementChild
    const newPhotoInput = lastPhotoInput.cloneNode(true)

    if(newPhotoInput.firstElementChild.value) {
        newPhotoInput.firstElementChild.value = ''
        photoInputsContainer.appendChild(newPhotoInput)
    }
}

function deletePhotoField(event) {
    const photoField = event.currentTarget.parentNode
    const numberOfPhotoInputs = document.querySelector('#images').children.length

    numberOfPhotoInputs > 1 ? photoField.remove() : photoField.firstElementChild.value = ''
}
    
function openOnWeekends(event, boolean) {
    const inputOpenOnWeekends = document.querySelector('#open_on_weekends')
    const buttonClicked = event.target
    const buttons = document.querySelectorAll('.button-select button')
    
    if(buttonClicked.classlist != 'active') {
        buttons.forEach(button => button.classList.toggle('active'))
    }
    boolean? inputOpenOnWeekends.value = 1 : inputOpenOnWeekends.value = 0
}

function validate(event){
    const lat = document.querySelector('input[name="lat"]').value
    const lng = document.querySelector('input[name="lng"]').value
    if(!lat || !lng) {
        alert('É necessário definir um ponto no mapa.')
        event.preventDefault()
    }
}
    