//Created by Ernesto Carrión

function translate(info, tab) {

  var url = "http://translate.google.com/?hl=es#en|es|" + info.selectionText;
  chrome.tabs.create({"url": url, "selected": true});

  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}


// Create the selection context item
var context = ['selection'];
var title = "Translate '%s' to spanish";
var id = chrome.contextMenus.create({"title": title, "contexts": context, "onclick": translate});
