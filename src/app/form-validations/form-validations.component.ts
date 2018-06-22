import { EMAIL_REGEX, PHONE_REGEX } from './../core/core-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-form-validations',
  templateUrl: './form-validations.component.html',
  styleUrls: ['./form-validations.component.css']
})
export class FormValidationsComponent implements OnInit {
  form: FormGroup;
  countries;
  constructor(private fb: FormBuilder, private dataService: DataService ) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX)]],
      phone: ['', [Validators.required, Validators.pattern(PHONE_REGEX)]],

    })

    this.dataService.getCountries().subscribe(res => {
      // console.log(res);
      this.countries = res;
    })
  }

}
