import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ImportsModule } from '../imports/imports.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports: [
    MenuComponent,
    HomeComponent
  ]
})
export class LayoutModule { }
