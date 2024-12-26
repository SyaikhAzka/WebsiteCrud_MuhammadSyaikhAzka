var data = [
    { nama: "Test", nim: "123456", kontak: "08123456789" }
];

function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama</th><th>NIM</th><th>Kontak</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        var j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i].nama + "</td><td>" + data[i].nim + "</td><td>" + data[i].kontak + "</td><td>" + btnEdit + " " + btnHapus + "</td></tr>";
    }
}


function tambah() {
    var nama = document.querySelector('input[name="nama"]').value.trim();
    var nim = document.querySelector('input[name="nim"]').value.trim();
    var kontak = document.querySelector('input[name="kontak"]').value.trim();

    // Validasi input
    if (!nama || !nim || !kontak) {
        alert("Semua kolom harus diisi!");
        return;
    }

    // Tambahkan data baru
    data.push({ nama: nama, nim: nim, kontak: kontak });
    tampil();

    // Kosongkan input
    document.querySelector('input[name="nama"]').value = "";
    document.querySelector('input[name="nim"]').value = "";
    document.querySelector('input[name="kontak"]').value = "";
}


function edit(id) {
    var namaBaru = prompt("Edit Nama", data[id].nama);
    var nimBaru = prompt("Edit NIM", data[id].nim);
    var kontakBaru = prompt("Edit Kontak", data[id].kontak);

    // Update data
    if (namaBaru) data[id].nama = namaBaru;
    if (nimBaru) data[id].nim = nimBaru;
    if (kontakBaru) data[id].kontak = kontakBaru;

    tampil();
}


function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();