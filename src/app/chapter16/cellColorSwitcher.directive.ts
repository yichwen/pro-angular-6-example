import { Directive, Input, ContentChild, SimpleChange, ContentChildren, QueryList } from '@angular/core';
import { PaCellColor } from './cellColor.directive';

@Directive({
  selector: "table"
})
export class PaCellColorSwitcher {

  @Input("paCellDarkColor")
  modelProperty: Boolean;

  @ContentChild(PaCellColor, { static: false })
  contentChild: PaCellColor;

  @ContentChildren(PaCellColor)
  contentChildren: QueryList<PaCellColor>;

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    // if (this.contentChild != null) {
    //   this.contentChild.setColor(changes["modelProperty"].currentValue);
    // }
    this.updateContentChildren(changes["modelProperty"].currentValue);
  }

  ngAfterContentInit() {
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
    });
  }

  private updateContentChildren(dark: Boolean) {
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }

}