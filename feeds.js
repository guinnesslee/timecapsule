$("#timecapsules").live("pageshow", function() {
var item = localStorage.getItem(localStorageKey);
var URL = "http://gdata.youtube.com/feeds/api/users/" + item + "/uploads?v=2&alt=jsonc&max-results=50";
$.ajax({
            type: "GET",
            url: URL,
            cache: false,
            dataType:'jsonp',
            success: function(data){
               $.each(data.data.items, function(index) { 
               var myDateArray = this.updated.split("-");
               var date = 1+parseInt(myDateArray[1])+"/"+(myDateArray[2]).toString().substr(0,2)+"/"+myDateArray[0];
               var thumb = this.thumbnail.sqDefault;
               var count = this.viewCount; 
               var title = this.title;
               var link = getAttributeByIndex(this.player, 0); 
$('#mybox').append("<li class='thumb-feature'><div class='img' style='margin:10px'><a href='"+ link +"'><img src='" + thumb + "' style='margin:10px' width='120' height='68' alt='" + title + "' /></a></div><div class='text' style='margin:10px'><h3><a href='" + link + "'>"+title+"</a></h3><p>" + count + " views - added " +  date  + " </p></div></li>");  
    });
   }
  });
});

// Used to get an element from an object
function getAttributeByIndex(obj, index){
  var i = 0;
  for (var attr in obj){
    if (index === i){
      return obj[attr];
    }
    i++;
  }
  return null;
}