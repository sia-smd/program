function clicks(X) {
    var X;
    var dis = document.getElementById("display").innerText;
    dis = dis * 10 + X;
    document.getElementById("display").innerText = dis;
  }