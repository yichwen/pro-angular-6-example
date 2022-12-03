import { Component, OnInit, ApplicationRef } from "@angular/core";
import { Model } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-ch13-product',
  templateUrl: './ch13-product.component.html'
})
export class Ch13ProductComponent implements OnInit {

  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    // expose to chrome browser
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  ngOnInit(): void {
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }
  
  targetName: string = "Kayak";

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }
}