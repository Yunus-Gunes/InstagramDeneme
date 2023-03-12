

function merhabaDunya() {
    var sayfaGenisligi = window.innerWidth;
    if (sayfaGenisligi < 960) {
        var gizliDiv = document.getElementById("gizliDiv");
        gizliDiv.style.display = "none";
    } else {
        var gizliDiv = document.getElementById("gizliDiv");
        gizliDiv.style.display = "block";
    }
}
setInterval(merhabaDunya, 500);

function changeImage() {
    var img = document.getElementById("myImg");
    var images = ["loginPageImage/loginImage1.jpeg", "loginPageImage/loginImage2.jpeg", "loginPageImage/loginImage3.jpeg"];
    var index = Math.floor(Math.random() * images.length);
    img.src = images[index];

}
setInterval(changeImage, 5000);


var p1 = document.getElementById("dene");
p1.innerText = "11";




function verileriYazdir() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var veri1 = input1.value;
    var veri2 = input2.value;
    var veriler = "Veri 1: " + veri1 + "Veri 2: " + veri2;


    p1.innerText = veriler;


    if (veri1 == 1 && veri2 == 1) {

    }
}

function validateForm() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    if ((input1 == 123 && input2 == 123)) {
        return true;
    } else {
        alert("Lütfen doğru değeri girin!");
        return false;
    }
}








