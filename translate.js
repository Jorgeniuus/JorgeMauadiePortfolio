let jsonTranslateData = [
    {
        "language": "English",          
        "projects": "Projects",  
        "home": "Home",  
        "multiplayer": "Multiplayer",
        "aboutme": "About Me",
        "resume": "Download Resume",
        "descriptionShipDestroyer": "&nbsp; &nbsp; &nbsp;<b>Ship Destroyer</b> is a mobile game for <b>Android devices</b> in which you can fight against enemy ships and destroy them with your cannons. You will also be able to choose between 6 different ships, each with their own special abilities!<br><br> &nbsp; &nbsp; &nbsp;This game took about 3 months to be developed. In this project I worked with implementation of <b>In-App-Purchase</b> and <b>AdMob</b> system as well!",
        "descriptionABeastOutside": "&nbsp; &nbsp; &nbsp;<b>A Beast Outside</b> is a game was done for a Game Jam, with theme of game Horror and Feral Beast. It was my first game for a Game Jam in which my game came in fourth place out of 25 participants!",
        "descriptionFPSMultiplayer": "&nbsp; &nbsp; &nbsp;This is a shooter <b>multiplayer</b> game in first person made with <b>Photon Pun </b>for the purpose of learning the tool!"
    },
    {
        "language": "Português",          
        "projects": "Projetos",  
        "home": "Inicio",  
        "multiplayer": "Multijogador",
        "aboutme": "Sobre Mim",
        "resume": "Baixar Currículo",
        "descriptionShipDestroyer": "&nbsp; &nbsp; &nbsp;<b>Ship Destroyer</b> é um jogo mobile para <b>dispositivos Android</b> onde poderá lutar contra navios inimigos e destruí-los com seus canhões. Você também poderá escolher entre 6 navios diferentes, cada um com suas próprias habilidades especiais!<br><br> &nbsp; &nbsp; &nbsp;Esse jogo levou cerca de 3 meses para ser desenvolvido. Nesse projeto eu também trabalhei com a implementação do sistema <b>In-App-Purchase</b> e <b>AdMob</b>!",
        "descriptionABeastOutside": "&nbsp; &nbsp; &nbsp;<b>A Beast Outside</b> é um jogo que foi feito para uma Game Jam, cujo o tema era Horror and Feral Beast. Esse foi meu primeiro jogo para uma Game Jam no qual meu jogo ficou em quarto lugar entre 25 partifipantes!",
        "descriptionFPSMultiplayer": "&nbsp; &nbsp; &nbsp;Este é um jogo <b>multijogador</b> de tiro em primeira pessoa feito com <b>Photon Pun </b>com o propósito de aprender a ferramenta!"
    }
]


//menu
let projects = document.querySelector('h1#titleprojects'); 
let home = document.querySelector('li#home');
let multiplayer = document.querySelector('li#multiplayer');
let aboutme = document.querySelector('li#aboutme');
// //resume
let resume = document.querySelector('.resume');
//game descriptions
let iframeContentGames = document.getElementById('iframeContentGame');
// //tecnology descrriptions
// let udityDescription = document.querySelector(''); //estao em falta
// let frontEndDescription = document.querySelector('');

let currentTranslate;
let nameGameContentIframe;

let flagTranaslateElements = document.querySelectorAll('.translateElement');

$(".translateElement").on('touchstart click', function(event) {
    if(event.type == "click"){
        flagTranaslateElements.forEach(element => {
            let value = this.getAttribute('data-value');
            if(element.getAttribute('data-value') == value){
                TranslateConversion(value);
            }
        });
    }else if(event.type == "touchstart"){
        flagTranaslateElements.forEach(element => {
            let value = this.getAttribute('data-value');
            if(element.getAttribute('data-value') == value){
                TranslateConversion(value);
            }
        });
    }
});

// let flagTranaslateElements = document.querySelectorAll('.translateElement');
// flagTranaslateElements.forEach(element => {
//     element.addEventListener('touchstart', function() {
//         let value = this.getAttribute('data-value');
//         TranslateConversion(value);
//     });
// });

TranslateConversion()
function TranslateConversion(idLanguage = 0){ 

    Translation(jsonTranslateData[idLanguage]) 
/*
    fetch('TranslateData.json')
    .then(response => response.json())
    .then(data => {
        //'data' representa o JSON convertido em JavaScript
        Translation(data[idLanguage]) 
    })
    .catch(error => {
        // Tratamento de erro, caso a requisição falhe
        console.error('Erro ao buscar o arquivo JSON:', error);
    });
    */
}
function Translation(languageSelected){
    projects.innerHTML = languageSelected.projects
    home.innerHTML = languageSelected.home
    multiplayer.innerHTML = languageSelected.multiplayer
    aboutme.innerHTML = languageSelected.aboutme

    resume.innerHTML = languageSelected.resume

    currentTranslate = languageSelected

    // setInterval(TranslateGameContentsInIframes, 3000);
}
// function TranslateGameContentsInIframes(whichGameContentIframeIs = nameGameContentIframe){
//     let innerDoc = iframeContentGames.contentDocument || iframeContentGames.contentWindow.document;
//     let innertext = innerDoc.querySelector('body section div p')

//     nameGameContentIframe = whichGameContentIframeIs

//     if(whichGameContentIframeIs == "shipdestroyer"){
//         innertext.innerHTML = currentTranslate.descriptionShipDestroyer
//     }
//     else if(whichGameContentIframeIs == "abeastoutside"){
//         innertext.innerHTML = currentTranslate.descriptionABeastOutside
//     }else{
//         innertext.innerHTML = currentTranslate.descriptionFPSMultiplayer
//     }
// }




