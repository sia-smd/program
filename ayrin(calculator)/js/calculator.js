
    
    function insert(num) 
    {
        var num;
    document.getElementById('answer').value = document.getElementById('answer').value + num ;
    }
  
  
    function Equal() {
      var n = document.getElementById('answer').value;
        if (n) {
            document.getElementById('answer').value = eval(n)
        }
    }

