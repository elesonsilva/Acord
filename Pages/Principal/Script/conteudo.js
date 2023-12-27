let TopPlaylists =[
    {
        id:1,
        img:'Imagens-tela-principal/Gatoeletronica.png',
        tituloPlayList:'Eletrônica',
        descPlayList: 'seleção dos Djs',
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
        tituloPlayList:'MPB',
        descPlayList: 'As Mais Tocadas Nos Barzinhos'
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
        img:'Imagens-tela-principal/coldplay-album.jpg',
        tituloAlbum:'Coldplay',
        descAlbum: 'A Rush of Blood to the Head'
    },
    {
        id:3,
        img:'Imagens-tela-principal/anavitoria-albun.jpg',
        tituloAlbum:'Ana Vitória',
        descAlbum: 'O tempo é agora'
    },
    {
        id:4,
        img:'Imagens-tela-principal/worship.png',
        tituloAlbum:'worship',
        descAlbum: 'Louvor e adoração'
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
        img:'Medias/PlayListFestival/Imagens/uptownFunk.jpg',
        NomeDaMusica:'Uptown Funk',
        Artista: 'Mark Ronson ft. Bruno Mars',
        Audio:'Medias/PlayListFestival/Audios/UptownFunk.mp3'

    },
    {
        id:2,
        img:'Medias/Album Coldplay/imagens/Viva La Vida.jpg',
        NomeDaMusica:'Viva La Vida',
        Artista: 'Coldplay',
        Audio:'Medias/Album Coldplay/Audios/Coldplay  Viva La Vida Official Video.mp3'
    },
    {
        id:3,
        img:'Medias/Album Coldplay/imagens/paradise.jpg',
        NomeDaMusica:'Paradise',
        Artista: 'Coldplay',
        Audio:'Medias/Album Coldplay/Audios/Coldplay  Paradise Official Video.mp3'
    },
    {
        id:4,
        img:'Medias/Album Bruno Mars/Imagens/bruno-album.jpg',
        NomeDaMusica:'24K Magic',
        Artista: 'Bruno Mars',
        Audio:'Medias/Album Bruno Mars/Audios/Bruno Mars  24K Magic Official Music Video.mp3'
    },
    {
        id:5,
        img:'Medias/Album Bruno Mars/Imagens/locked.jpg',
        NomeDaMusica:'Locked Out Of Heaven',
        Artista: 'Bruno Mars',
        Audio:'Medias/Album Bruno Mars/Audios/Bruno Mars  Locked Out Of Heaven Official Music Video.mp3'
    },
    {
        id:6,
        img:'Medias/Album Coldplay/imagens/The Scientist.jpg',
        NomeDaMusica:'The Scientist',
        Artista: 'Coldplay',
        Audio:'Medias/Album Coldplay/Audios/Coldplay  The Scientist Official 4K Video.mp3'
    },
    {
        id:7,
        img:'Medias/PlayListFestival/Imagens/Beyonce_-_Halo.png',
        NomeDaMusica:'Halo',
        Artista: 'Beyoncé',
        Audio:'Medias/PlayListFestival/Audios/BeyoncéHalo.mp3'

    },
    {
        id:8,
        img:'Medias/PlayListAcustica/Imagens/Jorgeversilo.jpg',
        NomeDaMusica:'Homem-Aranha',
        Artista: 'Jorge Vercillo',
        Audio:'Medias/PlayListAcustica/Audios/JorgeVercilloHomemAranha.mp3'
    },
    {
        id:9,
        img:'Medias/PlayListCover/Imagens/amarina.jpg',
        NomeDaMusica:'Amarelo, azul e branco| Anavitória e Rita Lee',
        Artista: 'Amarina',
        Audio:'Medias/PlayListCover/Audios/AMARELOAZULEBRANCOAnavitóriaCoverdeAMARINA.mp3'
    },
    {
        id:10,
        img:'Medias/PlayListCover/Imagens/amarina.jpg',
        NomeDaMusica:'MASHUP FORRÓ',
        Artista: 'Amarina',
        Audio:'Medias/PlayListCover/Audios/MASHUPFORRÓCoverdeAMARINA.mp3'
    },
    {
        id:11,
        img:'Medias/PlayListCover/Imagens/amarina.jpg',
        NomeDaMusica:'ANUNCIAÇÃO | Alceu Valença',
        Artista: 'Amarina',
        Audio:'Medias/PlayListCover/Audios/ANUNCIAÇÃOAlceuValençaCoverdeAMARINA.mp3'
    },
    {
        id:12,
        img:'Medias/PlayListCover/Imagens/amarina.jpg',
        NomeDaMusica:'SAMURAI | Djavan',
        Artista: 'Amarina',
        Audio:'Medias/PlayListCover/Audios/SAMURAIDjavanCoverdeAMARINA.mp3'
    },
    {
        id:13,
        img:'Medias/PlayListRock/Imagens/whinofchange.jpg',
        NomeDaMusica:'Wind of Change',
        Artista: 'Scorpions',
        Audio:'Medias/PlayListRock/Audio/ScorpionsWindOfChange.mp3'
    },
    {
        id:14,
        img:'Medias/PlayListRock/Imagens/whinofchange.jpg',
        NomeDaMusica:'Send Me an Angel',
        Artista: 'Scorpions',
        Audio:'Medias/PlayListRock/Audio/ScorpionsSendMeAnAngel.mp3'
    },
    {
        id:15,
        img:'Medias/PlayListRock/Imagens/acoustica.jpg',
        NomeDaMusica:'Always Somewhere',
        Artista: 'Scorpions',
        Audio:'Medias/PlayListRock/Audio/ScorpionsAlwaysSomewhere.mp3'
    },
    {
        id:16,
        img:'Medias/PlayListEletronica/Imagens/Aromchupa.jpg',
        NomeDaMusica:'Im an Albatraoz',
        Artista: 'AronChupa e Little Sis Nora',
        Audio:'Medias/PlayListEletronica/Audios/AronChupa.mp3'

    },
    {
        id:17,
        img:'Medias/PlayListEletronica/Imagens/Showtek.jpg',
        NomeDaMusica:'Bad',
        Artista: 'David Guetta e Showtek',
        Audio:'Medias/PlayListEletronica/Audios/DavidGuetta-ShowtekBadftVassy.mp3'

    }
]
let ArtistasFav =[
    {
        id:1,
        none: 'Bruno Mars',
        img:'Imagens-tela-principal/bruno-mars.jpg'
    },
    {
        id:2,
        none: 'Guns N Roses',
        img:'Imagens-tela-principal/guns.png'
    },
    {
        id:3,
        none: 'Luísa Sonza',
        img:'Imagens-tela-principal/luisa.png'
    },
    {
        id:4,
        none: 'Coldplay',
        img:'Imagens-tela-principal/cold.jpg'
    },
    {
        id:5,
        none: 'Metallica',
        img:'Imagens-tela-principal/metallica.png'
    },
]
let Topbusca = [
    { img:'Medias/PlayListCover/Imagens/amarina.jpg', titulo:'SAMURAI | Djavan'},
    { img:'Medias/PlayListFestival/Imagens/Beyonce_-_Halo.png', titulo:'Halo'},
    { img:'Medias/PlayListFestival/Imagens/uptownFunk.jpg', titulo:'Uptown Funk'},
    { img:'Imagens-tela-principal/anavitoria-albun.jpg',titulo:'Ana Vitória'},
    { img:'Medias/PlayListCover/Imagens/amarina.jpg', titulo:'MASHUP FORRÓ',},
    { img:'Imagens-tela-principal/playlist-acostic.png',titulo:'MPB'},
    { img:'Imagens-tela-principal/bruno-album.jpg',titulo:'Bruno Mars'},
    { img:'Imagens-tela-principal/coldplay-album.jpg',titulo:'Coldplay'},
    { img:'Imagens-tela-principal/festival-playlist.png',titulo:'Festival'},
    { img:'Medias/PlayListEletronica/Imagens/Showtek.jpg', titulo:'Bad',},
    { img:'Imagens-tela-principal/playlist-rock.png',titulo:'Rock'},
    { img:'Imagens-tela-principal/worship.png',titulo:'worship'},
    { img:'Imagens-tela-principal/guns-album.jpg',titulo:'Guns N Roses'},
    { img:'Imagens-tela-principal/Gatoeletronica.png', titulo:'Eletrônica'},
    { img:'Medias/PlayListRock/Imagens/whinofchange.jpg', titulo:'Wind of Change'},
    { img:'Medias/PlayListEletronica/Imagens/Aromchupa.jpg', titulo:'Im an Albatraoz'},
    { img:'Imagens-tela-principal/playlist-cover.png',titulo:'cover'},
    { img:'Medias/Album Coldplay/imagens/paradise.jpg', titulo:'Paradise',},
    { img:'Medias/PlayListRock/Imagens/acoustica.jpg', titulo:'Always Somewhere',},
    { img:'Medias/PlayListAcustica/Imagens/Jorgeversilo.jpg', titulo:'Homem-Aranha'},
]
JSON.stringify(TopPlaylists);
JSON.stringify(TopAlbuns);
JSON.stringify(TopMusica);
JSON.stringify(ArtistasFav);
JSON.stringify(Topbusca);