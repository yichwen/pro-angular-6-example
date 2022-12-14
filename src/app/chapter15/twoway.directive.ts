import { Directive, Input, HostBinding, SimpleChange, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
  selector: 'input[paModel]',
  exportAs: 'paModel'
})
export class PaModel {

  direction: string = 'None';

  @Input('paModel')
  modelProperty: string;
  
  @HostBinding('value')
  fieldValue: string = '';

  // if modelProperty's value change, will trigger ngOnChanges()
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['modelProperty'];
    if(change.currentValue != this.fieldValue) {
      this.fieldValue = changes['modelProperty'].currentValue || '';
      this.direction = 'Model';
    }
  }

  @Output('paModelChange')
  update = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    // to notify the output and pass as event argument
    this.update.emit(newValue);
    this.direction = 'Element';
  }

}