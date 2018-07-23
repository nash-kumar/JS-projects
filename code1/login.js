window.onload = function(){
	
	var but = document.getElementById('btn');
	var name = document.getElementById('name');
	var pass = document.getElementById('pass');

	var auth = localStorage.getItem('auth');
	if(auth){
		location.href = 'login.html'
	}
	//but.onclick = function(){
		//console.log('click', name.value, pass.value)
		
	var isValid = function (){
		var errName = document.getElementById("validN")
		var errPass = document.getElementById("validP")
		var patt1 = name.value.match(/^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/)
		if(!patt1){

			errName.innerHTML = "Enter the valid email";
			return false;
			
		}else if(!pass.value){
			errName.innerHTML = "";
			errPass.innerHTML = "Enter the valid password";
			return false;
		}else{
			errName.innerHTML = errPass.innerHTML = ""
			return true;
		}

	}
	name.onkeypress = function(e){
		isValid();
	}
	pass.onkeypress = function(e){
		isValid();
	}
	but.onclick = function(){
		if(isValid()){
			alert("Succesful")
		}
	}
	
}
