import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ch14BProductComponent } from './ch14b-product.component';
import { Ch14BLayoutComponent } from './ch14b-layout.component';

const routes: Routes = [
  { path: '', component: Ch14BLayoutComponent }
]

@NgModule({
  declarations: [
    Ch14BLayoutComponent,
    Ch14BProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Ch14BModule { }