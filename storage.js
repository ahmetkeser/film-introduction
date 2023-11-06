function Storage(){

}
Storage.prototype.addFilmStorage=function(newFilm){
    let film = this.getFilmsFromStorage() // oluşturulan storage bilgilerini buraya çağırır
    film.push(newFilm) // çekilern verilere yeni gelen veri dahil edilir
    localStorage.setItem("films",JSON.stringify(film))// oluşturulan dizi içersinde bulunan objeler
}                                                     //tekrar json.stringify ile dönüşümü yapılarak storageye set edilir
Storage.prototype.getFilmsFromStorage = function(){ //kayıtlı storage çağıran fonksiyon
    let films
    if(localStorage.getItem("films")=== null){ //storage de  önceden oluşan bir film keyli değer yoksa 
        films=[]                                // films şeklinde bir arrey oluştur
    }else{
        films=JSON.parse(localStorage.getItem("films")) // varsa onu dizi şekline çeirerek al
    }
    return films
}
Storage.prototype.deleteFilmFromStorage = function(item){
    let films = this.getFilmsFromStorage() // storagedeki arrayı alır
    films.forEach(function(film,index){ // aldığı arrayda içersinde gezinerek tıklanan elemanı bulucaz
        if(film.title === item){
            films.splice(index,1)
        }
    });
    localStorage.setItem("films",JSON.stringify(films))
}