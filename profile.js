$("#profile").live("pageshow", function() {

var item = localStorage.getItem(localStorageKey);
alert('Hello ' + item);
/* 
perform an asynchronous ajax request using the relevant variables 
Documentation: http://api.jquery.com/jQuery.ajax/ 
*/ 
  $.ajax({ 
    type: "GET", 
    /* define url of xml file to parse */ 
    url: "https://gdata.youtube.com/feeds/api/users/" + item, 
    /* assign it a data type */ 
    dataType: "xml", 
    /* state name of function to run if file is successfully parsed */ 
    success: parseXml 
  }); 
}); 
function parseXml(xml, item) 
/* this is where the xml file is parsed and converted into a HTML output */ 
{ 
  //for each item node in the xml file 
  //$(xml).find("entry").each(function() 
  //{ 
    $("#output").append("<h2>Name: " + $(xml).find("name").text() + "</h2><h2>Favourites: " + $(xml).find("gd:FeedLink").text()); 
	$('a#btnFavourites').attr("href", "https://gdata.youtube.com/feeds/api/users/" + item + "/favorites");
  //}); 
 //end for each 
//end function 
} 
