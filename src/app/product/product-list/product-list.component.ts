import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from '../product';
import {ProductService} from '../../../services/product.service';
import {Route, Router} from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productFilter: IProduct[];
  imageStatus = false;
  background = '#e2f0e9';
  products: IProduct[] = [];

  constructor(private productService: ProductService , router: Router) {
    this.products = productService.getProduct();
  }

  ngOnInit() {
    this.productFilter = this.products;
  }

  search(keyword): IProduct[] {
    return this.products.filter((product: IProduct) => product.name.indexOf(keyword) !== -1);
  }

  setFilter(keyword) {
    if (keyword) {
      this.productFilter = this.search(keyword);
    } else {
      this.productFilter = this.products;
    }
  }

  delete(i) {
    this.products.splice(i, 1);
  }
  imgToggle() {
    this.imageStatus = ! this.imageStatus;
  }
  onChange(value: any) {
    this.background = value;
  }

  setFilterStatus(keyword) {
    if (keyword) {
      this.productFilter = this.products.filter((product: IProduct) => product.status === keyword);
    } else {
      this.productFilter = this.products;
    }
  }
}

