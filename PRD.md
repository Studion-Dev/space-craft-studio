# 📋 Product Requirement Document (PRD) — SpaceCraft Studio

## 1. Executive Summary & Overview

- **Brand Name:** SpaceCraft Studio
- **Tagline:** "Maximize Your Small Space, Elevate Your Life"
- **Target Audience:** First-time home buyers, studio apartment owners, and remote workers looking for compact, aesthetic (Japandi Modern), and functional living spaces in JABODETABEK.
- **Core Goal:** Transform website visitors into leads for free on-site surveys through visual proof (Before-After slider, detailed portfolios) and price transparency (instant cost estimator, tier packages).
- **Primary CTA:** Dual CTA strategy (Floating WhatsApp direct button + On-site survey booking form).

---

## 2. Requirements & MVP Scope

- **Design Vibe:** Clean, modern, asymmetric minimalist with warm Japandi accents (Warm Beige, Muted Green, Warm Wood).
- **Key MVP Features:**
  - Interactive Before/After image comparison toggle.
  - Simple instant Renovation Cost Calculator ($m^2 \times \text{package price}$).
  - Dynamic Portfolio showcase with individual project detail pages.
  - Interactive package comparison table with "starting from" pricing.
  - Survey Booking Form connected to WhatsApp pre-filled messages.
- **Excluded Features (Phase 2 Scope Creep Control):**
  - Client Portal / Project Progress Dashboard.
  - Online Payment Gateway integration.
  - Dynamic CMS / Blog / Article system.

---

## 3. Site Architecture & Sitemap

```
/ (Home)
├── Hero Section (Headline + Dual CTA + Offer Badge)
├── Interactive Before-After Toggle (Visual Proof)
├── Bento Grid Value Proposition & Workflows
├── Featured Projects Highlight
├── Testimonials, Guarantees & Trust Badges
└── Lead Booking Form & Footer

/services (Layanan & Harga)
├── Package Comparison Table (Full Renovation, Custom Furniture, 3D Only)
├── Step-by-step Workflow (5 Steps)
└── Material Transparency & Quality Badges

/calculator (Kalkulator Estimasi)
├── Multi-field Interactive Estimator Form
├── Instant Cost Output Breakdown
└── Direct "Send Calculation to WhatsApp Admin" CTA

/projects (Portofolio)
├── Filterable Grid (Studio Apartment vs Compact House)
└── Dynamic Project Cards

/projects/[slug] (Portofolio Detail)
├── Project Banner & Specs Overview
├── Bento Layout Gallery (High-Res & Hidden Storage Details)
└── Challenge vs Solution Breakdown

/contact (Kontak & Booking)
├── On-Site Survey Booking Form
├── Interactive Google Maps Embed
└── Direct Office/Workshop Details & Admin Contacts
```

---

## 4. Data Structures (Local JSON Schemas)

### `src/data/projects.json`

```json
[
  {
    "slug": "kalibata-city-studio",
    "title": "Apartemen Kalibata City 21m²",
    "category": "Studio Apartment",
    "location": "Jakarta Selatan",
    "beforeImage": "/images/portfolio/kalibata-before.jpg",
    "afterImage": "/images/portfolio/kalibata-after.jpg",
    "gallery": [
      "/images/portfolio/kalibata-1.jpg",
      "/images/portfolio/kalibata-2.jpg"
    ],
    "description": "Transformasi ruangan studio 21m² dengan murphy bed dan meja makan lipat dinding.",
    "specs": {
      "area": "21 sqm",
      "duration": "3 Minggu",
      "style": "Japandi Light Wood"
    }
  }
]
```

### `src/data/services.json`

```json
[
  {
    "id": "full-renovation",
    "name": "Full Apartment Renovation",
    "basePricePerSqm": 3500000,
    "unit": "m²",
    "features": [
      "Desain 3D & Gambar Kerja",
      "Pengecatan & Listrik",
      "Fully Furnished (HPL Grade A)",
      "Garansi 1 Tahun"
    ],
    "isPopular": true
  }
]
```

---

## 5. Tech Stack & Brand Assets

- **Framework:** Astro (SSG)
- **CSS Framework:** Tailwind CSS
- **Icons:** Lucide Icons (`lucide-astro`)
- **Color Palette:**
  - **Primary Background:** Warm Beige (`#F5F2EB`)
  - **Secondary Accent:** Muted Green (`#4A5D4E`)
  - **Warm Accent:** Wood Brown (`#C89D7C`)
  - **Text/Dark:** Charcoal (`#1F2421`)
- **Hosting:** Vercel

---

## 6. Dummy Data Transparency Notice

1. **Images:** Stock photos from Unsplash for Japandi & Compact spaces (to be replaced with original project photos).
2. **Projects:** Sample entries (_Kalibata City 21m²_, _Bassura City 24m²_, _Bintaro Compact House 36m²_).
3. **Prices:** Base rates used for preview calculator (Full: Rp 3.5M/$m^2$, Custom: Rp 2.2M/$m^2$, 3D: Rp 150K/$m^2$).

