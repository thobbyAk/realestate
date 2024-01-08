import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then(
        m => m.MainModule
      )
  },
  {
    path: 'football',
    loadChildren: () =>
      import('./football/football.module').then(
        m => m.FootballModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
