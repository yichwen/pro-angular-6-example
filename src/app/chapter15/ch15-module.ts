import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ch15ProductComponent } from './ch15-product.component';
import { Ch15LayoutComponent } from './ch15-layout.component';
import { PaAttrDirective } from './attr.directive';
import { PaModel } from './twoway.directive';

const routes: Routes = [
  { path: '', component: Ch15LayoutComponent }
]

@NgModule({
  declarations: [
    Ch15LayoutComponent,
    Ch15ProductComponent,
    PaAttrDirective,
    PaModel
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Ch15Module { }