

var primerynav = document.querySelector("#ul-nav");
var mobilenav = document.querySelector(".mobile-nav");
	mobilenav.addEventListener("click", () => {
  		var visibility = primerynav.getAttribute("data-visible");
  		if ( visibility === "false"){
    		primerynav.setAttribute("data-visible",true);
    		document.querySelector(".nav").style.transform="translateX(0%)";
  		}
  		if ( visibility === "true"){
    		primerynav.setAttribute("data-visible",false);
    		document.querySelector(".nav").style.transform="translateX(100%)";
  		}
     	console.log(visibility);
		console.log("clicked");
	});