// Mengambil semua section dan link navigasi
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.side-nav a');

// Event listener saat halaman di-scroll
window.addEventListener('scroll', () => {
    let current = '';

    // Mengecek posisi scroll saat ini
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Jika posisi scroll sudah mencapai section tertentu
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    // Menghapus class active dari semua link, lalu menambahkannya ke link yang sesuai
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});