




function clicks(X) {
    debugger
    var X;
    var dis=document.getElementById("display1").value
    if (dis==0){
        document.getElementById("display1").value = "";
        document.getElementById("display1").ariaPlaceholder="0"
    } 
    document.getElementById("display1").value=document.getElementById("display1").value+X
    
}

function act(Y) {
    var Y;

    switch (Y) {
        case 1:
            document.getElementById("display1").value = "";
            document.getElementById("display1").ariaPlaceholder="0"
            break;
        case 2:
            
            document.getElementById("display1").innerText = "";
            document.getElementById("display2").innerText = ""
            break;

    }

}


function Equal() {

    var n = document.getElementById("display1").value
    
    document.getElementById("display1").value = eval(n)

}



