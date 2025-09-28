function toggleMenu(){
    const menu =document.getElementById("navmenu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
function changeBackground(){
    document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "white" : "black";

}
let images = [
  "assets/image/IMG1.jpg",
  "assets/image/IMG2.jpg",
  "assets/image/IMG3.jpg",
  "assets/image/IMG4.jpg",
  "assets/image/IMG5.jpg",
  "assets/image/IMG6.jpg",
];
console.log(images[0])
let i = 0;

function next() {
  i = (i + 1) % images.length;
  document.getElementById("slider").src = images[i];
}
function prev() {
  i = (i - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[i];
}