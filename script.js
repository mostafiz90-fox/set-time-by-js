function calculator(){
    var a = parseInt(document.getElementById('input1').value);
    var b = parseInt(document.getElementById('input2').value);
    var total = a+b;
    document.getElementById('result').innerText = total;
}

setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
    
}
);