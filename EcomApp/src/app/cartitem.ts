// src/app/cart-item.model.ts
import { Image } from './image.service';

export interface CartItem {
  image: Image;
  quantity: number;
}
