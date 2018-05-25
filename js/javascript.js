$(document).ready(function(){
		$(".personal").click(function() {
	  window.location = $(this).find("a").attr("href"); 
	  return false;
	});
});