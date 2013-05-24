function closeTab() {
   chrome.tabs.getSelected(null, function(tab) {
      chrome.tabs.remove(tab.id)
   })
}

function saveOptions() {
   var newUrl=document.getElementById('url').value
   newUrl = newUrl.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
   if (newUrl.indexOf("http://") != 0 && newUrl.indexOf("https://")!=0) {
      newUrl = "http://"+newUrl 
   }
   if (newUrl.substr(-1) !== "/") {
      newUrl = newUrl+"/" 
   }
   localStorage['url'] = newUrl
   document.getElementById("url").value = newUrl
   alert("Options saved")
}

function restoreOptions() {
   var url = localStorage['url'];
   if (url == null || url.length == 0)
      url = "http://"
   document.getElementById("url").value = url
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('#save').addEventListener('click', saveOptions);
document.querySelector('#close').addEventListener('click', closeTab);
