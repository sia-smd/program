

var dis = document.getElementById("display1").innerText;
var temp = 0

function clicks(X) {
    var X;
    dis = dis * 10 + X;
    document.getElementById("display1").innerText = dis;
}

function act(Y) {
    var Y;
    document.getElementById('display2').innerText = dis
    switch (Y) {
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:
            dis = 0
            document.getElementById("display1").innerText = dis;
            break;

    }

    temp = dis

}

function show() {
    alert(dis)
}

function change() {
    alert(temp)
}