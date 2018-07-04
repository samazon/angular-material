import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  //Getting references to the html elements to retrieve input values
  @ViewChild('date') date;
  @ViewChild('title') title;
  @ViewChild('start') start;
  @ViewChild('end') end;

  //FormGroup 
  eventFormGroup: FormGroup;

  //Assumption of Data Coming back from the API
  eventsList = [{"date":"12/12/19","events":[{"title":"Event Title 1","start":"10 AM","end":"11 AM"},{"title":"Event Title 2","start":"11 AM","end":"12 PM"}]},{"date":"13/12/19","events":[{"title":"Event Title 1","start":"10 AM","end":"11 AM"},{"title":"Event Title 2","start":"12 PM","end":"01 PM"},{"title":"Event Title 3","start":"03 PM","end":"04 PM"}]},{"date":"14/12/19","events":[{"title":"Event Title 1","start":"09 AM","end":"10 AM"},{"title":"Event Title 2","start":"10 AM","end":"11 AM"}]},{"date":"15/12/19","events":[{"title":"Event Title 1","start":"10 AM","end":"11 AM"},{"title":"Event Title 2","start":"11 AM","end":"12 PM"}]},{"date":"16/12/19","events":[{"title":"Event Title 1","start":"09 AM","end":"10 AM"},{"title":"Event Title 2","start":"11 AM","end":"12 PM"}]},{"date":"17/12/19","events":[{"title":"Event Title 1","start":"09 AM","end":"10 AM"},{"title":"Event Title 2","start":"11 AM","end":"12 PM"},{"title":"Event Title 3","start":"11 AM","end":"12 PM"}]}];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    //DateTimePicking with Library
    $('#date-picker').datetimepicker({
      format: 'L'
    });
    $('#start-time').datetimepicker({
      format: 'LT'
    });
    $('#end-time').datetimepicker({
      format: 'LT'
    });

    // Initializing the formGroup
    this.eventFormGroup = this.formBuilder.group({
      date: [''],
      events: this.formBuilder.group({
        title: [''],
        start: [''],
        end: ['']
      })
    });
  }
  
  // Submitting the formGroup
  save(){
    console.log(this.date.nativeElement.value);
    
    this.eventFormGroup.patchValue({
      date: this.date.nativeElement.value,
      events: {
        title: this.title.nativeElement.value,
        start: this.start.nativeElement.value,
        end: this.end.nativeElement.value
      }
    });
    console.log(this.eventFormGroup.value);
  }
}
