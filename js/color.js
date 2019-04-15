function send_color() {
    var color = document.getElementById('color').value;
    console.log(color);
    document.getElementById('change').style.backgroundColor = color;
}