import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { Model } from '../repository.model';
import { Product } from '../product.model';
import { DiscountService } from './discount.service';
import { LogService } from './log.service';

@Component({
  selector: 'paProductTable',
  templateUrl: "productTable.component.html",
  providers: [LogService]
})
export class ProductTableComponent {

  // discounter: DiscountService = new DiscountService();

  // @Input('model')
  // dataModel: Model;

  constructor(
    private dataModel: Model
  ) { }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  showTable: boolean = true;

}