var id = document.getElementById('send');
var b = document.getElementsByTagName('input');
var bit = [];
var bit_1 = false;
function storevalue() {
	console.log("setting stuff");
	if(typeof(Storage) !== "undefined") {
		localStorage.setItem("name", b[0].value);
		localStorage.setItem("email", b[1].value);
		localStorage.setItem("password", b[2].value);
	}
}
id.onclick = function() {
	if (b[0].checkValidity() === true && b[1].checkValidity() === true && b[2].checkValidity() === true){
		storevalue();
		window.location="login.html";
	}
	// for (var i = 0; i < b.length; i++) {
	// 	if (b[i].checkValidity() === false) {
	// 		console.log("Please Fill Out The Form Correctly");
	// 	}
	// 	else {
	// 		console.log("Success");
	// 	}
	// }
};