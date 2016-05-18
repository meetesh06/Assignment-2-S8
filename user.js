var username = document.getElementsByClassName('user_name');
for (var i = 0; i < username.length; i++) {
	username[i].innerHTML = localStorage.getItem("name");
}