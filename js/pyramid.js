// 空白スペース
var space = '\u00a0';
// アスタリスク
var asterisk = '*';

function send_stage() {
    var pyramid = document.getElementById('pyramid');
    // すでにピラミッドが描写されている場合は削除
    while (pyramid.firstChild) {
        pyramid.removeChild(pyramid.firstChild);
    }
    var stage = document.getElementById('stage').value;
    var paragraph = document.createElement('p');
    // ピラミッドを描写する
    for (var i = 1; i <= stage; i++) {
        var text = document.createTextNode(space.repeat(stage - i) + asterisk.repeat(2 * i - 1));
        paragraph.appendChild(text);
        var br = document.createElement('br');
        paragraph.appendChild(br);
    }
    pyramid.appendChild(paragraph);
}