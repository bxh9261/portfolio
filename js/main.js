function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";

}

// Get the modal
var astModal = document.getElementById('astModal');
var hvzModal = document.getElementById('hvzModal');
var ttbModal = document.getElementById('ttbModal');
var kartModal = document.getElementById('kartModal');
var proj1Modal = document.getElementById('proj1Modal');
var timeModal = document.getElementById('timeModal');

// Get the button that opens the modal
var astBtn = document.getElementById("Asteroids");
var hvzBtn = document.getElementById("HVZ");
var ttbBtn = document.getElementById("TakeTheBait");
var kartBtn = document.getElementById("ShoppingKart");
var appBtn = document.getElementById("Project1");
var timeBtn = document.getElementById("hang-time");

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal 
astBtn.onclick = function() {
  astModal.style.display = "block";
}
hvzBtn.onclick = function() {
  hvzModal.style.display = "block";
}
ttbBtn.onclick = function() {
  ttbModal.style.display = "block";
}
kartBtn.onclick = function() {
  kartModal.style.display = "block";
}
appBtn.onclick = function() {
  proj1Modal.style.display = "block";
}
timeBtn.onclick = function() {
  timeModal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
spans[0].onclick = function() {
    astModal.style.display = "none";
}
spans[1].onclick = function() {
    hvzModal.style.display = "none";
}
spans[2].onclick = function() {
    ttbModal.style.display = "none";
}
spans[3].onclick = function() {
    kartModal.style.display = "none";
}
spans[4].onclick = function() {
    proj1Modal.style.display = "none";
}
spans[5].onclick = function() {
    timeModal.style.display = "none";
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == astModal) {
    astModal.style.display = "none";
  }
  if (event.target == hvzModal) {
    hvzModal.style.display = "none";
  }
  if(event.target == ttbModal){
      ttbModal.style.display = "none";
  }
  if (event.target == kartModal) {
    kartModal.style.display = "none";
  }
  if (event.target == proj1Modal) {
    proj1Modal.style.display = "none";
  }
  if(event.target == timeModal){
    timeModal.style.display = "none";
  }
}



