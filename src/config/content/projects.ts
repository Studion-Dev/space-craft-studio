import type { Project } from '../types';

import kalibataBefore from '../../assets/images/kalibata-before.jpg';
import kalibataAfter from '../../assets/images/kalibata-after.jpg';
import kalibataGallery1 from '../../assets/images/kalibata-gallery-1.jpg';
import kalibataGallery2 from '../../assets/images/kalibata-gallery-2.jpg';
import bassuraBefore from '../../assets/images/bassura-before.jpg';
import bassuraAfter from '../../assets/images/bassura-after.jpg';
import bassuraGallery1 from '../../assets/images/bassura-gallery-1.jpg';
import bassuraGallery2 from '../../assets/images/bassura-gallery-2.jpg';
import bintaroBefore from '../../assets/images/bintaro-before.jpg';
import bintaroAfter from '../../assets/images/bintaro-after.jpg';
import bintaroGallery1 from '../../assets/images/bintaro-gallery-1.jpg';
import bintaroGallery2 from '../../assets/images/bintaro-gallery-2.jpg';
import tebetBefore from '../../assets/images/tebet-before.jpg';
import tebetAfter from '../../assets/images/tebet-after.jpg';
import tebetGallery1 from '../../assets/images/tebet-gallery-1.jpg';
import tebetGallery2 from '../../assets/images/tebet-gallery-2.jpg';
import serpongBefore from '../../assets/images/serpong-before.jpg';
import serpongAfter from '../../assets/images/serpong-after.jpg';
import serpongGallery1 from '../../assets/images/serpong-gallery-1.jpg';
import serpongGallery2 from '../../assets/images/serpong-gallery-2.jpg';
import cibuburBefore from '../../assets/images/cibubur-before.jpg';
import cibuburAfter from '../../assets/images/cibubur-after.jpg';
import cibuburGallery1 from '../../assets/images/cibubur-gallery-1.jpg';
import cibuburGallery2 from '../../assets/images/cibubur-gallery-2.jpg';

/**
 * Data proyek portofolio.
 *
 * Dipakai homepage untuk featured projects dan halaman
 * `/projects` serta `/projects/[slug]`.
 */
