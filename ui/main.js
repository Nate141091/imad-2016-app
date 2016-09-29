console.log('Loaded!');
var element = document.getElementById('maintxt');
element.innerHTML = 'Text has been changed!'

var img = document.getElementById('madi');
var lmargin = 0;
function moveRight() {
    lmargin = lmargin + 1;
    img.style.marginLeft = lmargin + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.align = 'right';  
}