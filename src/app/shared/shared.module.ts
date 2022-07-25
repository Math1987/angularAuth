import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from "@angular/material/toolbar" ;
import { MatIconModule } from '@angular/material/icon' ;
import { MatMenuModule } from "@angular/material/menu" ;
import { MatButtonModule } from '@angular/material/button' ;
import { MatCardModule } from '@angular/material/card' ;
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports : [
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatInputModule
  ]
})
export class SharedModule { }
