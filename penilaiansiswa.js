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
