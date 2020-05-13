function my_function() {
    /*alert('Haciendo mas Pruebas');
    document.body.innerHTML = '<h3>Hola fui creado, desde JS</h3>';*/

    var element = document.getElementById("agregar");
    element.innerHTML += '<h3>Hola fui creado, desde JS</h3>';

    console.log(document.body.firstChild);


    var agregar_hijo = document.createElement("p");
    agregar_hijo.innerText = "Agregado desde jvascript New P tag";
    document.body.div.appendchild(agregar_hijo);
}

/*function val_nombs() {
    var text_nombres = document.getElementById("l_noms").value;
    var expresion = new RegExp("^[a-zA-Z]+\ [a-zA-Z]+$", 'g');
    console.log(expresion.test(text_nombres));
}*/

function validar_cedula() {
    var res = document.getElementById("m1").value;
    var txt_cedula = document.getElementById('l_cedula');
    var cad = txt_cedula.value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;
    document.getElementById("ms1").style.visibility = false;
    if (longitud !== 10) {
        document.getElementById("ms1").style.visibility = "visible";
        document.getElementById("ms1").style.color = "tomato";
        document.getElementById("ms1").innerHTML = "Erro de cedula";
    }
    if (cad == "") {
        document.getElementById("ms1").style.visibility = "visible";
        document.getElementById("ms1").style.color = "tomato";
        document.getElementById("ms1").innerHTML = "Campo cedula vacio";
    }

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;

        if (cad.charAt(longitud - 1) == total) {
            txt_cedula.className = "txt_nom_valid";
            document.getElementById("ms1").style.visibility = "visible";
            document.getElementById("ms1").style.color = "#4CAF50";
            document.getElementById("ms1").innerHTML = "Cedula correcta";
        } else {
            txt_cedula.className = "txt_nom_invalid";
        }
    }
}


function validarNumeros() {
    var code = '';
    var valorCadena = "";
    var txt_cedula = document.getElementById('l_cedula');
    document.getElementById("ms1").style.visibility = false;
    txt_cedula.value = txt_cedula.value.trim();
    valorCadena = txt_cedula.value.trim() + " ";
    for (var i = 0; i < txt_cedula.value.length; i++) {
        code = txt_cedula.value.charCodeAt(i);
        if ((code >= 48 && code <= 57) && (txt_cedula.value.length == 10)) {

        } else {
            document.getElementById("l_cedula").value = ""
            document.getElementById("ms1").style.visibility = "visible";
            document.getElementById("ms1").style.color = "tomato";
        }
    }
}

function validar_cel() {
    var code = '';
    var valorCadena = "";
    var txt_cedula = document.getElementById('l_cel');
    document.getElementById("ms1").style.visibility = false;
    txt_cedula.value = txt_cedula.value.trim();
    valorCadena = txt_cedula.value.trim() + " ";
    for (var i = 0; i < txt_cedula.value.length; i++) {
        code = txt_cedula.value.charCodeAt(i);
        if ((code >= 48 && code <= 57) && (txt_cedula.value.length == 10)) {
            document.getElementById("ms4").style.visibility = "visible";
            document.getElementById("ms4").style.color = "#4CAF50";
            document.getElementById("ms4").innerHTML = 'Datos Ingresaods correctamente';
        } else {
            document.getElementById("l_cel").value = ""
            document.getElementById("ms4").style.visibility = "visible";
            document.getElementById("ms4").style.color = "tomato";
            document.getElementById("ms4").innerHTML = 'Error Celular';
        }
    }
}


function veri_noms() {
    var txt_noms = document.getElementById('l_noms');
    var arrayDeCadenas = txt_noms.value.trim().split(" ");
    if (txt_noms.value == "") {
        document.getElementById("ms2").style.visibility = "visible";
        document.getElementById("ms2").style.color = "tomato";
        document.getElementById("ms2").innerHTML = "Campo Nombre vacio";
    }
    if (arrayDeCadenas.length === 2) {
        document.getElementById("ms2").innerHTML = 'Datos Ingresaods correctamente';
        document.getElementById("ms2").style.color = "#4CAF50";
        document.getElementById("ms2").style.visibility = "visible";
    } else if ((arrayDeCadenas.length !== 2)) {
        document.getElementById("ms2").innerHTML = 'Se necesita ingresar los dos Nombres';
        document.getElementById("ms2").style.color = "tomato";
        document.getElementById("ms2").style.visibility = "visible";
        txt_noms.value = "";

    }
}

function veri_apes() {
    var txt_apes = document.getElementById('l_apes');
    var arrayDeCadenas = txt_apes.value.trim().split(" ");
    if (arrayDeCadenas.length === 2) {
        document.getElementById("ms3").innerHTML = 'Datos Ingresaods correctamente';
        document.getElementById("ms3").style.color = "#4CAF50";
        document.getElementById("ms3").style.visibility = "visible";
    } else if ((arrayDeCadenas.length !== 2)) {
        document.getElementById("ms3").innerHTML = 'Se necesita ingresar los dos Apellidos';
        document.getElementById("ms3").style.color = "tomato";
        document.getElementById("ms3").style.visibility = "visible";
        txt_apes.value = "";
    }
}


