chrome.omnibox.onInputEntered.addListener(
function(text) {
   var host = localStorage['url']
   var newUrl = host+"/?"+text
   if ( (text + 0) != text) {
      newUrl = host
                  +"?pre=preMultiSearch&pg=pgList&"
                  +"pgBack=pgSearch&search=2&searchFor="
                  +encodeURIComponent(text)
   }
   
   if (host == null) {
      newUrl = chrome.extension.getURL("options.html");
   }
   
   chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.update(tab.id, {url: newUrl});
   });
});
