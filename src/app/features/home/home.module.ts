import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './container/homepage/homepage.component';
import { LogoComponent } from './components/logo/logo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { FotoService } from './services/foto.service';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  }
];

@NgModule({
  declarations: [HomepageComponent, LogoComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers:[  ]
})
export class HomeModule { }