function validacion_Fec() {
    var txt_fec = document.getElementById('f_nac');
    var fecha = txt_fec.value.trim().split("/");
    var day = fecha[0];
    var month = fecha[1];
    var year = fecha[2];
    if ((day.length == 2) && (month.length == 2) && (year.length == 4)) {
        document.getElementById("ms5").innerHTML = 'La Fecha es Correcta';
        document.getElementById("ms5").style.color = "#4CAF50";
        document.getElementById("ms5").style.visibility = "visible";
    } else {
        document.getElementById("ms5").innerHTML = 'Se debe Utilziar este Fromato: dd/mm/yyyy';
        document.getElementById("ms5").style.color = "tomato";
        document.getElementById("ms5").style.visibility = "visible";
        txt_fec.value = "";
    }
}

function veri_mail() {
    var txt_mail = document.getElementById('l_email');
    var posArroba = 0;
    var val1 = "ups.edu.ec";
    var val2 = "est.ups.edu.ec";
    var correo = "";
    var longuitudCorreo = 0;
    posArroba = txt_mail.value.indexOf('@');
    longuitudCorreo = txt_mail.value.substring(0, posArroba);
    if ((posArroba != -1) && (longuitudCorreo.length > 3)) {
        correo = txt_mail.value.substring(posArroba + 1, txt_mail.value.length);
        console.log("correo " + correo)
        if ((val1 == correo) || (val2 == correo)) {
            document.getElementById("ms6").innerHTML = 'El Correo es Valido';
            document.getElementById("ms6").style.color = "#4CAF50";
            document.getElementById("ms6").style.visibility = "visible";
        } else {
            document.getElementById("ms6").innerHTML = 'Solo los Siguentes dominios estan Permitidos \n ups.edu.ec est.ups.edu.ec';
            document.getElementById("ms6").style.color = "tomato";
            document.getElementById("ms6").style.visibility = "visible";
        }
    } else {
        if (posArroba === -1) {
            document.getElementById("ms6").innerHTML = 'Le hace falta un Caracter "@" al su correo';
            document.getElementById("ms6").style.color = "tomato";
            document.getElementById("ms6").style.visibility = "visible";
        }

    }
}


function veri_pass() {
    var txt_mail = document.getElementById('l_pass');
    var longuitudPaswd = 0;
    var caracter = '';
    var uc, lc, nu, sc;
    var contUC = 0;
    var contLC = 0;
    var contNU = 0;
    var contSC = 0;
    longuitudPaswd = txt_mail.value.length;

    if (longuitudPaswd > 8) {
        for (var i = 0; i < txt_mail.value.length; i++) {
            caracter = txt_mail.value.charCodeAt(i);

            uc = isUpperCase(caracter);
            lc = isLowerCase(caracter);
            nu = isNumber(caracter);
            sc = isSpecialChar(caracter);

            if (uc === true) { contUC++; }
            if (lc === true) { contLC++; }
            if (nu === true) { contNU++; }
            if (sc === true) { contSC++; }
        }

        if ((contUC > 0) && (contLC > 0) && (contNU > 0) && (contSC > 0)) {
            document.getElementById("ms7").innerHTML = 'El Password es Valido';
            document.getElementById("ms7").style.color = "#4CAF50";
            document.getElementById("ms7").style.visibility = "visible";
        } else {

            document.getElementById("ms7").innerHTML = 'La contraseña debe contener: \n 1. al menos una mayuscula, \n 2. minuscula, 3. \n numero y un caracter especial';
            document.getElementById("ms7").style.color = "tomato";
            document.getElementById("ms7").style.visibility = "visible";

        }

    } else {
        document.getElementById("ms7").innerHTML = 'Password Muy Corto';
        document.getElementById("ms7").style.color = "tomato";
        document.getElementById("ms7").style.visibility = "visible";

    }
}

function isUpperCase(caracter) {
    if (caracter >= 65 && caracter < 91) {
        return true;
    } else {
        return false;
    }
}

function isLowerCase(caracter) {
    if (caracter >= 97 && caracter < 123) {
        return true;
    } else {
        return false;
    }
}

function isNumber(caracter) {
    if (caracter >= 48 && caracter < 58) {
        return true;
    } else {
        return false;
    }
}

function isSpecialChar(caracter) {
    if (caracter === 64 || caracter === 42 || caracter === 95) {
        return true;
    } else {
        return false;
    }
}

function ver_c_pass() {
    var txt_mail = document.getElementById('l_pass');
    var code = '';
    txt_mail.value = txt_mail.value.trim();
    valorCadena = txt_mail.value.trim() + " ";

    if (txt_mail.value.length > 0) {
        for (var i = 0; i < txt_mail.value.length; i++) {
            code = txt_mail.value.charCodeAt(i);
            if ((code >= 48 && code <= 57) || (code >= 97 && code <= 122) || (code >= 64 && code <= 90) || (code === 95) || (code === 42)) {

            } else {
                txt_mail.value = "";
                document.getElementById("ms7").innerHTML = 'Caracter Especial rqeurido *';
                document.getElementById("ms7").style.color = "tomato";
                document.getElementById("ms7").style.visibility = "visible";
            }
        }
    } else {
        return true;
    }
}