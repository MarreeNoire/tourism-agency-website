export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // In a real app, this might be MDX or from a CMS
  date: string;
  readTime: string;
  tags: string[];
  imageUrl: string;
  author: {
    name: string;
    avatar: string; // URL to avatar image
  };
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'guide-voyage-ecoresponsable',
    title: 'Guide ultime du voyage écoresponsable en 2024',
    excerpt: 'Découvrez comment réduire votre empreinte carbone tout en profitant pleinement de vos aventures autour du monde.',
    content: `Le voyage écoresponsable n'est plus une tendance, c'est une nécessité. Dans cet article complet, nous vous guidons à travers les meilleures pratiques pour voyager de manière durable, des choix de transport aux hébergements écologiques, en passant par les activités qui bénéficient réellement aux communautés locales.

Nous couvrons :
- Comment choisir des transports moins polluants
- Les labels écologiques à rechercher pour les hébergements
- Des activités qui soutiennent directement les économies locales
- Comment réduire vos déchets pendant vos voyages
- Des destinations particulièrement engagées dans le tourisme durable

Que vous planifiez un weekend en Europe ou un trek en Asie, ce guide vous donnera les outils pour voyager avec conscience et respect.`,
    date: '2024-01-15',
    readTime: '8 min',
    tags: ['Voyage durable', 'Écotourisme', 'Conseils pratiques'],
    imageUrl: 'https://source.unsplash.com/featured/800x400/?ecotravel,travel',
    author: {
      name: 'Marie Dubois',
      avatar: 'https://placehold.co/100x100/6366F1/FFFFFF?text=MD'
    }
  },
  {
    id: '2',
    slug: 'destinations-meconnues-europe',
    title: '5 destinations européennes méconnues qui méritent le détour',
    excerpt: 'Évitez les foules et découvrez ces joyaux cachés de l\'Europe qui offrent authenticité et beauté sans les hordes de touristes.',
    content: `Alors que Paris, Rome et Barcelone attirent des millions de visiteurs chaque année, l'Europe regorge de destinations tout aussi magnifiques mais bien moins fréquentées. Dans cet article, nous vous emmenons hors des sentiers battus pour découvrir cinq endroits où vous pourrez véritablement vous immerger dans la culture locale.

1. **Les Féroé, Danemark** - Un archipel sauvage entre l'Islande et l'Écosse avec des paysages à couper le souffle
2. **Puglia, Italie** - Le talon de la botte italienne avec ses trulli uniques et sa cuisine extraordinaire
3. **Les Açores, Portugal** - Des îles volcaniques au milieu de l'Atlantique avec des lacs dans des cratères et des baleines à observer
4. **Transylvanie, Roumanie** - Bien plus que les légendes de Dracula, une région riche en histoire et en paysages médiévaux
5. **Slovénie** - Un petit pays avec des Alpes magnifiques, un lac pittoresque et une capitale charmante

Chaque destination inclut des conseils pratiques sur quand y aller, comment s'y rendre et quoi ne pas manquer une fois sur place.`,
    date: '2024-01-10',
    readTime: '12 min',
    tags: ['Europe', 'Destinations', 'Voyage hors des sentiers battus'],
    imageUrl: 'https://source.unsplash.com/featured/800x400/?europe,travel',
    author: {
      name: 'Jean Martin',
      avatar: 'https://placehold.co/100x100/EF4444/FFFFFF?text=JM'
    }
  },
  {
    id: '3',
    slug: 'conseils-photographie-voyage',
    title: '10 conseils pour améliorer vos photos de voyage',
    excerpt: 'Que vous utilisiez un smartphone ou un appareil professionnel, ces techniques vous aideront à capturer la magie de vos voyages.',
    content: `La photographie de voyage est bien plus que prendre des pictures - c'est capturer l'émotion, la lumière et l'histoire d'un lieu. Que vous soyez débutant ou photographe expérimenté, ces conseils pratiques vous aideront à élever vos photos de voyage au niveau supérieur.

1. **Réveillez-vous tôt** - La lumière dorée juste après le lever du soleil est magique et les lieux sont généralement moins fréquentés
2. **Apprenez les bases de la composition** - La règle des tiers, les lignes directrices et le cadre naturel font des merveilles
3. **Parlez aux locaux** - Certaines des meilleures photos viennent des moments authentiques capturés après avoir établi une connexion
4. **Expérimentez avec les reflets** - Eau, vitres, surfaces métalliques peuvent ajouter une dimension intéressante à vos compositions
5. **Ne négligez pas les détails** - Les textures, les motifs et les couleurs locales racontent souvent autant que les grands paysages
6. **Protégez votre équipement** - La poussière, l'humidité et les chocs sont les ennemis du photographe voyageur
7. **Soyez patient** - Attendre le bon moment peut transformer une photo ordinaire en une image extraordinaire
8. **Respectez les lieux et les personnes** - Toujours demander avant de photographier quelqu'un et suivre les règles locales
9. **Expérimentez avec le noir et blanc** - Certains sujets gagnent énormément en émotion lorsqu'ils sont débarrassés de la couleur
10. **Organisez et sauvegardez régulièrement** - Ne laissez pas vos précieux souvenirs vulnérables à une perte de données

Mettez ces conseils en pratique lors de votre prochain voyage et observez la différence dans votre galerie de photos!`,
    date: '2024-01-05',
    readTime: '10 min',
    tags: ['Photographie', 'Conseils pratiques', 'Créativité'],
    imageUrl: 'https://source.unsplash.com/featured/800x400/?photography,travel',
    author: {
      name: 'Sophie Lambert',
      avatar: 'https://placehold.co/100x100/10B981/FFFFFF?text=SL'
    }
  }
];
