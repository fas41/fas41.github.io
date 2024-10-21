document.getElementById("mySidebar").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='Education.html'>Educationa</a></li>" +
"<li><a href='professional.html'>Professional Experience</a></li>" +
"<li><a href='publications.html'>Publications</a></li>" +
"<li><a href='activities.html'>Professional Activities</a></li>" +
"<li><a href='news.html'>Media and News</a></li>" +
"<li><a href='contact.html'>Contact</a></li>" +
"</ul>";

document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " Amit Kumar Sikder. All rights reserved.</p>"


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

