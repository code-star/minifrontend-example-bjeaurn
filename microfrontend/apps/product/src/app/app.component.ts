import { Component } from '@angular/core';
import { Product, ProductID } from '@Codestar/products'

@Component({
  selector: 'microfrontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products: Product[] = [
    { id: 'product-1' as ProductID, title: 'Product 1'},
    { id: 'product-2' as ProductID, title: 'Product 2'},
    { id: 'product-3' as ProductID, title: 'Product 3'}
  ]

}
