import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { Product } from 'src/app/shared/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: Product;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addData(1,this.product);
    alert("Item added to cart");
  }

}
