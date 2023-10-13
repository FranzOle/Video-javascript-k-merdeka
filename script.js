//video 5 QuerySelectorall

par.onclick = () => {
    //memeriksa array img
    console.log(document.querySelectorAll('img'));
     //fungsi querySelctorAll adalah untuk menunjuk semua elemen img membentuk sebuah array 
    //membuat random
    min = Math.ceil(0);
    max = Math.floor(2);

    let n = Math.floor(Math.random()* (max - min +1));
    console.log(n);
    document.querySelectorAll('img')[n].style.visibility = 'visible';
};

