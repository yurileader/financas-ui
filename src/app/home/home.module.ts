import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ NavbarComponent, MenuComponent],
  exports:[NavbarComponent, MenuComponent]
})
export class HomeModule {}
