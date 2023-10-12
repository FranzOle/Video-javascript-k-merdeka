//video 4 dom query selector
klik.onclick = function (){
    let header = document.querySelector("h1"); //mengambil dari elemen
    let kelas  = document.querySelector(".container"); //mengambil dari identifier kelas
    let aidi   = document.querySelector("#par");
    
    header.innerText = "Javascript";
    kelas.style.backgroundColor = "red";
    aidi.innerText = "Java";
};

