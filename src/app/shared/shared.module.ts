import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PropertyCardComponent } from './property-card/property-card.component';



@NgModule({
  declarations: [FooterComponent,HeaderComponent,PropertyCardComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PropertyCardComponent
  ]
})
export class SharedModule { }
