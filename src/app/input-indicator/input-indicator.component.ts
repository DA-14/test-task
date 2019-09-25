import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-indicator',
  templateUrl: './input-indicator.component.html',
  styleUrls: ['./input-indicator.component.scss']
})
export class InputIndicatorComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      inputValue: [null, Validators.min(0)]
    });
  }

}
