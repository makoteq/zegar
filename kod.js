setInterval(function() {
  start();
}, 1000);
function start() {

 var now = new Date();
  var rok = now.getFullYear();
if (now.getDate() > 24 && now.getDate() < 31 && now.getMonth() == 11) {
    rok++;
  } 
  var bigDay = new Date(rok, 11, 25);
  var dzien = now.getDate();
  var miesiac = now.getMonth() + 1;
  console.log(rok);
  var czas = now.getTime();
  var ile = bigDay - czas;
  var difference = new Date(Math.abs(ile));
  var days = Math.floor(difference / 86400000);
  var milis = difference % 86400000;
  var hours = Math.floor(milis / 3600000);
  var minutes = Math.floor((milis % 3600000) / 60000);
  var seconds = Math.floor((milis % 60000) / 1000);

  document.getElementById("licznik").innerHTML =
    days + "dni " + hours + "godzin " + minutes + "minut " + seconds + "sekund";
}
