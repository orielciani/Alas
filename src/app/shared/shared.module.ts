import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    AdminNavbarComponent,
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FooterComponent,
  NavbarComponent,
  AdminNavbarComponent,
  ],
})
export class SharedModule { }
