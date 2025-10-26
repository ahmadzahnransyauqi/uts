// Menunggu semua konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

  // Cari elemen progress bar dan teks nilainya
  const progressBarFill = document.querySelector('.progress-bar-fill');
  const progressValueText = document.querySelector('.progress-value');

  // Jika elemennya tidak ada di halaman, hentikan eksekusi
  if (!progressBarFill || !progressValueText) {
    return; 
  }

  // Ambil nilai target progres dari atribut 'data-progress' di HTML
  const targetPercent = parseInt(progressBarFill.getAttribute('data-progress'), 10);
  
  let currentPercent = 0;

  // Tunda animasi 500ms (0.5 detik) agar terlihat lebih mulus saat halaman dimuat
  setTimeout(() => {
    
    // 1. Atur lebar bar sesuai target. CSS akan menganimasikannya.
    progressBarFill.style.width = targetPercent + '%';

    // 2. Buat interval untuk animasi hitungan angka
    const interval = setInterval(() => {
      // Jika hitungan belum mencapai target
      if (currentPercent < targetPercent) {
        currentPercent++; // Tambah 1
        progressValueText.innerText = currentPercent + '%'; // Tampilkan di layar
      } else {
        // Jika sudah sampai, hentikan intervalnya
        clearInterval(interval);
      }
    }, 20); // Kecepatan hitungan (20ms)

  }, 500); // Penundaan awal

});