import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllGamesComponent} from './all-games/all-games.component';
import {AboutComponent} from './about/about.component';
import { GameDetComponent } from './all-games/game-det/game-det.component';
const routes: Routes = [
    { path: '', redirectTo: 'quienes-somos ', pathMatch: 'full' },
    { path: 'quienes-somos', component: AboutComponent },
    { path: 'dinamimicas-presenciales', component: AllGamesComponent },
    { path: 'dinamimicas-presenciales/:name', component: GameDetComponent },
    { path: 'dinamimicas-online', component: AllGamesComponent },
    { path: 'dinamimicas-online/:name', component: GameDetComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
