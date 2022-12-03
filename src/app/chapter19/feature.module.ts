import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { LayoutComponent } from './layout.component';
import { ProductTableComponent } from './productTable.component';
import { ProductFormComponent } from './productForm.component';
import { PaIteratorDirective } from './iterative.directive';
import { PaDiscountDisplayComponent } from './discountDisplay.component';
import { PaDiscountEditorComponent } from './discountEditor.component';
import { DiscountService } from './discount.service';
import { PaDiscountPipe } from './discount.pipe';
import { PaDiscountAmountDirective } from './discount.directive';
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL } from './log.service';
import { VALUE_SERVICE, PaDisplayValueDirective } from './valueDisplay.directive';

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

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
    PaDiscountEditorComponent,
    PaDiscountDisplayComponent,
    PaDiscountPipe,
    PaDiscountAmountDirective,
    PaDisplayValueDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DiscountService,
    // LogService
    // { provide: LogService, useClass: LogService }
    // { provide: 'logger', useClass: LogService } // require to use @Inject("logger") in class constructor
    // { provide: LOG_SERVICE, useClass: LogService, multi: true }, // require to use @Inject(LOG_SERVICE) in class constructor
    // { provide: LOG_SERVICE, useClass: SpecialLogService, multi: true }, // to use SpecialLogService which is subclass of LogService
    // { provide: LogService, useValue: logger }
    { provide: LOG_LEVEL, useValue: LogLevel.ERROR },
    { provide: 'debugLevel', useExisting: LOG_LEVEL },
    {
      provide: LogService, 
      // deps: [LOG_LEVEL],
      deps: ['debugLevel'],
      // level is injected from 'debugLevel' provider
      useFactory: (level) => {
        let logger = new LogService();
        logger.minimumLevel = level;
        return logger;
      }
    },
    { provide: VALUE_SERVICE, useValue: 'apples' }
  ],
})
export class FeatureModule { }