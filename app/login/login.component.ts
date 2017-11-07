import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm:FormGroup;

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.userForm = this.fb.group({
      'username':[''],
      'password':['']
    });
  }

  login(){
    console.log(this.userForm.value);
    if(this.userForm.value.username == 'admin' && this.userForm.value.password == 'admin'){
       this.router.navigate(['home']);
    }
  }

}
