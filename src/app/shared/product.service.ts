import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 50.56,
      imageURL:
        'https://static.wixstatic.com/media/45d10e_b35e4713f3524a1d818de736bb4765b2~mv2.jpg/v1/fill/w_750,h_750,al_c,q_85/45d10e_b35e4713f3524a1d818de736bb4765b2~mv2.jpg',
      descryption: 'descryption 1',
      sizes: [],
      special: '50% off',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 77.99,
      imageURL:
        'https://static.wixstatic.com/media/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/45d10e_3c8908475cb04049a7341efbc73f6a73~mv2.webp',
      descryption:
        'I am a product description. I am a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.',
      sizes: [],
      special: '',
      long_descryption:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 83.33,
      imageURL:
        'https://static.wixstatic.com/media/45d10e_45e21af15e5a4e2fa81bc324b0c51cbf~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/45d10e_45e21af15e5a4e2fa81bc324b0c51cbf~mv2.webp',
      descryption: 'descryption 3',
      sizes: [],
      special: '',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 97.88,
      imageURL:
        'https://static.wixstatic.com/media/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.jpg/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01/45d10e_184c51e0dfc64e70a5bc0fa7e2fe981e~mv2.webp',
      descryption: 'descryption 4',
      sizes: [],
      special: '',
    },
    {
      id: 5, 
      name: 'Product 5',
      price: 77.5,
      imageURL:
        'https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16286828/2021/12/30/a14c9bc1-78c5-4aca-a8db-c8be7e39075d1640862117026-Manu-Men-Suits-3671640862116306-1.jpg',
      descryption: 'descryption 5',
      sizes: [],
      special: '',
    },
  ];
  productsObservable = of(this.products);

  getProduct(id: number) {
    for (let product of this.products) {
      if (product.id == id) {
        return product;
      }
    }
    return this.products[id + 1];
  }
}
