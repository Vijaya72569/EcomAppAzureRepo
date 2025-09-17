import { Component, OnInit } from '@angular/core';
import { ImageService,Image } from './image.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
//cart count
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartCount: number = 0;
  /*
  images:Image[]=[];
   constructor(private imageservice:ImageService){}
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
   this.imageservice.getImages().subscribe(data=>this.images=data)
  }
   */
  title = 'EcomApp';

    constructor(public authService: AuthService, private router: Router,
      private cartService:CartService
    ) {}
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count; // 🔸 now updates reactively

  });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}


