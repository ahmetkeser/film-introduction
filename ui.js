function UI() {

}
UI.prototype.addFilmToUI = function (newFilm) {
    const filmList = document.getElementById("films")
    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.diractor}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
}  
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value=""
    element2.value=""
    element3.value=""
}
UI.prototype.displayMessages=function(message,type){ // uyarı mesaj fonksiyonu
    const cardBody=document.querySelector(".card-body")
    const div = document.createElement("div")
    div.className = `alert alert-${type}`
    div.textContent = message
    cardBody.appendChild(div)
    setTimeout(function (){ // uyarı mesajı belirli süre sonra kaybolması için
        div.remove()
    },1000)

}
UI.prototype.loadAllFilms= function(films){ // sayfa yüklendiğinde localstorageden gelen dizi elemanlarını yazar
    const filmList=document.getElementById("films")
    films.forEach(function(films){
        filmList.innerHTML += `
        <tr>
        <td><img src="${films.url}" class="img-fluid img-thumbnail"></td>
        <td>${films.title}</td>
        <td>${films.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`
            
    });

}
UI.prototype.deleteFilmFromUI= function(item){
    item.parentElement.parentElement.remove()//a tagının bulunduğu iki üst dala çıkarak satırı kompple silmemiz gerekir bu sebeple iki kez perentElement yazılır.

}
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films")
    while(filmList.firstElementChild !== null){ //  film listesinde eleman kalmayana kadar dön
        filmList.firstElementChild.remove()
    }
}