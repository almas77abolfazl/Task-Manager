import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TasksSectionComponent } from './components/tasks-section/tasks-section.component';
import { ListsSectionComponent } from './components/lists-section/lists-section.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { NewListComponent } from './components/new-list/new-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TasksSectionComponent,
    ListsSectionComponent,
    NewTaskComponent,
    NewListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
