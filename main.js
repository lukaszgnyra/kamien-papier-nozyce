const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const score = document.querySelector('.score');
const ROCK = "Kamień";
const PAPER = "Papier";
const SCISSORS = "Nożyce";
const options = ["Kamień", "Papier", "Nożyce"];

const personSpan = document.querySelector('.person span')
const computerSpan = document.querySelector('.computer span');

const scoresTable = [0,0,0];

const caseRock = () => {
    personSpan.textContent = options[0];
    console.log(options[0])
    computerPlay();
    game();
}
 const casePaper = () => {
    personSpan.textContent = "Papier";
    computerPlay();
    game();
}
const caseScissors = () => {
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
    let person = personSpan.textContent;
    let computer = computerSpan.textContent;
    if(person == computer){
        score.textContent = "Remis";
        scoresTable[2]++;
    }
    else if(person=="Kamień" && computer=="Nożyce" || person=="Papier" && computer=="Kamień" || person=="Nożyce" && computer=="Papier"){
        score.textContent="Wygrałeś";
        scoresTable[0]++;
    }
    else if(person=="Kamień" && computer=="Papier" || person=="Papier" && computer=="Nożyce" || person=="Nożyce" && computer=="Kamień"){ 
        score.textContent="Przegrałeś";
        scoresTable[1]++;
    }
    tabela();
}

const tabela = () =>{
    document.querySelector('.win').textContent= scoresTable[0];
    document.querySelector('.loss').textContent= scoresTable[1];
    // document.querySelector('.remis').textContent= scoresTable[2];
}

rock.addEventListener('click', caseRock);
paper.addEventListener('click', casePaper);
scissors.addEventListener('click', caseScissors);



