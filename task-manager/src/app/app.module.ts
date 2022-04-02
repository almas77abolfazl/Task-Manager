import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TasksSectionComponent } from './components/tasks-section/tasks-section.component';
import { ListsSectionComponent } from './components/lists-section/lists-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TasksSectionComponent,
    ListsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
