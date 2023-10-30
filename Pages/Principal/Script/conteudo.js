let TopPlaylists =[
    {
        id:1,
        img:'Imagens-tela-principal/eletronica-playlist.png',
        tituloPlayList:'Eletrônica',
        descPlayList: 'seleção dos Djs',
        imagensMusica: {
            img01:'Imagens-tela-principal/agente-fez-amor.jpg',
            img02:'Imagens-tela-principal/Luísa_Sonza_-_Braba.png',
            img03:'Imagens-tela-principal/maiara-e-maraisa.jpg',
            img04:'Imagens-tela-principal/anavitoria-vitor-kley.jpg',
            img05:'Imagens-tela-principal/just-the-way.jpg'
        },
        tituloDasMUsicas:{
            t1:'A Gente Fez Amor',
            t2:'Braba',
            t3:'Aí Eu Bebo',
            t4:'Pupila',
            t5:'Just the Way You Are',
        },
        artistas:{
            art1:'Gusttavo Lima',
            art2:'Luísa Sonza',
            art3:'Maiara & Maraisa',
            art4:'Anavitória e Vitor Kley',
            art5:'Bruno Mars',
        }
        
    },
    {
        id:2,
        img:'Imagens-tela-principal/festival-playlist.png',
        tituloPlayList:'Festival',
        descPlayList: 'As mais tocadas dos festivais'
    },
    {
        id:3,
        img:'Imagens-tela-principal/playlist-rock.png',
        tituloPlayList:'Rock',
        descPlayList: 'tops Rock and Roll'
    },
    {
        id:4,
        img:'Imagens-tela-principal/playlist-acostic.png',
        tituloPlayList:'Acustica',
        descPlayList: 'Mais ouvidas na parada'
    },
    {
        id:5,
        img:'Imagens-tela-principal/playlist-cover.png',
        tituloPlayList:'Cover',
        descPlayList: 'Melhores versões'
    }
]
let TopAlbuns =[
    {
        id:1,
        img:'Imagens-tela-principal/bruno-album.jpg',
        tituloAlbum:'Bruno Mars',
        descAlbum: 'XXIV Magic'
    },
    {
        id:2,
        img:'Imagens-tela-principal/anavitoria-albun.jpg',
        tituloPlayList:'AnaVitória',
        descAlbum: 'O tempo é agora'
    },
    {
        id:3,
        img:'Imagens-tela-principal/coldplay-album.jpg',
        tituloAlbum:'Coldplay',
        descAlbum: 'A Rush of Blood to the Head'
    },
    {
        id:4,
        img:'Imagens-tela-principal/ivete-album.jpg',
        tituloAlbum:'Ivete Sangalo',
        descAlbum: 'O mundo vai'
    },
    {
        id:5,
        img:'Imagens-tela-principal/guns-album.jpg',
        tituloAlbum:'Guns N Roses',
        descAlbum: 'Bad obsession'
    }
]
let TopMusica =[
    {
        id:1,
        img:'Imagens-tela-principal/agente-fez-amor.jpg',
        tituloMUsica:'A Gente Fez Amor',
        artista: 'Gusttavo Lima'
    },
    {
        id:2,
        img:'Imagens-tela-principal/Luísa_Sonza_-_Braba.png',
        tituloMUsica:'Braba',
        artista: 'Luísa Sonza'
    },
    {
        id:3,
        img:'Imagens-tela-principal/maiara-e-maraisa.jpg',
        tituloMUsica:'Aí Eu Bebo',
        artista: 'Maiara & Maraisa'
    },
    {
        id:4,
        img:'Imagens-tela-principal/anavitoria-vitor-kley.jpg',
        tituloMUsica:'Pupila',
        artista: 'Anavitória e Vitor Kley'
    },
    {
        id:5,
        img:'Imagens-tela-principal/just-the-way.jpg',
        tituloMUsica:'Just the Way You Are',
        artista: 'Bruno Mars'
    }
]

JSON.stringify(TopPlaylists);
JSON.stringify(TopAlbuns);
JSON.stringify(TopMusica);