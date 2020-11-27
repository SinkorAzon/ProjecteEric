var cargar = function() {
  var cargarUser = localStorage.getItem('Usuari');
  document.getElementById("lblUser").innerHTML = cargarUser;
  localStorage.clear();
};

cargar();

var num1 = 0;
var num2 = 0;
var res;

//Funcions a utilitzar per Calc
function agafarNum(num){
    if(negative_digit) {
      num1 = -num;
    } else if(num1 == 0 && num1 !== '0.'){
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
    negative_digit = false;
    refresh();
}

function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("resultat").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    res = valor;
}

function operarResta(){
  var neg;

  if (!negative_digit){
    neg = "-";
    document.getElementById("resultat").value = neg;
    negative_digit = true;
  }

  num2 = parseFloat(num1);
  num1 = 0;
  res = 2;
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
        case 5:
          num1 = Math.pow(num2,num1);
    }
    refresh();
    num2 = parseFloat(num1);
    num1 = 0;
}

function deleteLastNum(){
  var numMod = document.getElementById("resultat").value;
  document.getElementById("resultat").value = numMod.substr(0, numMod.length - 1);
  num1 = document.getElementById("resultat").value;
}

//Funcions a utilitzar per Calc Cientifica Ampliació
function cos(){
  var aux = Math.cos(num1);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function sin(){
  var aux = Math.sin(num1);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function tan(){
  var aux = Math.tan(num1);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function exp(){
  var aux = Math.exp(num1);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function percentatge(){
  var aux = num1/100;
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function sqrt(){
  var aux = Math.sqrt(num1);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function invertirSigne(){
  var aux = Number(document.getElementById("resultat").value);
  aux = -aux;
  num1 = String(aux);
  document.getElementById("resultat").value = aux;
  num1 = document.getElementById("resultat").value;
}

function refresh(){
    document.getElementById("resultat").value = num1;
}
