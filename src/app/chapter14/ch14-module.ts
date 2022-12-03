import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ch14ProductComponent } from './ch14-product.component';
import { Ch14LayoutComponent } from './ch14-layout.component';

const routes: Routes = [
  { path: '', component: Ch14LayoutComponent }
]

@NgModule({
  declarations: [
    Ch14LayoutComponent,
    Ch14ProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Ch14Module { }