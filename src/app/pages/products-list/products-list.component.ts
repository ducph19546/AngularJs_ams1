import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data
    })
  }
  removeProduct(id: number | undefined) {
    this.productService.removeProduct(id).subscribe((data) => {
      this.products.filter(item => item.id != data.id)
    })
  }
}
