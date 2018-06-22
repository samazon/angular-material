import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addPostFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, public snackBar: MatSnackBar, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.addPostFormGroup = this.fb.group({
      userId: 1,
      title: ['', [Validators.required]],
      body: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.addPostFormGroup.value);
    this.dataService.createPost(this.addPostFormGroup.value).subscribe((response) => {
      if(response.status == 201) {
        this.toastr.success('Success', 'New post created successfully',{
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'increasing'
        });
        this.router.navigate(['/index']);
      } 
    });
  }

}

