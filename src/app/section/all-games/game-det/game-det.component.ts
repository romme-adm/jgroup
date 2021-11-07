import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-det',
  templateUrl: './game-det.component.html',
  styleUrls: ['./game-det.component.scss']
})
export class GameDetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.postMessage("rezise",location.href);
  }

}
