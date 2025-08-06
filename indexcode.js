let intervalID = 0;

      function getRandomNumber(){
        return Math.floor(Math.random() * 1000);
      }

      function startMove(){
        let imgMeme = document.getElementById("memeimage");

        setInterval (function (){

          let newTop = getRandomNumber();
           let newLeft = getRandomNumber();

          imgMeme.style.left =newLeft + "px";
          imgMeme.style.top =newTop + "px";
          
          console.log("left=" + newLeft + "px");
          console.log("top=" + newTop + "px");
        },1000 ); 

        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
    }

    function stopMove(){

      clearInterval(intervalID);

       document.getElementById("btnStart").disabled = false;
        document.getElementById("btnStop").disabled = true;
    }
