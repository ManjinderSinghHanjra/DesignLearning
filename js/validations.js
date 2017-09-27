

$(document).ready( function(){
	
	jQuery.validator.addMethod("customEmailValidator", function(value, element) {
		return /^[a-zA-Z]+$/.test(value);
	}, 'Only alphabets are allowed');

	jQuery.validator.addMethod("customPasswordValidator", function(value, element) {
		return /^[A-Za-z0-9\d]+$/.test(value);
	}, 'No special characters are allowed except @(at) .(dot) and _(underscore)');
	


	$("#loginForm").validate({
				rules: {
						email: {
									required: true,
									minlength: 3,
									maxlength: 30,
									customEmailValidator: true
						},
						password: {
									required: true,
									minlength: 4,
									maxlength: 32,
									customPasswordValidator: true
						}
				},
				message: {
						email: {
									required:  "email can't be empty",
									minlength: "At least 3 email characters.",
									maxlength: "At most 30 email characters."			
				
						},
						password: {
									required:  "password can't be empty",
									minlength: "At least 4 password characters",
									maxlength: "At most 32 password characters"
						}
				},
				
				errorPlacement: function(error, element) {
					 if (element.attr("name") == "email") {
						var br = document.createElement("br");
						error.appendTo( document.getElementById("emailFormGroup") );
					 } else {
					   error.insertAfter(element); // this is the default behaviour
					 }
				}
		});
		
		$("#signupForm").validate({
				rules: {
						firstName: {
									required: true,
									minlength: 3,
									maxlength: 32,
									customEmailValidator: true
						},
						lastName: {
									minlength: 3,
									maxlength: 32,
									customEmailValidator: true
						},
						email: {
									required: true,
									minlength: 3,
									maxlength: 30,
									customEmailValidator: true
						},
						password: {
									required:  true,
									minlength: 3,
									maxlength: 32,
									customPasswordValidator: true
						},
						confirmPassword: {
									equalTo: "#password"
						}
				},
				message: {
						firstName: { 
									required:  "email can't be empty",
									minlength: "At least 3 email characters.",
									maxlength: "At most 30 email characters.", 
						},
						lastName: {
									minlength: "At least 3 email characters.",
									maxlength: "At most 30 email characters.",
						},
						email: {
									required:  "email can't be empty",
									minlength: "At least 3 email characters.",
									maxlength: "At most 30 email characters.",
				
						},
						password: {
									required:  "password can't be empty",
									minlength: "At least 4 password characters",
									maxlength: "At most 32 password characters"
						},
						confirmPassword: {
									
						}
				},
				errorPlacement: function(error, element) {
								if(element.attr("name")=="email") {
										var br = document.createElement("br");
										error.appendTo(document.getElementById("emailFormGroup"));
								}
								else {
									error.insertAfter(element);
								}
				}
		});
});