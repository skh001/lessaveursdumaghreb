import { MenuItem } from '../types';
import { IMAGES } from '../constants';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Couscous Royal',
    description: 'Grains de semoule cuits à la vapeur à la perfection, servis avec sept légumes, côtes d\'agneau tendres, merguez et poulet.',
    price: '24€',
    image: IMAGES.couscous,
    category: 'Main',
    tags: ['Signature', 'Copieux']
  },
  {
    id: '2',
    name: 'Tajine d\'Agneau aux Pruneaux',
    description: 'Souris d\'agneau mijotée longuement avec pruneaux caramélisés, amandes grillées et graines de sésame dans un plat en terre cuite.',
    price: '22€',
    image: IMAGES.tajine,
    category: 'Main',
    tags: ['Sucré-Salé', 'Classique']
  },
  {
    id: '3',
    name: 'Pastilla aux Fruits de Mer',
    description: 'Pâte warqa croustillante garnie de fruits de mer frais, vermicelles et épices aromatiques. Une spécialité de Fès.',
    price: '18€',
    image: IMAGES.pastilla,
    category: 'Starter',
    tags: ['Croustillant', 'Premium']
  },
  {
    id: '4',
    name: 'Soupe Harira',
    description: 'Soupe traditionnelle aux tomates, lentilles et pois chiches avec coriandre fraîche et céleri. Servie avec des dattes.',
    price: '9€',
    image: IMAGES.soup,
    category: 'Starter',
    tags: ['Option Végétarienne']
  },
  {
    id: '5',
    name: 'Thé à la Menthe Marocain',
    description: 'Feuilles de menthe fraîche infusées avec du thé vert Gunpowder et du sucre. Versé de haut pour une mousse parfaite.',
    price: '5€',
    image: IMAGES.tea,
    category: 'Drink',
    tags: ['Chaud', 'Traditionnel']
  },
  {
    id: '6',
    name: 'Cornes de Gazelle',
    description: 'Pâtisseries délicates en forme de croissant fourrées à la pâte d\'amande et parfumées à l\'eau de fleur d\'oranger.',
    price: '7€',
    image: IMAGES.sweets,
    category: 'Dessert',
    tags: ['Sucré', 'Amandes']
  }
];