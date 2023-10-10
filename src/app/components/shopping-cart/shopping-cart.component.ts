import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent {
  private shoppingCartService = inject(ShoppingCartService);
  shoppingCartProducts$ = this.shoppingCartService.getProductsShoppingCart;
  shoppingCartTotal$ = this.shoppingCartService.getTotalShoppingCart;

  deleteProductShoppingCart(index: number) {
    this.shoppingCartService.deleteProductShoppingCart(index);
  }
}
