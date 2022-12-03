import { Component, EventEmitter, Output, Inject, SkipSelf } from "@angular/core";
import { ProductFormGroup } from './form.model';
import { Product } from '../product.model';
import { Model } from '../repository.model';
import { VALUE_SERVICE } from './valueDisplay.directive';

@Component({
  selector: 'paProductForm',
  templateUrl: "productForm.component.html",
  styleUrls: ["productForm.component.css"],
    // providers: [{ provide: VALUE_SERVICE, useValue: "Oranges" }],  // apply to view children and content children
    viewProviders: [{ provide: VALUE_SERVICE, useValue: "Oranges" }]  // only apply to view children
})
export class ProductFormComponent {

  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;

  // @Output("paNewProduct")
  // newProductEvent = new EventEmitter<Product>();

  constructor(
    private model: Model,
    @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string
  ) {
    // if not SkipSelf(), it will be Oranges
    console.log("Service Value: " + serviceValue);
  }
  
  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      // this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
}