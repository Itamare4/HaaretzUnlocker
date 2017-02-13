/*
*   Haaretz unlocker
*   Written By Itamar Eliakim
*/

var elements = document.getElementsByTagName('*');

window.onhashchange = function() {
 setTimeout(function(){block_Haaretz();}, 3000);
}

var block_Haaretz = function()
{
    console.log("Haaretz Unlocker");
	counter = 0;
    for (var i = 0; i < elements.length; i++)
    {
        var element = elements[i];
		if (element.className=="l-fluid--b  promo-wrapper" || element.className=="l-article--sidebar") {
			element.innerHTML = '';
			console.log("block ad")
		}
    }
}
   
window.addEventListener("load", function(){
    setTimeout(function(){block_Haaretz();}, 2000);
});
