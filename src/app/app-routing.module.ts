import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {CreateComponent} from './product/create/create.component';


const routes: Routes = [
  {path: 'products/edit/:id', component: EditProductComponent},
  {path: 'products/create', component: CreateComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
