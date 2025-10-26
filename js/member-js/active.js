document.addEventListener('DOMContentLoaded', () => {
  // 1. Dapatkan path halaman yang sedang dibuka
  //    Contoh: "/jadwal.html"
  const currentPagePath = window.location.pathname;

  // 2. Dapatkan semua link di dalam nav-menu
  const navLinks = document.querySelectorAll('.nav-menu a');

  // 3. Loop setiap link
  navLinks.forEach(link => {
    // 4. Dapatkan alamat 'href' dari link
    //    Contoh: "jadwal.html"
    const linkPath = link.getAttribute('href');

    // 5. Cek apakah path halaman saat ini DIAKHIRI dengan alamat link
    if (currentPagePath.endsWith(linkPath)) {
      // 6. Jika cocok, tambahkan kelas 'active'
      link.classList.add('active');
    }
  });
});