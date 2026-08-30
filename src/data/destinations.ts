export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  description: string;
  highlights: string[];
  imageUrl: string; // In a real app, this would be from a CMS or image service
};

export const destinations: Destination[] = [
  {
    id: '1',
    slug: 'santorin',
    name: 'Santorin, Grèce',
    country: 'Grèce',
    description: 'Découvrez les célèbres maisons blanches et les églises à dômes bleus surplombant la mer Égée.',
    highlights: [
      'Villages pittoresques d\'Oia et Fira',
      'Plages de sable noir et rouge',
      'Coucher de soleil légendaire',
      'Sites archéologiques d\'Akrotiri'
    ],
    imageUrl: 'https://source.unsplash.com/featured/600x400/?santorin,greece'
  },
  {
    id: '2',
    slug: 'kyoto',
    name: 'Kyoto, Japon',
    country: 'Japon',
    description: 'Temples anciens, jardins zen et traditions séculaires vous attendent dans cette ville historique.',
    highlights: [
      'Temple d\'Or (Kinkaku-ji)',
      'Forêt de bambous d\'Arashiyama',
      'Quartier historique de Gion',
      'Cérémonie du thé traditionnelle'
    ],
    imageUrl: 'https://source.unsplash.com/featured/600x400/?kyoto,japan'
  },
  {
    id: '3',
    slug: 'marrakech',
    name: 'Marrakech, Maroc',
    country: 'Maroc',
    description: 'Plongez dans l\'atmosphère vibrante des souks, des palais et des jardins luxuriants de la ville ocre.',
    highlights: [
      'Place Jemaa el-Fna',
      'Jardin Majorelle',
      'Palais de la Bahia',
      'Souks traditionnels'
    ],
    imageUrl: 'https://source.unsplash.com/featured/600x400/?marrakech,morocco'
  },
  {
    id: '4',
    slug: 'bali',
    name: 'Bali, Indonésie',
    country: 'Indonésie',
    description: 'Paradis tropical avec ses plages de rêve, ses rizières en terrasse et sa culture unique.',
    highlights: [
      'Temple d\'Uluwatu',
      'Rizières de Tegallalang',
      'Plage de Seminyak',
      'Spectacles de danse traditionnelle'
    ],
    imageUrl: 'https://source.unsplash.com/featured/600x400/?bali,indonesia'
  },
  {
    id: '5',
    slug: 'quebec',
    name: 'Québec, Canada',
    country: 'Canada',
    description: 'Charme européen et vastes espaces naturels dans cette ville fortifiée d\'Amérique du Nord.',
    highlights: [
      'Vieux-Québec classé UNESCO',
      'Château Frontenac',
      'Chutes de Montmorency',
      'Festival d\'été de Québec'
    ],
    imageUrl: 'https://source.unsplash.com/featured/600x400/?quebec,canada'
  }
];
