import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Modulos
import { PagesModule } from './pages/pages.module';

//Components
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
