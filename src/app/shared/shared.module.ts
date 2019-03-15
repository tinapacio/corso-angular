import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { CardComponent } from './card/card.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [TitleComponent, CardComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  exports: [
    TitleComponent,
    CardComponent
  ]
})
export class SharedModule { }
