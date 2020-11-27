var navName = window.navigator.appName;
var navVersion = window.navigator.appVersion;
var navInfoSO = window.navigator.appVersion.toLowerCase();
var so = window.navigator.platform;
var lastModidyDate = document.lastModified;
var navIdioma = window.navigator.language;
var hostIp = location.hostname;
var hostUrl = location.host;

function info(){
  window.alert(
      "Navegador: " + navName + "\n" +
      "Versió Navegador: " + navVersion + "\n" +
      "SO Navagador: " + so + "\n" +
      "Ultima Modificació: " + lastModidyDate + "\n" +
      "Idioma: " + navIdioma + "\n" +
      "Ip HostName: " + hostIp + "\n" +
      "Url HostName: http://" + hostUrl + "\n"
    );
}

function guardar(){
  var userLogin = document.getElementById("user").value;
  var coordenadaX = document.getElementById("coorX").value;
  var coordenadaY = document.getElementById("coorY").value;
  localStorage.setItem("Usuari", userLogin);
  sessionStorage.setItem("CoordenadaX", coordenadaX);
  sessionStorage.setItem("CoordenadaY", coordenadaY);
  document.getElementById("coorX").value = "";
  document.getElementById("coorY").value = "";
  document.getElementById("user").value = "";
}

function carregar(){
  var user = localStorage.getItem("Usuari");
  var coordenadaX = sessionStorage.getItem("CoordenadaX");
  var coordenadaY = sessionStorage.getItem("CoordenadaY");
  document.getElementById("lblUser").innerHTML = user;
  document.getElementById("lblCoorX").innerHTML = coordenadaX;
  document.getElementById("lblCoorY").innerHTML = coordenadaY;
}
