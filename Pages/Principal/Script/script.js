
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
     
        if(intem.id === 1){
            playlistEletronica()
            document.querySelector('.btnplay').addEventListener('click',()=>{
                
                
                document.querySelector('.lista-aberta').style.display = 'none'
                document.querySelector('.page-player').style.display = 'block'
               
                
                const musicas = (i)=>{
                    let lista = Eletronica[i]
                    idMusica = i
                    barraprogresso.value = 0
                    document.querySelector('.musica-atual .img-da-musica').src = lista.img
                    document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = lista.NomeDaMusica
                    document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = lista.Artista
                    document.querySelector('.player .musicaSom ').src = lista.Audio
                    
                    tempo.innerHTML ='00:00'

                    setTimeout(()=>{
                        barraprogresso.max = musica.duration
                        console.log(musica.duration)
                        duracaomusica.innerHTML = formatoTempo(musica.duration) 
                        
                    }, 300)

                }
                
                musicas(0) 

                avancar.addEventListener('click', ()=>{
                    if(idMusica >= Eletronica.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = Eletronica.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
            
        }
        if(intem.id === 2){
            playlistFestival()
            
        }
        if(intem.id === 3){
            playlistRock()
            
        }
        if(intem.id === 4){
            playlistAcustica()
            
        }
        if(intem.id === 5){
            playlistCover()
            
        }
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
    window.location.reload()
})  



function transicao(){
    document.querySelector('.pagina-principal').style.display = 'none'
    document.querySelector('.lista-aberta').style.display = 'block'
}

   function playlistEletronica(){
    Eletronica.map((eletronica, index)=>{
        let eletronicaItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(eletronicaItem)


        eletronicaItem.querySelector('.lista-musica img').src = eletronica.img
        eletronicaItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = eletronica.NomeDaMusica
        eletronicaItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = eletronica.Artista
    })
   }
   function playlistFestival(){
    Festival.map((festival, index)=>{
        let festivalItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(festivalItem)


        festivalItem.querySelector('.lista-musica img').src = festival.img
        festivalItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = festival.NomeDaMusica
        festivalItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = festival.Artista
    })
   }
   function playlistRock(){
    Rock.map((rock, index)=>{
        let rockItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(rockItem)


        rockItem.querySelector('.lista-musica img').src = rock.img
        rockItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = rock.NomeDaMusica
        rockItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = rock.Artista
    })
   }
   function playlistAcustica(){
    Acustica.map((acustica, index)=>{
        let acusticaItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(acusticaItem)


        acusticaItem.querySelector('.lista-musica img').src = acustica.img
        acusticaItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = acustica.NomeDaMusica
        acusticaItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = acustica.Artista
    })
   }
   function playlistCover(){
    Cover.map((cover, index)=>{
        let coverItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(coverItem)


        coverItem.querySelector('.lista-musica img').src = cover.img
        coverItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = cover.NomeDaMusica
        coverItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = cover.Artista
    })
   }





let idMusica = 0
let barraprogresso = document.querySelector('.progresso')
const musica = document.querySelector('.musicaSom')   
const playbtn = document.querySelector('.play-btn')
const avancar = document.querySelector('.btn-avancar')
const voltar = document.querySelector('.btn-voltar')
const tempo = document.querySelector('.tempo-corrido')
const duracaomusica = document.querySelector('.duracao-musica') 

playbtn.addEventListener('click', ()=>{
   if(playbtn.className.includes('pause')){
    musica.play()
   }else{
    musica.pause()
   }
    playbtn.classList.toggle('pause')
})

const formatoTempo = (time)=>{
    let min = Math.floor(time / 60)
    if(min < 10){ min = `0${min}`} 
    let sec = Math.floor(time %  60)
    if(sec < 10){ sec = `0${sec}`}
    return `${min}:${sec}` 
}

  //barra de progresso
  setInterval(()=>{
    barraprogresso.value = musica.currentTime;  
    tempo.innerHTML = formatoTempo(musica.currentTime) 
    if(Math.floor(musica.currentTime)== Math.floor(barraprogresso.max)){
        avancar.click()
    }
    },500)

    barraprogresso.addEventListener('change', ()=>{
    musica.currentTime = barraprogresso.value;
    })

    const playMusic = ()=>{
        musica.play()
        playbtn.classList.remove('pause')
    }
    playbtn.click()