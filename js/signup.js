/*function specialCharsPresent(name, email, password)
{
	alert("hello");
	var regex = new RegExp("^[a-zA-Z]+$");
	if(!regex.test(name) || !regex.test(email))
	{
		return true;
	}
	regex = new RegExp("^[a-zA-Z0-9_\@\.]+$");
	if(!regex.test(password))
	{
		return true;
	}
	return false;
}

function empty(str)
{
	if(str === '')
		return true;
	return false;
}

$(document).ready( function(){
	$("#signup").click( function(){
		var email = $("#email").val();
		var pass  =  $("#password").val();
		var name = $("#firstName").val() + $("#secondName").val();
		
		if(empty(name) || empty(email) || empty(pass))
		{
			alert("Fields can't be empty!");
		}
		else
		if(specialCharsPresent(name, pass, email))
		{
			alert("Allowed set of characters are as follows:\n" + 
				  "Name:      a-zA-Z \n" +
				  "email:     a-zA-Z@. \n" +
				  "password:  a-zA-Z@.");
		}
		else if( pass === $("#rePassword").val())
		{
			alert("Password doesn't match!");
		}
		else
		{
			alert("Sign-up Successful! Redirecting you to the login page...");
		}
	});
});*/