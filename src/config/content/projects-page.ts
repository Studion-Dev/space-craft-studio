import type { ProjectsPageContent } from '../types';

import heroImage from '../../assets/images/bintaro-after.jpg';

/**
 * Konten halaman portofolio dan detail proyek.
 * Data proyeknya sendiri ada di `projects.ts`.
 */
export const projectsPageContent: ProjectsPageContent = {
  hero: {
    eyebrow: 'Portofolio',
    title: 'Ruang kecil yang bekerja lebih keras.',
    description:
      'Enam proyek dengan ukuran, kebutuhan, dan pendekatan berbeda. Lihat apa yang berubah dan mengapa.',
    breadcrumb: [{ label: 'Beranda', href: '/' }, { label: 'Proyek' }],
    primaryCta: {
      label: 'Mulai proyek Anda',
      href: '/contact',
    },
    secondaryCta: {
      label: 'Hitung estimasi',
      href: '/calculator',
    },
    stats: [
      { value: '6 proyek', label: 'Portofolio' },
      { value: '21–45 m²', label: 'Rentang luas' },
      { value: '3–6 minggu', label: 'Durasi' },
    ],
    image: heroImage,
    imageAlt:
      'Ruang keluarga compact dengan sofa abu-abu, kayu hangat, dan tanaman',
  },

  grid: {
    eyebrow: 'Proyek',
    title: 'Pilih kategori yang paling dekat.',
    description:
      'Filter untuk melihat proyek studio atau rumah compact. Semua proyek memakai pendekatan yang sama: ukur, sederhanakan, lalu tata.',
    filters: [
      { label: 'Semua', value: 'all' },
      { label: 'Studio Apartment', value: 'Studio Apartment' },
      { label: 'Compact House', value: 'Compact House' },
    ],
    resultLabel: 'proyek ditampilkan',
    empty: 'Belum ada proyek di kategori ini.',
  },

  detail: {
    specsLabels: {
      area: 'Luas',
      duration: 'Durasi',
      style: 'Gaya',
    },
    beforeAfterTitle: 'Sebelum dan sesudah',
    beforeAfterDescription: 'Geser untuk melihat arah transformasi ruang ini.',
    gallery: {
      eyebrow: 'Detail ruang',
      title: 'Yang sering terlewat dari foto.',
      description:
        'Penyimpanan, sambungan, dan material yang membuat ruang kecil tetap rapi.',
    },
    challenge: {
      challengeTitle: 'Tantangan',
      solutionTitle: 'Solusi',
    },
    featuresTitle: 'Yang kami ubah',
    materialsTitle: 'Material yang dipakai',
  },

  cta: {
    eyebrow: 'Punya ruang serupa?',
    title: 'Mulai dari ukuran dan kebiasaan Anda.',
    description:
      'Kami tidak menyalin proyek lain. Survei membantu menemukan solusi yang sesuai ruang dan cara Anda tinggal.',
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
