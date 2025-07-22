
function playDiceGame(){

                console.log("playDiceGame function called");

                let die1 = rollDie();
                let die2 = rollDie();
                
                console.log("die1=" +die1);
                console.log("die2="+die2);

                let sum = die1 + die2;
                

                let divDie1 = document.getElementById("divDie1");
                 let divDie2 = document.getElementById("divDie2");
                 let divSum = document.getElementById("divSum");
                let divResult = document.getElementById("divResult");

                //change the text in the HTML elements
                divDie1.textContent ="Die 1:" + die1;
                divDie2.textContent ="Die 2:" + die2;
                divSum.textContent= "Sum is:" + sum;




                if(sum == 8 || sum ==12){
                    console.log("you lost :(");

                    divResult.textContent="You lost:(";

                     //next statement will check to see if you won
                //Check to see if numbers are odd

                 } else if (die1==die2 && die1 % 1 ==0){
                console.log("You won:(");

                divResult.textContent=("You won");
                }
               


          }

          //function to simulate the rolling of a 12-sided die
          function rollDie(){
            let randomNumber = Math.random() * 12;

            //round the number up to the next whole number
            randomNumber = Math.ceil(randomNumber);

            // return the random number that was generated
            return randomNumber

 
          }
