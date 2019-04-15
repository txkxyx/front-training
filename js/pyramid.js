var space = '\u00a0';
var asterisk = '*';

function send_stage() {
    var pyramid = document.getElementById('pyramid');
    while (pyramid.firstChild) {
        pyramid.removeChild(pyramid.firstChild);
    }
    var stage = document.getElementById('stage').value;
    var paragraph = document.createElement('p');
    for (var i = 1; i <= stage; i++) {
        var text = document.createTextNode(space.repeat(stage - i) + asterisk.repeat(2 * i - 1));
        paragraph.appendChild(text);
        var br = document.createElement('br');
        paragraph.appendChild(br);
    }
    pyramid.appendChild(paragraph);
}