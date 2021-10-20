import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TopBarComponent} from './headers/top-bar-component';
import {footer} from './Footer/footer.component';
import { BodyComponent } from './Body/body.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutMainComponent } from './Layout/layout-main.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './headers/user-info.component';


@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent, 
    footer,
    BodyComponent,
    LayoutMainComponent,
    UserInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
