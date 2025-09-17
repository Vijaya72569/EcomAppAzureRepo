import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent  {
totalPrice: number = 0; // set this from cart total or user input
  constructor(
      private orderService: OrderService,
    private authService: AuthService,
    private router: Router
  ) { }


   placeOrder() {
    const user = this.authService.getUser();

    const newOrder = {
      userId: user.id,
      userName: user.name,
      totalPrice: this.totalPrice,
      orderDate: new Date(),
      status: 'Pending'
    };

    this.orderService.placeOrder(newOrder).subscribe({
      next: (res) => {
        alert('Order placed successfully!');
        this.router.navigate(['/imagelist']);
      },
      error: (err) => {
        console.error(err);
        alert('Order failed!');
      }
    });
  }

 // ngOnInit(): void {
 // }

}
