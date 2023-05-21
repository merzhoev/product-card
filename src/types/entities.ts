import { CSSProperties } from 'react';

export type Color = { id: number; color: CSSProperties['color'] };

export interface IProductCard {
  id: number;
  images: { colorId: number; image: string }[];
  price: number;
  title: string;
  description: string;
  colors: Color[];
}
