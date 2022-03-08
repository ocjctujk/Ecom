import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  itemsInCart = 0;
  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.productQuantityObs.subscribe((data) => {
      console.log('Data ' + data);
      for (let product of data) {
        console.log('bhjkjhb');
        console.log(product.quantity);
        this.itemsInCart += product.quantity;
      }
    });
  }
}
