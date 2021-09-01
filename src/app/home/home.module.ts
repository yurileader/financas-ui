import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ NavbarComponent, MenuComponent, FooterComponent],
  exports:[NavbarComponent, MenuComponent, FooterComponent]
})
export class HomeModule {}
