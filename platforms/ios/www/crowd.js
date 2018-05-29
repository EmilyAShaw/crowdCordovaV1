var storage;


function init (){
	document.addEventListener("deviceready", onDeviceReady, false);
	storage= window.localStorage;
}

function onDeviceReady(){
	var node = document.createElement('link');
	node.setAttribute('rel', 'stylesheet');
	node.setAttribute('type,' 'text/css');

	
		window.StatusBar.overlaysWebView(false);
		window.StatusBar.styleDefault();
	

}