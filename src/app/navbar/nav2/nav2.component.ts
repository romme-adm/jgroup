import { ViewportScroller } from '@angular/common';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../../section/all-games/models/games';

declare var $: any;

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.scss'],
})
export class Nav2Component implements OnInit {
  navVisible: boolean;
  games: Games;
  games_p: Array<any>;
  games_o: Array<any>;
  constructor(private router: Router, private _vps: ViewportScroller) {
    this.navVisible = true;
    this.games = new Games();
    this.games_p = this.games.games_info.filter(
      (f) => f.type === 'dinamicas-presenciales'
    );
    this.games_o = this.games.games_info.filter(
      (f) => f.type === 'dinamicas-online'
    );
  }

  ngOnInit(): void {
    this.navVisible = true;
    this.autoAjust();
    window.onresize=this.autoAjust;
    window.setInterval(()=>
    {
      if (window.outerWidth > 900) {
        $('.navbar-nav').css('display', 'flex');
        this.navVisible=false;
      }
    });
    window.addEventListener("message", (event) => 
    {

      if(event.data.rezise){
        this.autoAjust();
      }

    });

  }

  autoAjust()
  {
    if (window.outerWidth > 900) {
      $('.navbar-nav').css('display', 'flex');
      this.navVisible=false;
    } else {
      $('.navbar-nav').css('display', 'none');
    }
    this.show();
  }

  gotoAbout() {
    this.router.navigate(['/', 'quienes-somos']);
  }

  navigateToDinOnline() {
    location.href = '/dinamicas-online';
  }

  navigateToDinPresencials() {
    location.href = '/dinamicas-presenciales';
  }

  focusToContact() {
    this._vps.scrollToAnchor('contact');
  }

  show() {
    if (this.navVisible) $('.navbar-nav').css('display', 'none');
    else $('.navbar-nav').css('display', 'flex');
    this.navVisible = !this.navVisible;
  }

  viewDetail(gameType: String, identifier: String) {
    location.href = gameType + '/' + identifier;
  }
}
