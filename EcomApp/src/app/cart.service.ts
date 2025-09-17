import { Injectable } from '@angular/core';
import { Image } from './image.service';
import { CartItem } from './cartitem';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
// add code for cart count
const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
    this.updateCartCount(); // 🔸 update count on load

   }

   private cartItems: CartItem[] = [];
   // add this for cart count
    private cartCountSubject = new BehaviorSubject<number>(0); // 🔸 New subject

  cartCount$ = this.cartCountSubject.asObservable(); // 🔸 Observable for components to subscribe

   //add code for cart count

    private updateCartCount() {
    const total = this.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
    this.cartCountSubject.next(total); // 🔸 update subscribers
  }
   //


  addToCart(image: Image): void {
    const existing = this.cartItems.find(item => item.image.id === image.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ image, quantity: 1 });
    }
      this.SaveCart();
    this.updateCartCount(); // 🔸 update count
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  increaseQuantity(id: number): void {
    const item = this.cartItems.find(i => i.image.id === id);
    if (item) item.quantity++;
  }

  decreaseQuantity(id: number): void {
    const item = this.cartItems.find(i => i.image.id === id);
    if (item) {
      item.quantity--;
      if (item.quantity === 0) {
        this.removeFromCart(id);
      }
    }
  }

  removeFromCart(id: number): void {
    this.cartItems = this.cartItems.filter(item => item.image.id !== id);
      this.SaveCart();
    this.updateCartCount(); // 🔸 update count
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + (item.image.price * item.quantity),
      0
    );
  }
  //add this for after plase order remove items

   clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cart');
      this.SaveCart();
    this.updateCartCount(); // 🔸 update count
  }

  // add cart count
  private SaveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
