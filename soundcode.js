 //Function to add an audio element to the page and show the buttons fot play amd pause
        function addSound(){
            //shortcut to play
            let btnPlay = document.getElementById("btnPlay");
            //shortcut to pause
            let btnPause = document.getElementById("btnPause");
            // create an audio element
            let audSounds = document.createElement("audio");

            // give the audio  element id
            audSounds.setAttribute("id" ,"audSounds");

            // add control attribute so we can see the audio element on page
            audSounds.setAttribute("contols" , "controls");
            
            //set up the source for the file
            audSounds.setAttribute("src" ,"soundfile.mp3");

            //add the audio element to the page
            document.body.appendChild(audSounds);
     

            //unhide btnPlay
            btnPlay.hidden = false; 
            // unhide btnPause
            btnPause.hidden =false;
            // disable btnPause
            btnPause.disabled = true;

            // hide btnAddsound
            btnAddSound.hidden = true;


        }

        //funtiom to start the audio element
        function playSound(){
            //shortcut to audio element that we created
            let audio = document.getElementById("audSounds");

            //play the audio
            audio.play();
            //shortcut to play
            let btnPlay = document.getElementById("btnPlay");
            //shortcut to pause
            let btnPause = document.getElementById("btnPause");
            //disable btnPlay
            btnPlay.disabled = true; 
            // enable btnPause
            btnPause.disabled = false;
            
        }
        //function to pause the playimg of our audio element
            function pauseSound(){
                //shortcut to audio element that we created
                let audio = document.getElementById("audSounds");

                //pauce the audio
                audio.pause();
                  let btnPlay = document.getElementById("btnPlay");
            //shortcut to pause
            let btnPause = document.getElementById("btnPause");
            //enable btnPlay
            btnPlay.disabled = false; 
            //disable btnPause
            btnPause.disabled = true;
            }