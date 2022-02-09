import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-all-games',
  templateUrl: './all-games.component.html',
  styleUrls: ['./all-games.component.scss']
})
export class AllGamesComponent implements OnInit {

  gameType : String;
  gameTypeTitle  : String;
  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
   this.gameType =  this.route.snapshot.params.game_name;
   window.postMessage({rezise:true},location.href);
  }


}
