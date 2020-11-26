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

function time() {
    let currentDate = new Date(),
        hours = currentDate.getHours(),
        minutes = currentDate.getMinutes(),
        seconds = currentDate.getSeconds(),
        weekDay = currentDate.getDay(),
        day = currentDate.getDate(),
        month = currentDate.getMonth(),
        year = currentDate.getFullYear();

    const weekDays = [
        'Diumenge',
        'Dilluns',
        'Dimars',
        'Dimecres',
        'Dijous',
        'Divendres',
        'Disabte'
    ];

    const months = [
        'Gener',
        'Febrer',
        'Març',
        'Abril',
        'Maig',
        'Juny',
        'Juliol',
        'Agost',
        'Setembre',
        'Octubre',
        'Novembre',
        'Desembre'
    ];

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    window.alert(weekDays[weekDay] + ", " + day + " de " + months[month] + " del " + year + "\n" +
                hours + " : " + minutes + " : " + seconds);
};
