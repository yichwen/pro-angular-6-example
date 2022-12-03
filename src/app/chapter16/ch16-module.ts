import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Ch16ProductComponent } from './ch16-product.component';
import { Ch16LayoutComponent } from './ch16-layout.component';
import { PaModel } from './twoway.directive';
import { PaAttrDirective } from './attr.directive';
import { PaStructureDirective } from './structure.directive';
import { PaIteratorDirective } from './iterative.directive';
import { PaCellColor } from './cellColor.directive';
import { PaCellColorSwitcher } from './cellColorSwitcher.directive';

const routes: Routes = [
  { path: '', component: Ch16LayoutComponent }
]

@NgModule({
  declarations: [
    Ch16LayoutComponent,
    Ch16ProductComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class Ch16Module { }