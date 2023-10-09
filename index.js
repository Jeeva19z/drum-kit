var numberofDrumButton =  document.querySelectorAll(".drum").length;

for(var i = 0 ; i < numberofDrumButton; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
   console.log(this.innerHTML);

    var innerhtmlFullpage = this.innerHTML;
    makesound(innerhtmlFullpage);

});
}


// -------------------- above all are click function-------------------


document.addEventListener("keypress", function(event){
// console.log(event);
makesound(event.key);
});




function makesound(key){
    
    switch (key) {
        case "f":
                var firstaudie = new Audio("sounds/tom-1.mp3");
                firstaudie.play();            
            break;
            case "a":
                var seconaudio = new Audio("sounds/tom-2.mp3");
                seconaudio.play();            
            break
            case "s":
                var thiredaudio = new Audio("sounds/tom-3.mp3");
                thiredaudio.play();            
            break
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();            
            break
            case "j":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();            
            break
            case "k":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();            
            break
            case "l":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();            
            break
    
        default:
            // alert("error")
            console.log("press correct key")
            break;
    }
   

}







// --------------------- onther way ----------------------------------------

// document.querySelector(".w").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();

// });

// document.querySelector(".a").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();

// });

// document.querySelector(".s").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();

// });
// document.querySelector(".d").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();

// });
// document.querySelector(".j").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();

// });
// document.querySelector(".k").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/snare.mp3");
//     audio.play();

// });
// document.querySelector(".l").addEventListener("click", function(){
//     // console.log(this.innerHTML);
   
//     var audio = new Audio("sounds/crash.mp3");
//     audio.play();

// });