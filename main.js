const kamien = document.querySelector('.kamien');
const papier = document.querySelector('.papier');
const nozyce = document.querySelector('.nozyce');

const wynik = document.querySelector('h1 span');

const options = ["Kamień", "Papier", "Nożyce"];

const personSpan = document.querySelector('.person span')
const computerSpan = document.querySelector('.computer span');

let wyniki = [0,0,0];

const caseKamien = () => {
    personSpan.textContent = "Kamień";
    computerPlay();
    game();
}
 const casePapier = () => {
    personSpan.textContent = "Papier";
    computerPlay();
    game();
}
const caseNozyce = () => {
    personSpan.textContent = "Nożyce";
    computerPlay();
    game();
}
const computerPlay = () => {
    const losujOption = () => {
        const index = Math.floor(Math.random() * options.length);
        return options[index];
    }
    computerSpan.textContent = losujOption();
}

const game = () => {
    let p = personSpan.textContent;
    let c = computerSpan.textContent;
    if(p == c){
        wynik.textContent = "remis";
        wyniki[2]++;
    }
    else if(p=="Kamień" && c=="Nożyce" || p=="Papier" && c=="Kamień" || p=="Nożyce" && c=="Papier"){
        wynik.textContent="wygrałeś";
        wyniki[0]++;
    }
    else if(p=="Kamień" && c=="Papier" || p=="Papier" && c=="Nożyce" || p=="Nożyce" && c=="Kamień"){ 
        wynik.textContent="przegrałeś";
        wyniki[1]++;
    }
    tabela();
}

const tabela = () =>{
    document.querySelector('.win').textContent= wyniki[0];
    document.querySelector('.loss').textContent= wyniki[1];
    document.querySelector('.remis').textContent= wyniki[2];
}
kamien.addEventListener('click', caseKamien);
papier.addEventListener('click', casePapier);
nozyce.addEventListener('click', caseNozyce);