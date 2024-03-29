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
    location.href=location.href.replace("#juegosinteractivosjimgroup","") + "#juegosinteractivosjimgroup";
  }

  navigateToDinOnline(){
    this.router.navigate(['/', 'dinamicas-online']);
  }

  navigateToDinPresencials(){
    this.router.navigate(['/', 'dinamicas-presenciales']);
  }

}
