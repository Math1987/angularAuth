import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './components/connect/connect.component';
import { NewComponent } from './components/new/new.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path : "", component : LoginComponent, children : [
    { path : "connect", component : ConnectComponent },
    { path : "new", component : NewComponent },
    { path : "**", redirectTo : "connect"}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
