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
import { EditUserInfoComponent } from './Body/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent, 
    footer,
    BodyComponent,
    LayoutMainComponent,
    UserInfoComponent,
    EditUserInfoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
