$(document).ready( function(){
				$("#dob").datepicker({
				onSelect: function() {
					$(this).data('datepicker').inline = true;                               
				},
				onClose: function() {
					$(this).data('datepicker').inline = false;
				},
				changeMonth:true, changeYear:true});
});