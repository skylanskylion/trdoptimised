import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'lectures',
  templateUrl: './lectures.component.html',
})
export class LecturesComponent {
  @Input('group') lecturesGroup: FormGroup;

}
