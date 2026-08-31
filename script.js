// Data Awal Portofolio Siswa
const initialData = {
    nama: "Ahmad Rizky",
    jurusan: "Rekayasa Perangkat Lunak (RPL)",
    email: "ahmad.rizky@smkpintar.sch.id",
    bio: "Siswa SMK PINTAR kelas XII yang berfokus pada pengembangan aplikasi web dan pembuatan antarmuka yang bersih serta responsif.",
    jadwal: [
        "Senin - Kamis: Praktikum Koding & Teori",
        "Jumat: Pendalaman Proyek Portofolio Siswa",
        "Sabtu: Ekstrakurikuler Programming Club"
    ],
    skills: ["HTML5 / CSS3", "JavaScript ES6", "Git & GitHub", "UI/UX Design"],
    projects: [
        { judul: "Aplikasi Kasir Sekolah", desc: "Sistem POS sederhana berbasis web." },
        { judul: "Website Perpustakaan", desc: "Portal peminjaman buku digital SMK." }
    ],
    certificates: [
        "Sertifikat Web Developer - 2025",
        "Juara 2 LKS SMK Bidang Web Technologies - 2026"
    ]
};

// Toggle Menu Navigasi di HP
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Menutup menu otomatis saat tautan diklik di layar HP
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});

// Render Data ke Tampilan Web
function renderPortfolio(data) {
    document.getElementById("disp-nama").innerText = data.nama;
    document.getElementById("disp-jurusan").innerText = data.jurusan;
    document.getElementById("disp-bio").innerText = data.bio;

    // Render Jadwal
    const containerJadwal = document.getElementById("disp-jadwal");
    containerJadwal.innerHTML = "";
    data.jadwal.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        containerJadwal.appendChild(li);
    });

    // Render Skill
    const containerSkill = document.getElementById("disp-skills");
    containerSkill.innerHTML = "";
    data.skills.forEach(skill => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `<strong><i class="fa-solid fa-check" style="color: #4f46e5;"></i> ${skill}</strong>`;
        containerSkill.appendChild(div);
    });

    // Render Project
    const containerProject = document.getElementById("disp-projects");
    containerProject.innerHTML = "";
    data.projects.forEach(proj => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `<h4>${proj.judul}</h4><p style="color:#64748b; font-size: 0.85rem;">${proj.desc}</p>`;
        containerProject.appendChild(div);
    });

    // Render Sertifikat
    const containerCert = document.getElementById("disp-certificates");
    containerCert.innerHTML = "";
    data.certificates.forEach(cert => {
        const div = document.createElement("div");
        div.className = "item-card";
        div.innerHTML = `<i class="fa-solid fa-award" style="color: #06b6d4;"></i> ${cert}`;
        containerCert.appendChild(div);
    });
}

// Validasi Form & Mencegah Jadwal/Data Kosong
function handleFormSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById("input-nama").value.trim();
    const jurusan = document.getElementById("input-jurusan").value.trim();
    const email = document.getElementById("input-email").value.trim();
    const bio = document.getElementById("input-bio").value.trim();
    const jadwal = document.getElementById("input-jadwal").value.trim();
    const alertBox = document.getElementById("alert-message");

    // Pengecekan data tidak boleh kosong
    if (!nama || !jurusan || !email || !bio || !jadwal) {
        alertBox.style.display = "block";
        alertBox.style.backgroundColor = "#fef2f2";
        alertBox.style.color = "#ef4444";
        alertBox.style.border = "1px solid #fecaca";
        alertBox.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Gagal! Data dan Jadwal wajib diisi lengkap.';
        return;
    }

    // Perbarui data jika validasi berhasil
    initialData.nama = nama;
    initialData.jurusan = jurusan;
    initialData.email = email;
    initialData.bio = bio;
    initialData.jadwal = [jadwal];

    renderPortfolio(initialData);

    // Tampilkan notifikasi berhasil
    alertBox.style.display = "block";
    alertBox.style.backgroundColor = "#ecfdf5";
    alertBox.style.color = "#10b981";
    alertBox.style.border = "1px solid #a7f3d0";
    alertBox.innerHTML = '<i class="fa-solid fa-circle-check"></i> Data dan Jadwal berhasil diperbarui!';
}

// Inisialisasi awal saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderPortfolio(initialData);
});
          
