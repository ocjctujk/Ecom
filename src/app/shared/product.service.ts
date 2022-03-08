import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { CartService } from './cart.service';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [];
  isLoading = new Subject<boolean>();
  
  productsObservable = of(this.products);

  constructor(private cartService: CartService, private http: HttpClient) {}

  //
  getProduct(id: number) {
    for (let product of this.products) {
      if (product.id == id) {
        return product;
      }
    }
    return this.products[id + 1];
  }

  pushData() {
    this.http
      .put<Product[]>(
        'https://e-com-bags-default-rtdb.asia-southeast1.firebasedatabase.app/products/post.json',
        [...this.products]
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  getData() {
    this.isLoading.next(true);
    this.products.splice(0,this.products.length);
    this.http
      .get<Product[]>(
        'https://e-com-bags-default-rtdb.asia-southeast1.firebasedatabase.app/products/post.json'
      )
      .subscribe((data: Product[]) => {
        if (data) {
          for (let dataEl of data) {
            this.products.push(dataEl);
          }
        }
      },err=>{
        console.log("error");
      },()=>{
        this.isLoading.next(false);
      });
  }
}
