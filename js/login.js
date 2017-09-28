$(document).ready(function(){
	$("#forgotContinue").click( function() {
	$("#continueDialog").dialog({
		
		modal: true,
		buttons: {
			ok: function() {$(this).dialog("close");}
		}
	});
	});
});