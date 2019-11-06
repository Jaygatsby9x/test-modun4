import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterComponent } from './share/filter/filter.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { CreateComponent } from './product/create/create.component';
import { ObcComponent } from './product/obc/obc.component';
import { AbcComponent } from './product/abc/abc.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FilterComponent,
    EditProductComponent,
    CreateComponent,
    ObcComponent,
    AbcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
