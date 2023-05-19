function clean(a){
	document.getElementById(a).innerHTML= "ADVICE #"
}


function afficherBlague(v,b){
    document.getElementById("s").innerHTML = v
   	clean("d")
    document.getElementById("d").innerHTML += b 
}



function appel(){
	fetch("https://api.adviceslip.com/advice")
	.then(response => response.json())
	 .then(data => afficherBlague(data.slip.advice,data.slip.id))
}