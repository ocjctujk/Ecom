import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  id: number;
  quantity = 1;
  showProductInfo = false;
  showReturnInfo = false;
  showShippingInfo=false;

  constructor(private route: ActivatedRoute,private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(this.id);
    
  }

  onSubmit(form: NgForm){
    if(form.valid){
      this.cartService.addData(form.value.quantity,this.product)
      console.log(form.value);
      alert("Item added to cart");
    }
    console.log(form.valid);
  }

  toggleInfo(str: string){
    if(str==="shippingInfo"){
      this.showShippingInfo=!this.showShippingInfo;
    }
    else if(str==="productInfo"){
      this.showProductInfo=!this.showProductInfo;
    }
    else if(str==="returnInfo"){
      this.showReturnInfo = !this.showReturnInfo;
    }

  }

}
