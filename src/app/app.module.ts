import { MaterialModule } from './../material.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { CoreData } from './core/core-data.service';
import { DataService } from './core/services/data.service';
import { AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { CreateComponent } from './create/create.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormValidationsComponent } from './form-validations/form-validations.component';
import { CalendarComponent } from './calendar/calendar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'index', component: IndexComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'validations', component: FormValidationsComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    EditComponent,
    FormValidationsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxMaskModule,
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [
    CoreData,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
