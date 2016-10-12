// tu codigo va aca
var a;
var b;
var c;
function callbackPromedio(a, b, c, callback){
	return (a+b+c)/3;
}
var i = 1;
function segundero(){
	setInterval(function(){ document.getElementById("titulo").innerHTML = i++; }, 1000);
}
callbackPromedio;
segundero();