//menu
let projects = document.querySelector('h1#titleprojects'); //     document.querySelector('');
let home = document.querySelector('li#home');
let multiplayer = document.querySelector('li#multiplayer');
let aboutme = document.querySelector('li#aboutme');
// //resume
let resume = document.querySelector('.resume');
//game descriptions
// let shipDestroyerDescription = document.querySelector('');
// let aBeastOutsideDescription = document.querySelector('');
// let fpsMultiplayerDescrition = document.querySelector('');
// //tecnology descrriptions
// let udityDescription = document.querySelector(''); //estao em falta
// let frontEndDescription = document.querySelector('');

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
function Translation(idLanguage){
    projects.innerHTML = idLanguage.projects
    home.innerHTML = idLanguage.home
    multiplayer.innerHTML = idLanguage.multiplayer
    aboutme.innerHTML = idLanguage.aboutme

    resume.innerHTML = idLanguage.resume
}

