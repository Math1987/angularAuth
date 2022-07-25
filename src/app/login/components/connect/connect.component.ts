import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  form! : FormGroup;

  constructor(
    private loginS : LoginService,
    private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.form = this.formBuilder.group({
        email : [null, [Validators.required, Validators.email]],
        password : [null, [Validators.required]],
    });
  }
  loginAccount(){
    this.loginS.login( this.form.value );
  }

}
