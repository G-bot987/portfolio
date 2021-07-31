var gBtn = document.getElementById ("gBtn");
var gBotPic = document.getElementById ("RoboPic");

gBtn.addEventListener("click",function() {
    console.log(gBotPic);
});



gBotPic.addEventListener("click",function(event) { 
    var georgia = "./assets/img/georgiaimg.jpg" 
    if (event.target.dataset.imageName === "georgia"){
        event.target.src = "./assets/img/roboflav.png";
        event.target.dataset.imageName = "robo";
        
    }else{
        event.target.src = georgia;
        event.target.dataset.imageName = "georgia";
    }
    console.log(event.target.src)
    // if (event.target.src === georgia) {
    //     event.target.src = "./assets/img/roboflav.png"
    // } else {
    //     event.target.src= georgia

    // }
    })


   