---

## 7. AI Execution Blueprint (Micro-Tasks)

> **Instructions for AI Coding Agent (Open Code CLI):**
> Gunakan seluruh kapabilitas _frontend skill_ terbaikmu untuk membangun website ini dengan tema **Modern Minimalis Asimetris**. Hindari layout kotak-kotak yang kaku; gunakan variasi grid asimetris (misal: rasio kolom tidak simetris, penggunaan _whitespace_ yang luas, elemen card yang sedikit bergeser/overlapping tipis, aksen _warm beige_, _muted green_, serta _warm wood accents_). Pisahkan data statis ke dalam file JSON di folder `src/data/` untuk menjaga kode tetap modular.

### Fase 1: Setup & Project Architecture

- [ ] **Task 1.1:** Inisialisasi struktur folder project Astro (jika belum ada) dan pastikan Tailwind CSS terkonfigurasi dengan kustom warna brand SpaceCraft Studio (`warm-beige`, `muted-green`, `wood-accent`).
- [ ] **Task 1.2:** Buat file-file data lokal pendukung di folder `src/data/`:
  - `projects.json` (Berisi daftar portofolio dengan detail before/after, lokasi, dan slug).
  - `services.json` (Berisi daftar paket renovasi dan custom furniture beserta harga "mulai dari").
  - `faqs.json` (Daftar tanya-jawab klien).
  - `testimonials.json` (Ulasan klien dan badge garansi).
- [ ] **Task 1.3:** Buat komponen layout dasar (`BaseLayout.astro`) yang mencakup Navbar responsif dengan _Floating WA Button_ dan Footer dengan form booking survei.

### Fase 2: Pengembangan Halaman Beranda (`/`)

- [ ] **Task 2.1:** Implementasi **Hero Section Asimetris** di `src/pages/index.astro` dengan headline _"Maximize Your Small Space, Elevate Your Life"_, subheadline area operasional Jabodetabek, dan **Dual CTA** (Tombol WhatsApp & Tombol Kalkulator).
- [ ] **Task 2.2:** Buat komponen interaktif **Before-After Toggle/Hover** untuk menunjukkan transformasi apartemen studio secara instan.
- [ ] **Task 2.3:** Buat section **Bento Grid USP** dengan tata letak asimetris (menonjolkan _Hidden Storage_, Garansi 1 Tahun, dan Material Plywood anti-rayap + HPL Grade A).
- [ ] **Task 2.4:** Tambahkan _Featured Projects Showcase_ dan _Quick Estimator Hook Banner_ di bagian bawah beranda.

### Fase 3: Halaman Layanan & Harga (`/services`)

- [ ] **Task 3.1:** Buat halaman `src/pages/services.astro` dengan layout kartu perbandingan harga 3 paket utama (Full Renovation, Custom Furniture, 3D Design Only).
- [ ] **Task 3.2:** Tambahkan section **Workflow / Alur Kerja (5 Steps)** berbentuk timeline visual minimalis.
- [ ] **Task 3.3:** Tambahkan section transparansi material (penjelasan detail HPL Grade A & Plywood).

### Fase 4: Halaman Kalkulator Estimasi Biaya (`/calculator`)

- [ ] **Task 4.1:** Buat halaman kalkulator interaktif di `src/pages/calculator.astro`.
- [ ] **Task 4.2:** Implementasikan logika kalkulator sederhana berbasis input luas ruangan ($m^2$) dan pilihan paket.
- [ ] **Task 4.3:** Tambahkan tombol _"Kirim Hasil Estimasi ke WhatsApp Admin"_ yang otomatis merangkum kalkulasi ke format pesan WhatsApp.

### Fase 5: Halaman Portofolio & Detail Projek (`/projects` & `/projects/[slug]`)

- [ ] **Task 5.1:** Buat halaman galeri portofolio di `src/pages/projects/index.astro` dengan grid asimetris.
- [ ] **Task 5.2:** Buat dynamic route `src/pages/projects/[slug].astro` untuk menampilkan detail projek (galeri foto, tantangan & solusi, spesifikasi material).

### Fase 6: Halaman Kontak & Booking Survei (`/contact`)

- [ ] **Task 6.1:** Buat halaman kontak di `src/pages/contact.astro` dengan layout dua kolom asimetris (info workshop Alam Sutera & peta, serta form booking survei lokasi).
- [ ] **Task 6.2:** Pastikan form booking terhubung langsung dengan aksi pengiriman data atau WhatsApp API.

### Fase 7: Polishing, Responsiveness & Deployment Prep

- [ ] **Task 7.1:** Lakukan pengecekan _mobile responsiveness_ di semua halaman (pastikan transisi asimetris tetap rapi di layar kecil).
- [ ] **Task 7.2:** Validasi performa build Astro dan pastikan tidak ada _broken links_ atau missing assets dari placeholder Unsplash.
- [ ] **Task 7.3:** Siapkan konfigurasi untuk deployment ke Vercel.
