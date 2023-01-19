import { Injectable } from '@angular/core';
import { windowTime } from 'rxjs';
import { Product } from './product.class';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productList: Product[] = [];

  constructor() {}

  getProductList() {
    let savedList = window.localStorage.getItem('product-list');
    if (savedList) {
      this.productList = JSON.parse(savedList);
    }
    return this.productList;
  }

  addProduct(obj: Product) {
    this.productList.push(obj);
    window.localStorage.setItem(
      'product-list',
      JSON.stringify(this.productList)
    );
  }

  getProductDetails(name: string) {
    const product = this.productList.find((product) => product.name === name);
    return product;
  }

  removeProduct(obj: Product) {
    let id = this.productList.indexOf(obj);
    this.productList.splice(id, 1);
    window.localStorage.clear();
    window.localStorage.setItem(
      'product-list',
      JSON.stringify(this.productList)
    );
  }
}
