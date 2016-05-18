var send = document.getElementById('send');
var input = document.getElementsByTagName('input');
send.onclick = function (){
	if (input[0].value == localStorage.getItem("email") && input[1].value == localStorage.getItem("password")) {
		console.log("correct shit");
		window.location="user_page.html";
	}
};