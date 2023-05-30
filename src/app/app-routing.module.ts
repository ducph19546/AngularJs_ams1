import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductAddPageComponent } from './pages/product-add-page/product-add-page.component';
import { ProductUpdatePageComponent } from './pages/product-update-page/product-update-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';


const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "products", component: ProductsPageComponent },
  { path: "products/add", component: ProductAddPageComponent },
  { path: "products/:id", component: ProductDetailPageComponent },
  { path: "products/:id/update", component: ProductUpdatePageComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
