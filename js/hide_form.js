var currentTab = 0; 
showTab(currentTab);

//Carica gli elementi del form
function showTab(n) {
  		var x = document.getElementsByClassName("tab");
  		x[n].style.display = "block";
  		if (n == 0) {
    			document.getElementById("prevBtn").style.display = "none";
  			} 
		else {
    			document.getElementById("prevBtn").style.display = "inline";
  			}
  				if (n == (x.length - 1)) {
    					document.getElementById("nextBtn").innerHTML = "Invia";
  							} 
				else {
    					document.getElementById("nextBtn").innerHTML = "Avanti";
  							}	
  			fixStepIndicator(n)
			}
            
function nextPrev(n) {
  			var x = document.getElementsByClassName("tab");
  			if (n == 1 && !validateForm()) return false;
  				x[currentTab].style.display = "none";
  				currentTab = currentTab + n;
  			if (currentTab >= x.length) {
    				document.getElementById("card").submit();
                    		document.getElementById("container").style.display = "none";
                    		document.getElementById("load").style.display = "block";
    				return false;
  				}
  				showTab(currentTab);
               
			}


//Convalida testo email se nella forma nome@dominio.estensione
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//Convalida l'intero form
function validateForm() {
 			var x, y, i, valid = true;
  			x = document.getElementsByClassName("tab");
  			y = x[currentTab].getElementsByTagName("input");
  			z = x[currentTab].getElementsByTagName("select");
  			k = x[currentTab].getElementsByTagName("textarea");

  			for (i = 0; i < y.length; i++) {
			const $result = $("#result");
  			const email = $("#email").val();
  			$result.text("");
  			if (validateEmail(email)) {
				valid=true;
  				} 
			else {
				valid=false;
				y[i].className += " invalid";
  				}
    			if (y[i].value == "" && valid) {
      				y[i].className += " invalid";
      				valid = false;
    						}
  			}
			for (i = 0; i < z.length; i++) {
    				if (z[i].value == "" ) {  
     	 				z[i].className += " invalid";
      					valid = false;
    							}
 			}
			for (i = 0; i < k.length; i++) {    
    				if (k[i].value == "" ) {      
      					k[i].className += " invalid";      
      					valid = false;
    							}
  			}  
  			if (valid) {
    				document.getElementsByClassName("step")[currentTab].className += " finish";
  					}
  			return valid; 
			}
			function fixStepIndicator(n) { 
  			var i, x = document.getElementsByClassName("step");
  				for (i = 0; i < x.length; i++) {
    					x[i].className = x[i].className.replace(" active", "");
  								}
  			x[n].className += " active";
			}
