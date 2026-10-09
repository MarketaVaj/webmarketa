export type ModalType = 
  | 'menu' 
  | 'reservation' 
  | 'retreats' 
  | 'lessons' 
  | 'about' 
  | 'vouchers' 
  | 'privacy' 
  | null;

export interface YogaClass {
  id: string;
  title: string;
  time: string;
  day: string;
  duration: string;
  instructor: string;
  price: number;
  capacity: number;
  availableSpots: number;
  description: string;
  level: string;
}

export interface YogaRetreat {
  id: string;
  title: string;
  date: string;
  location: string;
  price: number;
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
}
