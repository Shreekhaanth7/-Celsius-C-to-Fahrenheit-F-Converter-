 function Run(){
    let Val = Number(document.getElementById("box").value)
    let Fval = (Val * 9/5)+32
    let result = document.getElementById("result")
    result.innerHTML = Fval.toFixed(2) + "° Fahrenheit "
    }
