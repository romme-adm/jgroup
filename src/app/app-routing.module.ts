import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/quienes-somos', pathMatch: 'full' },
  {
    path: 'jim-group',
    loadChildren: () =>
      import('./section/section-routing.module').then(
        (m) => m.SectionRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
