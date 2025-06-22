import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
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

  @Input()
  public disabledButton: boolean = false;

  @Output()
  public submit = new EventEmitter()

  @ContentChild('additionalText')
  public additionalText!: TemplateRef<any>;

  @ContentChild('subline')
  public subline!: TemplateRef<any>;
}
