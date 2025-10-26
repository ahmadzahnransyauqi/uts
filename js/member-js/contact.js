document.addEventListener('DOMContentLoaded', () => {

  // 1. Pilih semua elemen utama yang ingin dianimasikan
  const header = document.querySelector('.contact-header');
  const quickContacts = document.querySelectorAll('.quick-contact-card');
  const form = document.querySelector('.contact-form');
  
  // 2. Gabungkan semua elemen (header, 2 kartu, form) ke dalam satu array
  const elements = [header, ...quickContacts, form];
  
  // 3. Loop melalui setiap elemen dan beri jeda animasi
  elements.forEach((el, index) => {
    // Pastikan elemennya ada
    if (el) { 
      setTimeout(() => {
        // Ubah style opacity dan transform (CSS akan menangani transisinya)
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 150); // Jeda 150ms antar elemen
    }
  });

});