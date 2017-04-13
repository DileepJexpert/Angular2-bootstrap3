import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-gift-form',
  templateUrl: './gift-form.component.html',
  styleUrls: ['./gift-form.component.css']
})
export class GiftFormComponent {
 @Input()
  parent: FormGroup;
  constructor() { }

  

}
