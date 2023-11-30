let typeProjectsName = ['Home', 'Mobile', 'PC', 'Multiplayer', 'About Me', 'Freelances',]
let typeTecnology = ['unity', 'frontend']
let typeContentSelected = 'Home'
let activeButtonsMenu = true

const unityDeveloperTimeExperience = new Date(2022, 1, 1)
const frontEndDeveloperTimeExperience = new Date(2023, 9, 28)
const myDayBorn = new Date(1993, 10, 23)
let currentDate = new Date()
let currentDay = currentDate.getDay()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()

//variables experience translated
let yearExp;
let yearMonthExp;
let monthExp;
let moreAMonthExp;
let lessAMonthExp;

MenuSelect()

function MenuSelect(itemMenuSelected = 0, classContent = 'Home'){
    let buttonSelect = document.getElementsByClassName("itemmenu")
    let initialIframe = document.getElementById("iframeContentGame")
    initialIframe.style.display = 'none';

    if (window.matchMedia("(max-width: 1024px)").matches) {
        for(let i = 0; i < buttonSelect.length; i++){ 
            if(i == itemMenuSelected){
                buttonSelect[i].style.color =  '#D16630';
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.5)';    
            }else{
                buttonSelect[i].style.backgroundColor =  '';
                buttonSelect[i].style.color =  '';
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }
        }
    } else {
        for(let i = 0; i < buttonSelect.length; i++){
            if(i == itemMenuSelected){
                buttonSelect[i].style.backgroundColor =  '#B4C5D1';
                buttonSelect[i].style.boxShadow = "1px 1px 5px #0D171F";
                buttonSelect[i].style.color =  'rgb(0, 0, 0)';
                buttonSelect[i].style.padding = '15% 30%'
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }else{
                buttonSelect[i].style.backgroundColor =  '';
                buttonSelect[i].style.boxShadow = "";
                buttonSelect[i].style.color =  '#F1F4F7';
                buttonSelect[i].style.padding = '15% 15%'
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }
        }
    }
    SelectTypeContent(classContent)
}
function SelectTypeContent(classContent){
    for(let i = 0; i < typeProjectsName.length; i++){
        let hidePreviewContents = document.getElementsByClassName(typeProjectsName[i])

        if(typeProjectsName[i] === classContent){
            for(let j = 0; j < hidePreviewContents.length; j++){
                hidePreviewContents[j].style.display = 'inline-block';
            }
            if(typeProjectsName[i] === 'About Me'){
                let iframeAboutMe = document.getElementById('iframeContentGame');
                iframeAboutMe.style.display = 'inline-block';
                iframeAboutMe.src = "aboutme.html";

                ResponsiveIframePageLoaded()
            }
        }else{
            if(typeProjectsName[i] !== classContent && typeProjectsName[i] === 'Home' ) { //|| typeProjectsName[i] === 'Freelances')
                for(let j = 0; j < hidePreviewContents.length; j++){
                    hidePreviewContents[j].style.display = 'none';
                }
            }
        }
    }
    typeContentSelected = classContent
}

function OnClickPreviewToChangeToPageGame(){
    let initialIframe = document.getElementById("iframeContentGame")
    initialIframe.style.display = 'inline-block';

    for(let i = 0; i < typeProjectsName.length; i++){
        let hidePreviewContents = document.getElementsByClassName(typeProjectsName[i])

        for(let j = 0; j < hidePreviewContents.length; j++){
            hidePreviewContents[j].style.display = 'none';
        }
    }
    ResponsiveIframePageLoaded()
}
function ResponsiveIframePageLoaded(){
    const iframe = document.getElementById('iframeContentGame');
    iframe.onload = function() {
        const body = iframe.contentDocument.body;
        const height = body.scrollHeight;
        iframe.style.height = height + 'px';
    }
}
//MY CURRENT AGE
function ReturnsMyCurrentAge(){
    let returnsAge;

    let currentDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
    let monthsAgeDifference = (currentDate.getFullYear() - myDayBorn.getFullYear()) * 12;
    monthsAgeDifference -= myDayBorn.getMonth();
    monthsAgeDifference += currentDate.getMonth();
    
    let yearsAgeDiffecrence = Math.floor(monthsAgeDifference / 12);
    monthsAgeDifference = monthsAgeDifference % 12;
    
    if(yearsAgeDiffecrence >= 1){
        returnsAge = `${yearsAgeDiffecrence}`
    }
    return returnsAge
}
//EXPERIENCE YEARS
function TecnologiesTimeExperience(whichTecnologyIs){
    let returnExperienceUnity;
    let returnExperienceFront;

    if(whichTecnologyIs == typeTecnology[0]){
        let finalDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
        let monthsDifference = (finalDate.getFullYear() - unityDeveloperTimeExperience.getFullYear()) * 12;
        monthsDifference -= unityDeveloperTimeExperience.getMonth();
        monthsDifference += finalDate.getMonth();
        
        let yearsDifference = Math.floor(monthsDifference / 12);
        monthsDifference = monthsDifference % 12;
        
        if(yearsDifference >= 1){
            if(monthsDifference == 0){
                returnExperienceUnity = `${yearsDifference} ${yearExp}`
            }else {
                returnExperienceUnity = `${yearsDifference}.${monthsDifference} ${yearMonthExp}`
            }  
        }else if(monthsDifference >= 1){
            returnExperienceUnity = `${monthsDifference} ${monthExp}`
        }else if(monthsDifference > 1){
            returnExperienceUnity = `${monthsDifference} ${moreAMonthExp}`
        }else {
            returnExperienceUnity = `${lessAMonthExp}`
        }
        return returnExperienceUnity
    }else{
        let finalDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
        let monthsDifference = (finalDate.getFullYear() - frontEndDeveloperTimeExperience.getFullYear()) * 12;
        monthsDifference -= frontEndDeveloperTimeExperience.getMonth();
        monthsDifference += finalDate.getMonth();
        
        let yearsDifference = Math.floor(monthsDifference / 12);
        monthsDifference = monthsDifference % 12;
        
        if(yearsDifference >= 1){
            if(monthsDifference == 0){
                returnExperienceFront = `${yearsDifference} ${yearExp}`
            }else {
                returnExperienceFront = `${yearsDifference}.${monthsDifference} ${yearMonthExp}`
            }  
        }else if(monthsDifference == 1){
            returnExperienceFront = `${monthsDifference} ${monthExp}`
        }else if(monthsDifference > 1){
            returnExperienceFront = `${monthsDifference} ${moreAMonthExp}`
        }else {
            returnExperienceFront = `${lessAMonthExp}`
        }
        return returnExperienceFront
    }
}

