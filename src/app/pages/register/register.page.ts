import { Component, OnInit } from '@angular/core';
import {CreateUserService} from "../../services/create-user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterModel} from "../../models/register.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private registerForm: FormGroup;



  constructor(
    public formBuilder: FormBuilder,
    public userService: CreateUserService,
    public router: Router
  ) {}

  ngOnInit() {
    this.buildForm();

  }

  buildForm(){
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  save(){
    if (!this.registerForm.valid) {
      return;
    }

    const values = this.registerForm.value;


    const user = new RegisterModel(
      values['username'],
      values['email'],
      values['password'],
      new Date()
    );

    this.userService.add(user).subscribe((user) => {
      this.router.navigate(['/login']);
    });
  }
}
