import type { HomeContent } from '../types';

import heroImage from '../../assets/images/hero-japandi.jpg';
import beforeImage from '../../assets/images/bassura-before.jpg';
import afterImage from '../../assets/images/kalibata-after.jpg';
import storageImage from '../../assets/images/storage-detail.jpg';
import { projects } from './projects';

/**
 * Konten homepage.
 *
 * Hanya berisi section yang benar-benar dirender di `src/pages/index.astro`.
 * Saat menambah section baru: tambahkan key di `HomeContent`
 * (`src/config/types.ts`), isi datanya di sini, lalu render di halaman.
 */
export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'Desain interior untuk apartemen studio dan rumah compact',
    title: 'Maximize Your Small Space, Elevate Your Life.',
    description:
      'Kami merancang ruang kecil di Jabodetabek agar terasa lebih lega, rapi, dan hangat, tanpa mengorbankan fungsi harian.',
    badge: 'Survei lokasi gratis untuk area Jabodetabek',
    primaryCta: {
      label: 'Jadwalkan survei gratis',
      href: '#booking',
    },
    secondaryCta: {
      label: 'Hitung estimasi biaya',
      href: '#estimasi',
    },
    stats: [
      { value: '21–45 m²', label: 'Ruang yang kami rancang' },
      { value: '1 tahun', label: 'Garansi pengerjaan' },
      { value: '3–6 minggu', label: 'Rata-rata pengerjaan' },
    ],
    image: heroImage,
    imageAlt:
      'Interior apartemen studio bergaya Japandi dengan kayu terang, tanaman, dan pencahayaan hangat',
    caption: 'Japandi light wood, Jakarta Selatan',
  },

  beforeAfter: {
    eyebrow: 'Sebelum dan sesudah',
    title: 'Dari padat jadi lapang, tanpa menambah luas.',
    description:
      'Geser untuk melihat arah penataan: furnitur yang lebih ringan, penyimpanan tersembunyi, dan material hangat pada ruang kecil.',
    beforeImage,
    afterImage,
    beforeAlt: 'Kondisi awal ruang keluarga dengan sofa biru dan furnitur lama',
    afterAlt:
      'Ruang keluarga kecil setelah ditata dengan furnitur netral, tanaman, dan pencahayaan alami',
    beforeLabel: 'Sebelum',
    afterLabel: 'Sesudah',
    caption: 'Contoh transformasi ruang kecil',
    note: 'Ilustrasi arah penataan, bukan foto proyek aktual.',
  },

  usps: {
    eyebrow: 'Kenapa SpaceCraft',
    title: 'Ruang kecil bukan alasan untuk hidup sempit.',
    description:
      'Setiap sentimeter dihitung. Setiap keputusan dijelaskan sebelum produksi.',
    items: [
      {
        icon: 'storage',
        title: 'Penyimpanan yang tidak terlihat',
        description:
          'Murphy bed, meja lipat, dan kabinet dinding yang menyatu dengan ruang.',
        tone: 'primary',
      },
      {
        icon: 'shield',
        title: 'Garansi 1 tahun',
        description:
          'Pengecekan dan perbaikan pasca-serahan tanpa biaya tambahan.',
      },
      {
        icon: 'layers',
        title: 'Plywood anti-rayap, HPL Grade A',
        description:
          'Material inti yang tahan lembap, mudah dirawat, dan aman untuk ruang kecil.',
        tone: 'accent',
      },
      {
        icon: 'ruler',
        title: 'Desain 3D sebelum eksekusi',
        description:
          'Lihat proporsi, storage, dan alur ruang dulu. Baru setelah itu produksi.',
      },
      {
        icon: 'clock',
        title: 'Alur kerja yang jelas',
        description:
          'Lima langkah dari survei sampai serah terima, dengan progres yang bisa ditanyakan.',
      },
    ],
    image: storageImage,
    imageAlt:
      'Detail kabinet kayu terang dengan penyimpanan tersembunyi di ruang kecil',
  },

  statement: {
    statement: 'Ruang kecil bukan versi kecil dari ruang besar.',
    note: 'Ia butuh keputusan yang lebih tepat.',
  },

  featuredProjects: {
    eyebrow: 'Proyek pilihan',
    title: 'Tiga ruang, tiga cara menata hidup.',
    description: 'Ukuran dan kebutuhan berbeda. Pendekatannya juga tidak sama.',
    projects,
  },

  estimator: {
    eyebrow: 'Estimasi cepat',
    title: 'Hitung kisaran biaya sebelum bertemu.',
    description:
      'Masukkan luas ruangan dan pilih paket. Angka muncul langsung, tanpa perlu chat dulu.',
    minArea: 10,
    maxArea: 200,
    defaultArea: 21,
    packages: [
      {
        id: 'full-renovation',
        name: 'Full Renovation',
        ratePerSqm: 3500000,
        description:
          'Desain 3D, pekerjaan sipil ringan, listrik, finishing, dan furnitur.',
      },
      {
        id: 'custom-furniture',
        name: 'Custom Furniture',
        ratePerSqm: 2200000,
        description: 'Furnitur built-in dan penyimpanan sesuai ukuran ruang.',
      },
      {
        id: '3d-design',
        name: '3D Design Only',
        ratePerSqm: 150000,
        description: 'Desain 3D dan gambar kerja untuk eksekusi mandiri.',
      },
    ],
    ctaLabel: 'Kirim estimasi ke WhatsApp',
    note: 'Ini estimasi awal dari harga paket per m². Harga final ditentukan setelah survei dan pengecekan kondisi ruang.',
  },

  testimonials: {
    eyebrow: 'Kata klien',
    title: 'Yang berubah bukan cuma ruangnya.',
    description:
      'Cerita singkat dari mereka yang memulai dengan ruang terbatas.',
    items: [
      {
        quote:
          'Dulu rasanya sempit dan penuh. Sekarang semua punya tempat, dan ruang tamu bisa berubah jadi meja kerja.',
        name: 'Rani',
        project: 'Kalibata City 21 m²',
      },
      {
        quote:
          'Suka karena semuanya dijelaskan dari awal: material, harga, dan waktu. Tidak ada biaya kejutan.',
        name: 'Dimas',
        project: 'Bassura City 24 m²',
      },
      {
        quote:
          'Timnya sabar mengikuti ukuran rumah kecil kami. Hasilnya terasa lebih lega tanpa mengubah struktur.',
        name: 'Ayu',
        project: 'Bintaro Compact House 36 m²',
      },
    ],
    guarantees: [
      {
        icon: 'survey',
        title: 'Survei gratis',
        description:
          'Kami datang melihat kondisi ruang sebelum memberi rekomendasi.',
      },
      {
        icon: 'shield',
        title: 'Garansi 1 tahun',
        description: 'Perbaikan pasca-serahan tanpa biaya tambahan.',
      },
      {
        icon: 'material',
        title: 'Material transparan',
        description: 'Spesifikasi plywood dan HPL dijelaskan di RAB.',
      },
      {
        icon: 'team',
        title: 'Tim in-house',
        description:
          'Desain, produksi, dan instalasi dikerjakan tim yang sama.',
      },
    ],
  },

  booking: {
    eyebrow: 'Mulai dari survei',
    title: 'Ceritakan ruang Anda. Kami datang melihat.',
    description:
      'Survei lokasi gratis untuk area Jabodetabek. Setelah itu Anda menerima rekomendasi paket dan estimasi awal tanpa kewajiban.',
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
