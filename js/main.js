//Created by Ernesto Carrión

//Redirects to the google translate page with the desired translation
function translate(info, tab) {

   var from = localStorage["from_lang"];
   var to = localStorage["to_lang"];
    

   var url = "http://translate.google.com/?hl=en#" + from + "|" + to + "|" + info.selectionText;
  chrome.tabs.create({"url": url, "selected": true});

  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  
}

//Loads default conf
if ( localStorage["from_lang"] == undefined || localStorage["from_lang"] == ""){
    localStorage["from_lang"] = 'en';
}

if ( localStorage["to_lang"] == undefined || localStorage["to_lang"] == ""){
    localStorage["to_lang"] = 'es';
}

if ( localStorage["to_lang_text"] == undefined || localStorage["to_lang_text"] == ""){
    localStorage["to_lang_text"] = 'Spanish';
}


//Loads google api
google.load("language", "1");

//listens from messages from original pages
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
    
    
        var from = localStorage["from_lang"];
        var to = localStorage["to_lang"];
    
        //Calls gogole translate api
        if(request.id == "translate") {    
            google.language.translate(request.text, from, to, function(result) {
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
        
        //Updates context menu item with the new language
        if(request.id == "context") {
            title = "Translate '%s' to " + localStorage["to_lang_text"];
            chrome.contextMenus.update(id, {"title": title, "contexts": context, "onclick": translate});
        }
        
        
});

// Create the selection context item
var context = ['selection'];
var title = "Translate '%s' to " + localStorage["to_lang_text"];
var id = chrome.contextMenus.create({"title": title, "contexts": context, "onclick": translate});
