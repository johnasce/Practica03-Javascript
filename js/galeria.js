var lis_max = [];
var con_img = 0;

function aleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function imagenes() {
    lis_max = [];
    con_img = 0;
    var ruta = "../imgs/";
    var lista = ["c2.png", "java.png", "javas.png", "klotin.png", "oracle.png", "python.png", "r.png", "ruby.png", "scala.png", "mongo.png"];
    var rand_img = aleatorio(0, lista.length - 1)
    var val_im = lista[rand_img]
    var select_img = ruta + val_im
    document.getElementById("random_ims").setAttribute("src", select_img)
    var format = ruta + lista[rand_img] + "\/" + rand_img
    document.getElementById("valor").innerText = format
    var max = 0;
    while (max < 5) {
        var rand_img = aleatorio(0, lista.length - 1)
        var val_im = lista[rand_img]
        if ((!lis_max.includes(val_im) && (lis_max.length < 5))) {
            lis_max.push(val_im)
            max += 1
        }
    }
    document.getElementById("bot_next").disabled = false
    document.getElementById("bot_prev").disabled = false
    console.log(lis_max.toString())

}

function siguiente() {
    if (con_img <= lis_max.length - 1) {

        var ruta = "../imgs/"
        var val_im = lis_max[con_img]
        var select_img = ruta + val_im
        document.getElementById("random_ims").setAttribute("src", select_img)
        console.log(con_img)
        con_img += 1
            //var pos_im = 25
            /*while (pos_im <= 255) {
                document.getElementById("random_ims").style.left = pos_im + "px"
                document.getElementById("random_ims").setAttribute("src", select_img)
                document.getElementById("random_ims").style.transitionDuration = "0.4s"
                pos_im += 10
                if (pos_im > 250) {
                    con_img += 1
                    console.log(con_img)
                    pos_im = 0
                }
            }*/

    } else if (con_img == lis_max.length) {
        document.getElementById("bot_next").className = "blocked"
        document.getElementById("bot_next").disabled = true
        document.getElementById("bot_prev").disabled = false
            //document.getElementById("but_next").className = "bloquear"
    }
    if (con_img < lis_max.length - 1) {
        document.getElementById("bot_prev").disabled = false
        document.getElementById("bot_next").disabled = false
    }
}

function previous() {
    if (con_img > 0) {
        con_img -= 1
        var ruta = "../imgs/"
        var val_im = lis_max[con_img]
        var select_img = ruta + val_im
        document.getElementById("random_ims").setAttribute("src", select_img)
        console.log(con_img)
    } else if (con_img == 0) {

        document.getElementById("bot_prev").className = "blocked"
        document.getElementById("bot_prev").disabled = true
        document.getElementById("bot_next").disabled = false
            //document.getElementById("but_next").className = "bloquear"
    }
    if (con_img > 0) {
        document.getElementById("bot_prev").disabled = false
        document.getElementById("bot_next").disabled = false
    }
}