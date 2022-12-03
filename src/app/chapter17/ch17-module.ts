import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ch17ProductComponent } from './ch17-product.component';
import { Ch17LayoutComponent } from './ch17-layout.component';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaIteratorDirective } from './iterative.directive';
import { PaToggleView } from './toggleView.component';
import { PaCellColor } from './cellColor.directive';
// import { PaModel } from './twoway.directive';
// import { PaAttrDirective } from './attr.directive';
// import { PaStructureDirective } from './structure.directive';
// import { PaIteratorDirective } from './iterative.directive';
// import { PaCellColor } from './cellColor.directive';
// import { PaCellColorSwitcher } from './cellColorSwitcher.directive';

const routes: Routes = [
  { path: '', component: Ch17LayoutComponent }
]

@NgModule({
  declarations: [
    Ch17LayoutComponent,
    Ch17ProductComponent,
    ProductTableComponent,
    ProductFormComponent,
    // PaAttrDirective,
    // PaModel,
    // PaStructureDirective,
    PaIteratorDirective,
    PaToggleView,
    PaCellColor,
    // PaCellColorSwitcher
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Ch17Module { }