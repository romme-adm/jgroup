import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'jim';
  locationText="Acerca de nosotros";
  ngOnInit(): void {
    window.addEventListener("message", (event) => 
    {
      if(event.data.location)
      {
       this.locationText =  event.data.location;
      }
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
}
