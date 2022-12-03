import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { LayoutComponent } from './layout.component';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaIteratorDirective } from './iterative.directive';
import { PaCellColor } from './cellColor.directive';
import { PaAddTaxPipe } from './addTax.pipe';
import { PaCategoryFilterPipe } from './categoryFilter.pipe';

import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFr);

const routes: Routes = [
  { path: '', component: LayoutComponent }
]

@NgModule({
  declarations: [
    LayoutComponent,
    ProductComponent,
    ProductTableComponent,
    ProductFormComponent,
    PaIteratorDirective,
    PaCellColor,
    PaAddTaxPipe,
    PaCategoryFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: "fr-FR" }
  ],
})
export class FeatureModule { }