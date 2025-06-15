import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overlay-box',
  imports: [
    CommonModule
  ],
  templateUrl: './overlay-box.component.html',
  styleUrl: './overlay-box.component.scss'
})
export class OverlayBoxComponent {

  @Input()
  public title!: string;

  @Input()
  public buttonText!: string;

  @Input()
  public intro!: string;

  @ContentChild('additionalText')
  public additionalText!: TemplateRef<any>;
}
