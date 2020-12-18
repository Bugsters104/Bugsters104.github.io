//Lapa vēl izstrādes procesā
//Set the date we're counting down to
var atskaitesDatums = new Date("Jan 1, 2021 00:00:00").getTime();

//Update the count down every 1 second
var atskaite = setInterval(function() {
    //Get todays date and time
    var tagadne = new Date().getTime();
    //Find the distance between now and the count down date
    var starpiba = atskaitesDatums - tagadne;
    //Time calculations for days, hours, minutes and seconds
    var dienas = Math.floor(starpiba / (1000 * 60 * 60 * 24));
    var stundas = Math.floor((starpiba % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((starpiba % (1000 * 60 * 60)) / (1000 * 60));
    var sekundes = Math.floor((starpiba % (1000 * 60)) / 1000);
    //Output the result in an element with id="atlicis"
    document.getElementById("atlicis").innerHTML = dienas + "d " + stundas + "h "+ minutes + "m " + sekundes + "s ";
    //If the count down is over, write some text 
    if (starpiba < 0) {
        clearInterval(atskaite);
        document.getElementById("atlicis").innerHTML = "WEB lapa palaista apritē!";
    }
}, 1000);


var i = 0;
var txt = 'SADAĻA IZSTRĀDES PROCESĀ!';
var atrums = 500;
rakstitajs();

function rakstitajs() {
  if (i < txt.length) {
    document.getElementById("teksts").innerHTML += txt.charAt(i);
    i++;
    setTimeout(rakstitajs, atrums);
	
  }else{
	  i=0;
	  document.getElementById("teksts").innerHTML = "";
	  rakstitajs();
  }
}