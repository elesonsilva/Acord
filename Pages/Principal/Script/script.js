
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
                
                
                
                
                playTransicao()
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
            document.querySelector('.btnplay').addEventListener('click',()=>{
               
               
               
                playTransicao()
                const musicas = (i)=>{
                    let lista = Festival[i]
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
                    if(idMusica >= Festival.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = Festival.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
        }
        if(intem.id === 3){
            playlistRock()
            document.querySelector('.btnplay').addEventListener('click',()=>{

                
             
                playTransicao()
                const musicas = (i)=>{
                    let lista = Rock[i]
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
                    if(idMusica >= Rock.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = Rock.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
        }
        if(intem.id === 4){
            playlistAcustica()
            document.querySelector('.btnplay').addEventListener('click',()=>{


                 playTransicao()
                const musicas = (i)=>{
                    let lista = Acustica[i]
                    idMusica = i
                    barraprogresso.value = 0
                    document.querySelector('.musica-atual .img-da-musica').src = lista.img
                    document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = lista.NomeDaMusica
                    document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = lista.Artista
                    document.querySelector('.player .musicaSom ').src = lista.Audio
                    document.querySelector('.letra p').innerHTML = lista.letra
                    tempo.innerHTML ='00:00'

                    setTimeout(()=>{
                        barraprogresso.max = musica.duration
                        console.log(musica.duration)
                        duracaomusica.innerHTML = formatoTempo(musica.duration) 
                        
                    }, 300)

                }
                
                musicas(0) 

                avancar.addEventListener('click', ()=>{
                    if(idMusica >= Acustica.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = Acustica.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
        }
        if(intem.id === 5){
            playlistCover()
            document.querySelector('.btnplay').addEventListener('click',()=>{
                
                
                playTransicao()
               
                const musicas = (i)=>{
                    let lista = Cover[i]
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
                    if(idMusica >= Cover.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = Cover.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
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

        if(intem.id === 1){
            albumBrunoMars()
            document.querySelector('.btnplay').addEventListener('click',()=>{
                
                
                
                
                playTransicao()
                const musicas = (i)=>{
                    let lista = brunoMars[i]
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
                    if(idMusica >= brunoMars.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = brunoMars.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
            
        }
        if(intem.id === 2){
            albumcoldplay()
            document.querySelector('.btnplay').addEventListener('click',()=>{
                
                
                
                
                playTransicao()
                const musicas = (i)=>{
                    let lista = coldplay[i]
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
                    if(idMusica >= coldplay.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = coldplay.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
            
        }
        if(intem.id === 3){
            albumanavitoria()
            document.querySelector('.btnplay').addEventListener('click',()=>{
                
                
                
                
                playTransicao()
                const musicas = (i)=>{
                    let lista = anavitoria[i]
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
                    if(idMusica >= anavitoria.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = anavitoria.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
            
        }
        if(intem.id === 4){
            albumWorship()
            document.querySelector('.btnplay').addEventListener('click',()=>{
                
                
                
                
                playTransicao()
                const musicas = (i)=>{
                    let lista = whorship[i]
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
                    if(idMusica >= whorship.length -1){ idMusica = 0}
                    else{idMusica++}
                    musicas(idMusica)
                    playMusic()
                })
                voltar.addEventListener('click', ()=>{
                    if(idMusica <=0){idMusica = whorship.length -1}
                    else{idMusica--}
                    musicas(idMusica)
                    playMusic()
                })
            })
            
        }
    })
})



TopMusica.map((intem, index)=>{
    let musicaItem = document.querySelector('.card-musica .swiper-slide').cloneNode(true)

    document.querySelector('.card-musica').append(musicaItem)
    musicaItem.querySelector('.swiper-slide img').src = intem.img
    musicaItem.querySelector('.swiper-slide .musica-titulo').innerHTML = intem.NomeDaMusica
    musicaItem.querySelector('.swiper-slide .nome-artista').innerHTML = intem.Artista

    musicaItem.querySelector('.swiper-slide img').addEventListener('click', (e)=>{
        e.preventDefault()
        transicao()

        document.querySelector('.lista-aberta .categoria .img-lista').src = intem.img
        document.querySelector('.lista-aberta .informacoes .titulo-lista').innerHTML = intem.NomeDaMusica
        document.querySelector('.lista-aberta .informacoes .desc-lista').innerHTML = intem.Artista
    })
})




  



document.querySelector('.lista-aberta .categoria .informacoes .bi').addEventListener('click',()=>{
    window.location.reload()

})  
document.querySelector('.informacoes-musica .back-voltar').addEventListener('click', ()=>{
    window.location.reload()

})

let btnactive = document.querySelector('.btn-group-opcoes .bi-music-note-list')
btnactive.addEventListener('click', ()=>{
    let listaDeMusicas = document.querySelector('.lista-aberta')
    let imgMusica = document.querySelector('.page-player .musica-atual .img-da-musica')
    let backinfomusica = document.querySelector('.informacoes-musica')
    if(listaDeMusicas.style.display == 'none'){
        btnactive.classList.add('active')
        listaDeMusicas.style.display = 'block'
        imgMusica.classList.remove('img-full-window')
        backinfomusica.classList.remove('info-full-window')

    }else{
        btnactive.classList.remove('active')
        listaDeMusicas.style.display = 'none'
        imgMusica.classList.add('img-full-window')
        backinfomusica.classList.add('info-full-window')
    }
})
function ativaLista(){
    let imgMusica = document.querySelector('.page-player .musica-atual .img-da-musica')
     let backinfomusica = document.querySelector('.informacoes-musica')
               
        imgMusica.classList.add('img-full-window')
        backinfomusica.classList.add('info-full-window')
        document.querySelector('.lista-aberta').style.display = 'none'
        btnactive.classList.remove('active')
}

function transicao(){
    var tela = window.matchMedia('screen and (min-width: 800px)')
    if( tela.matches){
        //VERSÃO DESKTOP
    }else{
        document.querySelector('.pagina-principal').style.display = 'none'
        document.querySelector('.lista-aberta').style.display = 'block'
       
       document.querySelector('.Listas').style.display = 'none'
       document.querySelector('.page-player').style.display = 'none'
    }
    
}

function playTransicao(){
    var tela = window.matchMedia('screen and (min-width: 800px)')
    let btnactive = document.querySelector('.btn-group-opcoes .bi-music-note-list')
    if (tela.matches){
        
    }else{
        var telaplay =  document.querySelector('.page-player') 
        document.querySelector('.categoria').style.display = 'none'
        document.querySelector('.btn-goup-acoes').style.display = 'none'
        document.querySelector('.btnplay').style.display = 'none'
        document.querySelector('.Listas').style.display = 'none'
        

        document.querySelector('.lista-aberta').style.display = 'block'
        document.querySelector('.page-player').style.display = 'block'
        
        telaplay.animate([{right:'-100%'},{right:'0'}],{duration:100,fill:'forwards'})

        btnactive.classList.add('active')
        
    }

}

   function playlistEletronica(){
    Eletronica.map((eletronica, index)=>{
        let eletronicaItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(eletronicaItem)


        eletronicaItem.querySelector('.lista-musica img').src = eletronica.img
        eletronicaItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = eletronica.NomeDaMusica
        eletronicaItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = eletronica.Artista

        eletronicaItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0

                document.querySelector('.musica-atual .img-da-musica').src = eletronica.img
                document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = eletronica.NomeDaMusica
                document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = eletronica.Artista
                document.querySelector('.player .musicaSom ').src = eletronica.Audio

                setTimeout(()=>{
                    barraprogresso.max = musica.duration
                    console.log(musica.duration)
                    duracaomusica.innerHTML = formatoTempo(musica.duration) 
                    
                }, 300)
                
        })
    })
   }
   function playlistFestival(){
    Festival.map((festival, index)=>{
        let festivalItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(festivalItem)


        festivalItem.querySelector('.lista-musica img').src = festival.img
        festivalItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = festival.NomeDaMusica
        festivalItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = festival.Artista

        festivalItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0

                document.querySelector('.musica-atual .img-da-musica').src = festival.img
                document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = festival.NomeDaMusica
                document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = festival.Artista
                document.querySelector('.player .musicaSom ').src = festival.Audio

                setTimeout(()=>{
                    barraprogresso.max = musica.duration
                    console.log(musica.duration)
                    duracaomusica.innerHTML = formatoTempo(musica.duration) 
                    
                }, 300)
                  
        })
    })
   }
   function playlistRock(){
    Rock.map((rock, index)=>{
        let rockItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(rockItem)


        rockItem.querySelector('.lista-musica img').src = rock.img
        rockItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = rock.NomeDaMusica
        rockItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = rock.Artista

        rockItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0

                document.querySelector('.musica-atual .img-da-musica').src = rock.img
                document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = rock.NomeDaMusica
                document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = rock.Artista
                document.querySelector('.player .musicaSom ').src = rock.Audio

                setTimeout(()=>{
                    barraprogresso.max = musica.duration
                    console.log(musica.duration)
                    duracaomusica.innerHTML = formatoTempo(musica.duration) 
                    
                }, 300)
                  
        })
    })
   }
   function playlistAcustica(){
    Acustica.map((acustica, index)=>{
        let acusticaItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(acusticaItem)


        acusticaItem.querySelector('.lista-musica img').src = acustica.img
        acusticaItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = acustica.NomeDaMusica
        acusticaItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = acustica.Artista

        acusticaItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0

                document.querySelector('.musica-atual .img-da-musica').src = acustica.img
                document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = acustica.NomeDaMusica
                document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = acustica.Artista
                document.querySelector('.player .musicaSom ').src = acustica.Audio

                setTimeout(()=>{
                    barraprogresso.max = musica.duration
                    console.log(musica.duration)
                    duracaomusica.innerHTML = formatoTempo(musica.duration) 
                    
                }, 300)
                  
        })
    })
   }
   function playlistCover(){
    Cover.map((cover, index)=>{
        let coverItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(coverItem)


        coverItem.querySelector('.lista-musica img').src = cover.img
        coverItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = cover.NomeDaMusica
        coverItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = cover.Artista

        coverItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0

                document.querySelector('.musica-atual .img-da-musica').src = cover.img
                document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = cover.NomeDaMusica
                document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = cover.Artista
                document.querySelector('.player .musicaSom ').src = cover.Audio
                setTimeout(()=>{
                    barraprogresso.max = musica.duration
                    console.log(musica.duration)
                    duracaomusica.innerHTML = formatoTempo(musica.duration) 
                    
                }, 300)
        })
    })
   }
   
   function albumBrunoMars(){
    brunoMars.map((bruno, index)=>{
        let brunoItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(brunoItem)
        


        brunoItem.querySelector('.lista-musica img').src = bruno.img
        brunoItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = bruno.NomeDaMusica
        brunoItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = bruno.Artista

        

        brunoItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0
            document.querySelector('.musica-atual .img-da-musica').src = bruno.img
            document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = bruno.NomeDaMusica
            document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = bruno.Artista
            document.querySelector('.player .musicaSom ').src = bruno.Audio
                   
            setTimeout(()=>{
                barraprogresso.max = musica.duration
                console.log(musica.duration)
                duracaomusica.innerHTML = formatoTempo(musica.duration) 
                
            }, 300)
            
        })
    })
   }
   function albumcoldplay(){
    coldplay.map((cold, index)=>{
        let coldplayItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(coldplayItem)
        


        coldplayItem.querySelector('.lista-musica img').src = cold.img
        coldplayItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = cold.NomeDaMusica
        coldplayItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = cold.Artista

        

        coldplayItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0
            document.querySelector('.musica-atual .img-da-musica').src = cold.img
            document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = cold.NomeDaMusica
            document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = cold.Artista
            document.querySelector('.player .musicaSom ').src = cold.Audio
                   
            setTimeout(()=>{
                barraprogresso.max = musica.duration
                console.log(musica.duration)
                duracaomusica.innerHTML = formatoTempo(musica.duration) 
                
            }, 300)
            
        })
    })
   }
   function albumanavitoria(){
    anavitoria.map((ana, index)=>{
        let anavitoriaItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(anavitoriaItem)
        


        anavitoriaItem.querySelector('.lista-musica img').src = ana.img
        anavitoriaItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = ana.NomeDaMusica
        anavitoriaItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = ana.Artista

        

        anavitoriaItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0
            document.querySelector('.musica-atual .img-da-musica').src = ana.img
            document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = ana.NomeDaMusica
            document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = ana.Artista
            document.querySelector('.player .musicaSom ').src = ana.Audio
                   
            setTimeout(()=>{
                barraprogresso.max = musica.duration
                console.log(musica.duration)
                duracaomusica.innerHTML = formatoTempo(musica.duration) 
                
            }, 300)
            
        })
    })
   }
   function albumWorship(){
    whorship.map((whorship, index)=>{
        let WorshipItem = document.querySelector('.lista-aberta .lista-musica').cloneNode(true)
        document.querySelector('.lista-aberta').append(WorshipItem)
        


        WorshipItem.querySelector('.lista-musica img').src = whorship.img
        WorshipItem.querySelector('.lista-musica .informacoes-musica h3').innerHTML = whorship.NomeDaMusica
        WorshipItem.querySelector('.lista-musica .informacoes-musica p').innerHTML = whorship.Artista

        

        WorshipItem.querySelector('.lista-musica img').addEventListener('click', (e)=>{
            e.preventDefault()
            playTransicao()
            ativaLista()
            barraprogresso.value = 0
            document.querySelector('.musica-atual .img-da-musica').src = whorship.img
            document.querySelector('.musica-atual .informacoes-musica .nome-da-musica').innerHTML = whorship.NomeDaMusica
            document.querySelector('.musica-atual .informacoes-musica .artista').innerHTML = whorship.Artista
            document.querySelector('.player .musicaSom ').src = whorship.Audio
                   
            setTimeout(()=>{
                barraprogresso.max = musica.duration
                console.log(musica.duration)
                duracaomusica.innerHTML = formatoTempo(musica.duration) 
                
            }, 300)
            
        })
    })
   }


    brunoMars.map((br, index)=>{
        let historico = document.querySelector('.mix-favoritos .mix-card-favoritos').cloneNode(true)
        document.querySelector('.mix-favoritos').append(historico)

        historico.querySelector('.mix-favoritos img').src = br.img
        historico.querySelector('.mix-favoritos h4').innerHTML = br.NomeDaMusica
    })

    ArtistasFav.map((favArtist, index)=>{
        let art = document.querySelector('.card-artista-fav .swiper-slide').cloneNode(true)
        document.querySelector('.card-artista-fav').append(art)

        art.querySelector('.swiper-slide .img-artista-fav').src = favArtist.img
        art.querySelector('.swiper-slide .artista-nome').innerHTML = favArtist.none
    })


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

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: false,
        
      });