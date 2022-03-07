import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = this.productService.getProduct(this.id);
    
  }

  onSubmit(form: NgForm){
    if(form.valid){
      console.log(form.value);
    }
    console.log(form.valid);
  }

}
