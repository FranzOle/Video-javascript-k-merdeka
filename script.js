//video 6 DOM form 

var tampil = document.getElementById('tampil');

tampil.onclick = () => {
    alert('Nama Anda : ' + document.querySelector('#inputNama').value);
    // '.value' untukmenngambil input ddari html nya denganbenar 
    document.querySelector('#tempelNama').value = document.querySelector('#inputNama').value;
    document.querySelector('#para').textContent = document.querySelector('#inputNama').value;
}
