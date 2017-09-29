$(document).ready(function(){
	
	$(".ConfirmationButton").click(function(){ 
			$(".ConfirmationBox").css("z-index", "-10");
			$(".EntireForm").css("opacity","1.0");
	});
	
	$("#ContinueButton").click(function(){
		$(".ConfirmationBox").css("z-index", "10");
		$(".EntireForm").css("opacity", "0.3");
	});
	
});