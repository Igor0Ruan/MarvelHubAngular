import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[scrollTrackerDirective]'
})
export class ScrollTrackerDirectiveDirective {
  @Output() scrollingFinished = new EventEmitter<void>();

  emitted = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.emitted) {
      this.emitted = true;
      this.scrollingFinished.emit();
    } else if ((window.innerHeight + window.scrollY) < document.body.offsetHeight) {
      this.emitted = false;
    }
  }
}
