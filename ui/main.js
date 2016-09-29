console.log('Loaded!');
var element = document.getElementById('maintxt');
element.innerHTML = 'Text has been changed!'

var img = document.getElementById('madi');
function moveRight() {
    lmargin = lmargin + 10;
    img.style.marginLeft = lmargin + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    //img.align = 'right';  
}