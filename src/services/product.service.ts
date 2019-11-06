import { Injectable } from '@angular/core';
import {IProduct} from '../app/product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }
  products: IProduct[] = [
    {
      id: 1,
      name: 'lamboghini',
      desc: 'car',
      price: 200000000,
      image: 'assets/image/lam.jpg',
      status: '1'
    },
    {
      id: 2,
      name: 'yamaha R15',
      desc: 'motobike',
      price: 10000000,
      image: 'assets/image/r15.png',
      status: '1'
    },
    {
      id: 3,
      name: 'boing 370',
      desc: 'plane',
      price: 3000000000,
      image: 'assets/image/boing.jpeg',
      status: '0'
    }
];
   getProduct() {
     return this.products;
  }
  getById(id) {
     return this.products[id];
  }

  update(id, data: IProduct) {
     this.products[id] = data;
  }
}
