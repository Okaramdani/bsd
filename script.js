function chatWA() {
  const phone = "628558117151"; // ganti nomor WA
  const message = "Halo, saya ingin konsultasi stiker body mobil (full / cutting).";
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}
