var feild1 = document.getElementsByName("sess")[0];
var feild2 = document.getElementsByName("subject")[0];
feild2.value = "PMATH";
var feild3 = document.getElementsByName("cournum")[0];
feild3.value = 351;
document.getElementsByTagName("form")[0].submit();

//---------------------------------------------------------------nextpage
var checking = setInterval(function(){
	var cotaleft = parseInt(document.getElementsByTagName("td")[12].innerText)-parseInt(document.getElementsByTagName("td")[13].innerText);
	if (cotaleft>0){
		alert('wow, someone drop');
	}
},60000);
