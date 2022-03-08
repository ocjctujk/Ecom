import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FaqComponent } from './faq/faq.component';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'product' , component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
