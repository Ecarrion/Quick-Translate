//Created by Ernesto Carrión

//Redirects to the google translate page with the desired translation
function translate(info, tab) {

  var url = "http://translate.google.com/?hl=es#en|es|" + info.selectionText;
  chrome.tabs.create({"url": url, "selected": true});

  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  
}

//Loads google api
google.load("language", "1");

//listens from messages from original pages
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
    
        
        google.language.translate(request.text, 'en', 'es', function(result) {
            translation = result.translation.charAt(0).toUpperCase()
                          + result.translation.substring(1, result.translation.length);
            sendResponse(translation);
        });
});

// Create the selection context item
var context = ['selection'];
var title = "Translate '%s' to spanish";
var id = chrome.contextMenus.create({"title": title, "contexts": context, "onclick": translate});
