import { Component, OnInit } from '@angular/core';
import { Image,ImageService } from '../image.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-imagelist',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.css']
})
export class ImagelistComponent implements OnInit {
 images: Image[] = [];
  constructor(private imageservice:ImageService,
    private cartservice:CartService
  ) { }

  ngOnInit(): void {
     this.imageservice.getImages().subscribe(data => {
     // this.images = data; // this is for apiurl
      this.images = data.images;  // ✅ fix: access images property this is for assets/dbs.json
    });
  }
addToCart(image: Image) {
    this.cartservice.addToCart(image);
  }
/*
  deleteImage(id: number) {
    this.imageservice.deleteImage(id).subscribe(() => {
      this.images = this.images.filter(img => img.id !== id);
    });
  }
    */
   // comment because dbs.json file inside assets folder
}
