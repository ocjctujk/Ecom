import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {

  products: Product[] = [];
  subscription: Subscription;

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.subscription = this.productService.productsObservable.subscribe(data=>{
      this.products = data;
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
