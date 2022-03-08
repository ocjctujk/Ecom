import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  productQuantity: { quantity: number; product: Product }[] = [];
  productQuantityObs = of(this.productQuantity);

  constructor(private http: HttpClient) {}

  addData(quanity: number, product: Product) {
    let includes = false;
    let index = -1;
    for (let productEl of this.productQuantity) {
      index++;
      if (product.id == productEl.product.id) {
        includes = true;
      }
    }
    if (includes) {
      this.updateItem(quanity, product);
    } else {
      const prod = {
        quantity: quanity,
        product: product,
      };
      this.productQuantity.push(prod);
    }
    this.pushData();
  }
  deleteData(id: number) {

    let index = -1;
    for (let product of this.productQuantity) {
      index++;
      if (id == product.product.id) {
        this.productQuantity.splice(index, 1);
      }
    }
    this.pushData();
  }

  updateItem(newQuantity: number, product: Product) {
    let index = -1;
    for (let productEl of this.productQuantity) {
      index++;
      if (product.id == productEl.product.id) {
        productEl.quantity = productEl.quantity + newQuantity;
      }
    }
    this.pushData();

  }

  pushData() {
    console.log('called');
    this.http
      .put<{ quantity: number; product: Product }[]>(
        'https://e-com-bags-default-rtdb.asia-southeast1.firebasedatabase.app/productsQuantity/post.json',
        [...this.productQuantity]
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  getData() {
    //   this.isLoading.next(true);
    this.productQuantity.splice(0, this.productQuantity.length);
    this.http
      .get<{ quantity: number; product: Product }[]>(
        'https://e-com-bags-default-rtdb.asia-southeast1.firebasedatabase.app/productsQuantity/post.json'
      )
      .subscribe(
        (data: { quantity: number; product: Product }[]) => {
          if (data) {
            for (let dataEl of data) {
              this.productQuantity.push(dataEl);
            }
          }
        },
        (err) => {
          console.log('error');
        },
        () => {
          //this.isLoading.next(false);
        }
      );
      console.log(this.productQuantity);
  }
}
