//Skruļļa progressa josla
window.onscroll = function() {
	skrullesana()
};

function skrullesana() {
  var logs = document.body.scrollTop || document.documentElement.scrollTop;
  var augstums = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var paritinats = (logs / augstums) * 100;
  document.getElementById("skrullis").style.width = paritinats + "%";
}

//Fons reaģē uz peles kustību
const fons = document.querySelector('#konteiners');
const platums = window.innerWidth / 5;
const augstums = window.innerHeight / 5 ;

fons.addEventListener('mousemove', (e) => {
  const peleX = e.clientX / platums;
  const peleY = e.clientY / augstums;
  
  fons.style.transform = `translate3d(-${peleX}%, -${peleY}%, 0)`;
});

//Sānu izvēle
function paraditKategoriju(evt, apgerbuKategorija) {
    var i, tabSaturs, sanuPogas;
    tabSaturs = document.getElementsByClassName("tabSaturs");
    for (i = 0; i < tabSaturs.length; i++) {
        tabSaturs[i].style.display = "none";
    }
    sanuPogas = document.getElementsByClassName("sanuPogas");
    for (i = 0; i < sanuPogas.length; i++) {
        sanuPogas[i].className = sanuPogas[i].className.replace(" active", "");
    }
	document.getElementById("noklusejums").style.display = "none";
    document.getElementById(apgerbuKategorija).style.display = "block";
    evt.currentTarget.className += " active";
}

//Brīdinājuma parādīšana ievietojot preci grozā
//Pievieno preci grozam, uzrāda preču skaitu grozā
var radaZinojumu = false;
//Preču ielikšanos grozā audzēkņi taisa paši
var precuDaudzums = 0;
document.getElementById('precuSkaits').innerHTML = precuDaudzums;

function ieliktGroza() {
	document.getElementById("zinojums").style.display='block';
	
	//Ja pārbauda vai ziņojums jau netiek rādīts
	if (radaZinojumu == false){
		precuDaudzums++;
		document.getElementById('precuSkaits').innerHTML = precuDaudzums;
		document.getElementById("iepirkumuRati").src="atteli/pilniRati.png";
		radaZinojumu = true;
		setTimeout(function () {
		document.getElementById("zinojums").style.display='none'; 
		radaZinojumu = false;
		}, 4000);
	}
}

//Manuāli piespiežot x paslēpj brīdinājumu par ievietotu preci
function pasleptBridinajumu() {
	radaZinojumu = false;
	document.getElementById("zinojums").style.display='none';
}