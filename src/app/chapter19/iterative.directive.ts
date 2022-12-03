import { Directive, ViewContainerRef, TemplateRef, Input, IterableDiffers, ChangeDetectorRef, DefaultIterableDiffer, ViewRef } from '@angular/core';

@Directive({
  selector: "[paForOf]"
})
export class PaIteratorDirective {

  private differ: DefaultIterableDiffer<any>;
  private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private differs: IterableDiffers,
    private changeDetector: ChangeDetectorRef
  ) { }

  @Input('paForOf')
  dataSource: any

  ngOnInit() {
    // this.updateContent();
    this.differ = <DefaultIterableDiffer<any>>this.differs.find(this.dataSource).create();
  }

  ngDoCheck() {
    let changes = this.differ.diff(this.dataSource);
    if (changes != null) {
      changes.forEachAddedItem(addition => {
        let context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
        context.view = this.container.createEmbeddedView(this.template, context);
        this.views.set(addition.trackById, context);
      });
      let removals = false;
      changes.forEachRemovedItem(removal => {
        removals = true;
        let context = this.views.get(removal.trackById);
        if (context != null) {
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removal.trackById);
        }
      });
      if (removals) {
        let index = 0;
        this.views.forEach(context => context.setData(index++, this.views.size));
      }
    }
    // this.updateContent();
  }

  private updateContent() {
    this.container.clear();
    for (let i = 0; i < this.dataSource.length; i++) {
      this.container.createEmbeddedView(this.template,
        new PaIteratorContext(
          this.dataSource[i],
          i,
          this.dataSource.length
        )
      );
    }
  }
}

class PaIteratorContext {

  index: number;
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  view: ViewRef;

  constructor(
    public $implicit: any,
    public position: number,
    total: number
  ) {
    this.setData(position, total);

    // Angular takes care the changes 
    // setInterval(() => {
    //   this.odd = !this.odd;
    //   this.even = !this.even;
    //   this.$implicit.price++;
    // }, 2000);
  }

  setData(index: number, total: number) {
    this.index = index;
    this.odd = index % 2 == 1;
    this.even = !this.odd;
    this.first = index == 0;
    this.last = index == total - 1;
  }
}