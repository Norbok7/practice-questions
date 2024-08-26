import { Directive, ElementRef, Renderer2, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appSlideIn]',
  standalone: true
})
export class SlideInDirective implements AfterViewInit {
  @Input() slideInFrom: 'left' | 'right' | 'top' | 'bottom' = 'left';
  private initialPosition: string;
  private finalPosition: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.initialPosition = this.getInitialPosition();
    this.finalPosition = this.getFinalPosition();
    this.setPosition(this.initialPosition); // Start with initial position
  }

  ngAfterViewInit() {
    // Apply transition to final position after view initialization
    setTimeout(() => {
      this.setPosition(this.finalPosition);
    }, 100); // Delay to ensure initial styles are applied
  }

  private setPosition(position: string) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', position);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 1s ease-in-out'); // Adjust timing as needed
  }

  private getInitialPosition(): string {
    switch (this.slideInFrom) {
      case 'left': return 'translateX(-100%)';
      case 'right': return 'translateX(100%)';
      case 'top': return 'translateY(-100%)';
      case 'bottom': return 'translateY(100%)';
      default: return 'translateX(0)';
    }
  }

  private getFinalPosition(): string {
    return 'translateX(0)';
  }
}
