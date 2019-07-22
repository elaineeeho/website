function imageChange(element) {
element.src = "Images/bio.JPG"
element.onclick = "imageColor(this)";
}
function myFunction(element) {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
