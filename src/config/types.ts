/**
 * Tipe konfigurasi template.
 *
 * File ini adalah kontrak antara data klien dan komponen.
 * Jika sebuah field wajib belum diisi, build akan gagal lebih awal
 * daripada menghasilkan halaman dengan konten kosong.
 */

import type { ImageMetadata } from 'astro';

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  /** Nomor WhatsApp format internasional tanpa tanda plus, contoh: 6281234567890 */
  whatsapp: string;
  phone: string;
  email: string;
  /** Jam operasional, contoh: Senin–Sabtu 09.00–18.00 */
  hours: string;
}

export interface Address {
  street: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  tiktok: string;
  youtube: string;
}

export interface SeoConfig {
  defaultTitle: string;
  /** Gunakan `%s` sebagai placeholder judul halaman. */
  titleTemplate: string;
  defaultDescription: string;
  ogImage: string;
  locale: string;
  /** Samakan dengan `--color-primary` di `src/styles/global.css`. */
  themeColor: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  /** Domain produksi tanpa trailing slash, contoh: https://klien.com */
  url: string;
  contact: ContactInfo;
  address: Address;
  social: SocialLinks;
  navigation: NavItem[];
  seo: SeoConfig;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  description: string;
  badge: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: HeroStat[];
  image: ImageMetadata;
  imageAlt: string;
  caption: string;
}

export interface BeforeAfterContent {
  eyebrow: string;
  title: string;
  description: string;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  caption: string;
  note: string;
}

export type UspIcon = 'storage' | 'shield' | 'layers' | 'ruler' | 'clock';

export interface UspItem {
  icon: UspIcon;
  title: string;
  description: string;
  tone?: 'default' | 'primary' | 'accent';
}

export interface BentoContent {
  eyebrow: string;
  title: string;
  description: string;
  items: UspItem[];
  image: ImageMetadata;
  imageAlt: string;
}

export type ProjectCategory = 'Studio Apartment' | 'Compact House';

export interface ProjectSpecs {
  area: string;
  duration: string;
  style: string;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  areaSqm: number;
  description: string;
  challenge: string;
  solution: string;
  features: string[];
  materials: string[];
  specs: ProjectSpecs;
  beforeImage: ImageMetadata;
  afterImage: ImageMetadata;
  gallery: ImageMetadata[];
  imageAlt: string;
  statement: string;
  statementNote: string;
}

export interface FeaturedProjectsContent {
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
}

export interface EstimatorPackage {
  id: string;
  name: string;
  ratePerSqm: number;
  description: string;
}

export interface EstimatorContent {
  eyebrow: string;
  title: string;
  description: string;
  minArea: number;
  maxArea: number;
  defaultArea: number;
  packages: EstimatorPackage[];
  ctaLabel: string;
  note: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  project: string;
}

export type GuaranteeIcon = 'survey' | 'shield' | 'material' | 'team';

export interface Guarantee {
  icon: GuaranteeIcon;
  title: string;
  description: string;
}

export interface TestimonialsContent {
  eyebrow: string;
  title: string;
  description: string;
  items: Testimonial[];
  guarantees: Guarantee[];
}

export interface BookingContent {
  eyebrow: string;
  title: string;
  description: string;
  packages: string[];
  submitLabel: string;
  note: string;
  afterSubmit?: {
    title: string;
    items: string[];
  };
  helper?: {
    title: string;
    description: string;
  };
  map?: {
    title: string;
    note: string;
    linkLabel: string;
    image: ImageMetadata;
    imageAlt: string;
    attribution: string;
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: BreadcrumbItem[];
  image?: ImageMetadata;
  imageAlt?: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  stats?: HeroStat[];
}

export interface StatementContent {
  statement: string;
  note: string;
}

export interface SocialProofStat {
  value: string;
  label: string;
}

export interface StatsContent {
  eyebrow: string;
  title: string;
  description: string;
  sourceNote: string;
  items: SocialProofStat[];
}

export interface ServicePackage {
  id: string;
  name: string;
  tagline: string;
  basePricePerSqm: number;
  bestFor: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface MaterialItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServicesContent {
  hero: PageHeaderContent;
  stats: StatsContent;
  packages: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServicePackage[];
    priceLabel: string;
    bestForLabel: string;
    durationLabel: string;
    includesLabel: string;
    ctaLabel: string;
    note: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: WorkflowStep[];
  };
  statement: StatementContent;
  materials: {
    eyebrow: string;
    title: string;
    description: string;
    image: ImageMetadata;
    imageAlt: string;
    items: MaterialItem[];
    note: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  booking: BookingContent;
}

export interface CalculatorContent {
  hero: PageHeaderContent;
  calculator: {
    eyebrow: string;
    title: string;
    description: string;
    minArea: number;
    maxArea: number;
    defaultArea: number;
    packages: ServicePackage[];
    ctaLabel: string;
    note: string;
    disclaimer: string;
    breakdown: {
      packageLabel: string;
      rateLabel: string;
      areaLabel: string;
      totalLabel: string;
    };
    inclusions: {
      title: string;
      items: string[];
    };
  };
  cta: CtaBannerContent;
}

export interface CtaBannerContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
}

export interface ProjectFilter {
  label: string;
  value: 'all' | ProjectCategory;
}

export interface ProjectsPageContent {
  hero: PageHeaderContent;
  grid: {
    eyebrow: string;
    title: string;
    description: string;
    filters: ProjectFilter[];
    resultLabel: string;
    empty: string;
  };
  detail: {
    specsLabels: {
      area: string;
      duration: string;
      style: string;
    };
    beforeAfterTitle: string;
    beforeAfterDescription: string;
    gallery: {
      eyebrow: string;
      title: string;
      description: string;
    };
    challenge: {
      challengeTitle: string;
      solutionTitle: string;
    };
    featuresTitle: string;
    materialsTitle: string;
  };
  cta: CtaBannerContent;
}

export interface ContactContent {
  hero: PageHeaderContent;
  booking: BookingContent;
}

/**
 * Konten khusus homepage.
 * Section baru menambahkan key-nya sendiri di sini (dan di `content/home.ts`)
 * agar tipe tetap menjadi sumber kebenaran.
 */
export interface HomeContent {
  hero: HeroContent;
  beforeAfter: BeforeAfterContent;
  usps: BentoContent;
  statement: StatementContent;
  featuredProjects: FeaturedProjectsContent;
  estimator: EstimatorContent;
  testimonials: TestimonialsContent;
  booking: BookingContent;
}
