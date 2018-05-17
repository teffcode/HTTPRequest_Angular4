import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RequestHttpService } from './providers/request-http/request-http.service';
import { UsersService } from './services/users/users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    RequestHttpService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