//===================================== TRANSLATE ========================
//menu
let projects = document.querySelector('h1#titleprojects'); 
let home = document.querySelector('li#home');
let multiplayer = document.querySelector('li#multiplayer');
let aboutme = document.querySelector('li#aboutme');
// //resume
let resumeFront = document.querySelector('.resume');
let contactmeAboutFront = document.querySelector('h2.contactme')
//game descriptions
let iframeContentGames = document.getElementById('iframeContentGame');
//preview description
let prevship = document.querySelector('p#prevship');
let prevbeast = document.querySelector('p#prevbeast');
let prevfps = document.querySelector('p#prevfps');
//preview description freelance
let prevevangelikids = document.querySelector('p#prevevangelikids');

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
    resumeFront.innerHTML = languageSelected.resume

    yearExp = languageSelected.year
    yearMonthExp = languageSelected.yearAndMonth
    monthExp = languageSelected.amonth
    moreAMonthExp = languageSelected.moreMonths
    lessAMonthExp = languageSelected.lessAMonth
    contactmeAboutFront.innerHTML = languageSelected.contactme
    //preview description
    prevship.innerHTML = languageSelected.previewDescriptionShipDestroyer
    prevbeast.innerHTML = languageSelected.previewDescriptionABeastOutside
    prevfps.innerHTML = languageSelected.previewDescriptionFpsMultiplayer

    //preview description freelance
    prevevangelikids.innerHTML = languageSelected.freelancePreviewDescriptionEvangelikids

    currentTranslate = languageSelected
    setInterval(TranslateGameContentsInIframes, 3000);
}
function TranslateGameContentsInIframes(whichGameContentIframeIs = nameGameContentIframe){
    let innerDoc = iframeContentGames.contentDocument || iframeContentGames.contentWindow.document;
    let innertextP = innerDoc.querySelector('body section div p#description')
    let innertextWelcomeH1 = innerDoc.querySelector('body section div h1')
    let innertextPresentationP = innerDoc.querySelector('body section div p#presentation')
    let resumeAboutMe = innerDoc.querySelector('body section div a.resume')
    let contactmePhone = innerDoc.querySelector('body section div h2.contactme')
    //tecnology descriptions
    let udityFrontDescription = innerDoc.querySelectorAll('body section div.barTec p'); 
    //setting my age
    let setMyCurrentAge = innerDoc.querySelector('body section div p span#age')  
    //freelances
    let frelanceEvangelikids = innerDoc.querySelector('div#freelancer p#freelancedescription')  

    innerDoc.onload = function() {
        const body = iframe.contentDocument.body;
        const height = body.scrollHeight;
        iframe.style.height = height + 'px';
    }
    
    nameGameContentIframe = whichGameContentIframeIs

    if(whichGameContentIframeIs == "shipdestroyer"){
        innertextP.innerHTML = currentTranslate.descriptionShipDestroyer
    }
    else if(whichGameContentIframeIs == "abeastoutside"){
        innertextP.innerHTML = currentTranslate.descriptionABeastOutside
    }else if(whichGameContentIframeIs ==  "aboutme"){
        innertextWelcomeH1.innerHTML = currentTranslate.welcome
        innertextPresentationP.innerHTML = currentTranslate.aboutmedescriptionP1
        innertextP.innerHTML = currentTranslate.aboutmedescriptionP2
        contactmePhone.innerHTML = currentTranslate.contactme
        resumeAboutMe.innerHTML = currentTranslate.resume

        setMyCurrentAge.innerHTML = ReturnsMyCurrentAge()

        udityFrontDescription.forEach(tec =>{
            if(tec.getAttribute('data-value') == 'unity'){
                tec.innerHTML = TecnologiesTimeExperience(typeTecnology[0])
            }else{
                tec.innerHTML = TecnologiesTimeExperience(typeTecnology[1])
            }
        })
    }else if(whichGameContentIframeIs ==  "fpsmultiplayer"){
        innertextP.innerHTML = currentTranslate.descriptionFPSMultiplayer
    }else if(whichGameContentIframeIs ==  "evangelikids"){
        frelanceEvangelikids.innerHTML = currentTranslate.freelanceDescriptionEvangelikids
    }
}
