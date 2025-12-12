export enum View {
  HOME = 'HOME',
  MENU = 'MENU',
  LOCATION = 'LOCATION',
  LEGAL = 'LEGAL', // <--- J'ai ajouté la virgule ici !
  ORDER = 'ORDER'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  // J'ai ajouté 'Sandwich' ici pour que ça marche avec ton nouveau menu
  category: 'Starter' | 'Main' | 'Sandwich' | 'Dessert' | 'Drink';
  tags?: string[];
}

export interface Partner {
  name: string;
  description: string;
  image: string;
  link: string;
  color: string;
  size: 'large' | 'small';
}