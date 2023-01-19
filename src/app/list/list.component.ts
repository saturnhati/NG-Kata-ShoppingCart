import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../product.class';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @ViewChild('form') form!: FormGroup;
  productList: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productList = this.productService.getProductList();
  }

  addProduct() {
    console.log(this.form.value);
    let newProduct = new Product(
      this.form.value.name,
      this.form.value.price,
      this.form.value.quantity
    );
    this.productService.addProduct(newProduct);
    this.productList = this.productService.getProductList();
    this.form.reset();
  }

  removeProduct(obj: Product) {
    this.productService.removeProduct(obj);
  }
}
