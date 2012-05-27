var data;

function showStoreValue() {
    var item = localStorage.getItem(localStorageKey);
    if (item == null) {
        item = 'Nothing in store';
    }
    else if (item.length === 0) {
        item = 'Store contains empty value';
    }
	
    //$('.storeItem').text(item);
}

$(document).ready(function(){
$('#btnAddArtist').click(function(e) {
	localArtistsKey = localArtistsKey + 1;
    localStorage.setItem(localArtistsKey, $('#artistusername').val());
    showStoreValue();
    e.preventDefault();
});
});
$(document).bind("mobileinit", function() {
if (navigator.platform=="iPhone" || navigator.platform=="iPad" ||
navigator.platform=="iPod" || navigator.platform=="iPad" ||
navigator.platform=="iPhone Simulator" ) {
// It's an iOS device, we check if we are in chrome-less mode
if (!navigator.standalone) {
showIOSInvitation();
}
}

$('#btnLogin').click(function(e) {
	alert('hi');
    localStorage.setItem(localStorageKey, $('#username').val());
    showStoreValue();
    e.preventDefault();
});

function showStoreValue() {
    var item = localStorage.getItem(localStorageKey);
    if (item == null) {
        item = 'Nothing in store';
    }
    else if (item.length === 0) {
        item = 'Store contains empty value';
    }
	else
	{
		alert('item stored.');
	}
    //$('.storeItem').text(item);
}

/* We capture the sessions page load to check dynamic session data 
$("#sessions").live("pageshow", function() {
if (window.localStorage!=undefined) {
// HTML5 Local Storage is available
if (window.localStorage.getItem("data")!=undefined &&
window.localStorage.getItem("data")!=null) {
// We first load the offline stored session
// information while checking updates
showSessions(window.localStorage.getItem("data"));
$("#console").html("Checking data update");
} else {
// There is no local storage cache
$("#console").html("Downloading session data...");
}
} else {
// No HTML5 Local Storage, downloading JSON every time
$("#console").html("Downloading session data...");
}
loadSessionsAjax();
});
*/
});