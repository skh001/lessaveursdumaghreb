export enum View {
  HOME = 'HOME',
  MENU = 'MENU',
  ORDER = 'ORDER'
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Starter' | 'Main' | 'Dessert' | 'Drink';
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