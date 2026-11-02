import type { ContactContent } from '../types';

import heroImage from '../../assets/images/bassura-gallery-1.jpg';
import mapImage from '../../assets/images/map-alam-sutera.png';

/**
 * Konten halaman kontak.
 *
 * Detail alamat, jam, dan kontak diambil dari `site.ts` oleh komponen,
 * jadi tidak ada duplikasi data di sini.
 */
export const contactContent: ContactContent = {
  hero: {
    eyebrow: 'Kontak & booking',
    title: 'Mulai dari survei. Gratis, tanpa komitmen.',
    description:
      'Ceritakan ukuran, lokasi, dan kebutuhan ruang Anda. Kami merespons lewat WhatsApp pada jam kerja.',
    breadcrumb: [{ label: 'Beranda', href: '/' }, { label: 'Kontak' }],
    primaryCta: {
      label: 'Jadwalkan survei',
      href: '#booking',
    },
    secondaryCta: {
      label: 'Lihat layanan',
      href: '/services',
    },
    image: heroImage,
    imageAlt:
      'Ruang keluarga kecil dengan pencahayaan alami dan furnitur bernuansa hangat',
  },

  booking: {
    eyebrow: 'Booking survei',
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
    map: {
      title: 'Lokasi workshop',
      note: 'Kunjungan workshop dengan janji terlebih dahulu. Survei lokasi tersedia untuk area Jabodetabek.',
      linkLabel: 'Buka di Google Maps',
      image: mapImage,
      imageAlt:
        'Peta statis lokasi workshop SpaceCraft Studio di kawasan Alam Sutera, Tangerang Selatan',
      attribution: 'Peta statis: © OpenStreetMap contributors',
    },
  },
};
