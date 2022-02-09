import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.postMessage({location:"acerca de nosotros"},location.href);
    window.postMessage({rezise:true},location.href);
  }

}
