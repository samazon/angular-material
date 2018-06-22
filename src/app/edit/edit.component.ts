import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var $: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  private post;
  postId;
  postEditForm: FormGroup;

  constructor(private dataService: DataService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) {
    this.dataService.getSinglePost.subscribe(response => {
      this.post = response;
    });
  }

  ngOnInit() {
    this.postEditForm = this.fb.group({
      userId: 1,
      title: this.post.title,
      body: this.post.body
    });

    this.postId = this.activatedRoute.snapshot.params.id;

  }

  onUpdate() {
    var data = {
      userId: 1,
      title: this.postEditForm.get('title').value,
      body: this.postEditForm.get('body').value
    }
    console.log(data);
    this.dataService.updatePost(this.postId, data).subscribe(response => {
      if (response.status == 200) {
        this.toastr.success('Updated', 'Post updated successfully');
        this.router.navigate(['/index']);
      }
    });
  }

  onDelete() {

    console.log('Clicked');
    this.dataService.deletePost(this.postId).subscribe(response => {
      // console.log(response);
      if (response.status == 200) {
        this.toastr.success('Deleted', 'Post deleted successfully');
        $('#your-modal-id').modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.router.navigate(['/index']);
      }
    });

  }
  onCancel(e) {
    // console.log(e);
  }

  ngOnDestroy() {
    // this.dataService.getSinglePost.unsubscribe();
  }

}
