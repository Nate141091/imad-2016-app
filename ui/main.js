console.log('Loaded!');
var element = document.getElementById('maintxt');
element.innerHTML = 'Text has been changed!'

var img = document.getElementById('madi');
img.onclick = function() {
    var interval = setInterval(moveRight, 100);
    //img.align = 'right';
}