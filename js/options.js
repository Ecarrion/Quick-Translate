//Available languages
var langs = {
  'Afrikaans' : 'af',
  'Albanian' : 'sq',
  'Amharic' : 'am',
  'Arabic' : 'ar',
  'Armenian' : 'hy',
  'Azerbaijani' : 'az',
  'Basque' : 'eu',
  'Belarusian' : 'be',
  'Bengali' : 'bn',
  'Bihari' : 'bh',
  'Breton' : 'br',
  'Bulgarian' : 'bg',
  'Burmese' : 'my',
  'Catalan' : 'ca',
  'Cherokee' : 'chr',
  'Chinesse' : 'zh',
  'Chinesse_simplified' : 'zh-CN',
  'Chinesse_traditional' : 'zh-TW',
  'Corsican' : 'co',
  'Croatian' : 'hr',
  'Czech' : 'cs',
  'Danish' : 'da',
  'Dhivehi' : 'dv',
  'Dutch': 'nl',  
  'English' : 'en',
  'Esperanto' : 'eo',
  'Estonian' : 'et',
  'Faroese' : 'fo',
  'Filipino' : 'tl',
  'Finnish' : 'fi',
  'French' : 'fr',
  'Frisian' : 'fy',
  'Galician' : 'gl',
  'Georgian' : 'ka',
  'German' : 'de',
  'Greek' : 'el',
  'Gujarati' : 'gu',
  'Haitian_Creole' : 'ht',
  'Hebrew' : 'iw',
  'Hindi' : 'hi',
  'Hungaria' : 'hu',
  'Icelandic' : 'is',
  'Indonesian' : 'id',
  'Inuktitut' : 'iu',
  'Irish' : 'ga',
  'Italian' : 'it',
  'Japanese' : 'ja',
  'Javanese' : 'jw',
  'Kannada' : 'kn',
  'Kazakh' : 'kk',
  'Khmer' : 'km',
  'Korean' : 'ko',
  'Kurdish': 'ku',
  'Kyrgyz': 'ky',
  'Lao' : 'lo',
  'Latin' : 'la',
  'Latvian' : 'lv',
  'Lithuanian' : 'lt',
  'Luxembourgish' : 'lb',
  'Macedonian' : 'mk',
  'Malay' : 'ms',
  'Malayalam' : 'ml',
  'Maltese' : 'mt',
  'Maori' : 'mi',
  'Marathi' : 'mr',
  'Mongolian' : 'mn',
  'Nepali' : 'ne',
  'Norwegian' : 'no',
  'Occitan' : 'oc',
  'Oriya' : 'or',
  'Pashto' : 'ps',
  'Persian' : 'fa',
  'Polish' : 'pl',
  'Portuguese' : 'pt',
  'Portuguese_Portugal' : 'pt-PT',
  'Punjabi' : 'pa',
  'Quechua' : 'qu',
  'Romanian' : 'ro',
  'Russian' : 'ru',
  'Sanskrit' : 'sa',
  'Sscots_Gaelic' : 'gd',
  'Serbian' : 'sr',
  'Sindhi' : 'sd',
  'Sinhalese' : 'si',
  'Slovak' : 'sk',
  'Slovenian' : 'sl',
  'Spanish' : 'es',
  'Sundanese' : 'su',
  'Swahili' : 'sw',
  'Swedish' : 'sv',
  'Syriac' : 'syr',
  'Tajik' : 'tg',
  'Tamil' : 'ta',
  'Tatar' : 'tt',
  'Telugu' : 'te',
  'Thai' : 'th',
  'Tibetan' : 'bo',
  'Tonga' : 'to',
  'Turkish' : 'tr',
  'Ukrainian' : 'uk',
  'Urdu' : 'ur',
  'Uzbek' : 'uz',
  'Uighur' : 'ug',
  'Vietnamese' : 'vi',
  'Welsh' : 'cy',
  'Yiddish' : 'yi',
  'Yoruba' : 'yo',
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
    
});

