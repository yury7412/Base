function readMore(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if(dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML="Показать еще...";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML="Скрыть";
        more.style.display = "inline";
    }
}