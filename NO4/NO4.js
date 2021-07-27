let nilaiSantri = [ 5, 9, 6, 7, 9, 8, 10, 7, 8 ]
let hitungRataRata = 0

for (let i = 0;i < nilaiSantri.length;i++) {
    hitungRataRata += nilaiSantri[i]
}

let hasilRataRata = hitungRataRata / nilaiSantri.length

document.write(Math.ceil(hasilRataRata))
