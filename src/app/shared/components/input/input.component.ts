import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [
    CommonModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Input()
  public type!: string;

  @Input()
  public placeholder!: string;

  @Input()
  public image!: string;

  @Input()
  public formControlName!: string;
}
