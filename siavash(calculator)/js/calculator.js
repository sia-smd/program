




function clicks(X) {

    var X;
    var dis = document.getElementById("display1").value
    if (dis.length > 10) {
        document.getElementById('display1').style.fontSize = "20px"
    }
    if (dis == 0) {
        document.getElementById("display1").value = "";
        document.getElementById("display1").ariaPlaceholder = "0"
    }
    document.getElementById("display1").value = document.getElementById("display1").value + X

}

function act(Y) {
    var Y;
    var clr = document.getElementById("display1").value
    switch (Y) {
        case 1:

            clr = clr.slice(0, clr.length - 1)
            document.getElementById("display1").value = clr
            break;
        case 2:
            debugger
            var his=document.getElementById('display2')
             var his_opt=his.length
            for (var i=his_opt;i>=0 ;i--){
                his.remove(i)
            }
            document.getElementById("display2").remove(1)

            document.getElementById('display1').style.fontSize = "40px";
            document.getElementById("display1").value = "";
            document.getElementById("display1").ariaPlaceholder = "0";
            break;

    }

}


function Equal() {
    
    var n = document.getElementById("display1").value

        // document.getElementById("display2").innerText = his + ',,' + n
        var x = document.getElementById("display2");
        var option = document.createElement("option");
        option.text = n;
        x.add(option);
    document.getElementById("display1").value = eval(n)

}



