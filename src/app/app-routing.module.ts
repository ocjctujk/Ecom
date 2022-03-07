import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ShopComponent } from './shop/shop.component';
const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'product' , component: ProductComponent }
  // { path: '**', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
