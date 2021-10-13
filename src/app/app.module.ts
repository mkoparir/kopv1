import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KopMatModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sayfa/yerlesim/sidebar/sidebar.component';
import { HeaderComponent } from './sayfa/yerlesim/header/header.component';
import { FooterComponent } from './sayfa/yerlesim/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    KopMatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
