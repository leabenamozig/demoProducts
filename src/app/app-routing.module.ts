import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
    { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'product/detail/:code', component: ProductDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
