let typeProjectsName = ['Home', 'Mobile', 'PC', 'Multiplayer', 'About Me',]
let typeTecnology = ['unity', 'frontend']
let typeContentSelected = 'Home'
let activeButtonsMenu = true

const unityDeveloperTimeExperience = new Date(2022, 1, 1)
const frontEndDeveloperTimeExperience = new Date(2023, 9, 28)
let currentDate = new Date()
let currentDay = currentDate.getDay()
let currentMonth = currentDate.getMonth()
let currentYear = currentDate.getFullYear()

MenuSelect()

function MenuSelect(itemMenuSelected = 0, classContent = 'Home'){
    let buttonSelect = document.getElementsByClassName("itemmenu")
    let initialIframe = document.getElementById("iframeContentGame")
    initialIframe.style.display = 'none';

    if (window.matchMedia("(max-width: 1024px)").matches) {
        for(let i = 0; i < buttonSelect.length; i++){ 
            if(i == itemMenuSelected){
                buttonSelect[i].style.color =  'rgb(255, 123, 0)';
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.5)';    
            }else{
                buttonSelect[i].style.backgroundColor =  '';
                buttonSelect[i].style.color =  'rgb(255, 255, 255)';
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }
        }
    } else {
        for(let i = 0; i < buttonSelect.length; i++){
            if(i == itemMenuSelected){
                buttonSelect[i].style.backgroundColor =  'rgb(231, 231, 231)';
                buttonSelect[i].style.color =  'rgb(0, 0, 0)';
                buttonSelect[i].style.padding = '15% 30%'
                buttonSelect[i].style.fontSize = '12px';
                buttonSelect[i].style.transform = 'scale(1.2)';
            }else{
                buttonSelect[i].style.backgroundColor =  '';
                buttonSelect[i].style.color =  'rgb(255, 255, 255)';
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
        }else{
            if(typeProjectsName[i] !== classContent && typeProjectsName[i] === 'Home')
            for(let j = 0; j < hidePreviewContents.length; j++){
                hidePreviewContents[j].style.display = 'none';
           }
        }
    }
    typeContentSelected = classContent
}
//ANOS DE EXPERIÊNCIA
function TecnologiesTimeExperience(whichTecnologyIs){
    if(whichTecnologyIs == typeTecnology[0]){
        let finalDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
        let monthsDifference = (finalDate.getFullYear() - unityDeveloperTimeExperience.getFullYear()) * 12;
        monthsDifference -= unityDeveloperTimeExperience.getMonth();
        monthsDifference += finalDate.getMonth();
        
        let yearsDifference = Math.floor(monthsDifference / 12);
        monthsDifference = monthsDifference % 12;
        
        if(yearsDifference >= 1){
            if(monthsDifference == 0){
                alert(`${yearsDifference} ano de experiêcia`); 
            }else {
                alert(`${yearsDifference}.${monthsDifference} anos de experiêcia`);
            } 
  
        }else if(monthsDifference >= 1){
            alert(`${monthsDifference} mês de experiêcia`); 
        }else{
            alert(`Menos de 1 mês de experiêcia`); 
        }
    }else{
        let finalDate = new Date(currentYear, currentMonth+1, currentDay+1); 
        
        let monthsDifference = (finalDate.getFullYear() - frontEndDeveloperTimeExperience.getFullYear()) * 12;
        monthsDifference -= frontEndDeveloperTimeExperience.getMonth();
        monthsDifference += finalDate.getMonth();
        
        let yearsDifference = Math.floor(monthsDifference / 12);
        monthsDifference = monthsDifference % 12;
        
        if(yearsDifference >= 1){
            if(monthsDifference == 0){
                alert(`${yearsDifference} ano de experiêcia`); 
            }else {
                alert(`${yearsDifference}.${monthsDifference} anos de experiêcia`);
            }  
        }else if(monthsDifference >= 1){
            alert(`${monthsDifference} mês de experiêcia`); 
        }else{
            alert(`Menos de 1 mês de experiêcia`); 
        }
    }
}
// TecnologiesTimeExperience(typeTecnology[0])


function OnClickPreviewToChangeToPageGame(){
    let initialIframe = document.getElementById("iframeContentGame")
    initialIframe.style.display = 'inline-block';

    for(let i = 0; i < typeProjectsName.length; i++){
        let hidePreviewContents = document.getElementsByClassName(typeProjectsName[i])

        for(let j = 0; j < hidePreviewContents.length; j++){
            hidePreviewContents[j].style.display = 'none';
        }
    }

    // activeButtonsMenu = !activeButtonsMenu

    // let buttonsMenu = document.getElementsByClassName('itemmenu')
    // for(let i = 0; i < buttonsMenu.length; i++){
    //     if(typeContentSelected == buttonsMenu[i].innerHTML){
    //         buttonsMenu[i].innerHTML = '< Back'
    //     }else{
    //         if(activeButtonsMenu == true){
    //             buttonsMenu[i].style.display = 'none';
    //         }else{
    //             buttonsMenu[i].style.display = 'inline-block';
    //         }
    //     }
    // } 
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

window.onresize = function(event) {
    if (window.innerWidth >= 1024) {
            MenuSelect()
        }else  MenuSelect()
    };
