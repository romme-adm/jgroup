import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../models/games';

@Component({
  selector: 'app-games-on',
  templateUrl: './games-on.component.html',
  styleUrls: ['./games-on.component.scss']
})
export class GamesOnComponent implements OnInit {

  games : Games;
  gameType : String;
  gameTypeTitle  : String;
  games_on = Array<any>();
  constructor(private router: Router,private route: ActivatedRoute) 
  {
    this.games = new Games();
  }

  ngOnInit(): void {
    this.games = new Games();
    this.gameType = this.route.snapshot.params.game_name;
    if(this.games.games_info.filter(g=> g.type===this.gameType).length==0)
    {
      location.href="/";
    }
    this.gameTypeTitle = this.games.games_info.filter(g=> g.type===this.gameType)[0].type_title;
    this.games_on = this.games.games_info.filter(g=> g.type===this.gameType);
    window.postMessage({ location: this.gameTypeTitle }, location.href);
    window.postMessage({rezise:true},location.href);
    location.href=location.href.replace("#juegosinteractivosjimgroup","") + "#juegosinteractivosjimgroup";
  }

  viewDetail (identifier:String)
  {
    this.router.navigate(['/', this.gameType , identifier]);
  }
}
