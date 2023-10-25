
TopPlaylists.map((intem, index)=>{
    let topPLayListItem = document.querySelector('.playlists .capa-playlist').cloneNode(true)

    document.querySelector('.playlists').append(topPLayListItem)
    topPLayListItem.querySelector('.capa-playlist img').src = intem.img
    topPLayListItem.querySelector('.capa-playlist .playlist-titulo').innerHTML = intem.tituloPlayList
    topPLayListItem.querySelector('.capa-playlist .desc-playlist').innerHTML = intem.descPlayList

})

   let conteiner = document.querySelector('.scroll-horizontal')
   let card = document.querySelector('.playlists')
   let isPressDonw = false;
   let cursorXSpace;
   

   conteiner.addEventListener('touchstart', (e)=>{
    //alert('prestou')
    isPressDonw = true;
    cursorXSpace = e.offsetX - card.offsetLeft;
    console.log(card.offsetLeft)
    
   })
   
   conteiner.addEventListener('touchmove', (e)=>{
    if(!isPressDonw) return;
    e.preventDefault()
    card.style.left = `${e.offsetX - cursorXSpace}px`
    
   })
   