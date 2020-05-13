function valor(val) {
    document.getElementById('text_box').value += val;
}

function clearing() {
    document.getElementById("text_box").value = "";
}

function calculate() {
    /* CALCULADORA CON LA FUNCION EVAL*/
    var resul = document.getElementById("text_box").value;
    res = eval(resul);
    document.getElementById("text_box").value = res;
}

function fired() {
    var text_inp = document.getElementById("text_box");
    text_inp.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            calculate();
        }
    });
}