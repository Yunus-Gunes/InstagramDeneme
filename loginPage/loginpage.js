

function merhabaDunya() {
    var sayfaGenisligi = window.innerWidth;
    document.getElementById("qwe").innerHTML = sayfaGenisligi;
    if (sayfaGenisligi < 800) {
        var gizliDiv = document.getElementById("gizliDiv");
        gizliDiv.style.display = "none";
    }else{
        var gizliDiv = document.getElementById("gizliDiv");
        gizliDiv.style.display = "block";
    }
}


function changeImage() {
    var img = document.getElementById("myImg");
    var images = ["loginPageImage/loginImage1.jpeg", "loginPageImage/loginImage2.jpeg", "loginPageImage/loginImage3.jpeg"];
    var index = Math.floor(Math.random() * images.length);
    img.src = images[index];
    
}


setInterval(changeImage, 5000);
setInterval(merhabaDunya, 500);












