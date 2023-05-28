import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductAddFormComponent } from './pages/product-add-form/product-add-form.component';
import { ProductUpdateFormComponent } from './pages/product-update-form/product-update-form.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "products", component: ProductsListComponent },
  { path: "products/:id", component: ProductDetailPageComponent },
  { path: "products/add", component: ProductAddFormComponent },
  { path: "products/:id/update", component: ProductUpdateFormComponent },
  { path: "**", component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
