import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
          path: '',
          component: LandingPageComponent
        },
        {
          path: 'details',
          component: PropertyDetailsComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
