const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement =document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBody = document.querySelectorAll(".card-body")[1]// filmlerin olduğu div elementi çağırılır
const clear = document.getElementById("clear-films")
// UI objesini başlat
const ui = new UI()
// Storage objesi üret
const storage = new Storage()
// Tüm eventleri yükle
eventListeners()
function eventListeners(){ // sayfa yüklendiğinde yapılacaklar bçlümü
    form.addEventListener("submit",addFilm)
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage()
        ui.loadAllFilms(films)
    })
    cardBody.addEventListener("click",deleteFilm) // filmlerin olduğu alana click eventi yerleştirilir
    clear.addEventListener("click",clearAllFilms )
} 
function addFilm(e){
    const title= titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url ===""){
        // boş alan giriş kontrolü
        ui.displayMessages("Tü alanları doldurun","danger")
    }else{
        //Yeni film
        const newFilm =new Film(title,director,url)
        ui.addFilmToUI(newFilm)// Ara yüze film ekleme
        storage.addFilmStorage(newFilm) // storageye film ekleme
        ui.displayMessages("film Başarı ile Eklendi","success") 
    }
    ui.clearInputs(titleElement,directorElement,urlElement)

    e.preventDefault()
}
function deleteFilm(e){ // seçili event burda tespit edilerek silinir   
    if(e.target.id === "delete-film"){ // seçili eleman id si delete film ise istediğimiz yere basmış ve silme işlemi için içeri gir
        ui.deleteFilmFromUI(e.target) // seçili elementi deleteFilmFromUI fonksiyonuna gönderir
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent) 
        ui.displayMessages("Silme işlemi başarılı","success")
    } 
}
function clearAllFilms(e){
    if(confirm("Tüm Filimler Kalıcı Olarak Silinecek Eminmisiniz ?")){ // confirm fonksiyonu ile uyarı sorusu oluşturur.
        ui.displayMessages("Film Listesi Temizlendi","success")
        ui.clearAllFilmsFromUI()
        storage.clearAllFilmsFromUI()
    }    
}