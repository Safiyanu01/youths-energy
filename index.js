function myFunc(button) {
  alert("Thanks for your donation");
}

const buttonn = document.getElementById("buttonn");

function dom() {
  alert("Save a life and Sponsor a child !");
}

buttonn.addEventListener("mouseover", dom);

const ppheading = document.getElementById("ppheading");

ppheading.addEventListener("mouseover", function mouse() {
  document.getElementById("ppheading").style.backgroundColor = "green";
});

ppheading.addEventListener("mouseout", function mouse() {
  document.getElementById("ppheading").style.backgroundColor = "#D7CBB2";
});

document.getElementById("HHH").style.color = "blue";
//document.querySelector("h2").innerHTML = "Organizational Activities";
//document.querySelector("h2").style.fontSize = "xx-large";
//document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.backgroundColor = "yellowgreen";
document.querySelector("h2").style.fontWeight = "bolder";

var h2 = document.querySelector("h2");
h2.className = "Org";
