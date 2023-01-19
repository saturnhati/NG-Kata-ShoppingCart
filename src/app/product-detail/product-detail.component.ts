import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.class';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.router.params.subscribe((params) => {
      const name = params['name'];
      this.product = this.productService.getProductDetails(name);
    });
  }
}
