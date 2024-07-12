var data khodam = ['singa dangdut', 'nyi blorong', 'lele terbang', 'banteng merah', 'tikus jalan', 'rawa rontek', 'burung terbang', 'boboi terbang', 'tuyul mullet', 'uni bakwan',
];

var inputnama = documnet.getElementById('inputnama');

var valid = true;

function lanjutkan() {
    var pushnama = inputnama.value;

    if (pushnama === '') {
        valid = false;
        alert('Nama lengkap tidak boleh kosong!!');
    }

    if (valid) {
        document.getElementById('tampilankhodam').style.display = 'block';

        document.getElementById('tampilanawal').style.display = 'none';
    
        document.getElementById('namauser').innerHTML = 'nama : ' + pushnama;
        
        var khodam = document.getElementById('khodam');
        khodam.innerHTML = 'khodam anda: ' + datakhodam[Math.floor(Math.random() * data khodam.length)];
    }


}
