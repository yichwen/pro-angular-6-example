import { Component, EventEmitter, Output } from "@angular/core";
import { ProductFormGroup } from './form.model';
import { Product } from '../product.model';

@Component({
  selector: 'paProductForm',
  templateUrl: "productForm.component.html",
  styleUrls: ["productForm.component.css"]
})
export class ProductFormComponent {

  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  @Output("paNewProduct")
  newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}