import { Directive, ElementRef, Attribute, Input, SimpleChange, Output, EventEmitter, HostListener, HostBinding } from "@angular/core";
import { Product } from '../product.model';

@Directive({
  selector: '[pa-attr]'
})
export class PaAttrDirective {

  // constructor(element: ElementRef, @Attribute('pa-attr-class') bgClass: string) {
  //   element.nativeElement.classList.add(bgClass || 'bg-success', 'text-white');
  // }

  // it makes more sense to make a single attribute do double duty
  // constructor(element: ElementRef, @Attribute('pa-attr') bgClass: string) {
  //   element.nativeElement.classList.add(bgClass || 'bg-success', 'text-white');
  // }

  // use input property
  @Input('pa-attr') @HostBinding('class') bgClass: string;
  @Input('pa-product') product: Product;
  @Output('pa-category') click = new EventEmitter<string>();

  constructor(private element: ElementRef) {
    // to use @HostListener
    // this.element.nativeElement.addEventListener('click', e => {
    //   if(this.product != null) {
    //     this.click.emit(this.product.category);
    //   }
    // })
  }

  ngOnInit() {
    // to use @HostBinding('class')
    // this.element.nativeElement.classList.add(this.bgClass || 'bg-success', 'text-white');
  }

  // to use @HostBinding('class')
  /*
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    // removing previousValue from class list
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    // adding current to class list
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }*/

  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }

}