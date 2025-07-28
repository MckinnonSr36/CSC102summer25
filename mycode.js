function validateForm(){
            let firstName =document.getElementById("txtFirstName").value;
            

            let lastName = document.getElementById("txtLastName").value;

            let zipCode = document.getElementById("txtZip").vaule;

            console.log("FirstName"+ firstName);
             console.log("lastName"+ lastName);
              console.log("zipCode"+ zipCode);

              let fullName = FirstName + " " + lastName;

              console.log("fullName" + fullName);

              let divMessage = document.getElementById("divMessage");



              if (fullName.length == 1 || fullName.length > 20){

                divMessage.innerHTML = "Invaild name entered. Please try again";

              }
             
              else if (zipCode.length != 5){
                 divMessage.innerHTML ="Invaild zip code. Please try again";

              }

              else{
                 divMessage.innerHTML ="Congratulations," +fullName + "! The Secret word is Validation!";
              }

            return false;
        }
