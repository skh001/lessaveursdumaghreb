import { MenuItem } from '../types';

// --- IMPORTS DES IMAGES ---
import rechtaImg from '../assets/rechta.jpg';
import mtewemImg from '../assets/mtewem.jpg';
import chorbaImg from '../assets/chorba.jpg';
import bourakImg from '../assets/bourak.jpg';
import kesraImg from '../assets/kesra.jpg';
import khobzImg from '../assets/khobz.jpg';
import berkoukesImg from '../assets/berkoukes.jpg';
import dewaraImg from '../assets/dewara.jpg';
import chtithaImg from '../assets/chtitha.jpg';
import couscousLegumeImg from '../assets/couscous-legumes.jpg';
import couscousPouletImg from '../assets/couscous-poulet.jpg';
import couscousViandeImg from '../assets/couscous-viande.jpg';
import couscousRoyalImg from '../assets/couscous-royal.jpg';
import tajineImg from '../assets/tajine.jpg';
import gratinimg from '../assets/gratin.jpg';
import djerbienimg from '../assets/djerbien.jpg';
import patestounsiimg from '../assets/patestounsi.jpg';
import adesimg from '../assets/ades.jpg';

// --- IMPORTS TEMPORAIRES POUR LES BOISSONS ---
import hamoudImg from '../assets/hamoud.jpg';
import selectoImg from '../assets/selecto.jpg';
import slimImg from '../assets/slim.jpg';
import brikimg from '../assets/brik.jpg';
import quicheimg from '../assets/quiche.jpg';
import tadjineviandeimg from '../assets/tadjinviande.jpg';
import bouzaloufimg from '../assets/bouzalouf.jpg';
export const menuItems: MenuItem[] = [
  // --- ENTRÉES & SNACKS ---
  {
    id: '1',
    name: 'Chorba Frik',
    description: 'La soupe incontournable : blé concassé (frik), viande, tomates fraîches et coriandre.',
    price: '6€', // Modifié
    image: chorbaImg,
    category: 'Starter',
    tags: ['Traditionnel', 'Soupe']
  },
  {
    id: '2',
    name: 'Bourak',
    description: 'Cigare croustillant farci à la viande hachée, persil, oignons et fromage.',
    price: '2,50€', // Modifié
    image: bourakImg,
    category: 'Starter',
    tags: ['Croustillant', 'Frit']
  },
  {
    id: '3',
    name: 'Brik',
    description: 'Feuille de brick croustillante farcie à l\'œuf coulant, thon et persil.',
    price: '4,50€', // Modifié
    image: brikimg,
    category: 'Starter',
    tags: ['Croustillant', 'Frit']
  },
  {
    id: '4',
    name: 'Quiche au Poulet',
    description: 'Tarte salée maison garnie de morceaux de poulet et d\'un appareil crémeux.',
    price: '4€', // Nouveau
    image: quicheimg, // Image temporaire
    category: 'Starter',
    tags: ['Snack', 'Maison']
  },
  {
    id: '5',
    name: 'Quiche à la Viande',
    description: 'Tarte salée maison garnie de viande hachée savoureuse.',
    price: '5€', // Nouveau
    image: quicheimg, // Image temporaire
    category: 'Starter',
    tags: ['Snack', 'Maison']
  },

  // --- PLATS TRADITIONNELS & TAJINES ---
  {
    id: '10',
    name: 'Rechta Algéroise',
    description: 'Pâtes fines artisanales sauce blanche cannelle, poulet et navets.',
    price: '12€', // Modifié
    image: rechtaImg,
    category: 'Main',
    tags: ['Alger', 'Sauce Blanche']
  },
  {
    id: '11',
    name: 'Chakhchoukha',
    description: 'Feuilles de semoule émiettées arrosées d\'une sauce rouge épicée, pois chiches et viande.',
    price: '13€', // Nouveau
    image: chtithaImg, // Image temporaire (utilise une image sauce rouge)
    category: 'Main',
    tags: ['Biskra', 'Épicé']
  },
  {
    id: '12',
    name: 'Tajine Poulet',
    description: 'Mijoté traditionnel aux olives ou légumes avec du poulet tendre.',
    price: '10€', // Modifié
    image: tajineImg,
    category: 'Main',
    tags: ['Mijoté', 'Poulet']
  },
  {
    id: '13',
    name: 'Tajine Viande',
    description: 'Mijoté traditionnel avec des morceaux de viande d\'agneau ou bœuf.',
    price: '13€', // Nouveau
    image: tadjineviandeimg, // Image temporaire
    category: 'Main',
    tags: ['Mijoté', 'Viande']
  },
  {
    id: '14',
    name: 'Tajine Lahlou (Sucré)',
    description: 'Plat sucré-salé à base de pruneaux, abricots secs et amandes.',
    price: '8€', // Nouveau
    image: mtewemImg, // Image temporaire
    category: 'Main',
    tags: ['Sucré-Salé', 'Tradition']
  },
  {
    id: '15',
    name: 'Berkoukes',
    description: 'Petites pâtes (plombs) en sauce rouge épicée avec légumes.',
    price: '12€', // Modifié
    image: berkoukesImg,
    category: 'Main',
    tags: ['Hiver', 'Épicé']
  },
  {
    id: '16',
    name: 'Bouzalouf',
    description: 'Tête de mouton préparée traditionnellement en sauce (selon disponibilité).',
    price: '10€', // Nouveau
    image: bouzaloufimg, // Image temporaire
    category: 'Main',
    tags: ['Tradition', 'Abats']
  },
  {
    id: '17',
    name: 'Douwara',
    description: 'Tripes mijotées en sauce rouge relevée.',
    price: '10€', // Modifié
    image: dewaraImg,
    category: 'Main',
    tags: ['Tripes', 'Sauce Rouge']
  },
  {
    id: '18',
    name: 'Loubiya',
    description: 'Haricots blancs mijotés dans une sauce tomate onctueuse.',
    price: '6€', // Nouveau
    image: adesimg, // Image temporaire
    category: 'Main',
    tags: ['Populaire', 'Sauce']
  },
  {
    id: '19',
    name: 'Lentilles (Ades)',
    description: 'Plat de lentilles mijotées à l\'algérienne, riche en fer.',
    price: '6€', // Modifié
    image: adesimg,
    category: 'Main',
    tags: ['Chaud', 'Légumineuse']
  },

  // --- COUSCOUS ---
  {
    id: '20',
    name: 'Couscous Poulet',
    description: 'Semoule fine, légumes frais et morceaux de poulet.',
    price: '12€', // Modifié
    image: couscousPouletImg,
    category: 'Main',
    tags: ['Tradition', 'Volaille']
  },
  {
    id: '21',
    name: 'Couscous Viande',
    description: 'Couscous traditionnel garni de viande rouge tendre.',
    price: '14€', // Modifié
    image: couscousViandeImg,
    category: 'Main',
    tags: ['Tradition', 'Viande']
  },
  {
    id: '22',
    name: 'Couscous Royal',
    description: 'L\'expérience complète : Viande, poulet et merguez.',
    price: '16€', // Modifié
    image: couscousRoyalImg,
    category: 'Main',
    tags: ['Festif', 'Copieux']
  },

  // --- SPÉCIALITÉS (Pains & Sandwichs) ---
  {
    id: '30',
    name: 'Galette (Kesra / Matlouh)',
    description: 'Pain traditionnel algérien (Semoule ou Levé) fait maison.',
    price: '2€', // Modifié (regroupé)
    image: kesraImg,
    category: 'Sandwich',
    tags: ['Pain', 'Maison']
  },
  {
    id: '31',
    name: 'Mhadjeb',
    description: 'Feuilles de semoule fines farcies d\'une sauce tomate et oignons.',
    price: '3,50€', // Validé
    image: kesraImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Piquant', 'Chaud']
  },
  // Je garde les sandwichs existants au cas où, avec les anciens prix ou ajustés si besoin
  {
    id: '32',
    name: 'Frikasi Tounsi',
    description: 'Beignet salé frit, garni de thon, pommes de terre, olives et harissa.',
    price: '3€',
    image: bourakImg,
    category: 'Sandwich',
    tags: ['Street Food', 'Tunisie']
  },
  {
    id: '33',
    name: 'Sandwich Merguez',
    description: 'Merguez épicées grillées dans du pain frais.',
    price: '6€',
    image: khobzImg,
    category: 'Sandwich',
    tags: ['Grillade', 'Classique']
  },

  // --- BOISSONS DU BLED (Drinks) ---
  {
    id: '40',
    name: 'Hamoud Boualem (33cl)',
    description: 'L\'authentique limonade algérienne (La Blanche).',
    price: '2€', // Modifié
    image: hamoudImg,
    category: 'Drink',
    tags: ['Algérie', 'Gazeux']
  },
  {
    id: '41',
    name: 'Selecto (33cl)',
    description: 'Le célèbre soda brun au goût unique de pomme et caramel.',
    price: '2€', // Modifié
    image: selectoImg,
    category: 'Drink',
    tags: ['Algérie', 'Culte']
  },
  {
    id: '42',
    name: 'Slim (33cl)',
    description: 'Boisson gazeuse aux fruits (Citron, Orange, Ananas...).',
    price: '2€', // Modifié
    image: slimImg,
    category: 'Drink',
    tags: ['Fruité', 'Gazeux']
  },
  {
    id: '43',
    name: 'Grande Bouteille (1L)',
    description: 'Hamoud, Selecto ou Slim en format familial.',
    price: '3,50€', // Nouveau
    image: selectoImg, // Image temporaire
    category: 'Drink',
    tags: ['Familial', '1L']
  }
];