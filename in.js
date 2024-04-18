// select all buttons and add them to an array

var btnarray=document.querySelectorAll(".drum");


// set all buttons responsive to click
for (i=0;i<btnarray.length;i++){
    
    btnarray[i].addEventListener("click",function (){
        makeSound(this.innerHTML);
    });
}

document.addEventListener("keypress",function(e){
    makeSound(e.key);
});




function makeSound(key){
    switch (key) {
        case "w":
            document.getElementsByClassName("w")[0].style.color="orange";
            document.getElementsByClassName("a")[0].style.color="#DA0463";
            document.getElementsByClassName("s")[0].style.color="#DA0463";
            document.getElementsByClassName("d")[0].style.color="#DA0463";
            document.getElementsByClassName("j")[0].style.color="#DA0463";
            document.getElementsByClassName("k")[0].style.color="#DA0463";
            document.getElementsByClassName("l")[0].style.color="#DA0463";
            var audio1= new Audio("tom-1.mp3");
            audio1.play();
            
        break;
        
        case "a":
            var audio2= new Audio("tom-2.mp3");
            audio2.play();
            document.getElementsByClassName("a")[0].style.color="orange";
            document.getElementsByClassName("w")[0].style.color="#DA0463";
            document.getElementsByClassName("s")[0].style.color="#DA0463";
            document.getElementsByClassName("d")[0].style.color="#DA0463";
            document.getElementsByClassName("j")[0].style.color="#DA0463";
            document.getElementsByClassName("k")[0].style.color="#DA0463";
            document.getElementsByClassName("l")[0].style.color="#DA0463";
        break;
        case "s":
            var audio3= new Audio("tom-3.mp3");
            audio3.play();
            document.getElementsByClassName("s")[0].style.color="orange";
            document.getElementsByClassName("a")[0].style.color="#DA0463";
            document.getElementsByClassName("w")[0].style.color="#DA0463";
            document.getElementsByClassName("d")[0].style.color="#DA0463";
            document.getElementsByClassName("j")[0].style.color="#DA0463";
            document.getElementsByClassName("k")[0].style.color="#DA0463";
            document.getElementsByClassName("l")[0].style.color="#DA0463";
        break;
        case "d":
            var audio4= new Audio("tom-4.mp3");
            audio4.play();
            document.getElementsByClassName("d")[0].style.color="orange";
            document.getElementsByClassName("a")[0].style.color="#DA0463";
            document.getElementsByClassName("s")[0].style.color="#DA0463";
            document.getElementsByClassName("w")[0].style.color="#DA0463";
            document.getElementsByClassName("j")[0].style.color="#DA0463";
            document.getElementsByClassName("k")[0].style.color="#DA0463";
            document.getElementsByClassName("l")[0].style.color="#DA0463";
        break;
        case "j":
            var audio5= new Audio("kick-bass.mp3");
            audio5.play();
            document.getElementsByClassName("j")[0].style.color="orange";
            document.getElementsByClassName("a")[0].style.color="#DA0463";
            document.getElementsByClassName("s")[0].style.color="#DA0463";
            document.getElementsByClassName("d")[0].style.color="#DA0463";
            document.getElementsByClassName("w")[0].style.color="#DA0463";
            document.getElementsByClassName("k")[0].style.color="#DA0463";
            document.getElementsByClassName("l")[0].style.color="#DA0463";
        break;
        case "k":
            var audio6= new Audio("snare.mp3");
            audio6.play();
            document.getElementsByClassName("k")[0].style.color="orange";
            document.getElementsByClassName("a")[0].style.color="#DA0463";
            document.getElementsByClassName("s")[0].style.color="#DA0463";
            document.getElementsByClassName("d")[0].style.color="#DA0463";
            document.getElementsByClassName("j")[0].style.color="#DA0463";
            document.getElementsByClassName("w")[0].style.color="#DA0463";
            document.getElementsByClassName("l")[0].style.color="#DA0463";
        break;
        case "l":
            var audio7= new Audio("crash.mp3");
            audio7.play();
            document.getElementsByClassName("l")[0].style.color="orange";
            document.getElementsByClassName("a")[0].style.color="#DA0463";
            document.getElementsByClassName("s")[0].style.color="#DA0463";
            document.getElementsByClassName("d")[0].style.color="#DA0463";
            document.getElementsByClassName("j")[0].style.color="#DA0463";
            document.getElementsByClassName("k")[0].style.color="#DA0463";
            document.getElementsByClassName("w")[0].style.color="#DA0463";
        break;
        default:
            console.log(this.innerHTML);
        break;
    }
  
}