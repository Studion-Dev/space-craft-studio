import type { ServicesContent } from '../types';

import heroImage from '../../assets/images/kalibata-gallery-1.jpg';
import materialImage from '../../assets/images/storage-detail.jpg';

/**
 * Konten halaman layanan & harga.
 *
 * Harga di sini adalah titik awal per m². Angka final tetap ditentukan
 * setelah survei dan pengecekan kondisi ruang.
 */
export const servicesContent: ServicesContent = {
  hero: {
    eyebrow: 'Layanan & harga',
    title: 'Tiga cara mulai. Satu standar pengerjaan.',
    description:
      'Pilih paket sesuai tahap Anda: renovasi menyeluruh, furnitur custom, atau desain 3D untuk dieksekusi sendiri. Material dan batasannya dijelaskan sejak awal.',
    breadcrumb: [{ label: 'Beranda', href: '/' }, { label: 'Layanan' }],
    primaryCta: {
      label: 'Lihat paket',
      href: '#paket',
    },
    secondaryCta: {
      label: 'Hitung estimasi',
      href: '/calculator',
    },
    image: heroImage,
    imageAlt:
      'Ruang keluarga kecil dengan furnitur kayu, rotan, dan pencahayaan hangat',
  },

  stats: {
    eyebrow: 'Kata klien',
    title: 'Bukan klaim kami.',
    description:
      'Bukti yang kami pegang adalah pengalaman klien setelah ruangnya benar-benar dipakai.',
    sourceNote: 'Berdasarkan survei kepuasan klien internal, 2026.',
    items: [
      { value: '30+', label: 'Proyek selesai' },
      { value: '98%', label: 'Klien puas' },
      { value: '4.9/5', label: 'Rating rata-rata' },
      { value: '9 dari 10', label: 'Klien merekomendasikan' },
    ],
  },

  packages: {
    eyebrow: 'Paket',
    title: 'Mulai dari titik yang paling Anda butuhkan.',
    description:
      'Tidak semua proyek dimulai dari ruang kosong. Pilih paket yang paling dekat dengan kondisi Anda sekarang.',
    priceLabel: 'Mulai dari',
    bestForLabel: 'Cocok untuk',
    durationLabel: 'Durasi',
    includesLabel: 'Termasuk',
    ctaLabel: 'Diskusikan paket',
    items: [
      {
        id: 'full-renovation',
        name: 'Full Renovation',
        tagline: 'Dari kosong sampai siap huni.',
        basePricePerSqm: 3500000,
        bestFor:
          'Apartemen studio atau rumah compact yang butuh perombakan menyeluruh.',
        duration: '4–6 minggu',
        features: [
          'Desain 3D & gambar kerja',
          'Pekerjaan sipil ringan & listrik',
          'Furnitur built-in HPL Grade A',
          'Plywood 15–18 mm anti-rayap',
          'Instalasi & finishing',
          'Garansi pengerjaan 1 tahun',
        ],
        isPopular: true,
      },
      {
        id: 'custom-furniture',
        name: 'Custom Furniture',
        tagline: 'Furnitur yang mengikuti ukuran ruang.',
        basePricePerSqm: 2200000,
        bestFor:
          'Ruang yang sudah layak huni tetapi butuh storage dan furnitur presisi.',
        duration: '2–4 minggu',
        features: [
          'Desain 3D furnitur',
          'Plywood 15–18 mm anti-rayap',
          'HPL Grade A',
          'Hardware soft-close',
          'Instalasi di lokasi',
          'Garansi pengerjaan 1 tahun',
        ],
      },
      {
        id: '3d-design',
        name: '3D Design Only',
        tagline: 'Rencana matang sebelum eksekusi.',
        basePricePerSqm: 150000,
        bestFor: 'Pemilik yang sudah punya kontraktor dan butuh arahan desain.',
        duration: '5–7 hari kerja',
        features: [
          'Denah & layout furnitur',
          '3D render 3 angle',
          'Gambar kerja',
          'Rekomendasi material',
          'Revisi 1 kali',
        ],
      },
    ],
    note: 'Harga per m² adalah titik awal. RAB final disusun setelah survei dan pengecekan kondisi ruang. Pekerjaan struktural besar dan perizinan gedung dihitung terpisah.',
  },

  workflow: {
    eyebrow: 'Alur kerja',
    title: 'Lima langkah, tanpa kejutan.',
    description:
      'Anda tahu apa yang terjadi di setiap tahap, termasuk kapan meninjau dan menyetujui.',
    steps: [
      {
        step: '01',
        title: 'Konsultasi & survei',
        description:
          'Kami mendengar kebutuhan, mengukur ruang, dan mencatat kondisi dinding, listrik, serta plumbing.',
      },
      {
        step: '02',
        title: 'Desain 3D & RAB',
        description:
          'Layout, material, dan biaya disusun sebelum produksi. Anda menyetujui sebelum kami mulai.',
      },
      {
        step: '03',
        title: 'Produksi',
        description:
          'Furnitur dibuat di workshop dengan plywood anti-rayap dan HPL Grade A.',
      },
      {
        step: '04',
        title: 'Instalasi',
        description:
          'Tim in-house memasang, merapikan, dan mengecek setiap detail di lokasi.',
      },
      {
        step: '05',
        title: 'Serah terima & garansi',
        description:
          'Ruang diserahkan siap pakai dengan garansi pengerjaan 1 tahun.',
      },
    ],
  },

  statement: {
    statement:
      'Yang mahal bukan materialnya. Yang mahal adalah salah memilihnya.',
    note: 'Karena itu spesifikasi dijelaskan sebelum produksi.',
  },

  materials: {
    eyebrow: 'Material',
    title: 'Yang terlihat rapi harus kuat di dalam.',
    description:
      'Ruang kecil memakai storage setiap hari. Karena itu material inti tidak boleh hanya terlihat bagus di foto.',
    image: materialImage,
    imageAlt: 'Kabinet kayu terang dengan rak terbuka dan penyimpanan tertutup',
    items: [
      {
        title: 'Plywood anti-rayap',
        description:
          'Bukan particle board. Lapisan kayu solid yang lebih tahan lembap dan kuat untuk storage harian.',
      },
      {
        title: 'HPL Grade A',
        description:
          'Permukaan tahan gores dan mudah dibersihkan, dengan motif kayu yang konsisten.',
      },
      {
        title: 'Hardware soft-close',
        description:
          'Engsel dan rel yang menutup halus, penting untuk kabinet yang sering dipakai.',
      },
      {
        title: 'Finishing low VOC',
        description:
          'Cat dan perekat dengan emisi rendah untuk ruang kecil yang berventilasi terbatas.',
      },
    ],
    note: 'Spesifikasi material selalu tercantum di RAB, bukan hanya di janji lisan.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang paling sering muncul.',
    description:
      'Kalau yang Anda cari belum ada, tanyakan langsung lewat WhatsApp.',
    items: [
      {
        question: 'Apakah survei benar-benar gratis?',
        answer:
          'Ya, untuk area Jabodetabek. Tidak ada kewajiban lanjut setelah survei. Anda menerima rekomendasi paket dan estimasi awal.',
      },
      {
        question: 'Berapa lama pengerjaan?',
        answer:
          'Sekitar 2–6 minggu tergantung paket dan kompleksitas. Timeline tertulis di proposal, bukan hanya perkiraan lisan.',
      },
      {
        question: 'Bisa renovasi apartemen tanpa masalah izin?',
        answer:
          'Kami mengikuti aturan gedung. Pekerjaan bising dijadwalkan sesuai jam yang diizinkan, dan material disesuaikan dengan batasan apartemen.',
      },
      {
        question: 'Apa yang termasuk garansi 1 tahun?',
        answer:
          'Perbaikan kerusakan akibat pengerjaan, seperti hardware, sambungan, atau finishing yang tidak sesuai. Kerusakan karena pemakaian tidak wajar tidak termasuk.',
      },
      {
        question: 'Apakah harga bisa berubah?',
        answer:
          'Perubahan hanya terjadi jika scope berubah. RAB awal disetujui sebelum produksi, dan perubahan harga harus disetujui sebelum dikerjakan.',
      },
      {
        question: 'Bisa custom warna dan material?',
        answer:
          'Bisa. Pilihan HPL, finishing, dan hardware dibahas saat desain. Kami akan menunjukkan batas pilihan yang masuk akal untuk anggaran Anda.',
      },
    ],
  },

  booking: {
    eyebrow: 'Mulai dari survei',
    title: 'Butuh rekomendasi paket?',
    description:
      'Survei lokasi gratis untuk area Jabodetabek. Setelah melihat ruang, kami bantu menentukan paket yang paling masuk akal.',
    packages: [
      'Belum tahu, butuh rekomendasi',
      'Full Renovation',
      'Custom Furniture',
      '3D Design Only',
    ],
    submitLabel: 'Kirim jadwal survei',
    note: 'Form ini membuka WhatsApp dengan pesan yang sudah terisi. Tidak ada data yang disimpan di website.',
    afterSubmit: {
      title: 'Setelah survei',
      items: [
        'Rekomendasi paket sesuai kondisi ruang',
        'Estimasi awal dan catatan material',
        'Jadwal pengerjaan yang bisa Anda tinjau',
        'Opsi material dan finishing',
      ],
    },
    helper: {
      title: 'Butuh jawaban cepat?',
      description:
        'Chat admin di WhatsApp pada jam kerja. Kami biasanya merespons di hari yang sama.',
    },
  },
};
