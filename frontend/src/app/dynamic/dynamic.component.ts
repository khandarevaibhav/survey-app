import { Component, OnInit, Input, ChangeDetectionStrategy, ɵgetUnknownElementStrictMode } from '@angular/core';

import { FormBuilder, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllservicesService } from '../allservices.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { subscribeOn } from 'rxjs';

export interface Survey {
  question: string;
  answerType: string;
  options: string;
}

export class RootObject {
  title: string = "";
  email: string = "";
  _id:string="";
  survey: Survey[] = [];
}

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class DynamicComponent implements OnInit {
[x: string]: any;

  public data: any;
 // public checkedvalue=new Set()
  public url: string = '';
  public surveyID: String = '';
  dynamicForm = this.fb.group({})
  //   email:new FormControl('')
  // })
 public email:any;

  constructor(
    public allservices: AllservicesService,
    private fb: FormBuilder,
    private route: Router,
    public http: HttpClient
  ) {}
  ngOnInit() {
   
      // if(!localStorage.getItem('token'))
      //   this.route.navigate(['/signin']);
 
    //To get a SurveyID from URL
    this.url = this.route.routerState.snapshot.url;
    this.surveyID = this.url.split('/')[2];
    console.log(this.url)
    this.http.get(`http://localhost:5000/form/form/${this.surveyID}`).subscribe((response)=> {
      // console.log(response);
      console.log(response);
      this.data = response;
      console.log(this.data)
    })


  }
  // onChange(event:any){
  //   this.checkedvalue.add(event.target.value);
  // }
  
  saveForm(form:NgForm) {
    // const validateEmail = (email:any) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    // if(!validateEmail(this.email))
    // {
    //   alert("Check Email Again..")
    //   return;
    // }
    console.log(form.value)
    console.log(this.email)
    console.log(this.data.questions)
    let finalObj={
      title: this.data.title,
      email: this.email,
      formId: this.data._id,
      survey: [{}]
    }
    let answer = Object.entries(form.value);

    let i=0;
    this.data.questions.forEach((que:any)=>{
      let q={
        question: que.questionContent,
        answer: answer[i++][1]
      }
      console.log(q)
      finalObj.survey.push(q)

    })
    finalObj.survey.shift()
    console.log(finalObj)
    let token;
     let token_parse;
     const auth_token=localStorage.getItem("currentuser")
      console.log(auth_token)
       if(auth_token){
        token_parse=JSON.parse(auth_token)
        token=token_parse["data"]["token"]
         console.log("extract the token ", token)
        }
      let headers1 = new HttpHeaders({
        'content-Type': 'application/json',
       'authorization':'Bearer '+token
      });
    this.http.post('http://localhost:5000/response/', finalObj, {
      headers: headers1
    }).subscribe((response: any) => {
      console.log(response); 

    });
    // }
  }
}