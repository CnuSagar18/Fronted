document.body.style.backgroundImage = "url('images/bgimage.png')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

var container = document.getElementsByClassName('container');

container[0].style.backgroundColor = "white";
container[0].style.width = "900px";
container[0].style.margin = "50px auto";


var header = document.getElementsByClassName('header');
header[0].style.textAlign = "center";

var nav = document.getElementsByTagName("nav");
nav[0].style.backgroundColor = "#005185";
	nav[0].style.padding = "20px 0px";


var ul = document.getElementsByTagName("ul");
ul[0].style.listStyleType = "none";

for (var i = 0; i < ul.length; i++) {
	ul[i].style.textAlign = "center";
}



var li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
	li[i].style.display = "inline-block";
}

var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
	a[i].style.color = "white";
	a[i].style.marginLeft = "30px";

}

var flexcontainer = document.getElementsByClassName("flex-container");
flexcontainer[0].style.display = "flex"


