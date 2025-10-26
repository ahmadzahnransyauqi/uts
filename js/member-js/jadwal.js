// Menunggu semua konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

  // 1. Pilih semua kartu jadwal
  const cards = document.querySelectorAll('.jadwal-card');

  // 2. Loop melalui setiap kartu
  cards.forEach((card, index) => {
    
    // 3. Beri jeda waktu yang berbeda untuk setiap kartu
    //    Kartu pertama: 150ms
    //    Kartu kedua: 300ms
    //    Kartu ketiga: 450ms
    //    dst.
    setTimeout(() => {
      // 4. Ubah style opacity dan transform
      //    (CSS akan menangani transisi animasinya)
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150); // 150ms jeda per kartu

  });

});