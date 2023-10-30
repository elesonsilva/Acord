
TopPlaylists.map((intem, index)=>{
    let topPLayListItem = document.querySelector('.card-playlist .swiper-slide').cloneNode(true)
    document.querySelector('.card-playlist').append(topPLayListItem)

    
    topPLayListItem.querySelector('.swiper-slide img').src = intem.img
    topPLayListItem.querySelector('.swiper-slide .playlist-titulo').innerHTML = intem.tituloPlayList
    topPLayListItem.querySelector('.swiper-slide .desc-playlist').innerHTML = intem.descPlayList

    topPLayListItem.querySelector('.swiper-slide img').addEventListener('click', (e)=>{
        e.preventDefault()
        transicao()

        document.querySelector('.lista-aberta .categoria .img-lista').src = intem.img
        document.querySelector('.lista-aberta .informacoes .titulo-lista').innerHTML = intem.tituloPlayList
        document.querySelector('.lista-aberta .informacoes .desc-lista').innerHTML = intem.descPlayList
     

    })

}
)
TopAlbuns.map((intem, index)=>{
    let albunsItem = document.querySelector('.card-album .swiper-slide').cloneNode(true)

    document.querySelector('.card-album').append(albunsItem)
    albunsItem.querySelector('.swiper-slide img').src = intem.img
    albunsItem.querySelector('.swiper-slide .album-titulo').innerHTML = intem.tituloAlbum
    albunsItem.querySelector('.swiper-slide .desc-album').innerHTML = intem.descAlbum

    albunsItem.querySelector('.swiper-slide img').addEventListener('click', (e)=>{
        e.preventDefault()
        transicao()

        document.querySelector('.lista-aberta .categoria .img-lista').src = intem.img
        document.querySelector('.lista-aberta .informacoes .titulo-lista').innerHTML = intem.tituloAlbum
        document.querySelector('.lista-aberta .informacoes .desc-lista').innerHTML = intem.descAlbum
    })
})

TopMusica.map((intem, index)=>{
    let musicaItem = document.querySelector('.card-musica .swiper-slide').cloneNode(true)

    document.querySelector('.card-musica').append(musicaItem)
    musicaItem.querySelector('.swiper-slide img').src = intem.img
    musicaItem.querySelector('.swiper-slide .musica-titulo').innerHTML = intem.tituloMUsica
    musicaItem.querySelector('.swiper-slide .nome-artista').innerHTML = intem.artista

    musicaItem.querySelector('.swiper-slide img').addEventListener('click', (e)=>{
        e.preventDefault()
        transicao()

        document.querySelector('.lista-aberta .categoria .img-lista').src = intem.img
        document.querySelector('.lista-aberta .informacoes .titulo-lista').innerHTML = intem.tituloMUsica
        document.querySelector('.lista-aberta .informacoes .desc-lista').innerHTML = intem.artista
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: false,
    
  });

  
document.querySelector('.lista-aberta .categoria .informacoes .bi').addEventListener('click',()=>{
    document.querySelector('.pagina-principal').style.display = 'block'
    document.querySelector('.lista-aberta').style.display = 'none'
})  

function transicao(){
    document.querySelector('.pagina-principal').style.display = 'none'
    document.querySelector('.lista-aberta').style.display = 'block'
}
/*
TopPlaylists.map((musica, index)=>{
    let musicaItem =  document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(musicaItem)
        
        
             
        musicaItem.querySelector('.lista-musica img').src = musica.imagensMusica.img01
        musicaItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = musica.tituloDasMUsicas.t1
        musicaItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = musica.artistas.art1

        
   })*/