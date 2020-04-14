// 空白スペース
const space = '\u00a0';
// アスタリスク
let asterisk = '*';

function send_stage() {
    let pyramid = document.getElementById('pyramid');
    // すでにピラミッドが描写されている場合は削除
    while (pyramid.firstChild) {
        pyramid.removeChild(pyramid.firstChild);
    }
    const stage = document.getElementById('stage').value;
    let paragraph = document.createElement('p');
    // ピラミッドを描写する
    for (let i = 1; i <= stage; i++) {
        const text = document.createTextNode(space.repeat(stage - i) + asterisk.repeat(2 * i - 1));
        paragraph.appendChild(text);
        const br = document.createElement('br');
        paragraph.appendChild(br);
    }
    pyramid.appendChild(paragraph);
}