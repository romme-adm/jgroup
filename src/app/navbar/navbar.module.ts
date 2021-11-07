import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Nav2Component } from './nav2/nav2.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [Nav2Component],
  exports:[Nav2Component],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class NavbarModule { }
