function test(startX, startY, endX, endY, text){
    
    $('body').append("<div class='quick-tooltip'>" + text + "</div>");
    $('div.quick-tooltip').css('top', startY - 30);
    $('div.quick-tooltip').css('left', startX);
    
}

function delete_tooltip(){
    $('div.quick-tooltip').remove();
}
