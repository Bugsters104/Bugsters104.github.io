//Parādīt/paslēpt uzlīmes
function paraditUzlimes() {
    var pabidit = document.getElementById('uzlimes');
    if (pabidit.style.display === 'block') {
        pabidit.style.display = 'none';
    
	} else {
        pabidit.style.display = 'block';
    }
}


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

//Mainīgais attēls
if(document.images){
   var attelsA = new Image();
   attelsA.src = "atteli/attels1.png";
   var attelsB = new Image();
   attelsB.src = "atteli/attels2.png";
}


//Make the DIV element draggagle
vilktObjektu(document.getElementById("bidams"));

function vilktObjektu(elmnts) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnts.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    //Get the mouse cursor position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    //Call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    //Calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //Set the element's new position:
    elmnts.style.top = (elmnts.offsetTop - pos2) + "px";
    elmnts.style.left = (elmnts.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    //Stop moving when mouse button is released
    document.onmouseup = null;
    document.onmousemove = null;
  }
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