import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update-page',
  templateUrl: './product-update-page.component.html',
  styleUrls: ['./product-update-page.component.scss']
})
export class ProductUpdatePageComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private nav: Router) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'))
      this.productService.getSingleProduct(id).subscribe(data => {
        this.product = data
      })
    })
  }
  onHandleSubmit() {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.nav.navigateByUrl("/products")
    })
  }
}
