import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  form! : FormGroup;

  constructor(
    public loginS : LoginService,
    private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.form = this.formBuilder.group({
        email : [null, [Validators.required, Validators.email]],
        password : [null, [Validators.required]],
        confirmPassword : [null, [Validators.required]],
    });
  }
  create(){
    this.loginS.createAccount(this.form.value);
  }
}
