import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { Ch13ProductComponent } from './ch13-product.component';
import { Ch13LayoutComponent } from './ch13-layout.component';

const routes: Routes = [
  { path: '', component: Ch13LayoutComponent }
]

@NgModule({
  declarations: [
    Ch13LayoutComponent,
    Ch13ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Ch13Module { }