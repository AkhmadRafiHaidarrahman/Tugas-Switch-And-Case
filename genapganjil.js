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



