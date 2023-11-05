const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement =document.querySelector("#director")
const urlElement = document.querySelector("#url")
// UI objesini başlat
const ui = new UI
// Tüm eventleri yükle
eventListeners()
function eventListeners(){
    form.addEventListener("submit",addFilm)
}
function addFilm(e){
    const title= titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url ===""){
        // boş alan giriş kontrolü
    }else{
        //Yeni film
        const newFilm =new Film(title,director,url)
        ui.addFilmToUI(newFilm)// Ara yüze film ekleme
    }
    ui.clearInputs(titleElement,directorElement,urlElement)

    e.preventDefault()
}