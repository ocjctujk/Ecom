import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  productQuantity: { quantity: number; product: Product }[] = [];
  subscription: Subscription;
  showPromoCode = false;
  showNote = false;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.subscription = this.cartService.productQuantityObs.subscribe(
      (products) => {
        this.productQuantity = products;
      }
    );
    // this.cartService.pushData();
    this.cartService.getData();
  }

  onDelete(id: number) {
    this.cartService.deleteData(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPrice() {
    let totalPrice = 0;
    for (let product of this.productQuantity) {
      totalPrice += product.product.price * product.quantity;
    }
    return totalPrice;
  }

  toggle(str: string) {
    if (str == 'promo') {
      this.showPromoCode = !this.showPromoCode;
    }
    if (str == 'note') {
      this.showNote = !this.showNote;
    }
  }

  pushData() {
    this.cartService.pushData();
  }
}
