import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllGamesComponent } from './all-games/all-games.component';
import { AboutComponent } from './about/about.component';
import { SectionRoutingModule } from '../section/section-routing.module';
import{ PortadaModule} from '../portada/portada.module'
import { RouterModule } from '@angular/router';
import { ContactAreaComponent } from './contact-area/contact-area.component';
import { GameDetComponent } from './all-games/game-det/game-det.component';
import { GamesPreComponent } from './all-games/games-pre/games-pre.component';
import { GamesOnComponent } from './all-games/games-on/games-on.component';
@NgModule({
  declarations: [AllGamesComponent, AboutComponent, ContactAreaComponent, GameDetComponent, GamesPreComponent, GamesOnComponent],
  imports: [
    CommonModule,
    SectionRoutingModule,
    PortadaModule,
    RouterModule
  ],
  exports:[AllGamesComponent,ContactAreaComponent]
})
export class SectionModule { }
