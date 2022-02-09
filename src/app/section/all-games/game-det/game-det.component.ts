import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Games } from '../models/games.js';
import { ViewportScroller } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-game-det',
  templateUrl: './game-det.component.html',
  styleUrls: ['./game-det.component.scss']
})
export class GameDetComponent implements OnInit {

  gamesInfo: Games;
  running:boolean;
  gameResult: any;
  gameId: String;//game_name
  gameType : String;
  gameTypeTitle : String;
  gameIndex:number;
  constructor(private route: ActivatedRoute, private router: Router, private _vps: ViewportScroller) {
    this.gamesInfo = new Games();
  }

  ngOnInit(): void {
    this.gamesInfo = new Games();
    this.gameId = this.route.snapshot.params.name;
    this.gameIndex = this.getIndex();
    this.gameTypeTitle = this.gamesInfo.games_info[this.gameIndex].type_title;
    this.gameType =this.gamesInfo.games_info[this.gameIndex].type;
    window.postMessage({ location: this.gameTypeTitle }, location.href);
    this.render();
    location.href=location.href.replace("#juegosinteractivosjimgroup","") + "#juegosinteractivosjimgroup";
    window.setInterval(()=>
    {this.next()},120000)
  }

  navigateToDins() {
    window.postMessage({ location: this.gameTypeTitle }, location.href);
    this.router.navigate(['/', this.gameType]);
  }

  getIndex(){
    let index = this.gamesInfo.games_info.findIndex( element => {
      if (element.id === this.gameId) {
        return true;
      }
    });
    return index;
  }

  next()
  {
    if(this.running){return;}
    if(this.gameIndex<this.gamesInfo.games_info.length-1)this.gameIndex++;
    else
       this.gameIndex=0;
    this.render();
  }
 


  prev()
  {
    if(this.running){return;}
    if(this.gameIndex>0)this.gameIndex--;
    else
       this.gameIndex=this.gamesInfo.games_info.length-1;
    this.render();
  }

   render()
   {
     $("#game_desc").addClass("animation");
      this.gameResult = this.gamesInfo.games_info[this.gameIndex];  
      this.running=true;
      setTimeout(()=>{ 
        $("#game_desc").removeClass("animation");
        this.running=false;
      },1000);
      this.gameTypeTitle = this.gamesInfo.games_info[this.gameIndex].type_title;
      this.gameType =this.gamesInfo.games_info[this.gameIndex].type;
      window.postMessage({ location: this.gameTypeTitle }, location.href);

   }



}
