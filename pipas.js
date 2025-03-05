// Fungsi untuk menghitung emisi karbon berdasarkan perangkat yang dipilih
function hitungEmisiKarbon(waktu, jumlahPerangkat, dayaPerangkat) {
    const faktorEmisi = 1.1; // Faktor emisi listrik (kg CO₂/kWh)
    
    // Menghitung konsumsi energi dalam kWh per perangkat
    const konsumsiEnergi = (dayaPerangkat * waktu) / 1000;

    // Menghitung emisi karbon per perangkat
    const emisiKarbonPerPerangkat = konsumsiEnergi * faktorEmisi;

    // Menghitung emisi karbon total untuk semua perangkat
    const emisiKarbonTotal = emisiKarbonPerPerangkat * jumlahPerangkat;
    return emisiKarbonTotal;
}

// Fungsi untuk menangani perhitungan saat form disubmit
document.getElementById('carbonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Mengambil input dari form
    const waktu = parseFloat(document.getElementById('waktu').value);
    const jumlahPerangkat = parseInt(document.getElementById('jumlahPerangkat').value);

    // Menentukan daya perangkat berdasarkan pilihan radio button
    const perangkatDipilih = document.querySelector('input[name="perangkat"]:checked').value;
    let dayaPerangkat;

    // Menentukan daya perangkat berdasarkan pilihan
    switch (perangkatDipilih) {
        case 'laptop':
            dayaPerangkat = 50; // Daya laptop dalam watt
            break;
        case 'hp':
            dayaPerangkat = 25; // Daya HP dalam watt
            break;
        case 'ac':
            dayaPerangkat = 400; // Daya AC dalam watt
            break;
        case 'kulkas':
            dayaPerangkat = 150; // Daya Kulkas dalam watt
            break;
        case 'lampu':
            dayaPerangkat = 5; // Daya Lampu dalam watt
            break;
        case 'ricecooker':
            dayaPerangkat = 300; // Daya Rice Cooker dalam watt
            break;
        case 'dispenser':
            dayaPerangkat = 300; // Daya Dispenser dalam watt
            break;
        case 'tv':
            dayaPerangkat = 50; // Daya TV dalam watt
            break;
        default:
            dayaPerangkat = 0; // Default jika tidak ada pilihan
    }

    // Menghitung emisi karbon total
    const emisiKarbonTotal = hitungEmisiKarbon(waktu, jumlahPerangkat, dayaPerangkat);

    // Menampilkan hasil perhitungan
    document.getElementById('hasil').innerText = `Emisi Karbon Total untuk ${jumlahPerangkat} perangkat ${perangkatDipilih.charAt(0).toUpperCase() + perangkatDipilih.slice(1)}: ${emisiKarbonTotal.toFixed(2)} kg CO₂ per hari`;
});