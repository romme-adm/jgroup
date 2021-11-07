import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootComponent } from './foot/foot.component';



@NgModule({
  declarations: [FootComponent],
  imports: [
    CommonModule
  ],
  exports:[FootComponent]
})
export class FooterModule { }
