import { Injectable } from '@angular/core';
import { BehaviorSubject, map, share } from 'rxjs';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private shoppingCart$: BehaviorSubject<any> = new BehaviorSubject([]);
  private products: Product[] = [];

  constructor() {}

  get getProductsShoppingCart() {
    return this.shoppingCart$.asObservable();
  }

  addProductShoppingCart(product: Product) {
    this.products.push(product);
    this.shoppingCart$.next(this.products);
  }

  deleteProductShoppingCart(index: number) {
    this.products.splice(index, 1);
    this.shoppingCart$.next(this.products);
  }

  get getTotalShoppingCart() {
    return this.shoppingCart$.pipe(
      map((products) => {
        return products.reduce((acc: number, product: Product) => {
          return acc + product.price;
        }, 0);
      })
    );
  }

  get getTotalAmountShoppingCart() {
    return this.shoppingCart$.pipe(
      map((products) => products.length)
    );
  }
}
