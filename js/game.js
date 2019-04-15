

document.onkeydown = function (e) {
    var image = document.getElementById('image');
    key_code = e.keyCode;
    var top = image.style.top;
    var left = image.style.left;
    if (key_code == 37) {
        document.getElementById('image').style.left += '10px';
    }
    if (key_code == 38) {
        document.getElementById('image').style.top += '10px';
    }
    if (key_code == 39) {
        document.getElementById('image').style.left -= '10px';
    }
    if (key_code == 40) {
        document.getElementById('image').style.top -= '10px';
    }
    image.style.left = left;
    image.style.top = top;
    console.log(image.style.left);
    console.log(image.style.top);
}