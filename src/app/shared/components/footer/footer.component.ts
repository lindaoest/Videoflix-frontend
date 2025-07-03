import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input()
  public classes?: string[];

  constructor (
    public el: ElementRef,
    public renderer: Renderer2
  ) {}

  ngOnInit() {
    const footer = this.el.nativeElement.querySelector('.inner-footer')

    if (this.classes) {
      for (let className of this.classes) {
        this.renderer.addClass(footer, className)
      }
    }
  }
}
