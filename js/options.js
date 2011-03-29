//Available languages
var langs = {
  'Afrikaans' : 'af',
  'Albanian' : 'sq',
  'Arabic' : 'ar',
  'Belarusian' : 'be',
  'Bulgarian' : 'bg',
  'Catalan' : 'ca',
  'Chinesse' : 'zh',
  'Chinesse_simplified' : 'zh-CN',
  'Chinesse_traditional' : 'zh-TW',
  'Croatian' : 'hr',
  'Czech' : 'cs',
  'Danish' : 'da',
  'Dutch': 'nl',  
  'English' : 'en',
  'Estonian' : 'et',
  'Filipino' : 'tl',
  'Finnish' : 'fi',
  'French' : 'fr',
  'Galician' : 'gl',
  'German' : 'de',
  'Greek' : 'el',
  'Haitian_Creole' : 'ht',
  'Hebrew' : 'iw',
  'Hindi' : 'hi',
  'Hungarian' : 'hu',
  'Icelandic' : 'is',
  'Indonesian' : 'id',
  'Irish' : 'ga',
  'Italian' : 'it',
  'Japanese' : 'ja',
  'Korean' : 'ko',
  'Latvian' : 'lv',
  'Lithuanian' : 'lt',
  'Macedonian' : 'mk',
  'Malay' : 'ms',
  'Maltese' : 'mt',
  'Norwegian' : 'no',
  'Persian' : 'fa',
  'Polish' : 'pl',
  'Portuguese' : 'pt',
  'Portuguese_Portugal' : 'pt-PT',
  'Romanian' : 'ro',
  'Russian' : 'ru',
  'Serbian' : 'sr',
  'Slovak' : 'sk',
  'Slovenian' : 'sl',
  'Spanish' : 'es',
  'Swahili' : 'sw',
  'Swedish' : 'sv',
  'Tagalog' : 'tl',
  'Thai' : 'th',
  'Turkish' : 'tr',
  'Ukrainian' : 'uk',
  'Vietnamese' : 'vi',
  'Welsh' : 'cy',
  'Yiddish' : 'yi'
};

//Filling languages and selecting users last selection
$(document).ready(function() {
    
    var select_from = $('#from_lang')[0];
    var select_to = $('#to_lang')[0];
    var x = 0;
    
    for (lang in langs){
        
        var option = new Option;
        var option2 = new Option;
        
        option.text = lang;
        option.value = langs[lang];
        
        option2.text = lang;
        option2.value = langs[lang];
        
        select_from.options[x] = option;
        select_to.options[x++] = option2;
        
        if( localStorage["from_lang"] == option.value ) {
            select_from.selectedIndex = x-1;
        }
        
        if( localStorage["to_lang"] == option2.value ) {
            select_to.selectedIndex = x-1;
        }
        
    }
    
    if(localStorage["detect"] == "true"){
        $('#detect').attr("checked", true);
        select_from.disabled = true;
    }
    
    
    
    //Binds selects and saves the user choise
   $('#from_lang').change(function() {
        localStorage["from_lang"] = select_from[select_from.selectedIndex].value;
   });
    
   $('#to_lang').change(function() {
        localStorage["to_lang"] = select_to[select_to.selectedIndex].value;
        localStorage["to_lang_text"] = select_to[select_to.selectedIndex].text;
        
        //Sends a message to main.js in order to update the context menu
        chrome.extension.sendRequest({id:'context'});
   });
   
   $('#img-arr').click( function() {
   
        //Swaps selects
        index_from = select_from.selectedIndex;
        select_from.selectedIndex = select_to.selectedIndex;
        select_to.selectedIndex = index_from;
        
        //Save local storage
        localStorage["from_lang"] = select_from[select_from.selectedIndex].value;
        localStorage["to_lang"] = select_to[select_to.selectedIndex].value;
        localStorage["to_lang_text"] = select_to[select_to.selectedIndex].text;
        
        //Sends a message to main.js in order to update the context menu
        chrome.extension.sendRequest({id:'context'});
   });
   
   
   //handles events if the users decides to detect language
   $('#detect').click(function () {
       if ($(this).is(':checked')){
            localStorage["detect"] = true;
            select_from.disabled = true;
       } else {
            localStorage["detect"] = false;
            select_from.disabled = false; 
       }
   });
   
});

