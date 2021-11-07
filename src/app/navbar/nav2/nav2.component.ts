import { ViewportScroller } from '@angular/common';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss'],
})
export class Nav2Component implements OnInit {
  navVisible:boolean;
  constructor(private router: Router, private _vps: ViewportScroller) {
    this.navVisible=false;
  }

  ngOnInit(): void {
    this.navVisible=false;
    window.addEventListener("message", (event) => 
    {
      if(event.data == "rezise")
      {
        if(window.outerWidth>1000)
                $(".navbar-nav").css("display","flex");
        else{
          $(".navbar-nav").css("display","none");
        }
      }
    });
  }

  gotoAbout() {
    this.router.navigate(['/', 'quienes-somos']);
  }

  navigateToDinOnline() {
    this.router.navigate(['/', 'dinamimicas-presenciales']);
  }

  navigateToDinPresencials() {
    this.router.navigate(['/', 'dinamimicas-presenciales']);
  }

  focusToContact() {
    this._vps.scrollToAnchor('contact');
  }

  show() {
    if(this.navVisible)
      $(".navbar-nav").hide("display","none");
    else
       $(".navbar-nav").css("display","flex");
    this.navVisible=!this.navVisible;
  }
}
