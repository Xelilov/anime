var header=document.querySelector(".header");
var buttons;


function createline(){
	for(var i=0; i<9;i++){
		buttons=document.querySelectorAll(".lineOne");
		var index=buttons.length-1;
		var lineone = document.createElement("div");
		lineone.setAttribute("class","lineOne")
		buttons[index].appendChild(lineone)
	}
}


function anime(){
	for(var i=0; i<=buttons.length;i++){
		buttons[i].style.transition = 5+"s"
		buttons[i].style.transform="rotateX(360deg) skewX(0deg)";
	}

}
var button=document.querySelector("button");
button.addEventListener("click",anime)



createline()