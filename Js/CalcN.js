var num1 = 0;
var num2 = 0;
var res;

//Funcions a utilitzar per Calc
function agafarNum(num){
    if(num1 == 0 && num1 !== '0.'){
        num1 = num;
    } else {
        num1 += num;
    }
    refresh();
}

function agafarComa(){
    if(num1 == 0) {
        num1 = '0.';
    } else if (num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refresh();
}

function netejarText(){
    num1 = 0;
    num2 = 0;
    refresh();
}

function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("resultat").value);
    }
    num2 = parseFloat(num1);
    num1= 0;
    res = valor;
}

function esIgual(){
    num1 = parseFloat(num1);
    switch (res){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
    }
    refresh();
    num2 = parseFloat(num1);
    num1 = 0;
}

function invertirSigne(){
  var aux = Number(document.getElementById("resultat").value);
  aux = -aux;
  num1 = String(aux);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function deleteLastNum(){
  var numMod = document.getElementById("resultat").value;
  document.getElementById("resultat").value = numMod.substr(0, numMod.length - 1);
  num1 = document.getElementById("resultat").value;
}

function refresh(){
    document.getElementById("resultat").value = num1;
}
