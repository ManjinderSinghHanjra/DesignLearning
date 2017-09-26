function specialCharsPresent(username, pass)
		{
			var regex = new RegExp("^[a-zA-Z0-9_\@\.]+$ + [^ ]*");
			if (!regex.test(username))
			{
				return true;
			}
			return false;
		}
		
		$(document).ready(function(){
			$("#signIn").click(function(){
				var user = "admin@gmail.com";
				var pass = "admin";
				var username = $("#emailID").val();
				var password = $("#pass").val();
	//			var user_length = $("#emailID").val().length;
	//			var pass_length = $("#pass").val().length;
				//if(user_length<1 && pass_length<1)
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
						//window.location.href = "home.html";
					}
					else
					{
						alert("Wrong Username/Password!");
					}
			});
		});