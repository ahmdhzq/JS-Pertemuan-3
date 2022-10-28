function main() {
    let nomor = document.getElementById("nomor").value
    
    let konfir = confirm ("Apakah kamu yakin dengan jawabanmu?")
    konfir == true ? (nomor == 2 ? alert("Benar, Angka yang anda masukan adalah 2") : alert(`Salah, Angka yang anda masukan adalah ${nomor}`)) : (close)
};