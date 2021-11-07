import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaPhotoComponent } from './portada-photo/portada-photo.component';



@NgModule({
  declarations: [PortadaPhotoComponent],
  imports: [
    CommonModule
  ],
  exports:[PortadaPhotoComponent]
})
export class PortadaModule { }
