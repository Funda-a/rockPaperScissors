const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//Computer wählt random Zahl, die dementsprechend in Stein, Schere, Papier umgewandelt wird
function getComputerChoice() {
            let randomNumber = Math.floor(Math.random() * 3); // 3 Ausgabemöglichkeiten
            if (randomNumber === 0) {
                return rock;
            } else if (randomNumber === 1) {
                return paper;
            }
            else {
                return scissors;
            }
        }

//Spieler wählt eine Zahl
 function getHumanChoice(){
    while(true){
            let choice = prompt("Choose rock, paper or scissors"); // Falls der Nutzer abbricht, Eingabeaufforderung wdh
            if (choice === null){
                alert('Type again');
                continue;
            }

            if (!choice) {
                alert("No input provided! Please choose rock, paper or scissors.");
                continue; // Falls nicht eingeben wird Eingabeaufforderung wdh
            }
            choice= choice.toLowerCase(); // kann erst nach choice===null eingefügt werden, da null keine Methode wie toLowerCase hat -> Fehler
            
            if (choice === rock || choice === paper || choice === scissors) {
                return choice;
            }
            else {
                alert ("Invalid input! Try again."); // erneute Eingabeaufforderung
            }
        }
        }

function playGame(){
    let humanScore = 0;
    let computerScore = 0; // Am Anfang beide auf 0 initialisiert
    
    function playRound(humanChoice, computerChoice){ // Funktion mit 2 Argumenten, da Werte von außen benötigt
                if (humanChoice===computerChoice){
                    console.log('Draw')
                }
                else if ((humanChoice==rock && computerChoice==paper) ||
                        (humanChoice==paper && computerChoice==rock) ||
                        (humanChoice==scissors && computerChoice==paper))
                {
                    console.log('Grats. ' + humanChoice + ' beats ' + computerChoice);
                    humanScore++; // Spieler bekommt einen Punkt
                }
                else {
                    console.log('You lose. ' + computerChoice + ' beats ' + humanChoice);
                    computerScore++; // Computer bekommt einen Punkt
        
                }
    }

    for (let i = 0; i < 5; i++) { // for loop: sobald Schleife 5 mal ausgeführt endet Spiel
        const humanSelection = getHumanChoice(); //hS und cS müssen für jeden Durchlauf neu festgelegt werden, da jede Runde neue Entscheidung
        const computerSelection = getComputerChoice(); 
        playRound(humanSelection, computerSelection); // playRound Funktion aufrufen mit von C&H gewählen Werten, Gewinner festlegen
    }
    
        console.log(`Final Scores:Human: ${humanScore}, Computer: ${computerScore}`);
            const result = 
            humanScore > computerScore
            ? "You win!"
            : humanScore < computerScore
            ? "You lose"
            : "It's a draw!";
              console.log(result);
 }
 playGame(); // Spiel sparten, da bisher nur definiert; Funktionen laufen nur dann, wenn sie aufgerufen werden