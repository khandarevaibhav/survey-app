import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { HomeComponent } from './home/home.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PreviousFormsComponent } from './previous-forms/previous-forms.component';
import { ChildTestComponentComponent } from './child-test-component/child-test-component.component';
import { ParentTestComponentComponent } from './parent-test-component/parent-test-component.component';
import { HistoryComponent } from './history/history.component';
import { SurveyResponsesComponent } from './survey-responses/survey-responses.component';

const routes: Routes = [
  {
    component: LandComponent,
    path: ''
  },
  {
    component: ChildTestComponentComponent,
    path: 'child'
  },
  {
    component: ParentTestComponentComponent,
    path: 'parent'
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    component: CreateFormComponent,
    path: 'create-form'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: DynamicComponent,
    path: 'dynamic/:id'
  },
  {
    component: PreviousFormsComponent,
    path: 'previous-forms'
  },
  {
    component: HistoryComponent,
    path: 'history'
  },
  {
    component: SurveyResponsesComponent,
    path:'survey_responses/:id'
  },
  {path: 'create-form', component: CreateFormComponent},
  {path: '', redirectTo:'create-form', pathMatch: 'full'},
  {path: 'parent-test-component', component: ParentTestComponentComponent}, 
  {path: 'dynamic', component: DynamicComponent},
  {path: '', redirectTo:'dynamic', pathMatch: 'full'},
  {path: 'parent-test-component', component: ParentTestComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
