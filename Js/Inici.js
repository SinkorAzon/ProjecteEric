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
  var coordenadaX = document.getElementById("coorX").value;
  var coordenadaY = document.getElementById("coorY").value;
  sessionStorage.setItem("CoordenadaX", coordenadaX);
  sessionStorage.setItem("CoordenadaY", coordenadaY);
  document.getElementById("coorX").value = "";
  document.getElementById("coorY").value = "";
}

function carregar(){
  var coordenadaX = sessionStorage.getItem("CoordenadaX");
  var coordenadaY = sessionStorage.getItem("CoordenadaY");
  document.getElementById("lblCoorX").innerHTML = coordenadaX;
  document.getElementById("lblCoorY").innerHTML = coordenadaY;
}