export const projects: Project[] = [
  {
    slug: 'kalibata-city-studio',
    title: 'Apartemen Kalibata City 21 m²',
    category: 'Studio Apartment',
    location: 'Jakarta Selatan',
    areaSqm: 21,
    description:
      'Transformasi studio 21 m² dengan murphy bed, meja makan lipat dinding, dan penyimpanan yang menyatu dengan ruang.',
    challenge:
      'Ruang 21 m² harus menampung tempat tidur, area kerja, dapur kecil, dan meja makan tanpa terasa penuh.',
    solution:
      'Kami memaksimalkan fungsi dinding: murphy bed yang terlipat saat siang, meja makan lipat, dan kabinet setinggi plafon untuk barang musiman.',
    features: [
      'Murphy bed tersembunyi',
      'Meja makan lipat dinding',
      'Kabinet setinggi plafon',
      'Area kerja dekat jendela',
    ],
    materials: [
      'Plywood 15 mm anti-rayap',
      'HPL Grade A motif light oak',
      'Engsel soft-close',
      'Cat water-based low VOC',
    ],
    specs: {
      area: '21 m²',
      duration: '3 minggu',
      style: 'Japandi Light Wood',
    },
    beforeImage: kalibataBefore,
    afterImage: kalibataAfter,
    gallery: [kalibataGallery1, kalibataGallery2],
    imageAlt:
      'Interior apartemen studio 21 meter persegi dengan furnitur kayu terang dan penyimpanan tersembunyi',
    statement: 'Di 21 m², setiap dinding punya dua pekerjaan.',
    statementNote:
      'Tidur, kerja, makan, dan menyimpan tidak boleh saling mengalah.',
  },
  {
    slug: 'bassura-city-studio',
    title: 'Apartemen Bassura City 24 m²',
    category: 'Studio Apartment',
    location: 'Jakarta Timur',
    areaSqm: 24,
    description:
      'Studio 24 m² dengan dapur terbuka, penyimpanan vertikal, dan nuansa warm minimal untuk bekerja dari rumah.',
    challenge:
      'Pemilik bekerja dari rumah dan butuh batas visual antara area kerja, tidur, dan dapur tanpa sekat permanen.',
    solution:
      'Kami memakai lemari rendah sebagai pembatas zona, meja kerja lipat, dan palet warna hangat agar ruang tetap terasa lapang.',
    features: [
      'Meja kerja lipat',
      'Pembatas zona rendah',
      'Dapur terbuka',
      'Penyimpanan vertikal',
    ],
    materials: [
      'Plywood 15 mm anti-rayap',
      'HPL Grade A',
      'Vinyl plank',
      'Lampu LED warm white',
    ],
    specs: {
      area: '24 m²',
      duration: '4 minggu',
      style: 'Warm Minimal',
    },
    beforeImage: bassuraBefore,
    afterImage: bassuraAfter,
    gallery: [bassuraGallery1, bassuraGallery2],
    imageAlt:
      'Interior apartemen studio 24 meter persegi dengan area kerja, dapur terbuka, dan warna hangat',
    statement: 'Ruang kerja tidak harus punya ruangan sendiri.',
    statementNote: 'Meja yang dilipat memberi kembali ruang di sore hari.',
  },
  {
    slug: 'bintaro-compact-house',
    title: 'Bintaro Compact House 36 m²',
    category: 'Compact House',
    location: 'Tangerang Selatan',
    areaSqm: 36,
    description:
      'Rumah compact 36 m² untuk keluarga muda dengan ruang makan multifungsi dan tangga penyimpanan.',
    challenge:
      'Rumah dua lantai mini ini memiliki lalu lintas keluarga yang padat dan penyimpanan yang tersebar tidak efisien.',
    solution:
      'Kami menyatukan ruang makan dan ruang tamu, memanfaatkan bawah tangga untuk storage, dan memilih kayu terang agar ruang terasa lebih besar.',
    features: [
      'Storage bawah tangga',
      'Ruang makan multifungsi',
      'Rak dinding setinggi plafon',
      'Lantai kayu terang',
    ],
    materials: [
      'Plywood 18 mm anti-rayap',
      'HPL Grade A',
      'Parket engineered oak',
      'Cat low VOC',
    ],
    specs: {
      area: '36 m²',
      duration: '5 minggu',
      style: 'Japandi Natural',
    },
    beforeImage: bintaroBefore,
    afterImage: bintaroAfter,
    gallery: [bintaroGallery1, bintaroGallery2],
    imageAlt:
      'Interior rumah compact 36 meter persegi dengan ruang makan kayu, tangga, dan pencahayaan alami',
    statement: 'Rumah kecil butuh alur, bukan sekadar furnitur.',
    statementNote:
      'Sirkulasi keluarga menentukan di mana storage harus berada.',
  },
  {
    slug: 'tebet-studio',
    title: 'Tebet Studio 28 m²',
    category: 'Studio Apartment',
    location: 'Jakarta Selatan',
    areaSqm: 28,
    description:
      'Studio 28 m² dengan meja kerja lipat, panel penyembunyi, dan penyimpanan vertikal untuk pasangan muda.',
    challenge:
      'Pasangan bekerja dari rumah dan butuh area kerja yang bisa hilang saat tidak dipakai.',
    solution:
      'Kami menempatkan meja kerja di balik panel kayu, menambah storage vertikal, dan memisahkan zona tidur dengan warna.',
    features: [
      'Meja kerja lipat',
      'Panel penyembunyi',
      'Storage vertikal',
      'Dapur kompak',
    ],
    materials: [
      'Plywood 15 mm anti-rayap',
      'HPL Grade A',
      'Hardware soft-close',
      'Cat low VOC',
    ],
    specs: {
      area: '28 m²',
      duration: '4 minggu',
      style: 'Japandi Warm',
    },
    beforeImage: tebetBefore,
    afterImage: tebetAfter,
    gallery: [tebetGallery1, tebetGallery2],
    imageAlt:
      'Interior studio 28 meter persegi dengan meja kerja tersembunyi dan kayu hangat',
    statement: 'Area kerja bisa hadir tanpa mengambil ruang permanen.',
    statementNote: 'Panel kayu menutup meja saat hari sudah selesai.',
  },
  {
    slug: 'serpong-garden-studio',
    title: 'Serpong Garden Apartment 30 m²',
    category: 'Studio Apartment',
    location: 'Tangerang Selatan',
    areaSqm: 30,
    description:
      'Studio 30 m² dengan dapur terbuka, storage bawah tempat tidur, dan palet warna netral.',
    challenge:
      'Barang harian menumpuk di meja dan lantai karena storage tidak terencana.',
    solution:
      'Kami memakai storage bawah tempat tidur, rak dinding tertutup, dan zona dapur yang lebih jelas.',
    features: [
      'Storage bawah tempat tidur',
      'Rak dinding tertutup',
      'Dapur terbuka',
      'Lampu ambient',
    ],
    materials: [
      'Plywood 15 mm anti-rayap',
      'HPL Grade A',
      'Vinyl plank',
      'Lampu LED warm white',
    ],
    specs: {
      area: '30 m²',
      duration: '4 minggu',
      style: 'Soft Minimal',
    },
    beforeImage: serpongBefore,
    afterImage: serpongAfter,
    gallery: [serpongGallery1, serpongGallery2],
    imageAlt:
      'Interior studio 30 meter persegi dengan dinding netral dan dapur terbuka',
    statement: 'Storage yang baik menghilang dari pandangan.',
    statementNote: 'Barang harian tetap dekat, tetapi tidak memenuhi meja.',
  },
  {
    slug: 'cibubur-compact-house',
    title: 'Cibubur Compact House 45 m²',
    category: 'Compact House',
    location: 'Depok',
    areaSqm: 45,
    description:
      'Rumah compact 45 m² untuk keluarga dengan dua anak, dengan storage bawah tangga dan ruang makan yang bisa jadi area belajar.',
    challenge:
      'Keluarga butuh ruang belajar, ruang makan, dan storage mainan tanpa menambah luas bangunan.',
    solution:
      'Kami membuat ruang makan multifungsi, memanfaatkan bawah tangga, dan menyediakan rak mainan rendah yang mudah dijangkau anak.',
    features: [
      'Storage bawah tangga',
      'Meja belajar lipat',
      'Rak mainan rendah',
      'Ruang makan multifungsi',
    ],
    materials: [
      'Plywood 18 mm anti-rayap',
      'HPL Grade A',
      'Parket engineered oak',
      'Cat low VOC',
    ],
    specs: {
      area: '45 m²',
      duration: '6 minggu',
      style: 'Japandi Family',
    },
    beforeImage: cibuburBefore,
    afterImage: cibuburAfter,
    gallery: [cibuburGallery1, cibuburGallery2],
    imageAlt:
      'Interior rumah compact 45 meter persegi dengan ruang keluarga hangat dan penyimpanan bawah tangga',
    statement: 'Ruang belajar anak tidak harus punya kamar sendiri.',
    statementNote:
      'Meja lipat dan rak rendah membuat ruang makan bekerja dua kali.',
  },
];

export const featuredProjects = projects;
