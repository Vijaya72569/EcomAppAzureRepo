import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagelistComponent } from './imagelist/imagelist.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
/*
   { path: '', component: ImagelistComponent },
  { path: 'cart', component: CartComponent }
   */

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'imagelist', component: ImagelistComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }  // fallback for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
