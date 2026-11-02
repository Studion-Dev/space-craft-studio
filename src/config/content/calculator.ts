import type { CalculatorContent } from '../types';
import { servicesContent } from './services';

import heroImage from '../../assets/images/kalibata-gallery-2.jpg';

/**
 * Konten halaman kalkulator.
 *
 * Paket diambil dari halaman layanan agar tarif dan fitur tidak
 * pernah berbeda antara dua halaman.
 */
export const calculatorContent: CalculatorContent = {
  hero: {
    eyebrow: 'Kalkulator estimasi',
    title: 'Hitung kisaran biaya sebelum bertemu.',
    description:
      'Masukkan luas ruangan dan pilih paket. Hasilnya muncul langsung dan bisa dikirim ke WhatsApp admin untuk dibahas lebih lanjut.',
    breadcrumb: [{ label: 'Beranda', href: '/' }, { label: 'Kalkulator' }],
    primaryCta: {
      label: 'Mulai hitung',
      href: '#kalkulator',
    },
    secondaryCta: {
      label: 'Lihat detail paket',
      href: '/services',
    },
    stats: [
      { value: '10–200 m²', label: 'Rentang input' },
      { value: '3 paket', label: 'Pilihan pengerjaan' },
      { value: 'Gratis', label: 'Tanpa biaya' },
    ],
    image: heroImage,
    imageAlt:
      'Ruang keluarga hangat dengan sofa netral, meja kayu, dan tanaman',
  },

  calculator: {
    eyebrow: 'Estimasi',
    title: 'Masukkan ukuran ruang Anda.',
    description:
      'Angka ini adalah titik awal, bukan penawaran final. Harga akhir ditentukan setelah survei dan pengecekan kondisi ruang.',
    minArea: 10,
    maxArea: 200,
    defaultArea: 21,
    packages: servicesContent.packages.items,
    ctaLabel: 'Kirim hasil ke WhatsApp admin',
    note: 'Estimasi dihitung dari harga paket per m². Tidak ada data yang disimpan di website ini.',
    disclaimer:
      'Belum termasuk pekerjaan struktural besar, perizinan, atau perubahan di luar scope yang disepakati.',
    breakdown: {
      packageLabel: 'Paket',
      rateLabel: 'Tarif per m²',
      areaLabel: 'Luas ruangan',
      totalLabel: 'Estimasi awal',
    },
    inclusions: {
      title: 'Yang memengaruhi harga final',
      items: [
        'Kondisi dinding, lantai, dan plafon',
        'Titik listrik dan plumbing yang perlu dipindah',
        'Jumlah dan kompleksitas storage',
        'Pilihan material dan hardware',
        'Akses lokasi dan jadwal pekerjaan',
      ],
    },
  },

  cta: {
    eyebrow: 'Butuh angka lebih pasti?',
    title: 'Survei gratis, lalu kami susun RAB.',
    description:
      'Kalkulator memberi gambaran awal. Setelah survei, Anda menerima rekomendasi paket dan rincian biaya yang lebih akurat.',
    primaryCta: {
      label: 'Jadwalkan survei',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Lihat layanan',
      href: '/services',
    },
  },
};
