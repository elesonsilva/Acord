
TopPlaylists.map((intem, index)=>{
    let topPLayListItem = document.querySelector('.playlists .capa-playlist').cloneNode(true)

    document.querySelector('.playlists').append(topPLayListItem)
    topPLayListItem.querySelector('.capa-playlist img').src = intem.img
    topPLayListItem.querySelector('.capa-playlist .playlist-titulo').innerHTML = intem.tituloPlayList
    topPLayListItem.querySelector('.capa-playlist .desc-playlist').innerHTML = intem.descPlayList
})