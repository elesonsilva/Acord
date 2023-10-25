
TopPlaylists.map((intem, index)=>{
    let topPLayListItem = document.querySelector('.card-playlist .swiper-slide').cloneNode(true)

    document.querySelector('.card-playlist').append(topPLayListItem)
    topPLayListItem.querySelector('.swiper-slide img').src = intem.img
    topPLayListItem.querySelector('.swiper-slide .playlist-titulo').innerHTML = intem.tituloPlayList
    topPLayListItem.querySelector('.swiper-slide .desc-playlist').innerHTML = intem.descPlayList

})
TopAlbuns.map((intem, index)=>{
    let albunsItem = document.querySelector('.card-album .swiper-slide').cloneNode(true)

    document.querySelector('.card-album').append(albunsItem)
    albunsItem.querySelector('.swiper-slide img').src = intem.img
    albunsItem.querySelector('.swiper-slide .album-titulo').innerHTML = intem.tituloAlbum
    albunsItem.querySelector('.swiper-slide .desc-album').innerHTML = intem.descAlbum
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    
  });
   