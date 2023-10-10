import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from 'src/app/models/models';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  private productServices = inject(ProductService)
  products: Product[] = [];

  ngOnInit(): void {
    this.productServices.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
