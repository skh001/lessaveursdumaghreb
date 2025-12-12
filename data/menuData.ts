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
// IMPORTANT : Remplace ces fichiers par tes vraies photos de bouteilles dans le dossier assets !
import hamoudImg from '../assets/hamoud.jpg';   // Image temporaire pour le Hamoud blanc
import selectoImg from '../assets/selecto.jpg'; // Image temporaire pour le Selecto (sombre)
import slimImg from '../assets/slim.jpg';    // Image temporaire pour le Slim

export const menuItems: MenuItem[] = [
  // --- ENTRÉES & SOUPES ---
  {
    id: '1',
    name: 'Chorba Frik',
    description: 'La soupe incontournable : blé concassé (frik), viande, tomates fraîches et coriandre.',
    price: '8€',
    image: chorbaImg,
    category: 'Starter',
    tags: ['Traditionnel', 'Soupe']
  },
  {
    id: '2',
    name: 'Les Lentilles (Ades)',
    description: 'Plat de lentilles mijotées à l\'algérienne, riche en fer et en saveurs.',
    price: '6,50€',
    image: adesimg, // Image temporaire
    category: 'Starter',
    tags: ['Chaud', 'Légumineuse']
  },
  {
    id: '3',
    name: 'Brik',
    description: 'Feuille de brick croustillante farcie à l\'œuf coulant, thon et persil.',
    price: '4,50€',
    image: bourakImg,
    category: 'Starter',
    tags: ['Croustillant', 'Frit']
  },

  // --- PLATS TRADITIONNELS (Mains) ---
  {
    id: '5',
    name: 'Rechta Algéroise',
    description: 'Pâtes fines artisanales sauce blanche cannelle, poulet et navets.',
    price: '12€',
    image: rechtaImg,
    category: 'Main',
    tags: ['Alger', 'Sauce Blanche']
  },
  {
    id: '6',
    name: 'Tajine',
    description: 'Mijoté traditionnel aux olives ou aux pruneaux selon la préparation du jour.',
    price: '10€',
    image: tajineImg, // Image temporaire
    category: 'Main',
    tags: ['Mijoté', 'Classique']
  },
  {
    id: '7',
    name: 'Berkoukes',
    description: 'Petites pâtes (plombs) en sauce rouge épicée avec légumes.',
    price: '8€',
    image: berkoukesImg,
    category: 'Main',
    tags: ['Hiver', 'Épicé']
  },
  {
    id: '8',
    name: 'Gratin',
    description: 'Gratin du jour fait maison, fondant et doré au four.',
    price: '9€',
    image: gratinimg, // Image temporaire
    category: 'Main',
    tags: ['Four', 'Fromage']
  },
  {
    id: '9',
    name: 'Riz Tunisien (Djerbien)',
    description: 'Riz cuit à la vapeur avec un mélange de légumes, viande et épices.',
    price: '9€',
    image: djerbienimg, // Image temporaire
    category: 'Main',
    tags: ['Vapeur', 'Tunisie']
  },
  {
    id: '10',
    name: 'Pâtes Tounsi',
    description: 'Pâtes à la tunisienne, relevées et savoureuses.',
    price: '10€',
    image: patestounsiimg, // Image temporaire
    category: 'Main',
    tags: ['Piquant', 'Pâtes']
  },
  {
    id: '11',
    name: 'Pâtes Sauce Rouge',
    description: 'Pâtes classiques nappées d\'une sauce tomate onctueuse à la viande.',
    price: '10€',
    image: chtithaImg, // Image temporaire
    category: 'Main',
    tags: ['Tomate', 'Familial']
  },
  {
    id: '12',
    name: 'Pâtes Sauce Blanche',
    description: 'Pâtes crémeuses préparées avec une sauce blanche au fromage ou champignons.',
    price: '10€',
    image: rechtaImg, // Image temporaire
    category: 'Main',
    tags: ['Crème', 'Douceur']
  },
  {
    id: '13',
    name: 'Moulokhia',
    description: 'Plat de corète potagère mijoté longuement, servi avec de la viande tendre.',
    price: '12€',
    image: dewaraImg, // Image temporaire
    category: 'Main',
    tags: ['Spécialité', 'Sauce Verte']
  },

  // --- COUSCOUS ---
  {
    id: '20',
    name: 'Couscous Algérien',
    description: 'Semoule fine, sauce blanche ou rouge selon la tradition, légumes et viande.',
    price: '12€',
    image: couscousRoyalImg,
    category: 'Main',
    tags: ['Tradition', 'Algérie']
  },
  {
    id: '21',
    name: 'Couscous Tunisien',
    description: 'Couscous rouge relevé à l\'harissa, servi avec légumes et viande.',
    price: '12€',
    image: couscousViandeImg,
    category: 'Main',
    tags: ['Relevé', 'Tunisie']
  },
  {
    id: '22',
    name: 'Masfous',
    description: 'Couscous fin (souvent sucré-salé ou aux petits pois) selon la recette du chef.',
    price: '7€',
    image: couscousLegumeImg,
    category: 'Main',
    tags: ['Léger', 'Finesse']
  },

  // --- SANDWICHS & PAINS ---
  {
    id: '30',
    name: 'Frikasi Tounsi',
    description: 'Beignet salé frit, garni de thon, pommes de terre, olives et harissa.',
    price: '3€',
    image: bourakImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Street Food', 'Tunisie']
  },
  {
    id: '31',
    name: 'Mhajeb',
    description: 'Feuilles de semoule fines farcies d\'une sauce tomate et oignons caramélisés.',
    price: '3,50€',
    image: kesraImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Piquant', 'Chaud']
  },
  {
    id: '32',
    name: 'Batboute',
    description: 'Petit pain marocain cuit à la poêle, farci de diverses garnitures fraîches.',
    price: '5€',
    image: khobzImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Maroc', 'Moelleux']
  },
  {
    id: '33',
    name: 'Sandwich Viande Hachée',
    description: 'Baguette ou pain maison garni de kefta grillée et frites.',
    price: '6€',
    image: khobzImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Viande', 'Classique']
  },
  {
    id: '34',
    name: 'Sandwich Poulet Mariné',
    description: 'Escalope de poulet marinée aux épices et grillée.',
    price: '6€',
    image: khobzImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Poulet', 'Grillé']
  },
  {
    id: '35',
    name: 'Sandwich Merguez',
    description: 'Merguez épicées grillées dans du pain frais.',
    price: '6€',
    image: khobzImg, // Image temporaire
    category: 'Sandwich',
    tags: ['Piquant', 'Grillade']
  },
  {
    id: '36',
    name: 'Kasra Farci',
    description: 'Galette de semoule farcie.',
    price: '2€',
    image: kesraImg,
    category: 'Sandwich',
    tags: ['Semoule', 'Snack']
  },
  {
    id: '37',
    name: 'Matloua',
    description: 'Pain levé traditionnel algérienne cuit au tajine (vide).',
    price: '2€',
    image: khobzImg,
    category: 'Sandwich',
    tags: ['Pain', 'Maison']
  },
  {
    id: '38',
    name: 'Rakhsis',
    description: 'Galette algérienne croustillante (vide).',
    price: '2€',
    image: kesraImg,
    category: 'Sandwich',
    tags: ['Pain', 'Croustillant']
  },

  // --- BOISSONS (Drinks) ---
  {
    id: '40',
    name: 'Hamoud Boualem (La Blanche)',
    description: 'L\'authentique limonade algérienne, rafraîchissante et pétillante.',
    price: '2,50€',
    image: hamoudImg, // Image temporaire à remplacer
    category: 'Drink',
    tags: ['Algérie', 'Gazeux', 'Citron']
  },
  {
    id: '41',
    name: 'Selecto',
    description: 'Le célèbre soda brun algérien au goût unique de pomme et caramel.',
    price: '2,50€',
    image: selectoImg, // Image temporaire à remplacer
    category: 'Drink',
    tags: ['Algérie', 'Gazeux', 'Culte']
  },
  {
    id: '42',
    name: 'Slim',
    description: 'Boisson gazeuse aux fruits rafraîchissante (parfums selon disponibilité).',
    price: '2,50€',
    image: slimImg, // Image temporaire à remplacer
    category: 'Drink',
    tags: ['Fruité', 'Gazeux']
  }
];