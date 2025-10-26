// Menunggu semua konten HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

  // 1. Memilih SEMUA tombol dengan kelas .btn-primary
  const tombolPaket = document.querySelectorAll('.btn-primary');

  // 2. Menambahkan "pendengar" aksi 'click' ke setiap tombol
  tombolPaket.forEach(tombol => {
    
    tombol.addEventListener('click', (event) => {
      
      // 3. (PENTING) Mencegah tag <a> berpindah halaman
      //    Karena Anda menggunakan <a href="#">, ini mencegah
      //    halaman melompat ke atas saat diklik.
      event.preventDefault(); 

      // 4. Mencari 'kartu' terdekat (induk) dari tombol yang diklik
      const kartu = tombol.closest('.card');
      
      // 5. Mengambil teks dari judul (h3) di dalam kartu tersebut
      const namaPaket = kartu.querySelector('h3').innerText;

      // 6. Menampilkan pesan alert
      alert(`Anda telah memilih paket: ${namaPaket}`);
    });

  });

});