$.validator.addMethod("customValidation", 
		function(username, element) {return /^[A-Za-z\d\@\_]+$/.test(value);},
		"Sorry, no special character is allowed except A-Za-z@_");


$document.ready( function(){
	$("#login_form").validate(
				rules:{
						email: {
									required: true;
									minLength: 3;
									maxLength: 10;
									customValidation: true;
						}
				},
				message:{
						email: {
									required: "email can't be empty";
									minLength: "At least 3 password characters.";
									maxLength: "At most 10 password characters."; 
						}
				}
	);
});



/*function specialCharsPresent(username, pass)
		{
			var regex = new RegExp("^[a-zA-Z0-9_\@\.]+$");
			if (!regex.test(username))
			{
				return true;
			}
			return false;
		}
		
		$(document).ready(function(){
			$("#signIn").click(function(){
				var user = "admin";
				var pass = "admin";
				var username = $("#emailID").val();
				var password = $("#pass").val();
				if(username==='' && password==='')
				{
					alert("You haven't entered your email-id & password!");
				}
				else
					if(username ==='')
					{
						alert("You haven't entered your email-id");
					}
					else
					if(password === '')
					{
						alert("You haven't entered password!");
					}
					else
					if( specialCharsPresent(username, pass) )
					{
						alert("sorry special characters are not allowed in username or password.");
					}
					else
					if(user === $("#emailID").val() && pass === $("#pass").val())
					{
						alert("Sign In Successful! Will be camouflaging you by showing redirection...");
						window.location.href = "home.html";
					}
					else
					{
						alert("Wrong Username/Password!");
					}
			});
		});*/