import { Component, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'chapters',
  templateUrl: './chapters.component.html',
})
export class ChaptersComponent {
  @Input('group') leForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  leaddNewRow() {
    const emailArray = <FormArray>this.leForm.controls['lecture'];
    const newEmail = this.initEmail();
    emailArray.push(newEmail);
  }

  get lecture(): FormArray {
    return this.leForm.get('lecture') as FormArray;
  }

  ledeleteRow(idx: number) {
    const emailArray = <FormArray>this.leForm.controls['lecture'];
    emailArray.removeAt(idx);
  }

  /*ledeleteRow(idx: number) {
    const emailArray = <FormArray>this.leForm.controls['lecture'];
    emailArray.removeAt(idx);
  }*/
  initEmail() {
    return this.fb.group({
      course_id: '21',
      instructor_id: '',
      topic_title: '',
      full_vid_url: '',
      duration: '',
      pdf: '',
      t_type: 'new',
    });
  }
}
