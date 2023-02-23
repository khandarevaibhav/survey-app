import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './head/head.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ShortAnsComponent } from './short-ans/short-ans.component';
import { NumberComponent } from './number/number.component';
import { DateComponent } from './date/date.component';
import { SingleCorrectComponent } from './single-correct/single-correct.component';
import { MultipleCorrectComponent } from './multiple-correct/multiple-correct.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmailComponent } from "./email/email.component";
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SurveyResponsesComponent } from './survey-responses/survey-responses.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PreviousFormsComponent } from './previous-forms/previous-forms.component';
import { ParentTestComponentComponent } from './parent-test-component/parent-test-component.component';
import { ChildTestComponentComponent } from './child-test-component/child-test-component.component';
// import {CdkDragDropVerticalSortingExample} from './app/

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    LandComponent,
    LoginComponent,
    SignupComponent,
    CreateFormComponent,
    ShortAnsComponent,
    NumberComponent,
    DateComponent,
    SingleCorrectComponent,
    MultipleCorrectComponent,
    HomeComponent,
    EmailComponent,
    HistoryComponent,
    SurveyResponsesComponent,
    DynamicComponent,
    PreviousFormsComponent,
    ParentTestComponentComponent,
    ChildTestComponentComponent,
  ],

  // entryComponents: [CdkDragDropVerticalSortingExample],
  // declarations: [CdkDragDropVerticalSortingExample],
  
  providers: [],
  bootstrap: [AppComponent, PreviousFormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    ScrollingModule,
    MatToolbarModule,
  ],
})
export class AppModule {}
