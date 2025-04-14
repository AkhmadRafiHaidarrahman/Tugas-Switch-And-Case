// pertama
let Platnomor = ['B 431 ABC', 'A 631 SDM', 'D 8319 ACC', 'C 9212 AKA'];

Platnomor.forEach(plat => {
    let [huruf, angka, belakang] = plat.split(' ');
    let nomor = parseInt(angka);

    switch (nomor % 2) {
        case 0:
            console.log(`${plat} adalah nomor Genap`);
            break;
        case 1:
            console.log(`${plat} adalah nomor Ganjil`);
            break;
        default:
            console.log(`${plat} tidak dikenali`);
    }
});



// kedua 
let daftarSiswa = [
    { nama: "Rafi", nilai: 100 },
    { nama: "Ayu", nilai: 85 },
    { nama: "Budi", nilai: 73 },
    { nama: "Santi", nilai: 60 }
];

daftarSiswa.forEach(siswa => {
    switch (true) {
        case (siswa.nilai >= 90):
            siswa.grade = 'A';
            break;
        case (siswa.nilai >= 80):
            siswa.grade = 'B';
            break;
        case (siswa.nilai >= 70):
            siswa.grade = 'C';
            break;
        case (siswa.nilai >= 60):
            siswa.grade = 'D';
            break;
        default:
            siswa.grade = 'E';
            break;
    }

    console.log(`${siswa.nama}, Nilai Anda adalah ${siswa.grade}`);
});
