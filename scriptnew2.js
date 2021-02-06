function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();
//player


// NOW I CLICK album-poster TO GET CURRENT SONG ID
$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    //console.log(dataSwitchId);

    // and now i use aplayer switch function see
    ap.list.switch(dataSwitchId); //this is static id but i use dynamic 

    // aplayer play function
    // when i click any song to play
    ap.play();

    // click to slideUp player see
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
        {
            name: 'Rebel Path',
            artist: 'CDPR',
            url: 'source/cyber.mp3',
            cover: 'source/cyber.jpg'
        },
        {
            name: 'Dovahkiin',  // SONG NAME
            artist: 'Bethesda', //Wløm
            url: 'source/dovah.mp3', // PATH NAME AND SONG URL
            cover: 'source/dovah.jpg' // COVER IMAGE
        },
        {
            name: 'Requiem',
            artist: 'Wløm',
            url: 'source/Requiem.mp3',
            cover: 'source/req.jpg',
        },
        {
            name: 'Euphøria',
            artist: 'Wløm',
            url: 'source/eup.mp3',
            cover: 'source/eup.png',
        }, 
        {
            name: 'Dark',
            artist: 'Wløm',
            url: 'source/dark.mp3',
            cover: 'source/dark.jpg',
        },
        {
            name: 'First Time',
            artist: 'Wløm',
            url: 'source/first.mp3',
            cover: 'source/first.jpg',
        },
        {
            name: 'In The Air',
            artist: 'Wløm',
            url: 'source/air.mp3',
            cover: 'source/air.jpg',
        },
        {
            name: 'No Glory(Wløm Remix)',
            artist: 'Wløm',
            url: 'source/glory.mp3',
            cover: 'source/glory.jpg',
        },
        {
            name: 'Feel Good',
            artist: 'Illenium',
            url: 'source/feel.mp3',
            cover: 'source/feel.jpg',
        }, {
            name: 'Amnesia',
            artist: 'Dreamndvr',
            url: 'source/amnesia.mp3',
            cover: 'source/amnesia.jpg',
        }, 
        {
            name: 'Someone Else',
            artist: 'Rezz',
            url: 'source/someone.mp3',
            cover: 'source/someone.jpg',
        },
        {
            name: 'Someone Else',
            artist: 'Rezz',
            url: 'source/idfc.mp3',
            cover: 'source/idfc.jpg',
        }, 
        {
            name: 'Higher',
            artist: 'lematre',
            url: 'source/higher.mp3',
            cover: 'source/higher.jpg',
        }, {
            name: 'Behind My eyes',
            artist: 'Apashe',
            url: 'source/behind.mp3',
            cover: 'source/behind.jpg',
        },
        
    ]
});
