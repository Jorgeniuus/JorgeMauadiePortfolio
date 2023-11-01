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

TranslateConversion()
function TranslateConversion(idLanguage = 0){ 

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
}
function Translation(languageSelected){
    projects.innerHTML = languageSelected.projects
    home.innerHTML = languageSelected.home
    multiplayer.innerHTML = languageSelected.multiplayer
    aboutme.innerHTML = languageSelected.aboutme

    resume.innerHTML = languageSelected.resume

    currentTranslate = languageSelected
    setInterval(TranslateGameContentsInIframes, 3000);
}
function TranslateGameContentsInIframes(whichGameContentIframeIs = nameGameContentIframe){
    let innerDoc = iframeContentGames.contentDocument || iframeContentGames.contentWindow.document;
    let innertext = innerDoc.querySelector('body section div p')

    nameGameContentIframe = whichGameContentIframeIs

    if(whichGameContentIframeIs == "shipdestroyer"){
        innertext.innerHTML = currentTranslate.descriptionShipDestroyer
    }
    else if(whichGameContentIframeIs == "abeastoutside"){
        innertext.innerHTML = currentTranslate.descriptionABeastOutside
    }else{
        innertext.innerHTML = currentTranslate.descriptionFPSMultiplayer
    }
}




