//video 7 JS Event

var tampil = document.getElementById('tampil');

tampil.onclick = () => {
    alert('Nama Anda : ' + document.querySelector('#inputNama').value);
    // '.value' untukmenngambil input ddari html nya denganbenar 
    document.querySelector('#tempelNama').value = document.querySelector('#inputNama').value;
    document.querySelector('#para').textContent = document.querySelector('#inputNama').value;
};

btn.onclick = tampil;
btn.onclick = ()=> alert('JavaScript');
btn.addEventListener('mouseover',tampil);
btn.addEventListener('mouseover', ()=>{
    alert('mouseover event');
});
