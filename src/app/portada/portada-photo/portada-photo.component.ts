import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-portada-photo',
  templateUrl: './portada-photo.component.html',
  styleUrls: ['./portada-photo.component.scss']
})
export class PortadaPhotoComponent implements OnInit {

  constructor(private router: Router) {
    // ...
  }

  ngOnInit(): void {
  }

  navigateToDinOnline(){
    this.router.navigate(['/', 'dinamimicas-presenciales']);
  }

  navigateToDinPresencials(){
    this.router.navigate(['/', 'dinamimicas-presenciales']);
  }

}
