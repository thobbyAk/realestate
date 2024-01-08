import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';


@NgModule({
  declarations: [
    MainComponent,
    LandingPageComponent,
    PropertyDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
