import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CartItem } from '../cartitem';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 cartItems: CartItem[] = [];
 // router: any;

  constructor(private cartservice:CartService,
    private orderService:OrderService,
     private authService: AuthService,
     private router:Router
  ) { }

  ngOnInit(): void {
this.loadCart();
  }
  loadCart(): void {
    this.cartItems = this.cartservice.getCartItems();
  }

  increase(id: number): void {
    this.cartservice.increaseQuantity(id);
    this.loadCart();
  }

  decrease(id: number): void {
    this.cartservice.decreaseQuantity(id);
    this.loadCart();
  }

  getTotalPrice(): number {
    return this.cartservice.getTotalPrice();
  }

  remove(id: number): void {
    this.cartservice.removeFromCart(id);
    this.loadCart();
  }

   placeOrder(): void {
    const user = this.authService.getUser();

    if (!user) {
      alert('You must be logged in to place an order.');
      return;
    }

    const order = {
      userId: user.id,
      userName: user.name,
      totalPrice: this.getTotalPrice(),
      orderDate: new Date(),
      status: 'Pending'
    };

    this.orderService.placeOrder(order).subscribe({
      next: (res) => {
        alert('Order placed successfully!'+" "+res.userName);
       // localStorage.removeItem('cart');
         this.cartservice.clearCart();        // ✅ Clear cart in service
      this.cartItems = [];                 // ✅ Clear local cartItems in component
        this.router.navigate(['/imagelist']);
      },
      error: (err) => {
        alert('Order failed.');
        console.error(err);
      }
    });
  }
}
