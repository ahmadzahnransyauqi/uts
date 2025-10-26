// Ganti kata-kata motivasi secara acak
const motivationList = [
  "Discipline is the bridge between goals and success.",
  "Train hard, stay humble, and trust the process.",
  "Your body can stand almost anything. It’s your mind you have to convince.",
  "Push yourself because no one else is going to do it for you.",
  "Don’t stop when you’re tired. Stop when you’re done."
];

function randomMotivation() {
  const randomIndex = Math.floor(Math.random() * motivationList.length);
  const element = document.getElementById("motivation-text");
  // Pastikan elemen ada sebelum diubah
  if (element) {
    element.innerText = `"${motivationList[randomIndex]}"`;
  }
}

// Jalankan saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  
  // --- KODE ANDA YANG SUDAH ADA ---
  randomMotivation();

  // === Data profil member (versi Muaz) ===
  const memberData = {
    name: "Muaz Alfattah Fadhani",
    email: "muazalfattah@gmail.com",
    package: "Premium Membership",
    expiry: "25 Desember 2025",
    barcode: "RogerSumatera12345"
  };

  // Tampilkan data ke halaman (dengan pengecekan null)
  const elements = {
    name: document.getElementById("member-name"),
    email: document.getElementById("member-email"),
    pkg: document.getElementById("member-package"),
    expiry: document.getElementById("member-expiry"),
    barcode: document.getElementById("barcode-img")
  };

  if (elements.name) elements.name.innerText = memberData.name;
  if (elements.email) elements.email.innerText = "Email: " + memberData.email;
  if (elements.pkg) elements.pkg.innerText = memberData.package;
  if (elements.expiry) elements.expiry.innerText = memberData.expiry;
  if (elements.barcode) elements.barcode.src =
    `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${memberData.barcode}`;

  // --- KODE ANIMASI BARU (DITAMBAHKAN) ---
  
  // 1. Pilih semua elemen kartu yang ingin dianimasikan
  //    (Kita gunakan class .dashboard-card yang kita tambahkan di HTML)
  const cardsToAnimate = document.querySelectorAll('.dashboard-card');

  // 2. Loop melalui setiap kartu dan beri jeda waktu
  cardsToAnimate.forEach((card, index) => {
    setTimeout(() => {
      // 3. Ubah style agar terlihat (CSS akan menangani transisinya)
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 150); // Jeda 150ms antar kartu
  });
  
});