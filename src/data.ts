import { Product, FriendRanking, Extra } from './types';

export const AVAILABLE_EXTRAS: Extra[] = [
  { id: 'e1', name: 'Bacon Extra', price: 3.50 },
  { id: 'e2', name: 'Cheddar Cremoso', price: 2.50 },
  { id: 'e3', name: 'Ovo Frito', price: 1.50 },
  { id: 'e4', name: 'Hambúrguer Extra', price: 8.00 },
];

export const DISCOUNT_CODES: Record<string, number> = {
  'NICKEL10': 0.10, // 10% discount
  'PRIMEIRAVIAGEM': 0.15, // 15% discount
  'DIADOBACON': 5.00, // R$ 5,00 discount
};

export const MENU_ITEMS: Product[] = [
  {
    id: '1',
    name: 'Hambúrguer da Mamãe',
    description: 'Aquele gostinho de casa, com blend artesanal e queijo derretido.',
    price: 35.90,
    points: 50,
    emoji: '🍔',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    category: 'lanches'
  },
  {
    id: '2',
    name: 'Batata Espetáculo',
    description: 'Porção generosa e crocante que pisca neon no seu coração.',
    price: 18.90,
    points: 20,
    emoji: '🍟',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80',
    category: 'porcoes'
  },
  {
    id: '3',
    name: 'Cachorro Quente do Parque',
    description: 'Lembrança do parque de diversões, com duas salsichas e muito purê.',
    price: 22.50,
    points: 30,
    emoji: '🌭',
    image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?auto=format&fit=crop&w=600&q=80',
    category: 'lanches'
  },
  {
    id: '4',
    name: 'Milkshake Cósmico',
    description: 'Explosão de morango com granulados coloridos das galáxias.',
    price: 19.90,
    points: 25,
    emoji: '🥤',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75bb811?auto=format&fit=crop&w=600&q=80',
    category: 'bebidas'
  },
  {
    id: '5',
    name: 'X-Monstro da Família',
    description: 'Para quem tem muita fome! O verdadeiro e colossal xis da casa.',
    price: 45.00,
    points: 80,
    emoji: '🥪',
    image: 'https://images.unsplash.com/photo-1629814695029-23c21a1ce09a?auto=format&fit=crop&w=600&q=80',
    category: 'lanches'
  },
  {
    id: '6',
    name: 'Sorvete da Vovó',
    description: 'O clássico de baunilha com calda de chocolate quentinha.',
    price: 15.00,
    points: 15,
    emoji: '🍨',
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?auto=format&fit=crop&w=600&q=80',
    category: 'doces'
  }
];

export const RANKING_DATA: FriendRanking[] = [
  { id: 'u1', name: 'João P.', points: 1250, avatar: '😎' },
  { id: 'u2', name: 'Maria C.', points: 980, avatar: '🤠' },
  { id: 'u3', name: 'Você', points: 850, avatar: '🐶', isCurrentUser: true },
  { id: 'u4', name: 'Pedro H.', points: 420, avatar: '🤖' },
  { id: 'u5', name: 'Ana L.', points: 150, avatar: '👽' }
];
