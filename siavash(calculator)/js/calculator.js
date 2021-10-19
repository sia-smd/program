




function clicks(X) {
    
    var X;
    var dis=document.getElementById("display1").value
    if (dis.length>10){
        document.getElementById('display1').style.fontSize="20px"
    } 
    if (dis==0){
        document.getElementById("display1").value = "";
        document.getElementById("display1").ariaPlaceholder="0"
    } 
    document.getElementById("display1").value=document.getElementById("display1").value+X
    
}

function act(Y) {
    var Y;
    var clr=document.getElementById("display1").value
    switch (Y) {
        case 1:
            debugger
            clr=clr.slice(0,clr.length-1)
            document.getElementById("display1").value=clr
            break;
        case 2:
            document.getElementById('display1').style.fontSize="40px";
            document.getElementById("display1").value = "";
            document.getElementById("display1").ariaPlaceholder="0";
            document.getElementById("display2").innerText = "0"
            break;

    }

}


function Equal() {

    var n = document.getElementById("display1").value
    document.getElementById("display2").innerText = n
    document.getElementById("display1").value = eval(n)

}



