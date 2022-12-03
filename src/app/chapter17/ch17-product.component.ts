import { Component, OnInit, ApplicationRef } from "@angular/core";
import { Model } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'app-ch17-product',
  templateUrl: './ch17-product.component.html',
  // Pushing a Style into the Child Component’s Template using /deep/
  styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})
export class Ch17ProductComponent implements OnInit {

  model: Model = new Model();

  ngOnInit(): void {
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

}