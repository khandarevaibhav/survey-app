import { Component, OnInit} from '@angular/core';
import axios from 'axios';
import {Router } from '@angular/router';
//import axios

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  type: string = "password";
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash";
  lastName:any;
  firstName:any;
  username: any;
  password:any;
  email:any;
  //router: any;

  constructor(public router:Router){ }

  ngOnInit(): void {
    console.log(this.email)
    
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText ? this.type = "text" : this.type="password";

  }


  handleSubmit (event: Event){
    event.preventDefault();


    //get user inputs
    //event.target.password
    this.firstName="";
    this.lastName="";
    const userInput={
      username: this.username,
      email: this.email,
      password: this.password


    }

    

    console.log("userInput", userInput)
    
    
    //api call
    const apiRes=axios.post("http://localhost:5000/users/signup", userInput).then(response=>{
      if(response.data.message=="registered"){
         this.router.navigate(['/login'])
      }
      else{
        
      }
    })

    console.log(apiRes)
    this.username="";
    
    this.email="";
    this.password="";
 
    // const temp={
    //  username:e.target.username.value,
    //  password:e.target.password.value
    // }
 
    // console.log(temp)
    // return false;
   }
}