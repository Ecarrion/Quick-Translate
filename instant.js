function show_translation(startX, startY, endX, endY, text){
    
    $('body').append("<div class='quick-tooltip round'>" + text + "</div>");
    $('div.quick-tooltip').css('top', startY - 40);
    $('div.quick-tooltip').css('left', startX);
    
}

function delete_translation(){
    $('div.quick-tooltip').remove();
}
