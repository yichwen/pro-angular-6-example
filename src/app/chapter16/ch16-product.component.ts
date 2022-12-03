import { Component, OnInit, ApplicationRef } from "@angular/core";
import { Model } from '../repository.model';
import { Product } from '../product.model';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from './form.model';

@Component({
  selector: 'app-ch16-product',
  templateUrl: './ch16-product.component.html'
})
export class Ch16ProductComponent implements OnInit {

  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  showTable: boolean = true;

  ngOnInit(): void {
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  newProduct: Product = new Product();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  formSubmitted: boolean = false;

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

}