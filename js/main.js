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
    
        //Calls gogole translate api
        if(request.id == "translate") {    
            google.language.translate(request.text, 'en', 'es', function(result) {
                translation = result.translation.charAt(0).toUpperCase()
                              + result.translation.substring(1, result.translation.length);
                sendResponse(translation);
            });
        }
        
        
        //Calls aonware api with wordnet dictionary
        if(request.id == "define"){
        
            url = "http://services.aonaware.com/DictService/DictService.asmx/" +
                   "DefineInDict?dictId=wn&word=";
        
            $.get(url + request.text, function(xml) {
                $(xml).find('WordDefinition').each(function(){
                    //Hack for knowing if a words does have a definition
                    if($(this).text().trim() == request.text){ 
                        sendResponse('');
                    } else {
                        $(this).find('WordDefinition').each(function(){
                            sendResponse($(this).text());
                        });
                    }
                });
            });
        }
        
        
});

// Create the selection context item
var context = ['selection'];
var title = "Translate '%s' to spanish";
var id = chrome.contextMenus.create({"title": title, "contexts": context, "onclick": translate});
