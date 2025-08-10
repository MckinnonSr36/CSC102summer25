 // funtion to handle user input of the word
        function checkPalindrome(event){
            //prevent the form from submitting
            event.preventDefault();

            //create a shortcut to the txtWord user input
            let userInput = document.getElementById("txtWord").value;
             
            //create shortcut to the output div
            let divPalinResults = document.getElementById ("divPalinResults");
           //set up a variable to hold if the word is a palindrome or not
           let isPalin = isPalindrome(userInput);

           // this is equivalent to isPalin == true
           if (isPalin){
               divPalinResults.textContent = userInput + "is a palindrome!";
           }
            // this is not a palindrome
           else{
             divPalinResults.textContent = userInput + "is not a palindrome!";

           }




        }

        // function to see if the string is a palindrome
        // stringToTest is what the user entered
        function isPalindrome(stringToTest){
            //Convert the string to test to lower case
            stringToTest = stringToTest.toLowerCase();
            // set up a varible to reverse the content of
            let stringToReverse = stringToTest;
        
           //convert the string, so take "Jay" convert to an array where each letter is in its own slot
           // reverse the content of our new array, so now we have "y" "a" "J"
           // then join the arrary so is becomes a string again - yaJ
            stringToReverse = stringToReverse.split("").reverse().join("");
            // compare the orginial string to the backward string
            // you can use either == or ===
            if (stringToTest == stringToReverse){
                //return true tp the calling code
                return true;

            }
            //as a default, return false
            return false;
        }