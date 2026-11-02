import type { SiteConfig } from './types';

/**
 * Identitas bisnis klien.
 *
 * Ini satu-satunya tempat untuk nama, kontak, alamat, sosial media,
 * navigasi, dan metadata SEO. `astro.config.mjs` membaca `url` dari sini,
 * jadi domain tidak perlu diubah di dua tempat.
 */
export const siteConfig = {
  name: 'SpaceCraft Studio',
  legalName: '',
  tagline: 'Maximize Your Small Space, Elevate Your Life',
  description:
    'Desain dan renovasi interior Japandi untuk apartemen studio dan rumah compact di Jabodetabek. Fungsional, hangat, dan transparan.',

  url: 'https://spacecraftstudio.id',

  contact: {
    // Format internasional tanpa tanda plus, contoh: 6281234567890
    whatsapp: '6281234567890',
    phone: '+62 812-3456-7890',
    email: 'hello@spacecraftstudio.id',
    // Contoh: Senin–Sabtu 09.00–18.00
    hours: 'Senin–Sabtu 09.00–18.00',
  },

  address: {
    street: 'Kawasan Alam Sutera',
    city: 'Tangerang Selatan',
    province: 'Banten',
    postalCode: '15325',
    country: 'Indonesia',
  },

  social: {
    instagram: 'https://instagram.com/spacecraftstudio',
    facebook: '',
    tiktok: 'https://tiktok.com/@spacecraftstudio',
    youtube: '',
  },

  // Navigasi utama. Halaman yang belum ada tidak boleh dimasukkan.
  navigation: [
    { label: 'Layanan', href: '/services' },
    { label: 'Kalkulator', href: '/calculator' },
    { label: 'Proyek', href: '/projects' },
    { label: 'Kontak', href: '/contact' },
  ],

  seo: {
    defaultTitle:
      'SpaceCraft Studio | Desain Interior Compact Space Jabodetabek',
    titleTemplate: '%s | SpaceCraft Studio',
    defaultDescription:
      'Desain dan renovasi interior Japandi untuk apartemen studio dan rumah compact di Jabodetabek. Survei lokasi gratis, garansi 1 tahun, harga transparan.',
    ogImage: '/og-image.png',
    locale: 'id_ID',
    // Samakan dengan --color-primary di src/styles/global.css
    themeColor: '#4a5d4e',
  },
} satisfies SiteConfig;

/** Nomor WA tanpa karakter selain angka. */
export function getWhatsAppNumber(): string {
  return siteConfig.contact.whatsapp.replace(/\D/g, '');
}

/**
 * URL WhatsApp click-to-chat.
 * Mengembalikan `null` jika nomor belum diisi, supaya komponen bisa
 * menyembunyikan tombol alih-alih menghasilkan link rusak.
 */
export function getWhatsAppUrl(message?: string): string | null {
  const number = getWhatsAppNumber();

  if (!number) return null;

  const query = message ? `?text=${encodeURIComponent(message)}` : '';

  return `https://wa.me/${number}${query}`;
}

/** Alamat satu baris, tanpa bagian yang kosong. */
export function getFormattedAddress(): string {
  const { street, city, province, postalCode, country } = siteConfig.address;

  return [street, city, province, postalCode, country]
    .map((part) => part.trim())
    .filter(Boolean)
    .join(', ');
}
