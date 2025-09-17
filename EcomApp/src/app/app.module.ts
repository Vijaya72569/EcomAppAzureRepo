import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagelistComponent } from './imagelist/imagelist.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router'; // ✅ Import this
import { AppRoutingModule } from './app.routing.module'; // ✅ Your routing config
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PlaceOrderComponent } from './place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagelistComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, // ✅ This includes RouterModule.forRoot(...)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

